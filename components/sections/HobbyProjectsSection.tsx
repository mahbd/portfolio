"use client";

import React from "react";
import Image from "next/image";
import { hobbyWorks } from "@/data/portfolioData"; // Imports hobby project data
import { motion } from "framer-motion";

const HobbyProjectsSection: React.FC = () => {
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
    <section className="pt-24 md:pt-32" id="hobby-projects">
      <motion.h2
        className="font-bold text-3xl md:text-4xl gradient-text text-center mb-12 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        My Hobby Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {hobbyWorks.map((project, index) => (
          <motion.div
            key={project.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            // Entire card background changes on hover
            className="group rounded-2xl overflow-hidden shadow-lg hover:bg-[var(--color-brand-green-700)] transition-colors duration-300 bg-[var(--color-card-background)]"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="relative w-full aspect-video">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {/* Inner div for text content, no background styling here */}
            <div className="cursor-pointer p-4">
              <h3 className="text-2xl font-bold text-[var(--color-white)]">
                {project.name}
              </h3>
              <p className="text-sm text-[var(--color-foreground)] text-justify mt-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HobbyProjectsSection;