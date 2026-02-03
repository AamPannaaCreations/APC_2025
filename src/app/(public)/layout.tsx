import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import WorkshopBanner from "@/components/WorkshopBanner";
// import "quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";


export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <WorkshopBanner />

      <div className="mt-[48px]">
        <Navbar />
      </div>
      <div className="pt-[75px]">
        <Toaster />
        {children}
      </div>
      <Footer />
    </main>
  );
}
