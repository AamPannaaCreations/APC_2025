import { Resend } from "resend";
import { workshopEmailTemplate } from "@/lib/emailTemplates/workshopEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

type WorkshopEmailParams = {
  email: string;
  name: string;
  workshopTitle: string;
  date: string;
  time: string;
  meetingLink: string;
  meetingPlatform: string;
};

export async function sendWorkshopEmail({
  name,
  date,
  time,
  email,
  meetingLink,
  meetingPlatform,
  workshopTitle,
}: WorkshopEmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    if (
      !email ||
      !name ||
      !workshopTitle ||
      !date ||
      !time ||
      !meetingLink ||
      !meetingPlatform
    ) {
      const missingFields = [];
      if (!email) missingFields.push("email");
      if (!name) missingFields.push("name");
      if (!workshopTitle) missingFields.push("workshopTitle");
      if (!date) missingFields.push("date");
      if (!time) missingFields.push("time");
      if (!meetingLink) missingFields.push("meetingLink");
      if (!meetingPlatform) missingFields.push("meetingPlatform");

      console.error("Missing required fields:", missingFields.join(", "));
      return {
        success: false,
        error: `Missing required fields: ${missingFields.join(", ")}`,
      };
    }

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return { success: false, error: "Email service not configured" };
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Aam Pannaa Creations <workshop@notifications.aampanna.net>",
      to: email,
      subject: `Congratulations, You're confirmed for ${workshopTitle}! 🎉`,
      html: workshopEmailTemplate({
        name,
        date: formattedDate,
        time,
        meetingLink,
        meetingPlatform,
        workshopTitle,
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return { success: false, error: error.message };
    }

    console.log("Workshop email sent successfully:", data?.id);
    return { success: true };
  } catch (error) {
    console.error("Error sending workshop email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
