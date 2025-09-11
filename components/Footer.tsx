// // import Link from "next/link";
// // import React from "react";
// // import Image from "next/image";

// // const Footer = () => {
// //   return (
// //     <footer className="border-t border-border py-12">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

// //           {/* Left Section */}
// //           <div className="md:col-span-1">
// //             <div className="flex items-center space-x-2 mb-4">
// //               <Image
// //                 src="/aampannalogo-svg.png"
// //                 alt="Logo"
// //                 width={110}
// //                 height={60}
// //                 // className="rounded-full"
// //               />

// //               {/* <span className="font-bold text-lg">PAAVA</span> */}
// //             </div>
// //             <p className="text-sm text-muted-foreground mb-4 max-w-full">
// //               Congratulations on reaching the end of our website!!!
// //             </p>
// //           </div>

// //           {/* Links Columns */}
// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
// //             <div>
// //               <h4 className="font-medium mb-3">Company</h4>
// //               <ul className="space-y-2 text-sm text-muted-foreground">
// //                 <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
// //                 <li><Link href="/about" className="hover:text-primary transition-colors">About us</Link></li>
// //                 <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
// //                 <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
// //                 <li><Link href="/mentorship" className="hover:text-primary transition-colors">Mentorship</Link></li>
// //               </ul>
// //             </div>

// //             <div>
// //               <h4 className="font-medium mb-3">Support</h4>
// //               <ul className="space-y-2 text-sm text-muted-foreground">
// //                 <li><a href="#" className="hover:text-primary transition-colors">Awards</a></li>
// //                 <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
// //                 <li><a href="#" className="hover:text-primary transition-colors">Our creators</a></li>
// //                 <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
// //                 <li><a href="#" className="hover:text-primary transition-colors">Privacy policy</a></li>
// //               </ul>
// //             </div>

// //            {/* <div className="flex flex-col items-end">
// //               <div className="flex flex-col space-y-7">
// //                 <a href="#" className="text-muted-foreground hover:text-[#0077B5] transition-colors">
// //                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
// //                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
// //                   </svg>
// //                 </a>
// //                 <a href="#" className="text-muted-foreground hover:text-[#E4405F] transition-colors">
// //                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
// //                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
// //                   </svg>
// //                 </a>
// //                 <a href="#" className="text-muted-foreground hover:text-[#1DA1F2] transition-colors">
// //                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
// //                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
// //                   </svg>
// //                 </a>
// //               </div>
// //             </div> */}

// //             <div className="flex flex-col items-center md:items-end">

// //               <h4 className="font-medium mb-3 md:hidden">Follow Us</h4>

// //               <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 justify-center md:justify-end items-center">

// //                 <a href="#" className="text-muted-foreground hover:text-[#0077B5] transition-colors">
// //                   <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
// //                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
// //                   </svg>
// //                 </a>

// //                 <a href="#" className="text-muted-foreground hover:text-[#E4405F] transition-colors">
// //                   <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
// //                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
// //                   </svg>
// //                 </a>

// //                 <a href="#" className="text-muted-foreground hover:text-[#1DA1F2] transition-colors">
// //                   <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
// //                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
// //                   </svg>
// //                 </a>

// //               </div>

// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import Link from "next/link";
// import React from "react";
// import Image from "next/image";

// const Footer = () => {
//   return (
//     <footer className="border-t border-border py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

//           {/* Left Section - Logo and Message */}
//           <div className="md:col-span-5">
//             <div className="flex items-center space-x-2 mb-6">
//               <Image
//                 src="/aampannalogo-svg.png"
//                 alt="Aam Panna Creations Logo"
//                 width={110}
//                 height={60}
//               />
//             </div>
//             <p className="text-gray-600 text-sm leading-relaxed max-w-md">
//               Thanks for hanging out with us let's design, code, and brand the future together.
//             </p>
//           </div>

//           {/* Right Section - Navigation Links */}
//           <div className="md:col-span-5 md:col-start-7">
//             <div className="grid grid-cols-2 gap-8">

//               {/* First Column */}
//               <div>
//                 <ul className="space-y-3 text-sm">
//                   <li><Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link></li>
//                   <li><Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">Our Story</Link></li>
//                   <li><Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</Link></li>
//                   <li><Link href="/team" className="text-gray-700 hover:text-gray-900 transition-colors">Our Team</Link></li>
//                   <li><Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">Blog</Link></li>
//                 </ul>
//               </div>

//               {/* Second Column */}
//               <div>
//                 <ul className="space-y-3 text-sm">
//                   <li><Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact Us</Link></li>
//                   <li><Link href="/privacy-policy" className="text-gray-700 hover:text-gray-900 transition-colors">Privacy policy</Link></li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Social Media Icons */}

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import React, { useState } from "react";
import {
  Linkedin,
  Instagram,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Story", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Blog", href: "/blog" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy policy", href: "/privacy-policy" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/aam-pannaa-creations/", name: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/aampannaacreations/", name: "Instagram" },
  ];

  return (
    // < footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
    <footer className="relative text-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-cyan-500 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <Image
                  src="/aampannalogo-svg.png"
                  alt="Aam Panna Creations Logo"
                  width={110}
                  height={60}
                  className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="flex items-center justify-center ">
                  {/* <span className="text-black text-2xl font-bold italic">APC</span> */}
                  <Image
                    src="/aampannalogo-svg.png"
                    alt="Aam Panna Creations Logo"
                    width={110}
                    height={60}
                  />
                </div>
              </div>
              <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-black">
                  Aam Panna Creations
                </h3>
              </div>
            </div>

            <p className="text-lg text-black leading-relaxed max-w-md">
              {`Thanks for hanging out with us! Let's design, code, and brand the
              future together.`}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a 
                href="mailto:operations@aampanna.net"
                className="flex items-center space-x-3 text-black hover:text-blue-600 transition-colors duration-200 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="hover:underline">operations@aampanna.net</span>
              </a>

              {/* <div className="flex items-center space-x-3 text-black hover:text-black transition-colors duration-200">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center space-x-3 text-black hover:text-black transition-colors duration-200">
                <MapPin size={18} />
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-black border-b border-gray-700 pb-2">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center space-x-2 text-black/70 hover:text-black transition-all duration-200"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {/* <ArrowRight
                      size={16}
                      className={`transform transition-all duration-200 ${
                        hoveredLink === link.name
                          ? "translate-x-1 text-blue-400"
                          : "translate-x-0 opacity-0 group-hover:opacity-100"
                      }`}
                    /> */}
                    <span className="relative">
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                          hoveredLink === link.name
                            ? "w-full"
                            : "group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-lg font-semibold text-black border-b border-gray-700 pb-2">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center space-x-2 text-black/70 hover:text-black transition-all duration-200"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {/* <ArrowRight
                      size={16}
                      className={`transform transition-all duration-200 ${
                        hoveredLink === link.name
                          ? "translate-x-1 text-blue-400"
                          : "translate-x-0 opacity-0 group-hover:opacity-100"
                      }`}
                    /> */}
                    <span className="relative">
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                          hoveredLink === link.name
                            ? "w-full"
                            : "group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="lg:col-span-1"></div>
        </div>

        {/* Newsletter section */}
        {/* <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 mb-12 border border-gray-700/50 backdrop-blur-sm">
          <div className="max-w-2xl">
            <h4 className="text-2xl font-bold text-white mb-4">Stay in the loop</h4>
            <p className="text-gray-300 mb-6">
              Get the latest updates on our projects, insights, and creative process delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-black">
              <p>
                &copy; {new Date().getFullYear()} Design Studio. All rights
                reserved.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-6">
              <span className="text-black text-sm">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 bg-white border-2 border-gray-300 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${
                      social.name === 'LinkedIn'
                        ? 'hover:bg-[#0077B5] hover:border-[#0077B5]'
                        : 'hover:bg-gradient-to-br hover:from-[#E4405F] hover:via-[#E1306C] hover:to-[#833AB4] hover:border-transparent'
                    }`}
                    title={social.name}
                  >
                    <social.icon
                      size={20}
                      className={`transition-colors duration-300 ${
                        social.name === 'LinkedIn'
                          ? 'text-[#0077B5] group-hover:text-white'
                          : 'text-[#E4405F] group-hover:text-white'
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
    </footer>
  );
};

export default Footer;
