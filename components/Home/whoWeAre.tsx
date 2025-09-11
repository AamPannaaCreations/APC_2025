// import React from "react";
// import Link from "next/link";

// const WhoWeAre = () => {
//   return (
//     <section className="relative overflow-hidden ">
//       <div className="px-4 md:px-8 lg:px-16 relative z-10 bg-[#FFD500] ">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left content */}
//           <div className="space-y-6 mt-16 ">
//             <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
//               Who are we ?
//             </h2>
//               <div className="mt-4 max-w-7xl">
//               <p className="text-lg md:text-xl text-black leading-relaxed">
//                 {`At Aam Pannaa Creations, we believe every startup has a story worth sharing—a story that inspires, connects, and drives growth. We started with a vision: to bridge gaps in the startup ecosystem and empower early-stage ventures to thrive. While startups brim with ideas, many struggle to build a compelling brand identity. That's where we step in, crafting authentic stories and impactful marketing that help them scale.`}
//                 <br />
//                 <br />
//                 {`Our approach combines creativity with strategy, transforming visions into captivating brands and managing social media with precision. For us, it's not just about marketing—it's about forging meaningful connections that fuel growth. We specialize in supporting early-stage startups, B2B companies seeking insights, and women-led social ventures making an impact. Our tailored consultations align with your unique goals to deliver real, lasting results.`}
//                 <br />
//                 <br />
//                 {`At Aam Pannaa Creations, we're not just partners; we're advocates for your success. Let's write your growth story together.`}
//               </p>
//             </div>
//           </div>

//           {/* Right decorative elements */}
//           <div className=" relative flex justify-center">
//             {/* LinkedIn icon */}
//             <Link
//               href="https://www.linkedin.com/company/aam-pannaa-creations/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className=" absolute top-0 right-20 w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center transform rotate-12 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer group"
//             >
//               <svg
//                 className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//               </svg>
//             </Link>

//             {/* Instagram icon */}
//             <Link
//               href="https://www.instagram.com/aampannaacreations/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="absolute bottom-12 right-8 w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-pink-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 cursor-pointer group"
//             >
//               <svg
//                 className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* SVG Wave - positioned to extend below section */}

//       <div className="relative w-full mt-[-80px]">
//         <svg
//           className="w-full"
//           height="300"
//           viewBox="0 0 1440 469"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M689.5 422C360 549 74.1667 381 -3.5 334.5L-41 74L1471 0L1462.5 334.5C1222 182.5 997.82 303.163 689.5 422Z"
//             fill="#FFD500"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <section className="relative overflow-hidden ">
      <div className="px-4 md:px-8 lg:px-16 relative z-10 bg-[#FFD500] ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left content */}
          <div className="flex-1 space-y-6 mt-16 font-bricolage ">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              Who are we ?
            </h2>
            <div className="mt-4 max-w-7xl">
              {/* <p className="text-lg md:text-xl text-black leading-relaxed">
                {`At Aam Pannaa Creations, we believe every startup has a story worth sharing, a story that inspires, connects, and drives growth.We started with a vision: to bridge gaps in the startup ecosystem and empower early-stage ventures to thrive. While startups brim with ideas, many struggle to build a compelling brand identity. That’s where we step in crafting authentic stories and impactful marketing that help them scale.`}
                <br />
                <br />
                {`Our approach combines creativity with strategy, transforming visions into captivating brands and managing social media with precision. For us, it’s not just about marketing; It’s about forging meaningful connections that fuel growth. We specialize in supporting <strong>early-stage startups</strong>, B2B companies seeking insights, and women-led social ventures making an impact. Our tailored consultations align with your unique goals to deliver real, lasting results. At Aam Pannaa Creations, we’re not just partners; we’re advocates for your success. Let’s write your growth story together.`}{" "}
                <br />
                <br />
              </p> */}
              <p className="text-lg md:text-xl text-black leading-relaxed">
                {`At Aam Pannaa Creations, we believe every startup has a story worth sharing, a story that inspires, connects, and drives growth. We started with a vision: to bridge gaps in the startup ecosystem and empower early-stage ventures to thrive. While startups brim with ideas, many struggle to build a compelling brand identity. That's where we step in crafting authentic stories and impactful marketing that help them scale.`}
                <br />
                <br />
                {`Our approach combines creativity with strategy, transforming visions into captivating brands and managing social media with precision. For us, it's not just about marketing; It's about forging meaningful connections that fuel growth. We specialize in supporting `}
                <strong>early-stage startups</strong>
                <strong>, B2B</strong>
                {`,  companies seeking insights, and `}
                <strong>women-led social ventures</strong>
                {`making an impact. Our tailored consultations align with your unique goals to deliver real, lasting results. At Aam Pannaa Creations,`} <span className="italic">{`We're not just partners; we're advocates for your success.`}</span>
                <br />
                <br />
                <p className="font-bold text-xl md:text-2xl underline">
                  {`Let's write your growth story together`}
                </p>
              </p>
            </div>
          </div>

          {/* Right decorative elements */}
          <div className="flex-shrink-0 lg:w-1/3 relative flex justify-center lg:justify-end gap-4 lg:gap-0 mt-8 lg:mt-0">
            {/* LinkedIn icon */}
            <Link
              href="https://www.linkedin.com/company/aam-pannaa-creations/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative lg:absolute lg:top-0 lg:right-20 w-20 h-20 lg:w-24 lg:h-24 border-2 border-blue-600 bg-blue-600 lg:border-gray-300 lg:bg-transparent rounded-lg flex items-center justify-center transform lg:rotate-12 transition-all duration-300 lg:hover:border-blue-600 lg:hover:bg-blue-600 lg:hover:text-white cursor-pointer group"
            >
              <FaLinkedin className="w-12 h-12 lg:w-16 lg:h-16 text-white lg:text-gray-600 lg:group-hover:text-white transition-colors duration-300" />
            </Link>

            {/* Instagram icon */}
            <Link
              href="https://www.instagram.com/aampannaacreations/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative lg:absolute lg:bottom-12 lg:right-8 w-20 h-20 lg:w-24 lg:h-24 border-2 border-pink-500 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 lg:border-gray-300 lg:bg-none rounded-2xl flex items-center justify-center transition-all duration-300 lg:hover:border-pink-500 lg:hover:bg-gradient-to-tr lg:hover:from-yellow-400 lg:hover:via-red-500 lg:hover:to-purple-500 cursor-pointer group"
            >
              <FaInstagram className="w-12 h-12 lg:w-16 lg:h-16 text-white lg:text-gray-600 lg:group-hover:text-white transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* SVG Wave - positioned to extend below section */}
      <div className="relative w-full mt-[-80px]">
        <svg
          className="w-full"
          height="300"
          viewBox="0 0 1440 469"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M689.5 422C360 549 74.1667 381 -3.5 334.5L-41 74L1471 0L1462.5 334.5C1222 182.5 997.82 303.163 689.5 422Z"
            fill="#FFD500"
          />
        </svg>
      </div>
    </section>
  );
};

export default WhoWeAre;
