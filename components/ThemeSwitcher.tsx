"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-[var(--color-input-background)] text-[var(--color-foreground)] transition-colors duration-200"
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ThemeSwitcher;
