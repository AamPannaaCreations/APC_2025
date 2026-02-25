import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import GatedContent from "@/models/GatedContent";

// Admin get all api
export async function GET() {
  try {
    await connectDB();

    const contents = await GatedContent.find({}).sort({ createdAt: -1 });

    const stats = {
      total: contents.length,
      active: contents.filter((c) => c.status === "active").length,
      inactive: contents.filter((c) => c.status === "inactive").length,
      totalAccesses: contents.reduce((sum, c) => sum + c.accessCount, 0),
    };

    return NextResponse.json({ contents, stats }, { status: 200 });
  } catch (error) {
    console.error("Error fetching gated content:", error);
    return NextResponse.json(
      { message: "Failed to fetch gated content" },
      { status: 500 }
    );
  }
}

// create new content api by admin
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const {
      title,
      description,
      contentType,
      fileUrl,
      thumbnailUrl,
      category,
      status,
    } = body;

    if (!title || !description || !contentType || !fileUrl || !category) {
      return NextResponse.json(
        { message: "All required fields must be provided" },
        { status: 400 }
      );
    }

    const content = await GatedContent.create({
      title,
      description,
      contentType,
      fileUrl,
      thumbnailUrl,
      category,
      status: status || "active",
    });

    return NextResponse.json(
      { message: "Content created successfully", content },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating gated content:", error);
    return NextResponse.json(
      { message: "Failed to create content" },
      { status: 500 }
    );
  }
}