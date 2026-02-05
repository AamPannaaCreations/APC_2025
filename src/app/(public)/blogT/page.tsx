import BlogListClient from "@/components/BlogT/BlogListClient";

export const revalidate = 604800; // regenerate once per week

async function getInitialBlogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blogs?page=1&limit=9`,
  );
  return res.json();
}

export default async function BlogList() {
  const initialData = await getInitialBlogs();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
          <p className="text-muted-foreground text-lg">
            Discover insights, tutorials, and updates
          </p>
        </div>
        
          <BlogListClient initialData={initialData} />
        
      </div>
    </div>
  );
}
