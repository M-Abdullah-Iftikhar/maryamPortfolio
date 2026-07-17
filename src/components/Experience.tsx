import { experience, education } from "@/lib/data";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="Experience & Education"
      subtitle="Where I've worked, taught, and studied."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-semibold uppercase tracking-wider text-muted">
            Experience
          </h3>
          <div className="relative pl-6 space-y-8 border-l border-token">
            {experience.map((e) => (
              <div key={e.role + e.period} className="relative">
                <div className="absolute -left-[29px] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-surface" />
                <div className="card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg font-bold">{e.role}</h4>
                    <span className="text-xs text-muted font-medium">{e.period}</span>
                  </div>
                  <div className="mt-1 text-sm text-accent font-medium">
                    {e.company} · {e.location}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-none" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold uppercase tracking-wider text-muted">
            Education
          </h3>
          <div className="card p-6">
            <div className="text-xs text-muted font-medium">{education.period}</div>
            <h4 className="mt-2 text-lg font-bold">{education.degree}</h4>
            <div className="mt-1 text-sm text-accent">{education.school}</div>
            <div className="mt-4 pt-4 border-t border-token">
              <div className="text-xs uppercase tracking-wider text-muted mb-2">
                Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {["Software Engineering", "AI/ML", "Info Security", "Data Structures"].map(
                  (f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 rounded-md text-xs bg-surface border border-token text-muted"
                    >
                      {f}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
