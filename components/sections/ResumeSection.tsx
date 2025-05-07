"use client";

import React from "react";
import { educations, experiences } from "@/data/portfolioData";
import { motion } from "framer-motion";

const ResumeSection: React.FC = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = (fromLeft: boolean = true) => ({
    hidden: { opacity: 0, x: fromLeft ? -40 : 40 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.15 + 0.2,
        ease: "easeOut",
      },
    }),
  });

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-24 md:pt-32"
      id="resume"
    >
      <div>
        <motion.h2
          className="font-bold text-3xl md:text-4xl gradient-text text-center mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          My Experience
        </motion.h2>
        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants(true)}
              className="bg-[var(--color-card-background)] p-4 rounded-2xl hover:text-[var(--color-white)] hover:bg-gradient-to-l from-[var(--color-brand-green-900)] to-[var(--color-brand-green-700)] transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <p className="font-bold text-base md:text-lg text-[var(--color-brand-green-400)]">
                {exp.time}
              </p>
              <p className="font-bold text-xl md:text-2xl mt-1 text-[var(--color-foreground)]">
                {exp.role}
              </p>
              <p className="text-lg text-[var(--color-brand-gray-300)] mt-1">
                {exp.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <motion.h2
          className="font-bold text-3xl md:text-4xl gradient-text text-center mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          My Education
        </motion.h2>
        <div className="space-y-5">
          {educations.map((edu, index) => (
            <motion.div
              key={`${edu.school}-${edu.degree}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants(false)}
              className="bg-[var(--color-card-background)] p-4 rounded-2xl hover:text-[var(--color-white)] hover:bg-gradient-to-l from-[var(--color-brand-green-900)] to-[var(--color-brand-green-700)] transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <p className="font-bold text-base md:text-lg text-[var(--color-brand-green-400)]">
                {edu.time}
              </p>
              <p className="font-bold text-xl md:text-2xl mt-1 text-[var(--color-foreground)]">
                {edu.degree}
              </p>
              <p className="text-lg text-[var(--color-brand-gray-300)] mt-1">
                {edu.school}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
