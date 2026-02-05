import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { workshopEmailTemplate } from "@/lib/emailTemplates/workshopTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

type WorkshopEmailRequest = {
  email: string;
  name: string;
  workshopTitle: string;
  date: string;
  time: string;
  meetingLink: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: WorkshopEmailRequest = await req.json();
    const { email, name, workshopTitle, date, time, meetingLink } = body;

    // Validation
    if (!email || !name || !workshopTitle || !date || !time || !meetingLink) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Aam Pannaa Creations <workshop@notifications.aampanna.net>",
      to: email,
      subject: `Congratulations, You're confirmed for ${workshopTitle}! 🎉`,
      html: workshopEmailTemplate({
        name,
        workshopTitle,
        date,
        time,
        meetingLink,
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Workshop confirmation email sent successfully",
        emailId: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending workshop email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
