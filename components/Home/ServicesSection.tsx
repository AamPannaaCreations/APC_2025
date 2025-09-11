"use client";
import React, { useState, useEffect } from "react";
import { Code, Share2, User, Palette, TrendingUp, Clock } from "lucide-react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Client {
  name: string;
  img: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description:
      "We turn ideas into stunning, functional websites, where design meets flawless development. From concept to content to tech support, we handle it all, so your brand shines and your users stay engaged.",
    icon: "/services/Web Design & Development.jpeg",
  },
  {
    id: 2,
    title: "Social Media Management",
    description:
      "We craft strategic, creative, and consistent social media that builds your brand and engages audiences. From content to campaigns, we manage and distribute across platforms turning followers into communities and engagement into real impact",
    icon: "/services/Social Media Management.jpeg",
  },
  {
    id: 3,
    title: "Personal Branding",
    description:
      "We help you craft a personal brand that brings out your authentic story and builds industry credibility. Through strategy, design, and storytelling, we position you to stand out, connect, and grow with the right opportunities.",
    icon: "/services/Personal Branding.jpeg",
  },
  {
    id: 4,
    title: "Podcast Editing",
    description:
      "We turn raw recordings into engaging, shareable conversations. With expert editing, creative direction, and smart distribution, we ensure your podcast not only sounds professional but also resonates with the right audience.",
    icon: "/services/Podcast editing.jpeg",
  },
  {
    id: 5,
    title: "Mentorship & Consulting",
    description:
      "We offer one-on-one consultations both one-time and monthly to guide startups, creators, and businesses with the right strategy, support, and steps. Blending industry insights with hands-on experience.",
    icon: "/services/Mentorship and Consulting.jpeg",
  },
];

const clientLogos: Client[] = [
  { name: "ClayLab", img: "/clientLogos/claylab.png" },
  { name: "Lagum Advisors", img: "/clientLogos/la.png" },
  { name: "Wolnut", img: "/clientLogos/WolnutLogo.png" },
  { name: "Jyotsna Singh", img: "/clientLogos/Jyotsnasingh.png" },
  { name: "Kancha", img: "/clientLogos/kancha.png" },
  { name: "Little Pineapple", img: "/clientLogos/littlepineapple.png" },
  { name: "aksh-e-sarfiri", img: "/clientLogos/aksh-e-sarfiri.png" },
  { name: "Luminary Pathways", img: "/clientLogos/luminaryPathways.png" },
  { name: "Escape Velocity", img: "/clientLogos/ev.png" },

  // { name: "The Local Project",
  //   img: "/clientLogos/thelocalproject.png"
  // },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto carousel effect
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const generateCircularIcons = () => {
    const radius = 220;
    const totalIcons = servicesData.length;
    const angleStep = 180 / (totalIcons - 1);
    const startAngle = -90;

    return servicesData.map((service, index) => {
      const angle = startAngle + index * angleStep;
      const x = Math.cos((angle * Math.PI) / 150) * radius;
      const y = Math.sin((angle * Math.PI) / 160) * radius;

      return {
        ...service,
        active: index === activeIndex,
        x: x,
        y: y,
      };
    });
  };

  return (
    <div className="min-h-screen ">
      {/* Desktop Version - Fixed visibility */}
      <div className="hidden lg:flex items-center justify-between min-h-screen relative overflow-hidden left-0 ">
        {/* Left Side - Circular Layout */}
        <div className="font-bricolage absolute left-0 top-1/2 transform -translate-y-1/2 w-96 h-full flex items-center ">
          <div className="relative w-full h-80 flex items-center justify-center ml-[-20px]">
            {generateCircularIcons().map((item, index) => (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                key={index}
                className="absolute transition-all duration-700 ease-out cursor-pointer group"
                style={{
                  left: `calc(50% + ${item.x}px)`,
                  top: `calc(50% + ${item.y}px)`,
                  transform: `translate(-50%, -50%) ${
                    item.active ? "scale(1.15)" : "scale(1)"
                  }`,
                }}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={`
                    w-35 h-35 rounded shadow-lg flex items-center justify-center
                    transition-all duration-700 border-2
                    ${
                      item.active
                        ? "bg-gradient-to-br from-orange-400 to-pink-500 border-white shadow-2xl"
                        : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-xl"
                    }
                    group-hover:scale-110
                  `}
                >
                  <div
                    className={
                      item.active
                        ? "text-white"
                        : "text-gray-600 group-hover:text-orange-500"
                    }
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={120}
                      height={120}
                    />
                  </div>
                </div>

                {/* Service title below icon */}
                <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-28">
                  <p
                    className={`text-xs text-center font-medium transition-colors duration-300 ${
                      item.active ? "text-orange-600" : "text-gray-500"
                    }`}
                  ></p>
                </div>
              </div>
            ))}

            {/* Center decoration */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Center Content - Properly centered */}
        <div className="font-bricolage ml-30 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl px-8">
          <div className="text-center space-y-6">
            <div className="overflow-hidden">
              <h2 className="text-4xl xl:text-7xl font-bold text-gray-800 leading-tight transition-all duration-700 transform">
                {servicesData[activeIndex].title}
              </h2>
            </div>
            <div className="overflow-hidden">
              <p className="text-gray-600 leading-relaxed text-lg xl:text-xl transition-all duration-700 transform">
                {servicesData[activeIndex].description}
              </p>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 pt-4">
              {servicesData.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Client Logos - Completely attached to right wall */}
        <div className="absolute right-0 top-0 h-screen overflow-hidden w-40">
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/90 to-transparent z-10 backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/90 to-transparent z-10 backdrop-blur-sm"></div>

          <div className="animate-scroll-vertical pt-8 mr-10">
            {/* First set */}

            {clientLogos.map((client, i) => (
              <div
                key={`first-${i}`}
                className="flex-shrink-0 w-32 h-20 border border-gray-200 rounded-xl mb-4 mx-auto bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-2"
              >
                <Image
                  src={client.img}
                  alt={client.name}
                  width={100}
                  height={60}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}

            {/* Duplicate for seamless loop */}
            {clientLogos.map((client, i) => (
              <div
                key={`first-${i}`}
                className="flex-shrink-0 w-32 h-20 border border-gray-200 rounded-xl mb-4 mx-auto bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-2"
              >
                <Image
                  src={client.img}
                  alt={client.name}
                  width={100}
                  height={60}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="md:block lg:hidden hidden">
        <div className="h-screen flex flex-col items-center justify-center px-8">
          {/* Top Icons Row */}
          <div className="flex justify-center gap-6 mb-12">
            {servicesData.map((service, index) => (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                key={index}
                className={`
                  w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center
                  transition-all duration-500 cursor-pointer border-2
                  ${
                    index === activeIndex
                      ? "bg-gradient-to-br from-orange-400 to-pink-500 border-white shadow-2xl scale-110"
                      : "bg-white border-gray-200 hover:border-orange-300 hover:shadow-xl hover:scale-105"
                  }
                `}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={
                    index === activeIndex ? "text-white" : "text-gray-600"
                  }
                >
                  {/* {service.icon} */}
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={120}
                    height={120}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Center Content */}
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {servicesData[activeIndex].title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-xl">
              {servicesData[activeIndex].description}
            </p>
          </div>

          {/* Bottom Client Logos */}
          <div className="mt-12 w-full overflow-hidden">
            <div className="flex animate-scroll-horizontal">
              {clientLogos.map((client, i) => (
                <div
                  key={`first-${i}`}
                  className="flex-shrink-0 w-32 h-20 border border-gray-200 rounded-xl mb-4 mx-auto bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-2"
                >
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={100}
                    height={60}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden min-h-screen py-8">
        {/* Header */}
        <div className="text-center mb-8 px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Our Services
          </h1>
          <p className="text-gray-600 text-sm">
            Tap on any service to learn more
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 gap-4 px-4 mb-8">
          {servicesData.map((service, index) => (
            <div
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
              key={index}
              className={`
                p-4 rounded-2xl border-2 transition-all duration-500 cursor-pointer
                ${
                  index === activeIndex
                    ? "bg-gradient-to-br from-orange-400 to-pink-500 border-orange-300 shadow-2xl scale-105"
                    : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                }
              `}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div
                  className={`
                  w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
                  ${index === activeIndex ? "bg-white/20" : "bg-gray-100"}
                `}
                >
                  <div
                    className={
                      index === activeIndex ? "text-white" : "text-gray-600"
                    }
                  >
                    {/* {service.icon} */}
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                <h3
                  className={`
                  text-sm font-semibold leading-tight transition-colors duration-300
                  ${index === activeIndex ? "text-white" : "text-gray-800"}
                `}
                >
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Active Service Description */}
        <div className="px-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <div className="text-white">
                  <Image
                    src={servicesData[activeIndex].icon}
                    alt={servicesData[activeIndex].title}
                    width={120}
                    height={120}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {servicesData[activeIndex].title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {servicesData[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4 mb-8">
          <div className="flex justify-center gap-2">
            {servicesData.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === activeIndex
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="px-4">
          <h3 className="text-lg font-bold text-gray-800 text-center mb-6">
            Trusted by Amazing Clients
          </h3>

          <div className="relative overflow-hidden h-32 rounded-2xl">
            <div className="flex animate-scroll-horizontal">
              {/* First set */}
              {clientLogos.map((client, i) => (
                <div
                  key={`first-${i}`}
                  className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-xl mr-3 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-2"
                >
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={60}
                    height={40}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client, i) => (
                <div
                  key={`second-${i}`}
                  className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-xl mr-3 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center p-2"
                >
                  <Image
                    src={client.img}
                    alt={client.name}
                    width={60}
                    height={40}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        {/* <div className="px-4 mt-8">
          <button className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300">
            Get Started Today
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fade-cycle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-scroll-vertical {
          animation: scroll-vertical 10s linear infinite;
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 20s linear infinite;
        }

        .animate-fade-cycle {
          animation: fade-cycle 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;
