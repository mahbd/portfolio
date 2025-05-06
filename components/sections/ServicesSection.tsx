import React from "react";
import { services } from "@/data/portfolioData";

const ServicesSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32" id="services">
      <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center">
        My Services
      </h2>
      <div className="flex justify-center mt-2 mb-10">
        <p className="text-center text-base md:text-lg max-w-xl md:max-w-2xl text-[var(--color-brand-gray-300)]">
          I can put your ideas and thus your wishes in the form of a unique web
          and app project that inspires you and your customers.
        </p>
      </div>
      <div className="space-y-4">
        {services.map(({ name, description }) => (
          <div
            key={name}
            className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-8 mt-4 hover:bg-[var(--color-brand-green-900)] hover:bg-opacity-20 dark:hover:bg-opacity-50 p-4 md:p-6 rounded-2xl border-b border-[var(--color-brand-green-800)] transition-colors duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] md:col-span-1">
              {name}
            </h3>
            <p className="text-base md:text-lg max-w-full md:max-w-2xl text-justify text-[var(--color-brand-gray-300)] md:col-span-2">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
