import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blog";
import { slugify } from "@/lib/slugify";
import { connectDB } from "@/lib/mongodb";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { title, description, mainImage, content, tags } = body;

    // Validation
    if (!title || !description || !mainImage || !content) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: title, description, mainImage, content",
        },
        { status: 400 },
      );
    }

    // Generate unique slug
    const baseSlug = slugify(title);
    let slug = baseSlug;
    let count = 1;

    while (await Blog.findOne({ slug })) {
      slug = `${baseSlug}-${count++}`;
    }

    // Create blog
    const blog = await Blog.create({
      title,
      slug,
      description,
      mainImage,
      content,
      tags: tags || [],
      author: body.author || "Aam Pannaa Creations",
      published: body.published ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    revalidatePath(`/blogT`);
    revalidatePath(`/blogT/${blog.slug}`);

    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully",
        blog,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating blog:", error);

    // Handle duplicate key error
    if ((error as any).code === 11000) {
      return NextResponse.json(
        { error: "A blog with this slug already exists" },
        { status: 409 },
      );
    }

    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 },
    );
  }
}
