import { NextResponse } from "next/server";
import { sendWorkshopEmail } from "@/lib/workshop/sendWorkshopEmail";
import { Workshop } from "@/models/workshop";

export async function GET() {
  console.log("Testing email...");
  const date = "2026-02-28T00:00:00.000+00:00";

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const result = await sendWorkshopEmail({
    email: "mukherjeearnab988@gmail.com", // Replace with your email
    name: "Test User",
    workshopTitle: "Test Workshop",
    date: formattedDate,
    time: "1:00 PM",
    meetingLink: "https://meet.google.com/test",
    meetingPlatform: "Google Meet"
  });


  console.log("Test email result:", result);
  
  const workshop = await Workshop.findOne({ capacity: 20 });

  return NextResponse.json({ result, workshop });
}