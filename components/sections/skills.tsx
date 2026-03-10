import { Section, SectionHeader } from "@/components/ui/section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        label="Skills"
        title="Tech Stack"
        description="Technologies and tools I work with regularly."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
          >
            <h3 className="mb-3 font-mono text-xs font-semibold text-primary">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
