import type { SkillGroup } from "@/types";
import { Icon } from "./Icon";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon name={group.icon} size={18} />
        </span>
        <h3 className="text-base font-semibold text-text-strong">
          {group.title}
        </h3>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {group.keywords.map((keyword) => (
          <li
            key={keyword}
            className="rounded-md border border-border bg-surface-subtle px-2.5 py-1 text-xs text-text"
          >
            {keyword}
          </li>
        ))}
      </ul>
    </article>
  );
}
