import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6">
      <div className="mx-auto flex max-w-3xl items-center justify-between text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="font-mono">
          Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
