"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  { href: "#about", id: "about", label: "About" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-token backdrop-blur-xl bg-white/60 dark:bg-black/50 supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5 group">
          <span
            aria-hidden="true"
            className="h-9 w-9 rounded-lg bg-accent text-white flex items-center justify-center text-sm font-extrabold shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform"
          >
            M
          </span>
          <span className="text-lg font-bold tracking-tight text-fg">
            Maryam Mueen
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm px-3 py-1.5 rounded-md transition-colors ${
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-accent rounded-full" />
                )}
              </a>
            );
          })}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="h-9 w-9 rounded-full border border-token bg-surface flex items-center justify-center"
          >
            {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-token backdrop-blur-xl bg-white/80 dark:bg-black/70">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm py-2 px-3 rounded-md transition-colors ${
                    isActive ? "text-fg bg-surface" : "text-muted hover:text-fg"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
