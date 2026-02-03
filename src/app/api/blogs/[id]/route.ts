// import Blog from "@/models/blog";
// import { connectDB } from "@/lib/mongodb";
// import { NextResponse } from "next/server";
// import { slugify } from "@/lib/slugify";

// export async function GET(_: Request, { params }: { params: { id: string } }) {
//   await connectDB();
//   const blog = await Blog.findById(params.id).lean();
//   if (!blog) {
//     return NextResponse.json({ message: "Not found" }, { status: 404 });
//   }
//   return NextResponse.json(blog);
// }

// export async function PUT(
//   req: Request,
//   { params }: { params: { id: string } },
// ) {
//   await connectDB();
//   const body = await req.json();

//   const blog = await Blog.findById(params.id);
//   if (!blog) return NextResponse.json({ error: "Not found" });

//   if (body.title !== blog.title) {
//     const baseSlug = slugify(body.title);
//     let slug = baseSlug;
//     let count = 1;

//     while (await Blog.findOne({ slug, _id: { $ne: blog._id } })) {
//       slug = `${baseSlug}-${count++}`;
//     }

//     blog.slug = slug;
//   }

//   Object.assign(blog, body);
//   await blog.save();

//   return NextResponse.json(blog);
// }

// export async function DELETE(
//   req: Request,
//   { params }: { params: { id: string } },
// ) {
//   await Blog.findByIdAndDelete(params.id);
// }




import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blog";
import { connectDB } from "@/lib/mongodb";

// GET single blog by ID
export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT - Update blog
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();

    const blog = await Blog.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true }
    );

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE blog
export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}