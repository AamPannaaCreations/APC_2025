import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import { Workshop } from "@/models/workshop";
import { WorkshopRegistration } from "@/models/workshopRegistrations";

export async function GET() {
  try {
    await connectDB();

    const workshops = await Workshop.find({}).sort({ date: -1 }).lean();

    const now = new Date();
    const upcoming = workshops.filter((w) => new Date(w.date) > now).length;
    const past = workshops.filter((w) => new Date(w.date) < now).length;

    const registrations = await WorkshopRegistration.countDocuments();

    const stats = {
      total: workshops.length,
      upcoming,
      past,
      totalRegistrations: registrations,
    };

    return NextResponse.json({
      workshops: JSON.parse(JSON.stringify(workshops)),
      stats,
    });
  } catch (error) {
    console.error("Error fetching workshops:", error);
    return NextResponse.json(
      { error: "Failed to fetch workshops" },
      { status: 500 },
    );
  }
}
