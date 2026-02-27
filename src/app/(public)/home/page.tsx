import Hero from "@/components/Home/Hero";
import React from "react";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("@/components/Home/Form"), {
  loading: () => (
    <div className="h-64 animate-pulse bg-muted rounded-lg mx-4" />
  ),
});

const FeatureSection = dynamic(
  () => import("@/components/Home/featureSection"),
  {
    loading: () => (
      <div className="h-64 animate-pulse bg-muted rounded-lg mx-4" />
    ),
  },
);

const Testimonials = dynamic(() => import("@/components/Home/Testimonials"), {
  loading: () => (
    <div className="h-64 animate-pulse bg-muted rounded-lg mx-4" />
  ),
});

const WhoWeAre = dynamic(() => import("@/components/Home/whoWeAre"), {
  loading: () => (
    <div className="h-64 animate-pulse bg-muted rounded-lg mx-4" />
  ),
});

const Services = dynamic(() => import("@/components/Home/ServicesSection"), {
  loading: () => (
    <div className="h-64 animate-pulse bg-muted rounded-lg mx-4" />
  ),
});

export default function page() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <Testimonials />
      <FeatureSection />
      <Form />
    </>
  );
}
