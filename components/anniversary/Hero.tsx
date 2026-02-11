"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Heart, Users, Trophy, Award } from "lucide-react";
import Magnet from "@/components/Magnet";
import Link from "next/link";

export default function Hero() {
  const [showIcons, setShowIcons] = useState(false);

  const handleSide = () => {
    const end = Date.now() + 10 * 1000;
    const colors = ["#F00075", "#005ABD", "#9600B4", "#F00004", "#00B144"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const handleStars = () => {
    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  useEffect(() => {
    handleSide();
    handleStars();

    // Delay icon appearance
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 500); // Icons start dropping after 500ms

    return () => clearTimeout(timer);
  }, []);

  const floatingIcons = [
    { Icon: Heart, position: "top-50 right-40", delay: "0s" },
    { Icon: Users, position: "bottom-40 right-70", delay: "0.2s" },
    { Icon: Trophy, position: "bottom-45 left-96", delay: "0.6s" },
    { Icon: Award, position: "top-40 left-60", delay: "0.8s" },
  ];

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 ">
        <Image
          src="/aniversary/hero-section-background.jpg"
          alt="Aam Pannaa Creations Anniversary"
          fill
          className=""
          priority
          quality={100}
        />
      </div>

      {/* Floating Icons */}
      {showIcons &&
        floatingIcons.map(({ Icon, position, delay }, index) => (
          <div
            key={index}
            className={`hidden lg:block absolute ${position} z-20 animate-float-in`}
            style={{ animationDelay: delay }}
          >
            <div className="bg-[#FFF9E5] p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
              <Icon className="w-10 h-10 text-[#8B7355]" />
            </div>
          </div>
        ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto ">
        {/* Logo */}
        <div className="mb-6 md:mb-8 flex justify-center mt-10">
          <Image
            src="/aampannalogo-svg.png"
            alt="Aam Pannaa Creations"
            width={100}
            height={50}
            priority
            className="object-contain md:w-[120px] md:h-[60px]"
          />
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-[#5B4100] mb-2 leading-tight"
          style={{ fontFamily: "Recoleta, serif" }}
        >
          Two Years In
        </h1>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5B4100] mb-6 leading-tight"
          style={{ fontFamily: "Recoleta, serif" }}
        >
          Just Getting Started.
        </h2>

        {/* Description */}
        <p className="text-[#5B4100] text-base md:text-md max-w-2xl mx-auto leading-relaxed mb-6">
          From an idea to a growing company, we have spent the last two years
          building with intention, creativity, and people at the center of
          everything we do.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
          <Magnet padding={200} disabled={false} magnetStrength={5}>
            <button className="hover:cursor-pointer w-44 h-10 px-3.5 sm:w-auto bg-[#8B7355] text-white rounded-full font-medium hover:bg-[#6B5540] transition-all duration-300 hover:scale-105 shadow-lg">
              <Link href="/home">Work with us</Link>
            </button>
          </Magnet>

          <button className="hover:cursor-pointer w-44 h-10 sm:w-auto px-3.5 bg-transparent border-2 border-[#8B7355] text-[#6B5540] rounded-full font-medium hover:bg-[#8B7355] hover:text-white transition-all duration-300 hover:scale-105">
            <Link href="#journey">See our journey</Link>
          </button>
        </div>
      </div>

      {/* Mascot at bottom */}
      {/* 
<div className="animate-float-in absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0">
  <Image
    src="/aniversary/mascot.png"
    alt="Mascot"
    width={450}
    height={950}
    className="w-40 h-auto sm:w-56 md:w-72 lg:w-[450px] object-contain"
  />
</div> */}
      {/* <div className="animate-float-in absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"> */}
      <div className="z-0 absolute bottom-0 md:left-1/2 md:transform md:-translate-x-1/2">
        <Image
          src="/aniversary/mascot.png"
          alt="Mascot"
          width={450}
          height={950}
        />
      </div>
      <style jsx>{`
        @keyframes float-in {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }
          60% {
            transform: translateY(10px);
          }
          80% {
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float-in {
          animation: float-in 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
