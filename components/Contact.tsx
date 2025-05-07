"use client";

import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const formContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const detailsContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const detailItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1 + 0.5 },
    }),
  };

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between gap-10 pt-24 md:pt-32"
      id="contact"
    >
      <motion.div
        className="bg-[var(--color-card-background)] p-5 rounded-2xl w-full max-w-lg order-2 md:order-1 shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={formContainerVariants}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-bold text-3xl md:text-4xl gradient-text text-center mb-4"
        >
          Let&#39;s Talk
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-6 md:mb-10 text-[var(--color-brand-gray-300)]"
        >
          I design and code beautifully simple things, and I love what I do.
          Just simple like that!
        </motion.p>
        <form className="space-y-3">
          <motion.input
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={inputVariants}
            className="w-full rounded-lg px-5 py-3 bg-[var(--color-input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green-700)] text-[var(--color-foreground)] placeholder-[var(--color-brand-gray-400)] border border-[var(--color-brand-green-900)]"
            placeholder="Your Name"
            type="text"
            name="name"
          />
          <motion.input
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={inputVariants}
            className="w-full rounded-lg px-5 py-3 bg-[var(--color-input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green-700)] text-[var(--color-foreground)] placeholder-[var(--color-brand-gray-400)] border border-[var(--color-brand-green-900)]"
            placeholder="Your Email"
            type="email"
            name="email"
          />
          <motion.textarea
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={inputVariants}
            className="w-full h-32 rounded-lg px-5 py-3 bg-[var(--color-input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green-700)] text-[var(--color-foreground)] placeholder-[var(--color-brand-gray-400)] border border-[var(--color-brand-green-900)]"
            placeholder="Your Message"
            name="message"
          />
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={inputVariants}
            className="flex justify-center pt-2"
          >
            <button
              type="submit"
              className="text-[var(--color-white)] text-lg rounded-2xl px-10 py-2 gradient-button gradient-button-hover hover:bg-gradient-to-r transition-all duration-300"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>

      <motion.div
        className="flex flex-col gap-5 order-1 md:order-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={detailsContainerVariants}
      >
        <motion.div
          className="flex items-center gap-3"
          variants={detailItemVariants}
        >
          <div className="rounded-full p-3 bg-[var(--color-brand-green-600)]">
            <FiPhoneCall color="white" size="32px" />
          </div>
          <div>
            <p className="text-lg text-[var(--color-brand-gray-400)]">Phone</p>
            <p className="text-lg font-bold text-[var(--color-foreground)]">
              +8801567953635
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center gap-3"
          variants={detailItemVariants}
        >
          <div className="rounded-full p-3 bg-[var(--color-brand-green-600)]">
            <TfiEmail color="white" size="32px" />
          </div>
          <div>
            <p className="text-lg text-[var(--color-brand-gray-400)]">Email</p>
            <p className="text-lg font-bold text-[var(--color-foreground)]">
              mahmudula2000@gmail.com
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center gap-3"
          variants={detailItemVariants}
        >
          <div className="rounded-full p-3 bg-[var(--color-brand-green-600)]">
            <FaLocationDot color="white" size="32px" />
          </div>
          <div>
            <p className="text-lg text-[var(--color-brand-gray-400)]">
              Location
            </p>
            <p className="text-lg font-bold text-[var(--color-foreground)]">
              Rangpur, Bangladesh
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
