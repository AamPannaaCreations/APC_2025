"use client";

import LogoLoop from "@/components/LogoLoop";
import { clientLogos } from "@/data/clientLogo";

export default function BrandLogo() {
  return (
    <section
      className="bg-[#FFF1C3]"
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
    >
      <div className="bg-[#FFF1C3] py-16 max-w-4xl mx-auto">
        <LogoLoop
          logos={clientLogos}
          speed={60}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#FFF1C3"
          ariaLabel="Aam Pannaa Brands"
        />
      </div>
    </section>
  );
}
