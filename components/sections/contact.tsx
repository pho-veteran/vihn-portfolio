"use client";

import { useState, type FormEvent } from "react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Send } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="contact">
      <SectionHeader
        label="Contact"
        title="Get In Touch"
        description="Have a project in mind or want to chat? Send me a message."
      />

      {submitted ? (
        <div className="rounded-lg border border-primary/30 bg-accent p-6 text-center">
          <p className="font-medium text-primary">Thanks for reaching out!</p>
          <p className="mt-1 text-sm text-muted-foreground">
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="h-9 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="h-9 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 active:scale-95"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      )}
    </Section>
  );
}
