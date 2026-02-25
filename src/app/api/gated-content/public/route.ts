import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import GatedContent from "@/models/GatedContent";

export async function GET() {
  try {
    await connectDB();

    // Only return active content for public view
    const contents = await GatedContent.find({ status: "active" })
      .select("-fileUrl")
      .sort({ createdAt: -1 });

    return NextResponse.json({ contents }, { status: 200 });
  } catch (error) {
    console.error("Error fetching public gated content:", error);
    return NextResponse.json(
      { message: "Failed to fetch content" },
      { status: 500 }
    );
  }
}