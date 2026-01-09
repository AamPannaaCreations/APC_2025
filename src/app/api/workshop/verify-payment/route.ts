import crypto from "crypto";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { WorkshopRegistration } from "@/models/workshopRegistrations";

export async function POST(req: Request) {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  } = await req.json();

  const sign = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(sign)
    .digest("hex");

  if (expectedSign !== razorpay_signature) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  await connectDB();

  await WorkshopRegistration.findOneAndUpdate(
    { razorpayOrderId: razorpay_order_id },
    {
      paymentStatus: "paid",
      razorpayPaymentId: razorpay_payment_id,
    }
  );

  return NextResponse.json({ success: true });
}
