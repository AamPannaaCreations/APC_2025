"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { blogData } from "@/data/blogData";
import Image from "next/image";

export interface BlogPost {
  id: number;
  title: string;
  img: string;
  excerpt: string;
  date: string;
  tags?: string[];
  featured: boolean;
  readMore?: string;
  creator: string;
  content: string;
  fullContent?: {
    title: string;
    content: string;
  }[];
}

const BlogPostPage = () => {
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const id = params?.id;
    if (id && typeof id === "string") {
      const foundPost = blogData.find(
        (post: BlogPost) => post.id === parseInt(id)
      );
      if (foundPost) {
        setPost(foundPost);
      } else {
        toast.error("Blog post not found");
        router.push("/blog");
      }
      setLoading(false);
    }
  }, [params?.id, router]);

  const handleBack = (): void => {
    router.back();
  };

  const handleBackToBlog = (): void => {
    router.push("/blog");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            {`The blog post you're looking for doesn't exist.`}
          </p>
          <button
            onClick={handleBackToBlog}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts: BlogPost[] = blogData
    .filter((relatedPost: BlogPost) => relatedPost.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background py-6 px-6 font-bricolage ">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBack}
                className=" hover:cursor-pointer px-4 py-2 rounded-lg hover:bg-pink-300 border border-border flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <FaCircleArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              <div className="h-6 w-px bg-border"></div>
              <button
                onClick={handleBackToBlog}
                className="text-muted-foreground hover:text-primary transition-colors hover:cursor-pointer px-4 py-2 rounded-lg hover:bg-pink-300 border border-border  "
              >
                All Posts
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">{post.date}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <article className="max-w-7xl mx-auto px-4 sm:px-16 lg:px-8 sm:py-4 bg-[#EED241]/40 rounded-4xl mt-10 ">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            {post.tags &&
              post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center space-x-4">
              <span>By {post.creator}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">5 min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {/* <div className="aspect-video bg-gray-400 rounded-lg mb-12"></div> */}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src={post.img}
              alt={post.title}
              className="object-cover rounded-lg"
              width={600}
              height={400}
            />
          </div>

          {/* Main Content */}
          {post.fullContent && (
            <div className="space-y-12 mt-12">
              {post.fullContent.map((section, index: number) => (
                <section key={index} className="border-l-4 border-primary pl-6">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line ">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Published on {post.date} by {post.creator}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleBack}
                className="hover:cursor-pointer px-4 py-2 text-sm border border-border rounded-lg hover:bg-pink-300 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleBackToBlog}
                className="hover:cursor-pointer px-4 py-2 text-sm border border-border rounded-lg hover:bg-pink-300 transition-colors"
              >
                View All Posts
              </button>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {relatedPosts.map((relatedPost: BlogPost) => (
              <div
                key={relatedPost.id}
                className="bg-background rounded-lg p-6 shadow-sm hover:shadow-2xl transition-shadow cursor-pointer bg-[#EED241]/40"
                onClick={() => router.push(`/blog/${relatedPost.id}`)}
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {relatedPost.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {relatedPost.excerpt}
                </p>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>By {relatedPost.creator}</span>
                  <span>{relatedPost.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
