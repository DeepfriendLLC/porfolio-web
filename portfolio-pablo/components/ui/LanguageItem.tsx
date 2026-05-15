import type { Language } from "@/types";

const levelToBars: Record<Language["level"], number> = {
  native: 5,
  fluent: 4,
  professional: 3,
  beginner: 1,
};

type LanguageItemProps = {
  language: Language;
};

export function LanguageItem({ language }: LanguageItemProps) {
  const filled = levelToBars[language.level];

  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4">
      <div>
        <p className="text-sm font-semibold text-text-strong">
          {language.language}
        </p>
        <p className="mt-0.5 text-xs text-text-muted">
          {language.fluency}
        </p>
      </div>
      <div
        className="flex items-center gap-1"
        aria-label={`Proficiency: ${language.fluency}`}
      >
        {
          Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`block h-1.5 w-5 rounded-full ${i < filled ? "bg-accent" : "bg-border"}`}
            />
          ))
        }
      </div>
    </div>
  );
}
