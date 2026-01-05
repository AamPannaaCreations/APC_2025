import { NextResponse } from "next/server";

export async function GET() {
  // Replace this with your actual database/CMS call
  const workshop = {
    id: "workshop-2026-01",
    title: "Web Development Workshop 2026",
    description: "Join us for an exciting hands-on workshop on modern web development!",
    date: "2026-02-15",
    link: "https://example.com/register",
    // type: "banner", // or "popup"
    type: "popup"

  };

  // You can also return null if no active workshop
  // return NextResponse.json(null);

  return NextResponse.json(workshop);
}