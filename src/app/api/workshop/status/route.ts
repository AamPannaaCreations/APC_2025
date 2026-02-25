import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { WorkshopRegistration } from "@/models/workshopRegistrations";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const orderId = searchParams.get("orderId");

  await connectDB();

  const reg = await WorkshopRegistration.findOne({
    razorpayOrderId: orderId,
  });

  if (!reg) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ status: reg.paymentStatus });
}