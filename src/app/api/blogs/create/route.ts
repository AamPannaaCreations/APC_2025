import { NextResponse } from "next/server";
import Blog from "@/models/blog";
import { slugify } from "@/lib/slugify";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const baseSlug = slugify(body.title);
  let slug = baseSlug;
  let count = 1;

  while (await Blog.findOne({ slug })) {
    slug = `${baseSlug}-${count++}`;
  }

  const blog = await Blog.create({
    ...body,
    slug,
    // author: body.authorId, // from auth
    author: 'Aam Pannaa Creations'
  });

  return NextResponse.json(blog);
}
