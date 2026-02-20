import crypto from "crypto";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { WorkshopRegistration } from "@/models/workshopRegistrations";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("x-razorpay-signature") || "";

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(body)
    .digest("hex");

  if (signature !== expectedSignature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(body);

  await connectDB();

  if (event.event === "payment.captured") {
    const orderId = event.payload.payment.entity.order_id;

    await WorkshopRegistration.findOneAndUpdate(
      { razorpayOrderId: orderId },
      { paymentStatus: "PAID" },
    );
  }

  if (event.event === "payment.failed") {
    const orderId = event.payload.payment.entity.order_id;

    await WorkshopRegistration.findOneAndUpdate(
      { razorpayOrderId: orderId },
      { status: "FAILED" },
    );
  }

  return NextResponse.json({ success: true });
}
