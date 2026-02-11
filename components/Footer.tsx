"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navigationLinks = [
    { name: "Home", href: "/home" },
    { name: "Services", href: "/services" },
    { name: "Our Story", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Blog", href: "/blog" },
  ];

  const supportLinks = [
    { name: "FAQs", href: "/faqs" },
    { name: "Tool Kit", href: "/toolkit" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy policy", href: "/privacy-policy" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/aam-pannaa-creations/",
      name: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aampannaacreations/",
      name: "Instagram",
    },
  ];

  return (
    // < footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
    <footer className="relative text-black overflow-hidden">
      {/* Animated background elements */}
<Separator />

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
                <Mail
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span className="hover:underline">operations@aampanna.net</span>
              </a>

              {/* <div className="flex items-center space-x-3 text-black hover:text-black transition-colors duration-200">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center space-x-3 text-black hover:text-black transition-colors duration-200">
                <MapPin size={18} />
                <span>Delhi NCR, Uttar Pradesh, India</span>
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
                  <Link
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
                  </Link>
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
                  <Link
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="max-w-2xl flex justify-center items-center flex-col mx-auto">
          <SubscribeForm source="footer" />
        </div>
        {/* </div> */}

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-black">
              <p>
                &copy; 2024 - {new Date().getFullYear()} Aam Pannaa Creations.
                All rights reserved.
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
                      social.name === "LinkedIn"
                        ? "hover:bg-[#0077B5] hover:border-[#0077B5]"
                        : "hover:bg-gradient-to-br hover:from-[#E4405F] hover:via-[#E1306C] hover:to-[#833AB4] hover:border-transparent"
                    }`}
                    title={social.name}
                  >
                    <social.icon
                      size={20}
                      className={`transition-colors duration-300 ${
                        social.name === "LinkedIn"
                          ? "text-[#0077B5] group-hover:text-white"
                          : "text-[#E4405F] group-hover:text-white"
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
