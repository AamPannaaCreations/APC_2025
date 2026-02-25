import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { WorkshopRegistration } from "@/models/workshopRegistrations";
import { Workshop } from "@/models/workshop";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  const { name, email, phone, workshopId } = await req.json();

  await connectDB();

  const workshop = await Workshop.findById(workshopId);
  if (!workshop) {
    return NextResponse.json({ error: "Workshop not found" }, { status: 404 });
  }

  const order = await razorpay.orders.create({
    amount: workshop.price * 100,
    currency: "INR",
    
    notes: {
        workshopId
    },
  });

  await WorkshopRegistration.create({
    name,
    email,
    phone,
    workshopId,
    razorpayOrderId: order.id,
  });

  return NextResponse.json(order);
}
