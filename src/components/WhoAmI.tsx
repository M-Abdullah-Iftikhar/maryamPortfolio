import Image from "next/image";
import { about, profile, whoAmI } from "@/lib/data";
import { Section } from "./Section";

export function WhoAmI() {
  return (
    <Section
      id="about"
      eyebrow="Who I Am"
      title="A builder at heart, an engineer by training."
    >
      <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-8 md:gap-12 items-start">
        <div className="min-w-0">
          <PhotoPanel />
        </div>

        <div className="min-w-0 space-y-6">
          <div className="space-y-4">
            <p className="text-base md:text-lg text-muted leading-relaxed">
              {about.bio}
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              {about.bio2}
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Quick Facts
            </div>
            <dl className="grid grid-cols-2 gap-3">
              {whoAmI.quickFacts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-lg border border-token bg-elev p-3"
                >
                  <dt className="text-[10px] uppercase tracking-wider text-muted">
                    {f.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-fg">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-lg border border-token bg-elev p-3 text-center"
              >
                <div className="text-xl md:text-2xl font-extrabold text-accent">
                  {h.value}
                </div>
                <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function PhotoPanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-2xl border border-accent/30 -rotate-2" />
      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-token bg-elev">
        <Image
          src={profile.photoAbout}
          alt="Maryam Mueen"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
      </div>
      <div className="absolute -bottom-3 left-4 right-4 rounded-lg bg-elev border border-token px-4 py-2 flex items-center justify-between shadow-lg">
        <span className="text-xs text-muted">Maryam Mueen</span>
        <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">
          CS · UET&apos;26
        </span>
      </div>
    </div>
  );
}
