"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navLinks, siteConfig } from "@/lib/data";

export function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track active section based on scroll position
  useEffect(() => {
    const sectionEls = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-70 lg:shrink-0 lg:flex-col lg:justify-between lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-border lg:px-8 lg:py-10">
        <div>
          <a
            href="#"
            className="font-mono text-sm font-semibold tracking-tight text-foreground"
          >
            {siteConfig.name.split(" ")[0].toLowerCase()}
            <span className="text-primary">.</span>dev
          </a>

          <div className="mt-8">
            <h1 className="text-xl font-bold tracking-tight">
              {siteConfig.name}
            </h1>
            <p className="mt-1 text-sm font-medium text-primary">
              {siteConfig.role}
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <nav className="mt-10">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`group flex items-center gap-3 py-1.5 text-xs uppercase tracking-widest transition-all ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`h-px transition-all duration-300 ${
                          isActive
                            ? "w-8 bg-foreground"
                            : "w-4 bg-muted-foreground/40 group-hover:w-6 group-hover:bg-muted-foreground"
                        }`}
                      />
                      <span className={isActive ? "font-semibold" : "font-medium"}>
                        {link.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground hover:bg-accent"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-border bg-background/90 px-5 py-3 backdrop-blur-md lg:hidden">
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name.split(" ")[0].toLowerCase()}
          <span className="text-primary">.</span>dev
        </a>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-10 flex items-center gap-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
