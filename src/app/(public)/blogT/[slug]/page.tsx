import RenderQuillContent from "@/components/admin/blog/RenderQuillContent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaClock, FaCalendar } from "react-icons/fa";
import { notFound } from "next/navigation";
import ShareButton from "@/components/ShareButton";
import "react-quill/dist/quill.snow.css";

// No Need to validate each blog 
// export const revalidate = 604800; 

type Blog = {
  _id: string;
  title: string;
  description: string;
  mainImage: string;
  content: string;
  tags: string[];
  createdAt: string;
  slug: string;
};

async function getBlog(slug: string): Promise<Blog> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blogs/slug/${slug}`,
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
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

  const readingTime = Math.ceil(blog.content.split(" ").length / 200); // Approx reading time

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/blogT">
          <Button variant="ghost" className="gap-2 mb-6 hover:cursor-pointer ">
            <FaArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
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

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {blog.title}
        </h1>

        {/* Description */}
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          {blog.description}
        </p>

        {/* Meta Info */}
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

        {/* Blog Content */}
        <div className="mb-12">
          <RenderQuillContent content={blog.content} />
        </div>

        <Separator className="mb-8" />

        {/* Related Tags */}
        {blog.tags && blog.tags.length > 0 && (
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

        {/* CTA */}
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
