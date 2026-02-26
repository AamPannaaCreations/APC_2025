import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaClock, FaCalendar } from "react-icons/fa";
import { notFound } from "next/navigation";
import ShareButton from "@/components/ShareButton";
import type { OutputData, OutputBlockData } from "@editorjs/editorjs";

interface Blog {
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  content: OutputData;
  tags: string[];
  createdAt: string;
  slug: string;
}

async function getBlog(slug: string): Promise<Blog> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blogs/slug/${slug}`,
    { cache: "no-store" },
  );

  if (!res.ok) notFound();

  return res.json();
}

function getReadingTime(content: OutputData): number {
  const text = content.blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
        case "header":
          return block.data.text ?? "";
        case "list":
          return block.data.items
            ?.map((item: { content?: string } | string) =>
              typeof item === "string" ? item : (item.content ?? ""),
            )
            .join(" ");
        case "quote":
          return `${block.data.text ?? ""} ${block.data.caption ?? ""}`;
        default:
          return "";
      }
    })
    .join(" ");

  return Math.ceil(text.split(/\s+/).filter(Boolean).length / 200);
}

function RenderBlock({ block }: { block: OutputBlockData }) {
  switch (block.type) {
    case "header": {
      const level = block.data.level as 1 | 2 | 3 | 4;
      const sizeMap = {
        1: "text-4xl",
        2: "text-3xl",
        3: "text-2xl",
        4: "text-xl",
      };
      const headerClasses = `font-bold my-6 ${sizeMap[level]}`;

      switch (level) {
        case 1:
          return (
            <h1
              className={headerClasses}
              dangerouslySetInnerHTML={{ __html: block.data.text }}
            />
          );
        case 2:
          return (
            <h2
              className={headerClasses}
              dangerouslySetInnerHTML={{ __html: block.data.text }}
            />
          );
        case 3:
          return (
            <h3
              className={headerClasses}
              dangerouslySetInnerHTML={{ __html: block.data.text }}
            />
          );
        case 4:
          return (
            <h4
              className={headerClasses}
              dangerouslySetInnerHTML={{ __html: block.data.text }}
            />
          );
      }
    }

    case "paragraph":
      return (
        <p
          className="my-4 text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: block.data.text }}
        />
      );

    case "list": {
      const isOrdered = block.data.style === "ordered";
      const Tag = isOrdered ? "ol" : "ul";
      return (
        <Tag
          className={`my-4 ${isOrdered ? "list-decimal" : "list-disc"} ml-6 space-y-2`}
        >
          {block.data.items.map(
            (item: { content?: string } | string, i: number) => (
              <li
                key={i}
                dangerouslySetInnerHTML={{
                  __html:
                    typeof item === "string" ? item : (item.content ?? ""),
                }}
              />
            ),
          )}
        </Tag>
      );
    }

    case "image":
      return (
        <figure className="my-8">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image
              src={block.data.file.url}
              alt={block.data.caption || "Blog image"}
              fill
              className="object-contain"
            />
          </div>
          {block.data.caption && (
            <figcaption className="text-center text-muted-foreground mt-3 text-sm italic">
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
        <blockquote className="border-l-4 border-primary pl-6 py-4 my-6 bg-accent/30 rounded-r-lg italic">
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: block.data.text }}
          />
          {block.data.caption && (
            <cite className="block text-muted-foreground mt-3 text-sm not-italic">
              — {block.data.caption}
            </cite>
          )}
        </blockquote>
      );

    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-lg border border-border">
          <table className="min-w-full">
            <tbody>
              {block.data.content.map((row: string[], rowIndex: number) => (
                <tr
                  key={rowIndex}
                  className="border-b border-border last:border-0"
                >
                  {row.map((cell: string, cellIndex: number) => (
                    <td
                      key={cellIndex}
                      className="border-r border-border last:border-0 px-4 py-2 text-sm"
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
          {block.data.items.map(
            (item: { checked: boolean; text: string }, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.checked}
                  readOnly
                  className="w-4 h-4 accent-primary"
                />
                <span
                  className={
                    item.checked ? "line-through text-muted-foreground" : ""
                  }
                >
                  {item.text}
                </span>
              </li>
            ),
          )}
        </ul>
      );

    case "delimiter":
      return <hr className="my-10 border-t-2 border-border" />;

    case "embed":
      return (
        <div className="my-6 aspect-video rounded-lg overflow-hidden">
          <iframe
            src={block.data.embed}
            className="w-full h-full"
            allowFullScreen
            title={block.data.caption || "Embedded content"}
          />
        </div>
      );

    case "warning":
      return (
        <div className="my-6 bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <p className="font-semibold text-yellow-800 dark:text-yellow-300">
            {block.data.title}
          </p>
          <p className="text-yellow-700 dark:text-yellow-400 mt-1">
            {block.data.message}
          </p>
        </div>
      );

    case "linkTool":
      return (
        <div className="my-6 border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <a href={block.data.link} target="_blank" rel="noopener noreferrer">
            {block.data.meta?.image?.url && (
              <div className="relative w-full h-48">
                <Image
                  src={block.data.meta.image.url}
                  alt={block.data.meta.title ?? "Link preview"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                {block.data.meta?.title || block.data.link}
              </h3>
              {block.data.meta?.description && (
                <p className="text-muted-foreground text-sm mt-1">
                  {block.data.meta.description}
                </p>
              )}
              <p className="text-primary text-xs mt-2 truncate">
                {block.data.link}
              </p>
            </div>
          </a>
        </div>
      );

    case "attaches":
      return (
        <div className="my-6 border border-border rounded-lg p-4 flex items-center gap-4 hover:bg-accent/30 transition-colors">
          <div className="flex-1 min-w-0">
            <a
              href={block.data.file.url}
              download
              className="font-medium hover:text-primary transition-colors truncate block"
            >
              {block.data.title}
            </a>
            <p className="text-sm text-muted-foreground">
              {(block.data.file.size / 1024).toFixed(1)} KB
            </p>
          </div>
          <a
            href={block.data.file.url}
            download
            className="shrink-0 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
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
      return null;
  }
}

export default async function BlogViewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const readingTime = getReadingTime(blog.content);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/blogT">
          <Button variant="ghost" className="gap-2 mb-6 hover:cursor-pointer">
            <FaArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Button>
        </Link>
      </div>

      {blog.mainImage && (
        <div className="w-full max-w-5xl mx-auto px-4 mb-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={blog.mainImage}
              alt={blog.title}
              fill
              priority
              className="object-contain bg-muted"
            />
          </div>
        </div>
      )}

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {blog.title}
        </h1>

        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          {blog.description}
        </p>

        <Card className="p-4 mb-8">
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FaCalendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
            <ShareButton title={blog.title} description={blog.description} />
          </div>
        </Card>

        <Separator className="mb-8" />

        {/* EditorJS Content */}
        <div className="mb-12 prose prose-neutral dark:prose-invert max-w-none">
          {blog.content?.blocks?.map((block, index) => (
            <RenderBlock key={block.id ?? index} block={block} />
          ))}
        </div>

        <Separator className="mb-8" />

        {blog.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, idx) => (
                <Link key={idx} href={`/blogT?tag=${encodeURIComponent(tag)}`}>
                  <Badge
                    variant="outline"
                    className="hover:bg-accent cursor-pointer transition-colors"
                  >
                    #{tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Card className="p-8 text-center bg-accent/50">
          <h3 className="text-2xl font-bold mb-2">Enjoyed this article?</h3>
          <p className="text-muted-foreground mb-6">
            Explore more insights and tutorials on our blog
          </p>
          <Link href="/blogT">
            <Button size="lg" className="hover:cursor-pointer">
              Browse All Posts
            </Button>
          </Link>
        </Card>
      </article>
    </div>
  );
}
