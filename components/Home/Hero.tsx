"use client";

import React from "react";
import Ballpit from "../Ballpit";
import Link from "next/link";
import TextType from "../TextType";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container h-screen max-w-full bg-[url('/hero-bg.png')] bg-cover relative flex items-center justify-center overflow-hidden">
        {/* Ballpit Background Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none md:pointer-events-auto">
          <Ballpit
            colors={[0xffff00, 0xff8800, 0xff69b4]}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.5}
            followCursor={false}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-5 bg-gradient-to-br from-black/10 via-transparent to-purple/20 pointer-events-none"></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto pointer-events-none">
          {/* Welcome Text with Animation */}
          <div className="font-bricolage mb-4 overflow-hidden">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black animate-slide-up tracking-wider">
              Welcome to
            </h1>
          </div>

          {/* Main Title with Decorative Elements */}
          <div className="relative mb-8">
            {/* Decorative lines */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-78 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full"></div>

            {/* Main Title */}
            {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-pink-500 animate-gradient leading-tight"> */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-black animate-gradient leading-tight">
              {/* Aam Pannaa Creations */}

              <TextType
                text={["Aam Pannaa Creations","Aam Pannaa Creations","Aam Pannaa Creations"]}
                variableSpeed={{ min: 50, max: 150 }}
                deletingSpeed={60}
                pauseDuration={2500}
                loop={true}
                initialDelay={500}
                className="font-bricolage text-black"
                
                showCursor={true}
                cursorCharacter="_"
              />
              
            </h1>

            {/* Bottom decorative line */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 rounded-full"></div>
          </div>

          {/* Subtitle */}
          <div className="mb-8 overflow-hidden font-bricolage ">
            <p className="text-lg sm:text-xl md:text-2xl text-black animate-slide-up-delay font-light tracking-wide">
              {/* Creative Solutions • Digital Excellence • Innovative Design */}
              Where Limits Defy, We Redefine Marketing
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up pointer-events-auto">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl touch-manipulation">
              <Link href="/services">
                <span className="relative z-10">Explore Our Work</span>
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white hover:scale-105 hover:shadow-xl touch-manipulation">
              <Link href="/#contact-form">Get In Touch</Link>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="ml-5 absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-auto">
            <div
              className="flex flex-col items-center text-gray-600 cursor-pointer touch-manipulation"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Ensure body scrolling is not blocked */
        body {
          touch-action: auto !important;
          overflow: auto !important;
        }

        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-up-delay {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up-delay 1s ease-out 0.3s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.6s both;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease-in-out infinite;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .hero h1 {
            line-height: 1.1;
          }

          /* Ensure touch targets are large enough */
          button {
            min-height: 44px;
            min-width: 44px;
          }

          /* Better mobile performance */
          .hero {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }

        /* Enhanced touch manipulation */
        .touch-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </section>
  );
};

export default Hero;
