import React from 'react'
import Hero from "@/components/Home/Hero";
import Services from '@/components/Home/ServicesSection';
import Testimonials from '@/components/Home/Testimonials';
import WhoWeAre from '@/components/Home/whoWeAre';
import Form from '@/components/Home/Form';
import FeatureSection from '@/components/Home/featureSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Services /> 
      <Testimonials />
      <FeatureSection />
      <Form />
    </main>
  );
}