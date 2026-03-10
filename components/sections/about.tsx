import { Section } from "@/components/ui/section";
import { siteConfig } from "@/lib/data";

const hi = (text: string) => (
  <span className="font-medium text-foreground">{text}</span>
);

export function About() {
  return (
    <Section id="about" className="md:pt-0">
      <div className="mb-10">
        <p className="mb-2 font-mono text-sm font-medium text-primary/70">
          {"// "}about
        </p>
        {/* Desktop: show section title */}
        <h2 className="hidden text-[1.75rem] font-bold tracking-tight md:block">
          About Me
        </h2>
        {/* Mobile: replace title with developer name + role */}
        <h2 className="text-[1.75rem] font-bold tracking-tight md:hidden">
          {siteConfig.name}
        </h2>
        <p className="mt-1 text-sm font-medium text-primary md:hidden">
          {siteConfig.role}
        </p>
      </div>

      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a third-year {hi("Software Engineering")} student at{" "}
          {hi("Vietnam-Korea University of Information and Communication Technology (VKU)")}.
        </p>
        <p>
          I enjoy building {hi("web and mobile applications")} and have experience
          developing {hi("full-stack projects")}.
        </p>
        <p>
          Recently, I&apos;ve been exploring {hi("DevOps")}, {hi("cloud computing")}, and{" "}
          {hi("agentic AI")} to better understand how modern systems are built,
          deployed, and scaled — with the goal of continuously improving my
          skills and building impactful products.
        </p>
      </div>
    </Section>
  );
}
