import Blog from "@/models/blog";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  await connectDB();

  const { slug } = await params;

  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) {
    return NextResponse.json(
      { message: "Not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(blog);
}
