"use client";

import { useEffect, useState } from "react";

const roles = [
  "Django Developer",
  "Software Developer",
  "AI / ML Developer",
  "Full-Stack Engineer",
  "Python Developer",
];

export function RotatingText() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setFading(false);
      }, 300);
      return () => clearTimeout(swap);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-flex items-baseline">
      <span
        aria-hidden="true"
        className="invisible whitespace-nowrap font-semibold"
      >
        {longest(roles)}
      </span>
      <span
        aria-live="polite"
        className={`absolute left-0 top-0 whitespace-nowrap font-semibold text-accent transition-all duration-300 ${
          fading ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
        }`}
      >
        {roles[index]}
        <span className="ml-0.5 inline-block h-[0.9em] w-[2px] align-middle bg-accent animate-pulse" />
      </span>
    </span>
  );
}

function longest(arr: string[]) {
  return arr.reduce((a, b) => (b.length > a.length ? b : a), "");
}
