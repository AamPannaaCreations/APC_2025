import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { publicId } = await req.json();

  await cloudinary.uploader.destroy(publicId);

  return NextResponse.json({ success: true });
}
