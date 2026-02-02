import { Bricolage_Grotesque } from "next/font/google";
import LoadingBarNavigation from "@/components/LoadingBarNavigation";
import LoadingBarProvider from "@/components/LoadingBarProvider";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import Script from "next/script";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title:
    "Aam Pannaa Creations - Startup Marketing Agency | Web Design & Branding, Delhi NCR",
  description:
    "Empowering startups & women-led ventures with branding, web design, and social media management. Ghaziabad’s creative marketing experts.",
  keywords: [
    "Web Development India",
    "Social Media Management",
    "Personal Branding",
    "Podcast Editing",
    "Mentorship Consulting",
    "Digital Services Startup",
  ],
  openGraph: {
    title: "Startup Digital Services",
    description:
      "Web Development, Social Media, Branding, Podcast Editing & Consulting for Indian & International clients.",
    url: "https://www.aampanna.net",
    siteName: "Aam Pannaa Creations",
    images: [
      {
        url: "https://www.aampanna.net",
        width: 1200,
        height: 630,
        alt: "Startup Digital Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Digital Services",
    description:
      "Web Development, Social Media, Branding, Podcast Editing & Consulting for Indian & International clients.",
    images: ["https://www.aampanna.net"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aam Pannaa Creations",
              url: "https://www.aampanna.net",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ghaziabad",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+919871179867",
                  contactType: "customer service",
                },
              ],
            }),
          }}
        />
        {/* hreflang */}
        <link
          rel="alternate"
          href="https://www.aampanna.net"
          hrefLang="en-in"
        />
        <link
          rel="alternate"
          href="https://www.aampanna.net"
          hrefLang="en-us"
        />
        <link
          rel="alternate"
          href="https://www.aampanna.net"
          hrefLang="x-default"
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R4W9X1147V"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-R4W9X1147V');
    `,
          }}
        />

        {/* ✅ Google Tag Manager (noscript) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5CG5WRLK');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CG5WRLK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <LoadingBarProvider>
          <LoadingBarNavigation />
          <Toaster />
          {children}
          <Analytics />
        </LoadingBarProvider>
      </body>
    </html>
  );
}
