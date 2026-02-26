"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SERVER_BASE_URL = import.meta.env.VITE_BASE_SERVER_URL;

export default function ViewBlog() {
  //   const { id } = useParams(); // Using blogId instead of slug

  const id = "699f4869199a2c6289d7220e"; // Hardcoded for testing
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${SERVER_BASE_URL}/api/v1/blog/${id}`);
      const data = await response.json();

      if (data.success) {
        setBlog(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <p className="text-xl font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Blog not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Blog Header */}
      <article className="bg-white rounded-xl shadow-lg p-8">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>•</span>
          <span>{blog.views} views</span>
        </div>

        {/* Cover Image */}
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
        )}

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          {blog.content?.blocks?.map((block, index) => (
            <RenderBlock key={block.id || index} block={block} />
          ))}
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Likes */}
        <div className="mt-6 flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{blog.likes?.length || 0} Likes</span>
          </button>
        </div>
      </article>
    </div>
  );
}

// Component to render different EditorJS block types
function RenderBlock({ block }) {
  const stripHTML = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  switch (block.type) {
    case "header":
      const HeaderTag = `h${block.data.level}`;
      return (
        <HeaderTag
          className={`font-bold my-6 ${
            block.data.level === 1
              ? "text-4xl"
              : block.data.level === 2
                ? "text-3xl"
                : block.data.level === 3
                  ? "text-2xl"
                  : "text-xl"
          }`}
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        />
      );

    case "paragraph":
      return (
        <p
          className="my-4 text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        />
      );

    case "list":
      const ListTag = block.data.style === "ordered" ? "ol" : "ul";
      return (
        <ListTag
          className={`my-4 ${block.data.style === "ordered" ? "list-decimal" : "list-disc"} ml-6 space-y-2`}
        >
          {block.data.items.map((item, i) => (
            <li
              key={i}
              dangerouslySetInnerHTML={{ __html: item.content || item }}
            />
          ))}
        </ListTag>
      );

    case "image":
      return (
        <figure className="my-8">
          <img
            src={block.data.file.url}
            alt={block.data.caption || "Blog image"}
            className="w-full rounded-lg shadow-md"
          />
          {block.data.caption && (
            <figcaption className="text-center text-gray-600 mt-3 text-sm italic">
              {block.data.caption}
            </figcaption>
          )}
        </figure>
      );

    case "code":
      return (
        <pre className="bg-gray-900 text-white p-6 rounded-lg my-6 overflow-x-auto">
          <code className="text-sm font-mono">{block.data.code}</code>
        </pre>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-gray-50 rounded-r-lg italic">
          <p
            className="text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: block.data.text }}
          />
          {block.data.caption && (
            <cite className="block text-gray-600 mt-3 text-sm not-italic">
              — {block.data.caption}
            </cite>
          )}
        </blockquote>
      );

    case "table":
      return (
        <div className="my-6 overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <tbody>
              {block.data.content.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-300 px-4 py-2"
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "checklist":
      return (
        <ul className="my-4 space-y-2">
          {block.data.items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={item.checked}
                readOnly
                className="w-4 h-4"
              />
              <span
                className={item.checked ? "line-through text-gray-500" : ""}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      );

    case "delimiter":
      return <hr className="my-8 border-t-2 border-gray-300" />;

    case "embed":
      return (
        <div className="my-6 aspect-video">
          <iframe
            src={block.data.embed}
            className="w-full h-full rounded-lg"
            allowFullScreen
            title="Embedded content"
          />
        </div>
      );

    case "warning":
      return (
        <div className="my-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold text-yellow-800">
                {block.data.title}
              </p>
              <p className="text-yellow-700 mt-1">{block.data.message}</p>
            </div>
          </div>
        </div>
      );

    case "linkTool":
      return (
        <div className="my-6 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
          <a
            href={block.data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {block.data.meta?.image?.url && (
              <img
                src={block.data.meta.image.url}
                alt={block.data.meta.title}
                className="w-full h-48 object-cover rounded-t-lg mb-3"
              />
            )}
            <h3 className="font-semibold text-lg text-gray-900 hover:text-blue-600">
              {block.data.meta?.title || block.data.link}
            </h3>
            {block.data.meta?.description && (
              <p className="text-gray-600 text-sm mt-2">
                {block.data.meta.description}
              </p>
            )}
            <p className="text-blue-500 text-xs mt-2 truncate">
              {block.data.link}
            </p>
          </a>
        </div>
      );

    case "attaches":
      return (
        <div className="my-6 border border-gray-200 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-50">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <div className="flex-1">
            <a
              href={block.data.file.url}
              download
              className="font-medium text-gray-900 hover:text-blue-600"
            >
              {block.data.title}
            </a>
            <p className="text-sm text-gray-500">
              {block.data.file.size} bytes
            </p>
          </div>
          <a
            href={block.data.file.url}
            download
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Download
          </a>
        </div>
      );

    case "raw":
      return (
        <div
          className="my-6"
          dangerouslySetInnerHTML={{ __html: block.data.html }}
        />
      );

    default:
      console.warn(`Unknown block type: ${block.type}`);
      return null;
  }
}
