import { profile } from "@/lib/data";
import { Section } from "./Section";
import {
  ArrowRightIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Let's Connect"
      title="Get in touch"
      subtitle="I'm open to internships, junior developer roles, and interesting collaborations. Drop me a line — I'd love to hear from you."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="card p-6 flex items-start gap-4 group"
        >
          <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-none">
            <MailIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wider text-muted">Email</div>
            <div className="text-base font-semibold break-all">{profile.email}</div>
          </div>
          <ArrowRightIcon className="h-4 w-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all mt-4" />
        </a>

        <a
          href={`tel:${profile.phone.replace(/\s+/g, "")}`}
          className="card p-6 flex items-start gap-4 group"
        >
          <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-none">
            <PhoneIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wider text-muted">Phone</div>
            <div className="text-base font-semibold">{profile.phone}</div>
          </div>
          <ArrowRightIcon className="h-4 w-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all mt-4" />
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="card p-6 flex items-start gap-4 group"
        >
          <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-none">
            <GithubIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wider text-muted">GitHub</div>
            <div className="text-base font-semibold">@maryammueen</div>
          </div>
          <ArrowRightIcon className="h-4 w-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all mt-4" />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="card p-6 flex items-start gap-4 group"
        >
          <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-none">
            <LinkedinIcon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-xs uppercase tracking-wider text-muted">LinkedIn</div>
            <div className="text-base font-semibold">Maryam Mueen</div>
          </div>
          <ArrowRightIcon className="h-4 w-4 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all mt-4" />
        </a>
      </div>

      <div className="mt-8 card p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm text-muted">
          <LocationIcon className="h-4 w-4 text-accent" />
          Based in {profile.location} · {profile.availability}
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:opacity-90 transition-all"
        >
          Say Hello
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}
