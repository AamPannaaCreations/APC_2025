
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
