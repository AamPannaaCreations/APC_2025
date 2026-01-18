import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import WorkshopBanner from "@/components/WorkshopBanner";


export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <WorkshopBanner />

      <div className="mt-[48px]"> {/* Push navbar down by banner height */}
        <Navbar />
      </div>
      <div className="pt-[75px]"> {/* Adjust for combined fixed elements */}
        <Toaster />
        {children}
      </div>
      <Footer />
    </main>
  );
}
