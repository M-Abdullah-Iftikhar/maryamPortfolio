"use client";

import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/data";
import {
  ArrowRightIcon,
  DownloadIcon,
  EyeIcon,
  GithubIcon,
  GraduationIcon,
  LinkedinIcon,
  LocationIcon,
} from "./Icons";
import { RotatingText } from "./RotatingText";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-16 md:pb-24 subtle-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-12 items-center">
        <div className="animate-fade-up min-w-0 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-token bg-elev text-xs text-muted mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {profile.availability}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Hi, I&apos;m <span className="text-accent">Maryam Mueen</span>.
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl text-muted font-medium flex flex-wrap items-baseline gap-x-2">
            <span>I&apos;m a</span>
            <RotatingText />
          </h2>

          <p className="mt-6 text-base md:text-lg text-muted max-w-xl leading-relaxed">
            {profile.tagline} Recent CS graduate from UET Lahore, passionate about
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
            <div className="inline-flex items-stretch rounded-full border border-token bg-elev overflow-hidden font-medium hover:border-accent transition-colors">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 pl-5 pr-4 py-3 hover:text-accent transition-colors"
              >
                <EyeIcon className="h-4 w-4" />
                View Resume
              </Link>
              <a
                href={profile.resumeUrl}
                download
                aria-label="Download resume PDF"
                title="Download PDF"
                className="inline-flex items-center px-4 border-l border-token text-muted hover:text-white hover:bg-accent transition-colors"
              >
                <DownloadIcon className="h-4 w-4" />
              </a>
            </div>
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

        <div className="relative flex justify-center md:justify-end animate-fade-in order-1 md:order-2">
          <div
            className="flex flex-col items-stretch"
            style={{ width: "clamp(260px, 30vw, 380px)" }}
          >
            <div
              className="relative"
              style={{ aspectRatio: "776 / 1080" }}
            >
              <Image
                src={profile.photoHero}
                alt="Maryam Mueen"
                fill
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
                className="object-contain"
              />
            </div>

            <div className="relative -mt-6 z-10 rounded-2xl bg-elev border border-token shadow-2xl px-4 py-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center flex-none">
                <GraduationIcon className="h-5 w-5 text-accent" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-fg leading-tight">
                  Maryam Mueen
                </div>
                <div className="text-[11px] text-muted mt-0.5 flex items-center gap-1.5">
                  <span>CS Grad · UET Lahore</span>
                </div>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-accent px-2 py-1 rounded-md bg-accent/10 border border-accent/20 whitespace-nowrap">
                2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

