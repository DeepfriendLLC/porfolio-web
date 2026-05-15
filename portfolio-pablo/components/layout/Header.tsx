"use client";

import { useMemo } from "react";
import { navItems } from "@/constants";
import { profile } from "@/constants/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Header() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useActiveSection(ids);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Go to top"
        >
          <span
            aria-hidden
            className="inline-flex size-8 items-center justify-center rounded-md bg-text-strong font-mono text-sm font-semibold text-background"
          >
            PV
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-text-strong">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
              {profile.shortHeadline}
            </span>
          </span>
        </a>

        <nav aria-label="Primary">
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = item.id === activeId;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative inline-flex items-center px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "text-text-strong"
                        : "text-text-muted hover:text-text"
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span
                        aria-hidden
                        className="absolute inset-x-3 -bottom-px h-px bg-accent"
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-full bg-text-strong px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
