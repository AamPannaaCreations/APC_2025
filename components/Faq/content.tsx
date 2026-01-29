"use client";

import React from "react";
import { motion } from "framer-motion";
import faqCategories from "@/data/faqCategories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Content() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Category Title */}
              <div className="border-l-4 border-[#FF69B4] pl-4">
                <h2 className="font-bricolage font-bold text-2xl md:text-3xl text-gray-900">
                  {category.category}
                </h2>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <motion.div
                    key={faqIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: faqIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <AccordionItem
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 px-6 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="hover:no-underline py-5 text-left">
                        <span className="font-bricolage font-semibold text-lg text-gray-900 pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
