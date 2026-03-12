import { Section, SectionHeader } from "@/components/ui/section";
import { Download } from "lucide-react";

const CV_URL = "/CV - Nguyen Thanh Vinh.pdf";

export function Resume() {
  return (
    <Section id="resume">
      <SectionHeader
        label="Resume"
        title="Experience"
        description="A summary of my background and education."
      />

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <iframe
          src={CV_URL}
          className="h-[70vh] min-h-125 w-full"
          title="Curriculum Vitae"
        />
      </div>

      <div className="mt-4 flex justify-center">
        <a
          href="/cv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Download className="h-4 w-4" />
          View CV
        </a>
      </div>
    </Section>
  );
}
