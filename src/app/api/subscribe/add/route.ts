import { NextRequest, NextResponse } from "next/server";
import Subscriber from "@/models/subscribe";
import { connectDB } from "@/lib/mongodb";
import { Resend } from "resend";
import { subscribeEmailTemplate } from "@/lib/emailTemplates/subscribeEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, name, source } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const existing = await Subscriber.findOne({ email });
    
    if (existing) {
      if (existing.isActive) {
        return NextResponse.json(
          { error: "This email is already subscribed" },
          { status: 409 }
        );
      } else {
        // Reactivate subscription
        existing.isActive = true;
        existing.subscribedAt = new Date();
        existing.unsubscribedAt = null;
        await existing.save();

        return NextResponse.json(
          {
            success: true,
            message: "Welcome back! Your subscription has been reactivated.",
          },
          { status: 200 }
        );
      }
    }

   
   
   
   // Create new subscriber (already verified)
    const subscriber = await Subscriber.create({
      email,
      name: name || "",
      source: source || "website",
      isVerified: true, // Auto-verified
      isActive: true,
    });

    // Send welcome email
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Aam Pannaa Creations <hello@notifications.aampanna.net>",
        to: email,
        subject: "Welcome to Aam Pannaa Creations! 🎉",
        html: subscribeEmailTemplate({
          name: name || "there",
          email,
        }),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed! Check your email for a welcome message.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}