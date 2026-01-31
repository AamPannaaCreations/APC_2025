// // import React from 'react'
// // import Image from 'next/image'

// // export default function Hero() {
// //   return (
// //     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
// //       {/* Background gradient */}
// //       <div className="absolute inset-0 " >
// //         <Image
// //           src="/hero-section-background.jpg"
// //           alt="Anniversary Background"
// //           fill
// //           className=""
// //         />

// //       </div>

// //       {/* Decorative sparkles/stars */}
// //       <div className="absolute top-24 left-24 w-8 h-8 text-[#F5D665] opacity-60">
// //         <div className="w-full h-full rotate-45 bg-current" />
// //       </div>
// //       <div className="absolute top-48 right-32 w-6 h-6 text-[#F5D665] opacity-40">
// //         <div className="w-full h-full rotate-45 bg-current" />
// //       </div>
// //       <div className="absolute bottom-1/3 left-48 w-7 h-7 text-[#F5D665] opacity-50">
// //         <div className="w-full h-full rotate-45 bg-current" />
// //       </div>

// //       {/* Content */}
// //       <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
// //         {/* Logo */}
// //         <div className="mb-8 flex justify-center">
// //           <Image
// //             src="/aampannalogo-svg.png"
// //             alt="Aam Pannaa Creations"
// //             width={120}
// //             height={60}
// //             className="object-contain"
// //           />
// //         </div>

// //         {/* Heading */}
// //         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#5C4A2C] mb-4">
// //           Two Years In
// //         </h1>
// //         <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#5C4A2C] mb-8">
// //           Just Getting Started.
// //         </h2>

// //         {/* Description */}
// //         <p className="text-[#6B5540] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
// //           From an idea to a growing company, we have spent the last two years building
// //           with intention, creativity, and people at the center of everything we do.
// //         </p>

// //         {/* CTA Buttons */}
// //         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
// //           <button className="px-8 py-3 bg-[#8B7355] text-white rounded-full font-medium hover:bg-[#6B5540] transition-colors">
// //             work with us
// //           </button>
// //           <button className="px-8 py-3 bg-transparent border-2 border-[#8B7355] text-[#6B5540] rounded-full font-medium hover:bg-[#8B7355] hover:text-white transition-colors">
// //             see our journey
// //           </button>
// //         </div>
// //       </div>

// //       {/* Bottom wave decoration */}
// //       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF9E5] to-transparent" />
// //     </section>
// //   )
// // }

// import React from "react";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center  overflow-hidden">
//       {/* Background image */}
//       <div className="absolute inset-0">
//         <Image
//           src="/aniversary/hero-section-background.jpg"
//           alt="Anniversary Background"
//           fill
//           className=""
//           priority
//           quality={100}
//         />
//         {/* Overlay to improve text readability if needed */}
//         {/* <div className="absolute inset-0 bg-gradient-to-br from-[#FFE17A]/30 via-[#FFB366]/20 to-[#FF8C5A]/30" /> */}
//       </div>

//       {/* Decorative sparkles/stars */}
//       {/* <div className="absolute top-16 left-12 md:top-24 md:left-24 w-6 h-6 md:w-8 md:h-8 text-[#F5D665] opacity-60 animate-pulse">
//         <div className="w-full h-full rotate-45 bg-current" />
//       </div>
//       <div className="absolute top-32 right-16 md:top-48 md:right-32 w-5 h-5 md:w-6 md:h-6 text-[#F5D665] opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}>
//         <div className="w-full h-full rotate-45 bg-current" />
//       </div>
//       <div className="absolute bottom-1/3 left-24 md:left-48 w-6 h-6 md:w-7 md:h-7 text-[#F5D665] opacity-50 animate-pulse" style={{ animationDelay: '1s' }}>
//         <div className="w-full h-full rotate-45 bg-current" />
//       </div> */}

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//         {/* Logo */}
//         <div className="mb-6 md:mb-8 flex justify-center">
//           <Image
//             src="/aampannalogo-svg.png"
//             alt="Aam Pannaa Creations"
//             width={100}
//             height={50}
//             className="object-contain md:w-[120px] md:h-[60px]"
//           />
//         </div>

//         {/* Heading */}
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#5B4100] mb-2 md:mb-4 leading-tight">
//           Two Years In
//         </h1>
//         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5B4100] mb-6 md:mb-8 leading-tight">
//           Just Getting Started.
//         </h2>

//         {/* Description */}
//         <p className="text-[#5B4100] text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
//           From an idea to a growing company, we have spent the last two years
//           building with intention, creativity, and people at the center of
//           everything we do.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button className="w-full sm:w-auto px-8 py-3 bg-[#8B7355] text-white rounded-full font-medium hover:bg-[#6B5540] transition-all duration-300 hover:scale-105 shadow-lg">
//             work with us
//           </button>
//           <button className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-[#8B7355] text-[#6B5540] rounded-full font-medium hover:bg-[#8B7355] hover:text-white transition-all duration-300 hover:scale-105">
//             see our journey
//           </button>
//         </div>
//       </div>

//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">


//       <Image
//         src="/aniversary/mascot.png"
//         alt="Bottom Wave Decoration"
//         width={548}
//         height={469}
//         className=""
//         />
//         </div>
//       {/* Bottom wave decoration */}
//       {/* <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-[#FFF9E5] to-transparent pointer-events-none" /> */}
//     </section>
//   );
// }





'use client';

import React from "react";

import { useEffect } from "react"

import Image from "next/image";
import confetti from "canvas-confetti"

export default function Hero() {


  const handleSide = () => {
    const end = Date.now() + 10 * 1000 // 10 seconds
    const colors = ["#F00075", "#005ABD", "#9600B4", "#F00004", "00B144"]

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }

 const handleStars = () => {
    const duration = 10 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  useEffect(() => {
    handleSide()
    handleStars()
  }, [])

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/aniversary/hero-section-background.jpg"
          alt="Anniversary Background"
          fill
          className=""
          priority
          quality={100}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto ">
        {/* Logo */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <Image
            src="/aampannalogo-svg.png"
            alt="Aam Pannaa Creations"
            width={100}
            height={50}
            className="object-contain md:w-[120px] md:h-[60px]"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-[#5B4100] mb-2 leading-tight">
          Two Years In
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5B4100] mb-6 leading-tight">
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
          <button className="w-44 h-10 px-3 sm:w-auto bg-[#8B7355] text-white rounded-full font-medium hover:bg-[#6B5540] transition-all duration-300 hover:scale-105 shadow-lg">
            work with us
          </button>
          <button className="w-44 h-10 sm:w-auto px-3 bg-transparent border-2 border-[#8B7355] text-[#6B5540] rounded-full font-medium hover:bg-[#8B7355] hover:text-white transition-all duration-300 hover:scale-105">
            see our journey
          </button>
        </div>
      </div>

      {/* Mascot at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0">
        <Image
          src="/aniversary/mascot.png"
          alt="Mascot"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>
    </section>
  );
}