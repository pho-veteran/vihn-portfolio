import { Section, SectionHeader } from "@/components/ui/section";
import { Download } from "lucide-react";

export function Resume() {
  return (
    <Section id="resume">
      <SectionHeader
        label="Resume"
        title="Experience"
        description="A summary of my professional background and education."
      />

      <div className="rounded-lg border border-border bg-card p-6 text-center md:p-8">
        <p className="mx-auto max-w-md text-sm text-muted-foreground">
          Interested in my full experience? Download my resume for a detailed
          overview of my skills, projects, and education.
        </p>

        <a
          href="/resume.pdf"
          download
          className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
      </div>
    </Section>
  );
}
