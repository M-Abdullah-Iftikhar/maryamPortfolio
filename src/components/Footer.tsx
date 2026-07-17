import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-token py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted">
          © {year} <span className="font-semibold text-fg">{profile.name}</span>. Crafted with care.
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="h-9 w-9 rounded-full border border-token bg-elev flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
          >
            <MailIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="h-9 w-9 rounded-full border border-token bg-elev flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 rounded-full border border-token bg-elev flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
