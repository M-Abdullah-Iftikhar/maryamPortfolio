"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { Section } from "./Section";
import { ExternalLinkIcon, GithubIcon } from "./Icons";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects I've built."
      subtitle="A curated selection of projects across web, AI, and security. Each one is a story of learning something new and shipping it."
    >
      <div className="grid gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} reverse={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  const [active, setActive] = useState(0);
  const hasImages = project.images.length > 0;

  return (
    <article className="card p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
      <div className={reverse ? "md:order-2" : ""}>
        {hasImages ? (
          <div className="space-y-3">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-token bg-surface">
              <Image
                src={project.images[active]}
                alt={`${project.title} screenshot ${active + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {project.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {project.images.map((img, i) => (
                  <button
                    key={img}
                    onClick={() => setActive(i)}
                    aria-label={`Show screenshot ${i + 1}`}
                    className={`relative flex-none h-14 w-20 rounded-md overflow-hidden border transition-all ${
                      i === active
                        ? "border-accent ring-2 ring-accent/50"
                        : "border-token opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <ScreenshotPlaceholder title={project.title} />
        )}
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        {project.featured && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            ★ Featured
          </span>
        )}
        <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>

        <p className="mt-4 text-base text-muted leading-relaxed">
          {project.description}
        </p>

        {project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-none" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs bg-surface border border-token text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-token bg-surface text-sm font-medium hover:border-accent transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              Repo
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:opacity-90 transition-all"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ScreenshotPlaceholder({ title }: { title: string }) {
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-dashed border-token bg-surface flex items-center justify-center">
      <div className="text-center px-6">
        <svg
          className="mx-auto h-10 w-10 opacity-30 mb-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <p className="text-xs text-muted uppercase tracking-wider">
          Screenshots for {title} coming soon
        </p>
      </div>
    </div>
  );
}
