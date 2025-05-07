"use client";

import React from "react";
import Image from "next/image";
import { works } from "@/data/portfolioData";
import { motion } from "framer-motion";

const WorksSection: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.2 + 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="pt-24 md:pt-32" id="works">
      <motion.h2
        className="font-bold text-3xl md:text-4xl gradient-text text-center mb-12 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        My Recent Works
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {works.map((work, index) => (
          <motion.div
            key={work.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="group rounded-2xl overflow-hidden shadow-lg bg-[var(--color-card-background)]"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative w-full aspect-video">
              <Image
                src={work.image}
                alt={work.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-[var(--color-brand-green-800)] group-hover:bg-[var(--color-brand-green-700)] cursor-pointer p-4 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[var(--color-white)]">
                {work.name}
              </h3>
              <p className="text-base md:text-lg text-[var(--color-foreground)] text-justify mt-2">
                {work.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
