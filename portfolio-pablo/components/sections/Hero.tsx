import { profile, projectRepoUrl } from "@/constants/profile";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Reveal } from "@/components/ui/Reveal";
import { TerminalSsh } from "@/components/ui/TerminalSsh";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-border/60 bg-background"
    >
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-radial opacity-60" />

        {/* Mobile composition (kept) */}
        <div className="md:hidden">
          <div className="absolute -top-40 -left-24 h-[460px] w-[460px] rounded-full bg-teal/25 blur-3xl animate-blob" />
          <div
            className="absolute -bottom-44 right-[-140px] h-[520px] w-[520px] rounded-full bg-teal-soft/25 blur-3xl animate-blob"
            style={{ animationDelay: "-9s" }}
          />
          <div className="absolute top-1/4 right-1/3 h-[280px] w-[280px] rounded-full bg-white/60 blur-3xl animate-float-slow" />
          <div className="absolute bottom-10 left-1/4 h-[200px] w-[200px] rounded-full bg-teal/15 blur-2xl animate-float-slow" />
        </div>

        {/* Desktop composition */}
        <div className="hidden md:block">
          {/* Wide stage-light halo behind the headline */}
          <div className="absolute left-1/2 top-[42%] h-[560px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white/70 blur-3xl" />

          {/* Soft aurora band crossing diagonally */}
          <div
            className="absolute left-1/2 top-1/2 h-[640px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-gradient-to-r from-teal/0 via-teal/15 to-teal-soft/0 blur-3xl"
            style={{ transform: "translate(-50%, -50%) rotate(-8deg)" }}
          />

          {/* Anchored corner blobs */}
          <div className="absolute -left-40 -top-32 h-[620px] w-[620px] rounded-full bg-gradient-to-br from-teal/30 via-teal/10 to-transparent blur-3xl animate-blob" />
          <div
            className="absolute -bottom-44 -right-40 h-[680px] w-[680px] rounded-full bg-gradient-to-tl from-teal-soft/30 via-teal/12 to-transparent blur-3xl animate-blob"
            style={{ animationDelay: "-12s" }}
          />

          {/* Subtle dotted texture, focused on the right side */}
          <div
            className="absolute inset-0 bg-dots opacity-40"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at 80% 70%, black 0%, transparent 55%)",
              maskImage:
                "radial-gradient(ellipse at 80% 70%, black 0%, transparent 55%)",
            }}
          />

          {/* Floating accent particles for personality */}
          <span className="absolute right-[14%] top-[18%] inline-block size-2 rounded-full bg-teal/55 animate-float-slow shadow-glow-teal" />
          <span
            className="absolute left-[12%] bottom-[28%] inline-block size-1.5 rounded-full bg-teal-soft/70 animate-float-slow"
            style={{ animationDelay: "-3s" }}
          />
          <span
            className="absolute right-[8%] top-[58%] inline-block size-1 rounded-full bg-navy/35 animate-float-slow"
            style={{ animationDelay: "-5s" }}
          />
          <span
            className="absolute left-[42%] top-[14%] inline-block size-1 rounded-full bg-teal/45 animate-float-slow"
            style={{ animationDelay: "-2s" }}
          />
          <span
            className="absolute right-[34%] bottom-[20%] inline-block size-1.5 rounded-full bg-teal/40 animate-float-slow"
            style={{ animationDelay: "-7s" }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-20 md:px-10 md:pb-32 md:pt-28">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.22em] text-teal">
            <span className="inline-flex items-center gap-2.5">
              <span className="relative inline-flex size-2.5">
                <span className="absolute inset-0 inline-flex rounded-full bg-teal animate-pulse-ring" />
                <span className="relative inline-flex size-2.5 rounded-full bg-teal" />
              </span>
              <span className="text-text-strong/80">{profile.status}</span>
            </span>
            <a
              href={projectRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface/70 px-3 py-1 text-text-muted normal-case tracking-normal backdrop-blur transition-colors hover:border-teal hover:text-teal"
            >
              <Icon name="github" size={12} />
              <span>Open source · View code</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-7 text-4xl font-semibold tracking-tight text-text-strong md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="text-gradient-brand">{profile.name}</span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-navy via-teal to-teal-soft"
              />
            </span>
            .
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text md:text-xl">
            {profile.headline}. I build resilient backends and real-time data
            pipelines that scale to{" "}
            <span className="font-semibold text-navy">10M+ users</span>.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white shadow-soft transition-all hover:shadow-glow-teal"
              >
                <span className="relative z-10">Hire me</span>
                <Icon
                  name="arrow"
                  size={16}
                  className="relative z-10 transition-transform group-hover:translate-x-0.5"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-teal to-teal-deep transition-transform duration-500 group-hover:translate-x-0"
                />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-5 py-2.5 text-sm font-medium text-text-strong backdrop-blur transition-all hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              >
                View experience
              </a>
            </div>

            <SocialLinks items={profile.social.slice(0, 4)} variant="inline" />
          </div>
        </Reveal>

        <Reveal delay={420} direction="scale">
          <div className="mt-12 w-full md:mx-auto md:mt-14 md:max-w-xl">
            <div className="flex items-center gap-4">
              <span
                aria-hidden
                className="h-px flex-1 bg-gradient-to-r from-transparent via-border-strong/70 to-transparent"
              />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-text-muted">
                Or explore from your terminal
              </span>
              <span
                aria-hidden
                className="h-px flex-1 bg-gradient-to-r from-transparent via-border-strong/70 to-transparent"
              />
            </div>
            <TerminalSsh className="mt-4" />
          </div>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-16 md:grid-cols-4">
          {profile.highlights.map((highlight, idx) => (
            <Reveal
              key={highlight.label}
              delay={120 * idx}
              direction="scale"
              className="group relative bg-surface p-5 transition-colors hover:bg-surface-tint md:p-6"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-teal to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />
              <dt className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                {highlight.label}
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-text-strong md:text-3xl">
                <span className="bg-gradient-to-br from-navy to-teal bg-clip-text text-transparent">
                  {highlight.value}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
