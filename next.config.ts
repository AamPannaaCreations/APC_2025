import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['gsap', 'locomotive-scroll'],
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   transpilePackages: ['gsap', 'locomotive-scroll'],
//   experimental: {
//     esmExternals: false
//   }
// }

// module.exports = nextConfig