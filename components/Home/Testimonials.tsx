"use client";

import React from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { clientTestimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className=" mx-auto px-4 md:px-8 lg:px-16  ">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          {/* Left side - Heading and description */}
          <div className="lg:max-w-2xl font-bricolage ">
            <h2 className="font-bold text-4xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-6 lg:mb-4">
              We work with some <br /> pretty cool people
            </h2>

            <p className="text-lg text-gray-600 mb-8 lg:mb-0">
              We take pride in collaborating with a diverse range of clients,
              including startups, established businesses, and creative
              professionals. Our goal is to help you achieve your vision and
              bring your ideas to life.
            </p>
          </div>

          {/* Right side - Button */}
          <div className="flex justify-center lg:justify-end lg:flex-shrink-0">
            <button
              onClick={() => {
                toast.success("Navigating to all reviews...");
              }}
              className="hover:cursor-pointer relative px-6 md:px-10 py-3 md:py-4 rounded-full bg-[#FF69B4] text-black font-medium text-lg md:text-xl
        shadow-[0px_8px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,1)]"
            >
              <Link href="/testimonials">see all the reviews</Link>
            </button>
          </div>
        </div>

        {/* <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
        <div className="mx-auto flex flex-col md:flex-row lg:flex-row justify-center items-stretch gap-6 lg:gap-16">
          {clientTestimonials.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-0 w-full sm:w-80 md:w-96 lg:w-80 xl:w-96"
              style={{
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 1}deg)`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Gradient overlay for visual depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Quote decoration */}
              <div className="absolute top-4 left-4 text-gray-200 group-hover:text-blue-200 transition-colors duration-300">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <div className="relative p-6 sm:p-8">
                {/* Header with avatar and rating */}
                <div className="flex items-start justify-between mb-6">
                  {/* Avatar placeholder with gradient */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {item.title?.charAt(0) || "U"}
                      </span>
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>

                  {/* Star rating with improved styling */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-yellow-400 drop-shadow-sm"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Content section */}
                <div className="space-y-4">
                  {/* Name with enhanced typography */}
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    {item.role && (
                      <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                        {item.role}
                      </p>
                    )}
                  </div>

                  {/* Testimonial text with better readability */}
                  <div className="relative">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {`"${item.description}"`}
                    </p>
                    {/* Gradient fade for long text */}
                    {/* <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none opacity-50"></div> */}
                  </div>
                </div>

                {/* Footer section with enhanced styling */}
                <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-blue-100 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client Testimonial
                    </span>

                    {/* Verified badge */}
                    <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Verified</span>
                    </div>
                  </div>
                </div>

                {/* Hover effect decoration */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-100"></div>
              <div className="absolute bottom-8 right-8 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
