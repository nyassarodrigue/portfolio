"use client";

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full bg-slate-800 p-3 text-white transition hover:scale-110"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
