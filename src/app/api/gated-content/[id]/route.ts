import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import GatedContent from "@/models/GatedContent";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;
    const content = await GatedContent.findById(id);

    if (!content) {
      return NextResponse.json(
        { message: "Content not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ content }, { status: 200 });
  } catch (error) {
    console.error("Error fetching content:", error);
    return NextResponse.json(
      { message: "Failed to fetch content" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const body = await request.json();

    const { id } = await params;
    const content = await GatedContent.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true },
    );

    if (!content) {
      return NextResponse.json(
        { message: "Content not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Content updated successfully", content },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { message: "Failed to update content" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;
    const content = await GatedContent.findByIdAndDelete(id);

    if (!content) {
      return NextResponse.json(
        { message: "Content not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Content deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting content:", error);
    return NextResponse.json(
      { message: "Failed to delete content" },
      { status: 500 },
    );
  }
}
