'use client';

import React from 'react'
import { motion } from 'framer-motion';
export default function Hero() {
  return (
          <section  className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#FFFDE8] to-[#FFFBD2]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bricolage font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services, process, and
            how we can help transform your digital presence.
          </motion.p>
        </div>
      </section>
  )
}
