"use client";

import React from "react";
import { skills } from "@/data/portfolioData";
import { motion } from "framer-motion";

const SkillsSection: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.1 + 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="pt-24 md:pt-32" id="skills">
      <motion.h2
        className="font-bold text-3xl md:text-4xl gradient-text text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        My Skills
      </motion.h2>
      <motion.div
        className="flex justify-center mt-2 mb-12 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={paragraphVariants}
      >
        <p className="text-center text-base md:text-lg max-w-xl md:max-w-2xl text-[var(--color-brand-gray-300)]">
          Showcasing the technologies and tools I excel in, ready to bring
          robust solutions.
        </p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {skills.map(({ icon: IconComponent, percentage, name }, index) => (
          <motion.div
            key={name || index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={skillCardVariants}
            className="flex flex-col items-center justify-center gap-2 text-center w-32 h-32 md:w-36 md:h-36 bg-[var(--color-card-background)] hover:bg-[var(--color-card-hover-background)] rounded-2xl p-4 transition-colors duration-300 shadow-md"
            whileHover={{
              y: -5,
              boxShadow:
                "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)",
            }}
          >
            <IconComponent
              className={"text-[var(--color-brand-green-500)]"}
              size="48px"
            />
            <p className="text-lg md:text-xl font-semibold text-[var(--color-foreground)]">
              {percentage}%
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
