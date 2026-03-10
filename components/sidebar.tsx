"use client";

import { useState, useEffect } from "react";
import { Github, Mail, Menu, X } from "lucide-react";
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
      <aside className="hidden md:flex md:w-64 lg:w-80 md:shrink-0 md:flex-col md:justify-between md:sticky md:top-0 md:h-screen md:px-8 lg:px-10 md:py-14">
        <div>
          <div className="mt-0">
            <h1 className="text-4xl font-bold tracking-tight">
              {siteConfig.name}
            </h1>
            <p className="mt-2 text-sm font-medium text-primary">
              {siteConfig.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
                      className={`group flex items-center py-1.5 font-mono text-[15px] transition-all duration-200 ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`mr-1.5 transition-colors duration-200 ${
                          isActive
                            ? "text-primary"
                            : "text-primary/30 group-hover:text-primary/70"
                        }`}
                      >
                        {"//"}
                      </span>
                      <span
                        className={`transition-transform duration-200 group-hover:translate-x-0.5 ${
                          isActive ? "font-semibold" : ""
                        }`}
                      >
                        {link.label.toLowerCase()}
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-accent hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-accent hover:scale-110"
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
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-end border-b border-border bg-background/90 px-5 py-3 backdrop-blur-md md:hidden">
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
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="mr-1.5 text-primary/50">{"//"}</span>
                {link.label.toLowerCase()}
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
