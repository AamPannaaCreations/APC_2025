import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/blog";

export async function getInitialBlogs({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) {
  await connectDB();

  const skip = (page - 1) * limit;

  const blogs = await Blog.find()
    .select("title slug description mainImage tags createdAt")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  const total = await Blog.countDocuments();

  return {
    blogs,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasMore: page * limit < total,
    },
  };
}
