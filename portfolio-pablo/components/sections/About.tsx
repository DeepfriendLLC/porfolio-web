import { profile } from "@/constants/profile";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="Senior Backend Engineer focused on scale, latency and clarity."
    >
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="space-y-5 text-base leading-relaxed text-text md:text-lg">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside className="md:col-span-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
              At a glance
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-text">
              <Fact label="Role" value="Senior Backend Engineer" />
              <Fact label="Stack" value="Node.js · TypeScript · Big Data" />
              <Fact label="Based in" value={profile.location} />
              <Fact label="Citizenship" value="Spanish · EU" />
              <Fact label="Availability" value="Permanent · Freelance" />
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function Fact({
  label,
  value
}: {
  label: string;
  value: string
}) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-border/70 pb-3 last:border-b-0 last:pb-0">
      <span className="text-text-muted">
        {label}
      </span>
      <span className="text-right font-medium text-text-strong">
        {value}
      </span>
    </li>
  );
}
