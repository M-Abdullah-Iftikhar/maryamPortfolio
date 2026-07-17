"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="h-9 w-9 rounded-full border border-token bg-elev"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative h-9 w-9 rounded-full border border-token bg-elev flex items-center justify-center overflow-hidden transition-all hover:border-accent hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
    >
      <SunIcon
        className={`h-4 w-4 absolute transition-all duration-500 ${
          isDark ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"
        }`}
      />
      <MoonIcon
        className={`h-4 w-4 absolute transition-all duration-500 ${
          isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"
        }`}
      />
    </button>
  );
}
