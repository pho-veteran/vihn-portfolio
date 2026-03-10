import { Section, SectionHeader } from "@/components/ui/section";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        label="Projects"
        title="Featured Work"
        description="A selection of projects I've built and contributed to."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/30"
          >
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-sm font-semibold tracking-tight transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`${project.title} GitHub`}
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`${project.title} demo`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded bg-accent px-2 py-0.5 font-mono text-[11px] text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
