import { experience, type ExperienceItem } from "@/lib/data";
import { Section } from "./Section";
import {
  BuildingIcon,
  CalendarIcon,
  CodeIcon,
  LocationIcon,
  NetworkIcon,
  ShieldIcon,
  TeachingIcon,
} from "./Icons";

const roleIcon = {
  Developer: CodeIcon,
  Teaching: TeachingIcon,
  Cybersecurity: ShieldIcon,
  Networking: NetworkIcon,
} as const;

function getStartYear(): string {
  const last = experience[experience.length - 1];
  const match = last?.period.match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : "";
}

export function Experience() {
  const startYear = getStartYear();

  return (
    <Section
      id="experience"
      eyebrow="Where I've Worked"
      title="My Journey So Far"
      subtitle="A timeline of the work, internships, and teaching that shaped how I build software."
    >
      <div className="relative">
        <div className="relative flex items-center gap-3 mb-6 pl-[38px] md:pl-[54px]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-accent/15 text-accent border border-accent/30">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Now
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
        </div>

        <ol className="flex flex-col gap-6 md:gap-8">
          {experience.map((item, i) => (
            <TimelineItem
              key={item.title + item.period}
              item={item}
              index={i}
              total={experience.length}
              isLast={i === experience.length - 1}
            />
          ))}
        </ol>

        {startYear && (
          <div className="relative flex items-center gap-3 mt-6 pl-[38px] md:pl-[54px]">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted px-2.5 py-1 rounded-full border border-token bg-surface">
              Started · {startYear}
            </span>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-token to-transparent" />
          </div>
        )}
      </div>
    </Section>
  );
}

function TimelineItem({
  item,
  index,
  total,
  isLast,
}: {
  item: ExperienceItem;
  index: number;
  total: number;
  isLast: boolean;
}) {
  const Icon = roleIcon[item.role];
  const stepLabel = `${total - index}/${total}`;

  return (
    <li className="relative pl-14 md:pl-20">
      {!isLast && (
        <div
          aria-hidden="true"
          className="absolute left-5 md:left-7 top-10 md:top-14 -bottom-6 md:-bottom-8 w-[2px] -translate-x-[1px] bg-gradient-to-b from-accent/60 to-accent/25"
        />
      )}

      <div className="absolute left-0 top-0">
        <div className="relative">
          {item.isCurrent && (
            <>
              <span className="absolute -inset-1 rounded-full bg-accent/25 animate-ping" />
              <span className="absolute -inset-2 rounded-full border border-accent/30" />
            </>
          )}
          <div
            className={`relative h-10 w-10 md:h-14 md:w-14 rounded-full flex items-center justify-center border-2 transition-transform ${
              item.isCurrent
                ? "bg-accent text-white border-accent shadow-lg shadow-brand-500/40"
                : "bg-elev text-accent border-accent/40"
            }`}
          >
            <Icon className="h-4 w-4 md:h-6 md:w-6" />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute left-10 md:left-14 top-5 md:top-7 w-4 md:w-6 h-[2px] bg-accent/40"
      />

      <article className="group relative overflow-hidden rounded-2xl border border-token bg-elev transition-all hover:border-accent hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(139,92,246,0.35)]">
        <div className="p-5 md:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Step {stepLabel}
                </span>
                {item.isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-accent/15 text-accent border border-accent/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    Present
                  </span>
                )}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-fg leading-tight">
                {item.title}
              </h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <span className="inline-flex items-center gap-1.5 text-accent font-medium">
                  <BuildingIcon className="h-3.5 w-3.5" />
                  {item.company}
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted">
                  <LocationIcon className="h-3.5 w-3.5" />
                  {item.location}
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted whitespace-nowrap px-2.5 py-1 rounded-md border border-token bg-surface">
              <CalendarIcon className="h-3.5 w-3.5" />
              {item.period}
            </div>
          </div>

          <ul className="mt-3 space-y-2">
            {item.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
              >
                <span className="mt-2 h-1 w-1 rounded-full bg-accent flex-none" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.stack.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-md text-xs bg-surface border border-token text-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </article>
    </li>
  );
}
