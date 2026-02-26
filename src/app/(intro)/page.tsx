import Hero from "@/components/anniversary/Hero";
import dynamic from "next/dynamic";

// export const dynamic = "force-static";
// import BrandLogo from '@/components/anniversary/BrandLogo'
// import Journey from '@/components/anniversary/Journey'
// import { BentoDemo } from '@/components/anniversary/BentoGrid'
// import Footer from '@/components/anniversary/Footer'


const BrandLogo = dynamic(() => import("@/components/anniversary/BrandLogo"), {
  loading: () => (
    <div className="h-24 animate-pulse bg-muted rounded-lg mx-4" />
  ),
});

const BentoDemo = dynamic(
  () => import("@/components/anniversary/BentoGrid").then((m) => m.BentoDemo),
  {
    loading: () => (
      <div className="h-96 animate-pulse bg-muted rounded-lg mx-4" />
    ),
  },
);

const Journey = dynamic(() => import("@/components/anniversary/Journey"), {
  loading: () => (
    <div className="h-64 animate-pulse bg-muted rounded-lg mx-4" />
  ),
});

const Footer = dynamic(() => import("@/components/anniversary/Footer"), {
  loading: () => (
    <div className="h-32 animate-pulse bg-muted rounded-lg mx-4" />
  ),
});

export default function page() {
  return (
    <>
      <Hero />
      <BrandLogo />
      <BentoDemo />
      <Journey />
      <Footer />
    </>
  );
}
