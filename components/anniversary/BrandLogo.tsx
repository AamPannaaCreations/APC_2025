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

const imageLogos = [
  {
    src: "/clientLogos/ev.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
  {
    src: "/clientLogos/aksh-e-sarfiri.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/clientLogos/claylab.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/clientLogos/image.png",
    alt: "Company 4",
    href: "https://company4.com",
  },
  {
    src: "/clientLogos/josh.png",
    alt: "Company 5",
    href: "https://company5.com",
  },
  {
    src: "/clientLogos/Jyotsnasingh.png",
    alt: "Company 6",
    href: "https://company6.com",
  },
  {
    src: "/clientLogos/kancha.png",
    alt: "Company 7",
    href: "https://company7.com",
  },
  {
    src: "/clientLogos/la.png",
    alt: "Company 8",
    href: "https://company8.com",
  },
  {
    src: "/clientLogos/littlepineapple.png",
    alt: "Company 9",
    href: "https://company9.com",
  },
  {
    src: "/clientLogos/livinMyDream.jpeg",
    alt: "Company 10",
    href: "https://company10.com",
  },
  {
    src: "/clientLogos/luminaryPathways.png",
    alt: "Company 11",
    href: "https://company11.com",
  },
  {
    src: "/clientLogos/minsstance.png",
    alt: "Company 12",
    href: "https://company12.com",
  },
  {
    src: "/clientLogos/one7logo.png",
    alt: "Company 13",
    href: "https://company13.com",
  },
  {
    src: "/clientLogos/purezen.png",
    alt: "Company 14",
    href: "https://company14.com",
  },
  {
    src: "/clientLogos/ssy.jpeg",
    alt: "Company 15",
    href: "https://company15.com",
  },
  {
    src: "/clientLogos/theQuietReset.jpeg",
    alt: "Company 16",
    href: "https://company16.com",
  },
  {
    src: "/clientLogos/WolnutLogo.png",
    alt: "Company 17",
    href: "https://company17.com",
  },
];

export default function BrandLogo() {
  return (
    <section
      className="bg-[#FFF1C3]"
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
    >
      <div className="bg-[#FFF1C3] py-16 max-w-4xl mx-auto">

      <LogoLoop
        logos={imageLogos}
        speed={60}
        direction="left"
        logoHeight={40}
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
