import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 py-20 md:py-28"
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <header className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl font-semibold tracking-tight text-text-strong md:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
