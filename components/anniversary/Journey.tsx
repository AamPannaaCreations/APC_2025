"use client";

import CircularGallery from "@/components/anniversary/CircularGallery";
import { RetroGrid } from "@/components/ui/retro-grid";
import { isMobile } from 'react-device-detect';


export default function Journey() {

  return (
    <section
      id="journey"
      className="relative bg-[#FFF1C3] py-20 md:py-24 overflow-hidden"
    >
      {/* TOP RETRO GRID */}
      <div className="absolute rotate-180 top-0 left-0 w-full h-32 md:h-40">
        <RetroGrid />
      </div>

      {/* HEADING */}
      <h1 className="relative z-10 text-center font-semibold text-4xl sm:text-5xl md:text-6xl text-[#8C6400]">
        Our Journey in moments
      </h1>

      {/* GALLERY */}
      <div className="relative z-10 flex items-center justify-center h-[360px] sm:h-[420px] md:h-[500px]">
        <CircularGallery
          /* MOBILE FIRST */
          bend={ isMobile ? 2 : 3}
          scrollSpeed={isMobile ? 2.1 : 2}
          scrollEase={0.04}
          borderRadius={0.1}
          textColor="#8C6400"

          /* DESKTOP OVERRIDES */
          // className="md:[--bend:3] md:[--scrollSpeed:2]"
        />
      </div>

      {/* BOTTOM RETRO GRID */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-40">
        <RetroGrid />
      </div>
    </section>
  );
}
