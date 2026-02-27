import Hero from "@/components/anniversary/Hero";
import dynamic from "next/dynamic";

const BrandLogo = dynamic(() => import("@/components/anniversary/BrandLogo"), {
  loading: () => (
    <div className="h-24 animate-pulse bg-muted rounded-lg mx-4" />
  ),
});

const BentoGrid = dynamic(
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
      <BentoGrid />
      <Journey />
      <Footer />
    </>
  );
}
