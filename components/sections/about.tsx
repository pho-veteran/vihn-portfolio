import { Section, SectionHeader } from "@/components/ui/section";
import { siteConfig } from "@/lib/data";
import { MapPin } from "lucide-react";

export function About() {
  return (
    <Section id="about">
      <SectionHeader label="About" title="About Me" />

      <div className="grid gap-6 md:grid-cols-5">
        <div className="space-y-3 md:col-span-3">
          {siteConfig.bio.split("\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-sm leading-relaxed text-muted-foreground"
            >
              {paragraph.trim()}
            </p>
          ))}
        </div>

        <div className="md:col-span-2">
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="mb-3 font-mono text-xs font-semibold text-primary">
              Quick Info
            </h3>
            <dl className="space-y-2.5 text-sm">
              <div>
                <dt className="text-xs text-muted-foreground">Name</dt>
                <dd className="font-medium">{siteConfig.name}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Role</dt>
                <dd className="font-medium">{siteConfig.role}</dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Location</dt>
                <dd className="flex items-center gap-1 font-medium">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  {siteConfig.location}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Email</dt>
                <dd>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
