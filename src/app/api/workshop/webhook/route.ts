import crypto from "crypto";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { WorkshopRegistration } from "@/models/workshopRegistrations";
import { Workshop } from "@/models/workshop";
import { sendWorkshopEmail } from "@/lib/workshop/sendWorkshopEmail";

export async function POST(req: Request) {
  try {
    console.log("=== WEBHOOK RECEIVED ===");

    const body = await req.text();
    const signature = req.headers.get("x-razorpay-signature") || "";

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest("hex");

    if (signature !== expectedSignature) {
      console.error("❌ Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(body);

    await connectDB();

    if (event.event === "payment.captured") {
      const orderId = event.payload.payment.entity.order_id;

      const registration = await WorkshopRegistration.findOneAndUpdate(
        { razorpayOrderId: orderId },
        { paymentStatus: "PAID" },
        { new: true },
      );

      const workshop = await Workshop.findOneAndUpdate(
        { _id: event.payload.payment.entity.notes.workshopId },
        { $inc: { enrolled: 1 } },
        { new: true },
      );


      if (registration && workshop) {

        const emailResult = await sendWorkshopEmail({
          email: registration.email,
          name: registration.name,
          workshopTitle: workshop.title,
          date: workshop.date,
          time: workshop.time,
          meetingLink: workshop.meetingLink,
          meetingPlatform: workshop.platform,
        });

      } else {
        console.error(
          "❌ Missing data - Registration:",
          !!registration,
          "Workshop:",
          !!workshop,
        );
      }
    }

    if (event.event === "payment.failed") {
      const orderId = event.payload.payment.entity.order_id;
      await WorkshopRegistration.findOneAndUpdate(
        { razorpayOrderId: orderId },
        { paymentStatus: "FAILED" },
      );
      
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 },
    );
  }
}
