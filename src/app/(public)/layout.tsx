import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import WorkshopBanner from "@/components/WorkshopBanner";
import "react-quill/dist/quill.snow.css";
import { Bricolage_Grotesque } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
          <link
            href="https://cdn.jsdelivr.net/npm/daisyui@5"
            rel="stylesheet"
            type="text/css"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
            async
          />
      <body className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} antialiased`}>
        <main>

          <Navbar />
          {/* Spacer to push content below fixed navbar */}
          <div className="h-[120px] md:h-[100px]"></div>

          <Toaster />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
