import React from "react";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { contactIcons } from "@/data/portfolioData";

const HeroSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-12 md:mt-20">
      <div>
        <h1 className="text-2xl font-bold text-[var(--color-brand-gray-300)]">
          I am Mahmudul Alam
        </h1>
        <h2 className="font-bold text-4xl lg:text-5xl gradient-text mt-3 leading-tight">
          Software Engineer + Competitive Programmer
        </h2>
        <p className="text-lg md:text-xl mt-5 text-[var(--color-brand-gray-300)]">
          I break down complex real world problems to create simple, elegant,
          and efficient solutions that help millions of people.
        </p>
        <a
          href="/path/to/your/resume.pdf"
          download
          className="inline-flex items-center border-2 border-[var(--color-brand-green-700)] text-[var(--color-brand-green-300)] rounded-full gap-2 px-8 py-2 mt-6 hover:bg-[var(--color-brand-green-700)] hover:text-[var(--color-white)] transition duration-300"
        >
          Download Resume <AiOutlineDownload size="20px" />
        </a>
        <div className="flex gap-4 mt-6 w-auto">
          {contactIcons.map(({ icon: IconComponent, link, name }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${name}`}
              className="w-10 h-10 p-2 flex items-center justify-center rounded-full border-2 border-[var(--color-brand-green-700)] text-[var(--color-brand-green-500)] hover:bg-[var(--color-brand-green-700)] hover:text-[var(--color-white)] transition duration-300"
            >
              <IconComponent size="20px" />
            </a>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center lg:justify-end mt-10 lg:mt-0">
        <Image
          src="/images/mahmudul.png"
          alt="Mahmudul Alam"
          width={384}
          height={384}
          className="bg-[var(--color-brand-green-950)] h-80 w-80 md:h-96 md:w-96 object-cover rounded-2xl rotate-3 hover:rotate-1 hover:border-4 hover:border-[var(--color-brand-green-800)] shadow-2xl transition-transform duration-300"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
