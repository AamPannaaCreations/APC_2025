import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContentAccess from "@/models/ContentAccess";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const { id } = await params;
    const leads = await ContentAccess.find({ contentId: id })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ leads }, { status: 200 });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { message: "Failed to fetch leads" },
      { status: 500 },
    );
  }
}
