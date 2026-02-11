import FeatureSection from "@/components/Home/featureSection";
import Testimonials from "@/components/Home/Testimonials";
import Services from "@/components/Home/ServicesSection";
import WhoWeAre from "@/components/Home/whoWeAre";
import Hero from "@/components/Home/Hero";
import Form from "@/components/Home/Form";
import React from "react";

export const dynamic = "force-static";

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
