import React from "react";
import { skills } from "@/data/portfolioData";

const SkillsSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32" id="skills">
      <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center">
        My Skills
      </h2>
      <div className="flex justify-center mt-2 mb-12 md:mb-16">
        <p className="text-center text-base md:text-lg max-w-xl md:max-w-2xl text-[var(--color-brand-gray-300)]">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {skills.map(({ icon: IconComponent, percentage, name }, index) => (
          <div
            key={name || index}
            className="flex flex-col items-center justify-center gap-2 text-center w-32 h-32 md:w-36 md:h-36 bg-[var(--color-card-background)] hover:bg-[var(--color-card-hover-background)] rounded-2xl p-4 transition-colors duration-300 shadow-md"
          >
            <IconComponent
              className={"text-[var(--color-brand-green-500)]"}
              size="48px"
            />
            <p className="text-lg md:text-xl font-semibold text-[var(--color-foreground)]">
              {percentage}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
