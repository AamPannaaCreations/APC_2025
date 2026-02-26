'use client';

import React from "react";

const Hero = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium">
              <span className="text-blue-500">★</span>
              <span>TOP RATED DIGITAL ASSETS 2024</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Expert-crafted toolkits to{" "}
              <span className="text-blue-600">accelerate your growth</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Stop starting from scratch. Access professionally designed
              frameworks, templates, and strategies delivered instantly to your
              inbox. Trusted by 10,000+ professionals.
            </p>

            {/* CTA Section */}
            <div className="flex items-center gap-6">
              {/* Button */}
              <button 
                onClick={() => document.getElementById('toolkits')?.scrollIntoView({ behavior: 'smooth' })}

              className="hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                Browse Toolkits
                <span>→</span>
              </button>

              {/* User Avatars & Rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                    <img
                      src="/avatar1.jpg"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                    <img
                      src="/avatar2.jpg"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white overflow-hidden">
                    <img
                      src="/avatar3.jpg"
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 text-sm">{"★★★★★"}</div>
                  <span className="text-xs text-gray-500">
                    from 2,000+ users
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Toolkit Card */}
          <div className="relative">
            <div className="bg-teal-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              {/* 3D Toolkit Illustration */}
              <div className="relative z-10">
                <div className="bg-white rounded-2xl p-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="space-y-4">
                    <div className="w-full h-4 bg-gray-200 rounded"></div>
                    <div className="space-y-2">
                      <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
                      <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
                    </div>
                    <div className="bg-orange-500 text-white text-xs font-bold px-3 py-2 rounded w-fit">
                      Tool Packs
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant Delivery Badge */}
              <div className="absolute bottom-8 left-8 bg-white rounded-lg px-4 py-3 shadow-lg flex items-center gap-2">
                <div className="bg-green-100 rounded-full p-1">
                  <span className="text-green-600 text-xs">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">
                    Instant Delivery
                  </div>
                  <div className="text-xs text-gray-500">
                    Get your PDF in seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
