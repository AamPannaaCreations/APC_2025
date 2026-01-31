"use client";

import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kYkEj7poqCrcmSXMeH5XzdF7T6IvBjRH9A&s",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0070/7032/files/16colorwheel.png?v=1763193448",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "https://rabbixel.com/wp-content/uploads/2019/04/creative-logo-maker.png.webp",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

export default function BrandLogo() {
  return (
    <div className="bg-[#FFF1C3]" style={{ height: "200px", position: "relative", overflow: "hidden" }}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={80}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
