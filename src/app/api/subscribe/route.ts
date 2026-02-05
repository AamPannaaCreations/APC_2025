import { NextRequest, NextResponse } from "next/server";
import Subscriber from "@/models/subscribe";
import { connectDB } from "@/lib/mongodb";


// GET - Fetch all subscribers
export async function GET() {
  try {
    await connectDB();

    const subscribers = await Subscriber.find().sort({ subscribedAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: subscribers.length,
        subscribers,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}
