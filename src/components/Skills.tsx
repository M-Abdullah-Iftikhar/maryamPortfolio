import { skills } from "@/lib/data";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbelt"
      title="Skills & Tech Stack"
      subtitle="A mix of languages, frameworks, and tools I use to design, build, and ship software."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((cat) => (
          <div key={cat.title} className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-sm bg-surface border border-token text-fg hover:border-accent hover:text-accent transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
