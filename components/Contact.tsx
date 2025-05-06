import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

const Contact: React.FC = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between gap-10 pt-24 md:pt-32"
      id="contact"
    >
      <div className="bg-[var(--color-card-background)] p-5 rounded-2xl w-full max-w-lg order-2 md:order-1 shadow-lg">
        <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center mb-4">
          Let's Talk
        </h2>
        <p className="text-center mb-6 md:mb-10 text-[var(--color-brand-gray-300)]">
          I design and code beautifully simple things, and I love what I do.
          Just simple like that!
        </p>
        <form className="space-y-3">
          <input
            className="w-full rounded-lg px-5 py-3 bg-[var(--color-input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green-700)] text-[var(--color-foreground)] placeholder-[var(--color-brand-gray-400)] border border-[var(--color-brand-green-900)]"
            placeholder="Your Name"
            type="text"
            name="name"
          />
          <input
            className="w-full rounded-lg px-5 py-3 bg-[var(--color-input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green-700)] text-[var(--color-foreground)] placeholder-[var(--color-brand-gray-400)] border border-[var(--color-brand-green-900)]"
            placeholder="Your Email"
            type="email"
            name="email"
          />
          <textarea
            className="w-full h-32 rounded-lg px-5 py-3 bg-[var(--color-input-background)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green-700)] text-[var(--color-foreground)] placeholder-[var(--color-brand-gray-400)] border border-[var(--color-brand-green-900)]"
            placeholder="Your Message"
            name="message"
          />
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="text-[var(--color-white)] text-lg rounded-2xl px-10 py-2 gradient-button gradient-button-hover hover:bg-gradient-to-r transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col gap-5 order-1 md:order-2">
        <div className="flex items-center gap-3">
          <div className="rounded-full p-3 bg-[var(--color-brand-green-600)]">
            <FiPhoneCall color="white" size="32px" />
          </div>
          <div>
            <p className="text-lg text-[var(--color-brand-gray-400)]">Phone</p>
            <p className="text-lg font-bold text-[var(--color-foreground)]">
              +8801567953635
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full p-3 bg-[var(--color-brand-green-600)]">
            <TfiEmail color="white" size="32px" />
          </div>
          <div>
            <p className="text-lg text-[var(--color-brand-gray-400)]">Email</p>
            <p className="text-lg font-bold text-[var(--color-foreground)]">
              mahmudula2000@gmail.com
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
