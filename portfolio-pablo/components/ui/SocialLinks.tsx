import type { SocialLink } from "@/types";
import { Icon } from "./Icon";

type SocialLinksProps = {
  items: SocialLink[];
  variant?: "stacked" | "inline";
};

export function SocialLinks({ items, variant = "stacked" }: SocialLinksProps) {
  if (variant === "inline") {
    return (
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
        {items.map((item) => (
          <li key={item.label}>
            <SocialEntry item={item} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item.label}>
          <SocialEntry item={item} />
        </li>
      ))}
    </ul>
  );
}

function SocialEntry({ item }: { item: SocialLink }) {
  const content = (
    <span className="inline-flex items-center gap-2.5">
      <Icon name={item.icon} size={16} />
      <span>{item.value}</span>
    </span>
  );

  if (!item.href) {
    return <span className="text-text-muted">{content}</span>;
  }

  const isExternal = item.href.startsWith("http");

  return (
    <a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 text-text transition-colors hover:text-accent"
    >
      {content}
    </a>
  );
}
