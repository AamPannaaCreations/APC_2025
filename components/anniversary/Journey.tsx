'use client';
import React from "react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import Image from "next/image";

export default function Journey() {
  const journeyMilestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Our company was founded with a vision to transform the industry and create innovative solutions.",
      image: "/images/anniversary/milestone-1.jpg" // Replace with your image path
    },
    {
      year: "2021",
      title: "First Major Achievement",
      description: "Reached 10,000 customers and launched our flagship product that revolutionized the market.",
      image: "/images/anniversary/milestone-2.jpg"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded operations to 15 countries and established partnerships with industry leaders.",
      image: "/images/anniversary/milestone-3.jpg"
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Received prestigious industry recognition for our cutting-edge technology and innovation.",
      image: "/images/anniversary/milestone-4.jpg"
    },
    {
      year: "2024",
      title: "Team Growth",
      description: "Grew our team to 500+ talented professionals and opened new offices worldwide.",
      image: "/images/anniversary/milestone-5.jpg"
    },
    {
      year: "2025",
      title: "Looking Forward",
      description: "Continuing to innovate and grow, with exciting new products and services on the horizon.",
      image: "/images/anniversary/milestone-6.jpg"
    }
  ];

  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <ScrollStack>
        <h1 className="text-7xl font-extrabold text-center">Our Journey</h1>
        {journeyMilestones.map((milestone, index) => (
          <ScrollStackItem 
            key={index}
            itemClassName="!h-[450px] bg-yellow-300 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-8 h-full">
             
              {/* Right side - Content */}
              <div className="flex-1 flex flex-col justify-center space-y-4">
                <div className="inline-block">
                  <span className="text-5xl font-bold text-purple-600 bg-purple-100 px-6 py-2 rounded-full">
                    {milestone.year}
                  </span>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                  {milestone.title}
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {milestone.description}
                </p>

                <div className="flex items-center gap-2 text-purple-600">
                  <span className="text-sm font-semibold">MILESTONE {index + 1}</span>
                  <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-transparent rounded"></div>
                </div>
              </div>

               {/* Left side - Image */}
              <div className="flex-shrink-0 w-1/3 h-full relative rounded-2xl overflow-hidden">
                <Image
                  src={milestone.image}
                  alt={`${milestone.title} - ${milestone.year}`}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}