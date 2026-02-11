import BlogListClient from "@/components/BlogT/BlogListClient";
import { getInitialBlogs } from "@/lib/workshop/getInitialBlogs";

export const revalidate = 604800; // regenerate once per week

export default async function BlogList() {
  const data = await getInitialBlogs({ page: 1, limit: 9 });

  const initialData = {
    blogs: data.blogs.map((blog) => ({
      _id: String(blog._id),
      title: blog.title,
      slug: blog.slug,
      description: blog.description,
      mainImage: blog.mainImage,
      tags: blog.tags,
      createdAt: new Date(blog.createdAt).toISOString(),
    })),
    pagination: {
      page: data.pagination.page,
      limit: data.pagination.limit,
      total: data.pagination.total,
      totalPages: data.pagination.totalPages,
      hasMore: data.pagination.hasMore,
    },
  };

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
