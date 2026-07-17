import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-14 md:py-24 lg:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-12 max-w-2xl">
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
