"use client";

import React from "react";
import { services } from "@/data/portfolioData";
import { motion } from "framer-motion";

const ServicesSection: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15 + 0.4,
        ease: "easeOut",
      },
    }),
  };

  const itemHoverProps = {
    scale: 1.03,
    backgroundColor: "var(--color-card-hover-background)",
    transition: { duration: 0.25, ease: "circOut" },
  };

  return (
    <section className="pt-24 md:pt-32" id="services">
      <motion.h2
        className="font-bold text-3xl md:text-4xl gradient-text text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        My Services
      </motion.h2>
      <motion.div
        className="flex justify-center mt-2 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={paragraphVariants}
      >
        <p className="text-center text-base md:text-lg max-w-xl md:max-w-2xl text-[var(--color-brand-gray-300)]">
          I can put your ideas and thus your wishes in the form of a unique web
          and app project that inspires you and your customers.
        </p>
      </motion.div>
      <div className="space-y-4">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8 mt-4 hover:bg-[var(--color-card-hover-background)] hover:bg-opacity-20 dark:hover:bg-opacity-50 p-4 md:p-6 rounded-2xl border-b border-[var(--color-brand-green-800)] transition-colors duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-green-400)] md:col-span-1">
              {service.name}
            </h3>
            <p className="text-base md:text-lg max-w-full md:max-w-2xl text-justify text-[var(--color-brand-gray-300)] md:col-span-2">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
