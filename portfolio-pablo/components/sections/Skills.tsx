import { skillGroups } from "@/constants";
import { Section } from "@/components/ui/Section";
import { SkillCard } from "@/components/ui/SkillCard";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="03 · Skills"
      title="A toolkit built around backend reliability and data."
      description="Hands-on with each of these in production environments. Always learning the next one."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard key={group.id} group={group} />
        ))}
      </div>
    </Section>
  );
}
