"use client";

import React from "react";
import { motion } from "framer-motion";

const statItemsData = [
  { value: "4", label1: "Years of", label2: "Experience" },
  { value: "10+", label1: "Projects", label2: "Completed" },
  { value: "1590", label1: "Codeforces", label2: "Rating" },
  { value: "2500+", label1: "Problems", label2: "Solved" },
];

const StatsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.,
      ,
    ,
  };

  const itemEntranceVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" ,
    ,
  };

  return (
    <motion.section
      className="pt-20 md:pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center md:text-left">
        {statItemsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 p-4 rounded-xl bg-[var(--color-card-background)] transition-colors duration-300 shadow-md hover:shadow-xl"
            variants={itemEntranceVariants}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0px 10px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "var(--color-card-hover-background)",
              transition: { duration: 0.2, ease: "circOut" }
            }}
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
        ))}
      </div>
    </motion.section>;
  );
};

export default StatsSection;
