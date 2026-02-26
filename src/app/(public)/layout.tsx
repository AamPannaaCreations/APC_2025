import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {/* Spacer to push content below fixed navbar */}
      <div className="h-[120px] md:h-[100px]"></div>
      <Toaster />
      {children}
      <Footer />
    </>
  );
}
