import type { Experience } from "@/types";
import { Tag } from "./Tag";
import { Icon } from "./Icon";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    company,
    companyUrl,
    role,
    location,
    start,
    end,
    current,
    description,
    bullets,
    tags,
  } = experience;

  return (
    <article className="group relative rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong md:p-8">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-text-strong md:text-xl">
            {role}
          </h3>
          <p className="mt-1 text-sm text-text">
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-accent-strong"
              >
                {company}
                <Icon name="external" size={13} />
              </a>
            ) : (
              <span className="font-medium">{company}</span>
            )}
            <span className="text-text-muted"> · {location}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          {current ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
              <span className="size-1.5 rounded-full bg-accent" />
              Active
            </span>
          ) : null}
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
            {start} — {end}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-text md:text-[15px]">
        {description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-sm leading-relaxed text-text md:text-[15px]"
          >
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {tags.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      ) : null}
    </article>
  );
}
