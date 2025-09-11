'use client'

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaCircleArrowLeft } from "react-icons/fa6";
import Image from "next/image";

import { blogData } from "@/data/blogData";

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

const Blog = () => {
  const router = useRouter();
  
  const items: string[] = ["UI/UX", "Design", "Ideas", "Code", "Testing"];
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev: number) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handleViewMore = (postId: number): void => {
    toast.success("Loading blog post...");
    router.push(`/blog/${postId}`);
  };

  const renderFeaturedPost = (post: BlogPost) => (
    <div className="font-bricolage grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

    
        <Image
          src={post.img}
          alt={post.title}
          className="object-cover rounded-lg"
          width={600}
          height={400}
        />
      

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-primary">
            {post.title}
          </h2>
          <span className="text-m text-muted-foreground whitespace-nowrap ml-4">
            {post.date}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
        {post.readMore && (
          <button
            onClick={() => handleViewMore(post.id)}
            className="hover:cursor-pointer relative px-4 md:px-4 py-2 md:py-1 rounded-full bg-[#FF69B4] text-black font-medium text-lg md:text-xl
              shadow-[0px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)]"
          >
            {post.readMore}
          </button>
        )}
        <div className="flex justify-between items-center pt-4">
          <span className="text-xl text-muted-foreground">
            By {post.creator}
          </span>
          {post.tags && (
            <div className="flex gap-2">
              {post.tags.map((tag: string, index: number) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-m"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderRegularPost = (post: BlogPost) => (
    <div className="bg-gray-100 rounded-lg p-8 cursor-pointer hover:bg-gray-200 transition-colors"
        onClick={() => handleViewMore(post.id)}
        >
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-3xl font-bold text-primary">
          {post.title}
        </h2>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {post.date}
        </span>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-4">
        {post.excerpt}
      </p>

      <div className="flex justify-between items-center pt-4">
        <span className="text-sm text-muted-foreground">
          By {post.creator}
        </span>
        <span className="text-primary text-sm font-medium">
          Click to read more →
        </span>
      </div>
    </div>
  );

  return (
    <div className="fade-in font-bricolage ">
      {/* Blog Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-muted-foreground text-lg">
              {`We embrace agility to deliver timely, relevant content that resonates with your needs, ensuring we're always in tune with our audience.`}
            </p>
          </div>
          
          <div className="space-y-12">
            {blogData.map((post: BlogPost) => (
              <article key={post.id} className="card-hover">
                {post.featured ? renderFeaturedPost(post) : renderRegularPost(post)}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;