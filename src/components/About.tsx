import { about } from "@/lib/data";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A builder at heart, an engineer by training.">
      <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">
        <div className="space-y-5">
          <p className="text-base md:text-lg text-muted leading-relaxed">
            {about.bio}
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            {about.bio2}
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
          {about.highlights.map((h) => (
            <div
              key={h.label}
              className="card p-5 md:p-6 text-center md:text-left"
            >
              <div className="text-2xl md:text-4xl font-extrabold text-accent">
                {h.value}
              </div>
              <div className="mt-1 text-xs md:text-sm text-muted uppercase tracking-wider">
                {h.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
