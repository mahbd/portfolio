import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="pt-20 md:pt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
          <h3 className="text-5xl font-bold gradient-text">4</h3>
          <div>
            <p className="text-sm text-[var(--color-brand-gray-400)]">
              Years of
            </p>
            <p className="text-lg font-semibold text-[var(--color-foreground)]">
              Experience
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
          <h3 className="text-5xl font-bold gradient-text">10+</h3>
          <div>
            <p className="text-sm text-[var(--color-brand-gray-400)]">
              Projects
            </p>
            <p className="text-lg font-semibold text-[var(--color-foreground)]">
              Completed
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
          <h3 className="text-5xl font-bold gradient-text">1590</h3>
          <div>
            <p className="text-sm text-[var(--color-brand-gray-400)]">
              Codeforces
            </p>
            <p className="text-lg font-semibold text-[var(--color-foreground)]">
              Rating
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
          <h3 className="text-5xl font-bold gradient-text">2500+</h3>
          <div>
            <p className="text-sm text-[var(--color-brand-gray-400)]">
              Problems
            </p>
            <p className="text-lg font-semibold text-[var(--color-foreground)]">
              Solved
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
