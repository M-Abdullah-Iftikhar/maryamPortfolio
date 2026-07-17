import { education } from "@/lib/data";
import { Section } from "./Section";
import { CalendarIcon, GraduationIcon, LocationIcon } from "./Icons";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic Background"
      title="Education"
      subtitle="Building the foundations — from data structures to distributed systems."
    >
      <article className="relative overflow-hidden rounded-2xl border border-token bg-elev">
        <div className="absolute inset-x-0 top-0 h-1 bg-accent" />

        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 items-start">
          <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3">
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-accent/10 text-accent flex items-center justify-center flex-none border border-accent/20">
              <GraduationIcon className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {education.status}
            </span>
          </div>

          <div className="min-w-0">
            <h3 className="text-xl md:text-2xl font-bold text-fg leading-tight">
              {education.degree}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
              <span className="inline-flex items-center gap-1.5 text-accent font-medium">
                <LocationIcon className="h-3.5 w-3.5" />
                {education.school}
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted">
                <CalendarIcon className="h-3.5 w-3.5" />
                {education.period}
              </span>
            </div>

            <div className="mt-6 pt-6 border-t border-token grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                  Focus Areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {education.focusAreas.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 rounded-md text-xs bg-surface border border-token text-fg"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                  Key Coursework
                </div>
                <ul className="grid grid-cols-1 gap-1.5">
                  {education.coursework.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-none" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
}
