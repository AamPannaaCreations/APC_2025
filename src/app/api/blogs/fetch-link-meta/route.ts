import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get("url");

    if (!url) {
      return NextResponse.json(
        { success: 0, message: "URL is required" },
        { status: 400 },
      );
    }

    // Validate URL
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
    } catch {
      return NextResponse.json(
        { success: 0, message: "Invalid URL" },
        { status: 400 },
      );
    }

    // 🚨 Basic SSRF Protection
    const hostname = parsedUrl.hostname;

    if (
      hostname === "localhost" ||
      hostname.startsWith("127.") ||
      hostname.startsWith("10.") ||
      hostname.startsWith("192.168.") ||
      hostname.startsWith("172.16.")
    ) {
      return NextResponse.json(
        { success: 0, message: "Private URLs not allowed" },
        { status: 400 },
      );
    }

    // ⏱ Timeout protection (5 seconds)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
      },
      redirect: "follow",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error("Failed to fetch URL");
    }

    const html = await response.text();

    // Extract meta tags
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const descMatch =
      html.match(
        /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i,
      ) ||
      html.match(
        /<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i,
      );
    const imageMatch = html.match(
      /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i,
    );

    let imageUrl = imageMatch?.[1];

    // If image URL exists, make it absolute
    // if (imageUrl) {
    //   if (!imageUrl.startsWith("http")) {
    //     imageUrl = new URL(imageUrl, parsedUrl.origin).toString();
    //   }
    // } else {
    // Fallback to favicon.ico
    imageUrl = `${parsedUrl.origin}/favicon.ico`;
    // }

    const meta = {
      title: titleMatch?.[1]?.trim() || url,
      description: descMatch?.[1]?.trim() || "",
      image: {
        url: imageUrl,
      },
    };

    return NextResponse.json({
      success: 1,
      meta,
      link: url,
    });
  } catch (error) {
    console.error("Error fetching link metadata:", error);
    return NextResponse.json(
      {
        success: 0,
        message: "Failed to fetch link metadata",
      },
      { status: 500 },
    );
  }
}
