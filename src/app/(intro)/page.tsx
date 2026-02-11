import React from 'react'
import BrandLogo from '@/components/anniversary/BrandLogo'
import Journey from '@/components/anniversary/Journey'
import Hero from '@/components/anniversary/Hero'
import { BentoDemo } from '@/components/anniversary/BentoGrid'
import Footer from '@/components/anniversary/Footer'

export const dynamic = "force-static";

export default function page() {
  return (
    <>
      <Hero />
      <BrandLogo />
      <BentoDemo /> 
      <Journey />
      <Footer />
    </>
  )
}
