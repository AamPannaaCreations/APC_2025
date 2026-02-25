import crypto from "crypto";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { WorkshopRegistration } from "@/models/workshopRegistrations";
import { Workshop } from "@/models/workshop";


export async function POST(req: Request) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    await req.json();

  const sign = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(sign)
    .digest("hex");

  if (expectedSign !== razorpay_signature) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  await connectDB();

  const registration = await WorkshopRegistration.findOneAndUpdate(
    { razorpayOrderId: razorpay_order_id },
    {
      paymentStatus: "paid",
      razorpayPaymentId: razorpay_payment_id,
    },
    { new: true },
  );

  const workshop = await Workshop.findByIdAndUpdate(
    '69981b47c2913dd3c8182f63',
    { $inc: { enrolled: 1 } },
    { new: true }
  )
  if (!registration) {
    return NextResponse.json(
      { success: false, error: "Registration not found" },
      { status: 404 },
    );
  }

  // Send workshop confirmation email
  try {
    const emailResponse = await fetch(
      `${process.env.NEXT_PUBLIC_URL || "https://www.aampanna.net"}/api/workshop/send-workshop-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: registration.email,
          name: registration.name,
          workshopTitle: registration.workshopTitle,
          date: workshop?.date,
          time: workshop?.time,
          meetingLink: workshop?.meetingLink,
        }),
      },
    );

    if (!emailResponse.ok) {
      console.error("Failed to send workshop email");
    }

  } catch (error) {
    console.error("Error sending workshop email:", error);
    // Don't fail the payment verification if email fails
  }

  return NextResponse.json({ success: true });
}
