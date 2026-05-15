import { experiences } from "@/constants";
import { Section } from "@/components/ui/Section";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title="Where I've shipped production systems."
      description="A selection of roles where I owned and contributed to backend architectures, data pipelines and reliability."
    >
      <ol className="flex flex-col gap-6">
        {experiences.map((experience) => (
          <li key={experience.id}>
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
