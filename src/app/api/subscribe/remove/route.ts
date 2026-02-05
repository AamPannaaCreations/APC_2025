import { NextRequest, NextResponse } from "next/server";
import Subscriber from "@/models/subscribe";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, reason } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const subscriber = await Subscriber.findOne({ email });

    if (!subscriber) {
      return NextResponse.json(
        { error: "Email not found in our records" },
        { status: 404 },
      );
    }
    subscriber.unsubscriptionReason = reason || "No reason provided";
    subscriber.isActive = false;
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();

    return NextResponse.json(
      {
        success: true,
        message: "Successfully unsubscribed. We're sad to see you go!",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error unsubscribing:", error);
    return NextResponse.json(
      { error: "Failed to unsubscribe" },
      { status: 500 },
    );
  }
}
