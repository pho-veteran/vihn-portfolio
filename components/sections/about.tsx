import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/data";

export function About() {
  return (
    <Section id="about" className="lg:pt-0">
      <div className="mb-10">
        <p className="mb-2 font-mono text-sm font-medium text-primary/70">
          {"// "}about
        </p>
        {/* Desktop: show section title */}
        <h2 className="hidden text-[1.75rem] font-bold tracking-tight lg:block">
          About Me
        </h2>
        {/* Mobile: replace title with developer name + role */}
        <h2 className="text-[1.75rem] font-bold tracking-tight lg:hidden">
          {siteConfig.name}
        </h2>
        <p className="mt-1 text-sm font-medium text-primary lg:hidden">
          {siteConfig.role}
        </p>
      </div>

      <div className="space-y-4">
        {siteConfig.bio
          .split("\n")
          .filter((p) => p.trim())
          .map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {paragraph.trim()}
            </p>
          ))}
      </div>
    </Section>
  );
}
