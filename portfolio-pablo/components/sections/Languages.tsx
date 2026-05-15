import { languages } from "@/constants";
import { Section } from "@/components/ui/Section";
import { LanguageItem } from "@/components/ui/LanguageItem";

export function Languages() {
  return (
    <Section
      id="languages"
      eyebrow="04 · Languages"
      title="Communicating across teams and borders."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {languages.map((language) => (
          <LanguageItem key={language.language} language={language} />
        ))}
      </div>
    </Section>
  );
}
