// filepath: c:\Users\USER\OneDrive\Documents\GitHub\APC_2025\src\app\api\gated-content\[id]\access\route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import GatedContent from "@/models/GatedContent";
import ContentAccess from "@/models/ContentAccess";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();
    const { name, email, phone, company, designation, country } = body;
    
    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: "Name, email, and phone are required" },
        { status: 400 },
      );
    }

    // Check if content exists and is active
    const content = await GatedContent.findById(id);
    if (!content) {
      return NextResponse.json(
        { message: "Content not found" },
        { status: 404 },
      );
    }

    if (content.status !== "active") {
      return NextResponse.json(
        { message: "Content is not available" },
        { status: 403 },
      );
    }

    // Get IP and user agent
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Create access record
    const access = await ContentAccess.create({
      contentId: id,
      name,
      email,
      phone,
      company,
      designation,
      country,
      ipAddress,
      userAgent,
    });

    // Increment access count
    await GatedContent.findByIdAndUpdate(id, {
      $inc: { accessCount: 1 },
    });

    return NextResponse.json(
      {
        message: "Access granted",
        fileUrl: content.fileUrl,
        accessId: access._id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error granting access:", error);
    return NextResponse.json(
      { message: "Failed to grant access" },
      { status: 500 },
    );
  }
}
