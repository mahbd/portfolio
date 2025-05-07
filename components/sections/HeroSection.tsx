"use client";

import React from "react";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { contactIcons } from "@/data/portfolioData";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-12 md:mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div variants={sectionVariants}>
        <motion.h1
          variants={itemVariants}
          className="text-2xl font-bold text-[var(--color-brand-gray-300)]"
        >
          I am Mahmudul Alam
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="font-bold text-4xl lg:text-5xl gradient-text mt-3 leading-tight"
        >
          Software Engineer + Competitive Programmer
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl mt-5 text-[var(--color-brand-gray-300)]"
        >
          I break down complex real world problems to create simple, elegant,
          and efficient solutions that help millions of people.
        </motion.p>
        <motion.a
          href="/path/to/your/resume.pdf"
          download
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center border-2 border-[var(--color-brand-green-700)] text-[var(--color-brand-green-300)] rounded-full gap-2 px-8 py-2 mt-6 hover:bg-[var(--color-brand-green-700)] hover:text-[var(--color-white)] transition duration-300"
        >
          Download Resume <AiOutlineDownload size="20px" />
        </motion.a>
        <motion.div
          className="flex gap-4 mt-6 w-auto"
          variants={sectionVariants}
        >
          {contactIcons.map(({ icon: IconComponent, link, name }, index) => (
            <motion.a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${name}`}
              custom={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: index * 0.1 + 0.6 },
                },
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 p-2 flex items-center justify-center rounded-full border-2 border-[var(--color-brand-green-700)] text-[var(--color-brand-green-500)] hover:bg-[var(--color-brand-green-700)] hover:text-[var(--color-white)] transition duration-300"
            >
              <IconComponent size="20px" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="flex w-full justify-center lg:justify-end mt-10 lg:mt-0"
        variants={imageVariants}
      >
        <Image
          src="/images/mahmudul.png"
          alt="Mahmudul Alam"
          width={384}
          height={384}
          className="bg-[var(--color-brand-green-950)] h-80 w-80 md:h-96 md:w-96 object-cover rounded-2xl rotate-3 hover:rotate-1 hover:border-4 hover:border-[var(--color-brand-green-800)] shadow-2xl transition-transform duration-300"
          priority
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
