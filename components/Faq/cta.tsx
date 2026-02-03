"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#FF69B4] to-[#FFB6C1]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-bricolage font-bold text-3xl md:text-4xl text-white mb-4">
          Still Have Questions?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          {`We're here to help! Reach out to us and we'll get back to you as soon as possible.`}
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/#contact-form"
            className="inline-block px-8 py-4 bg-white text-[#FF69B4] font-bricolage font-bold text-lg rounded-full shadow-[0px_8px_0px_rgba(0,0,0,0.3)] hover:translate-y-1 hover:shadow-[0px_6px_0px_rgba(0,0,0,0.3)] transition-all duration-200"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
