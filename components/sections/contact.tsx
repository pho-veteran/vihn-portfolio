"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Mail, Github, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Section id="contact">
      <SectionHeader
        label="Contact"
        title="Get In Touch"
        description="Want to chat? Feel free to reach out."
      />

      <div className="space-y-3">
        {/* Email card */}
        <div className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {siteConfig.email}
                </p>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* GitHub card */}
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start justify-between rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/30"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">GitHub</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                pho-veteran
              </p>
            </div>
          </div>
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        {/* Location card */}
        <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="font-medium">Location</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 rounded-lg border border-dashed border-border p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Prefer a direct message? Drop me an email and I&apos;ll get back to
          you as soon as possible.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 active:scale-95"
        >
          <Mail className="h-4 w-4" />
          Send an Email
        </a>
      </div>
    </Section>
  );
}
