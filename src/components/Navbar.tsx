"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { CloseIcon, DownloadIcon, LogoM, MenuIcon } from "./Icons";
import { profile } from "@/lib/data";

const sectionLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Toolkit" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (!isHome) {
      setActive("");
      return;
    }
    const sections = sectionLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
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
  }, [isHome]);

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);
  const isResumeActive = pathname === "/resume";

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-token backdrop-blur-xl bg-white/60 dark:bg-black/50 supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <LogoM
            aria-hidden="true"
            className="h-7 w-7 text-accent group-hover:rotate-[-4deg] group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-lg font-bold tracking-tight text-fg">
            Maryam Mueen
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {sectionLinks.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={sectionHref(l.id)}
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
          <div
            className={`ml-2 inline-flex items-stretch rounded-full border overflow-hidden text-sm transition-colors ${
              isResumeActive
                ? "border-accent bg-accent/10"
                : "border-token hover:border-accent"
            }`}
          >
            <Link
              href="/resume"
              className={`inline-flex items-center gap-1.5 pl-3 pr-2.5 py-1.5 font-medium transition-colors ${
                isResumeActive ? "text-accent" : "text-muted hover:text-fg"
              }`}
            >
              Resume
            </Link>
            <a
              href={profile.resumeUrl}
              download
              aria-label="Download resume PDF"
              title="Download PDF"
              className="inline-flex items-center px-2 border-l border-token text-muted hover:text-white hover:bg-accent transition-colors"
            >
              <DownloadIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="ml-3">
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
            {sectionLinks.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={sectionHref(l.id)}
                  onClick={() => setOpen(false)}
                  className={`text-sm py-2 px-3 rounded-md transition-colors ${
                    isActive ? "text-fg bg-surface" : "text-muted hover:text-fg"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <div
              className={`flex items-stretch rounded-md overflow-hidden border ${
                isResumeActive
                  ? "border-accent bg-accent/10"
                  : "border-token"
              }`}
            >
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className={`flex-1 text-sm py-2 px-3 transition-colors ${
                  isResumeActive ? "text-accent" : "text-muted hover:text-fg"
                }`}
              >
                Resume
              </Link>
              <a
                href={profile.resumeUrl}
                download
                aria-label="Download resume PDF"
                onClick={() => setOpen(false)}
                className="inline-flex items-center px-3 border-l border-token text-muted hover:text-white hover:bg-accent transition-colors"
              >
                <DownloadIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
