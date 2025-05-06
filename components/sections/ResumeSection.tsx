import React from "react";
import { educations, experiences } from "@/data/portfolioData";

const ResumeSection: React.FC = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-24 md:pt-32"
      id="resume"
    >
      <div>
        <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center mb-10 md:mb-12">
          My Experience
        </h2>
        <div className="space-y-5">
          {experiences.map(({ time, role, company }) => (
            <div
              key={`${company}-${role}`}
              className="bg-[var(--color-card-background)] p-4 rounded-2xl hover:text-[var(--color-white)] hover:bg-gradient-to-l from-[var(--color-brand-green-900)] to-[var(--color-brand-green-700)] transition-all duration-300 shadow-lg"
            >
              <p className="font-bold text-base md:text-lg text-[var(--color-brand-green-400)]">
                {time}
              </p>
              <p className="font-bold text-xl md:text-2xl mt-1 text-[var(--color-foreground)]">
                {role}
              </p>
              <p className="text-lg text-[var(--color-brand-gray-300)] mt-1">
                {company}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold text-3xl md:text-4xl gradient-text text-center mb-10 md:mb-12">
          My Education
        </h2>
        <div className="space-y-5">
          {educations.map(({ time, degree, school }) => (
            <div
              key={`${school}-${degree}`}
              className="bg-[var(--color-card-background)] p-4 rounded-2xl hover:text-[var(--color-white)] hover:bg-gradient-to-l from-[var(--color-brand-green-900)] to-[var(--color-brand-green-700)] transition-all duration-300 shadow-lg"
            >
              <p className="font-bold text-base md:text-lg text-[var(--color-brand-green-400)]">
                {time}
              </p>
              <p className="font-bold text-xl md:text-2xl mt-1 text-[var(--color-foreground)]">
                {degree}
              </p>
              <p className="text-lg text-[var(--color-brand-gray-300)] mt-1">
                {school}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
