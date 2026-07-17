"use client";

import Image from "next/image";
import { profile } from "@/lib/data";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
} from "./Icons";
import { RotatingText } from "./RotatingText";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 subtle-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-token bg-elev text-xs text-muted mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {profile.availability}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Hi, I&apos;m <span className="text-accent">Maryam</span>.
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl text-muted font-medium flex flex-wrap items-baseline gap-x-2">
            <span>I&apos;m a</span>
            <RotatingText />
          </h2>

          <p className="mt-6 text-base md:text-lg text-muted max-w-xl leading-relaxed">
            {profile.tagline} Final-year CS student at UET Lahore, passionate about
            AI, web development, and shipping real products.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
            <LocationIcon className="h-4 w-4" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-brand-500/25"
            >
              View My Work
              <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-token bg-elev font-medium hover:border-accent transition-all"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="h-10 w-10 rounded-full border border-token bg-elev flex items-center justify-center text-muted hover:text-fg hover:border-accent transition-all"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 rounded-full border border-token bg-elev flex items-center justify-center text-muted hover:text-fg hover:border-accent transition-all"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-brand-500/40 via-pink-500/30 to-blue-500/30 blur-2xl animate-float" />
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-token bg-elev">
              <PhotoPlaceholder />
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full glass border border-token text-xs font-semibold shadow-lg">
              ✨ CS @ UET Lahore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoPlaceholder() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-500/20 to-pink-500/20 text-muted">
      <svg
        className="h-16 w-16 opacity-40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
      <span className="text-xs uppercase tracking-wider">Photo coming soon</span>
    </div>
  );
}
