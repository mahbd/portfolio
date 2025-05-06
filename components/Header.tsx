// components/Header.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "Resume", href: "#resume" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="flex items-center justify-between px-4 sm:px-8 pt-5 sticky top-0 z-50 bg-[var(--color-background)] bg-opacity-90 backdrop-blur-sm transition-colors duration-300">
      <div>
        <a href="/public">
          <Image
            src="/images/m64.bmp"
            alt="M Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </a>
      </div>
      <nav className="hidden md:flex items-center justify-between space-x-6 lg:space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`font-bold hover:underline hover:text-[var(--color-brand-green-500)] hover:cursor-pointer transition-colors duration-200 ${
              activeHash === item.href
                ? "text-[var(--color-brand-green-500)]"
                : "text-[var(--color-foreground)]"
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <a
          href="https://www.fiverr.com/mahmudula2000"
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-button gradient-button-hover text-[var(--color-white)] px-6 py-2 rounded-full text-sm sm:px-8 sm:py-2 font-semibold transition-all duration-300"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Header;
