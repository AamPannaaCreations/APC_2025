import { Metadata } from "next";
import Hero from "@/components/Faq/hero";
import Content from "@/components/Faq/content";
import Cta from "@/components/Faq/cta";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "FAQs - Aam Pannaa Creations | Common Questions Answered",
  description:
    "Find answers to frequently asked questions about our web development, branding, social media management, and digital services.",
  keywords: [
    "FAQs",
    "Questions",
    "Web Development",
    "Digital Marketing",
    "Branding",
  ],
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFFDE8] to-[#FFFBD2]">
      <Hero />
      <Content />
      <Cta />
    </div>
  );
}
