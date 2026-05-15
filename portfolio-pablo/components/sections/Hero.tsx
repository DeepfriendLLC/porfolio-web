import { profile, projectRepoUrl } from "@/constants/profile";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent"
      />
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.22em] text-accent">
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex size-2 rounded-full bg-accent">
              <span className="inline-flex size-2 animate-ping rounded-full bg-accent opacity-75" />
            </span>
            {profile.status}
          </span>
          <a
            href={projectRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-2.5 py-1 text-text-muted normal-case tracking-normal transition-colors hover:border-accent hover:text-accent"
          >
            <Icon name="github" size={12} />
            <span>Open source · View code</span>
          </a>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-text-strong md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-accent-strong">{profile.name}</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text md:text-xl">
          {profile.headline}. I build resilient backends and real-time data
          pipelines that scale to{" "}
          <span className="font-semibold text-text-strong">
            10M+ users
          </span>.
        </p>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-text-strong px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Hire me
              <Icon name="arrow" size={16} />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-text-strong transition-colors hover:bg-surface"
            >
              View experience
            </a>
          </div>

          <SocialLinks items={profile.social.slice(0, 4)} variant="inline" />
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {profile.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="bg-surface p-5 md:p-6"
            >
              <dt className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                {highlight.label}
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-text-strong md:text-3xl">
                {highlight.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
