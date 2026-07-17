"use client";

import { useEffect, useState } from "react";

const roles = [
  "Django Developer",
  "Software Developer",
  "AI / ML Developer",
  "Full-Stack Engineer",
  "Python Developer",
];

const TYPE_SPEED_MS = 45;
const ERASE_SPEED_MS = 18;
const PAUSE_AFTER_TYPE_MS = 1100;
const PAUSE_AFTER_ERASE_MS = 120;

type Phase = "typing" | "erasing";

export function RotatingText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");

  useEffect(() => {
    const current = roles[index];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_SPEED_MS,
        );
      } else {
        timer = setTimeout(() => setPhase("erasing"), PAUSE_AFTER_TYPE_MS);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          ERASE_SPEED_MS,
        );
      } else {
        timer = setTimeout(() => {
          setIndex((i) => (i + 1) % roles.length);
          setPhase("typing");
        }, PAUSE_AFTER_ERASE_MS);
      }
    }

    return () => clearTimeout(timer);
  }, [text, phase, index]);

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
        className="absolute left-0 top-0 whitespace-nowrap font-semibold text-accent"
      >
        {text}
        <span className="ml-0.5 inline-block h-[0.9em] w-[2px] align-middle bg-accent animate-pulse" />
      </span>
    </span>
  );
}

function longest(arr: string[]) {
  return arr.reduce((a, b) => (b.length > a.length ? b : a), "");
}
