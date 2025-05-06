import React from "react";
import Image from "next/image";
import { works } from "@/data/portfolioData";

const WorksSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32" id="works">
      <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center mb-12 md:mb-16">
        My Recent Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {works.map(({ name, description, image }) => (
          <div
            key={name}
            className="group rounded-2xl overflow-hidden shadow-lg bg-[var(--color-card-background)]"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="bg-[var(--color-brand-green-800)] hover:bg-[var(--color-brand-green-700)] cursor-pointer p-4 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[var(--color-white)]">
                {name}
              </h3>
              <p className="text-base md:text-lg text-[var(--color-foreground)] text-justify mt-2">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
