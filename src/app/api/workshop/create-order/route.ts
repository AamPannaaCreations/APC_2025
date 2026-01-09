import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import {WorkshopRegistration} from "@/models/workshopRegistrations";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: Request) {
  const { name, email, phone, amount } = await req.json();

  await connectDB();

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
    notes: {
        workshopId,
        workshopTitle,
    },
  });

  await WorkshopRegistration.create({
    name,
    email,
    phone,
    workshopId: "workshop_001",
    razorpayOrderId: order.id,
  });

  return NextResponse.json(order);
}
