import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blog";
import { connectDB } from "@/lib/mongodb";
import { revalidatePath } from "next/cache";

// GET single blog by ID
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const { id } = await params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

// PUT - Update blog
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();

    const blog = await Blog.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true },
    );

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    
    revalidatePath(`/blogT/${blog.slug}`);
    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

// DELETE blog
export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const { id } = await params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    revalidatePath(`/blogT`);
    revalidatePath(`/blogT/${blog.slug}`);

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
