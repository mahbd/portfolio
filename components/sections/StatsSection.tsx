"use client";

import React from "react";
import { motion } from "framer-motion";
import { statItemsData } from "@/data/portfolioData";

const StatsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const itemHoverProps = {
    scale: 1.03,
    boxShadow:
      "0px 12px 28px -5px rgba(0, 0, 0, 0.15), 0px 10px 10px -6px rgba(0, 0, 0, 0.12)",
    backgroundColor: "var(--color-card-hover-background)",
    transition: { duration: 0.25, ease: "circOut" },
  };

  return (
    <motion.section
      className="pt-20 md:pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {statItemsData.map((item, index) => {
          if (item.type === "stat") {
            return (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center justify-center md:items-start text-center md:text-left gap-3 p-4 rounded-xl bg-[var(--color-card-background)] transition-colors duration-300 shadow-lg"
                variants={itemVariants}
                whileHover={itemHoverProps}
              >
                <h3 className="text-5xl font-bold gradient-text whitespace-nowrap">
                  {item.value}
                </h3>
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-sm text-[var(--color-brand-gray-400)]">
                    {item.label1}
                  </p>
                  <p className="text-lg font-semibold text-[var(--color-foreground)]">
                    {item.label2}
                  </p>
                </div>
              </motion.div>
            );
          } else if (item.type === "achievement") {
            return (
              <motion.div
                key={index}
                className="sm:col-span-2 md:col-span-4 p-6 py-8 rounded-xl bg-[var(--color-card-background)] transition-colors duration-300 shadow-lg flex flex-col items-center justify-center text-center"
                variants={itemVariants}
                whileHover={itemHoverProps}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-[var(--color-brand-green-400)] mb-1">
                  {item.title}
                </h3>
                <h4 className="text-sm lg:text-base text-[var(--color-brand-gray-300)] leading-relaxed">
                  {item.subtitle}
                </h4>
              </motion.div>
            );
          }
          return null;
        })}
      </div>
    </motion.section>
  );
};

export default StatsSection;
