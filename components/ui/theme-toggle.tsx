"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex h-8 w-14 cursor-pointer items-center rounded-full bg-muted p-1 transition-colors duration-300 hover:bg-accent"
      aria-label="Toggle theme"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-background shadow-sm transition-all duration-300 group-hover:scale-110 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Sun className="h-3.5 w-3.5 text-primary transition-transform duration-300" />
        ) : (
          <Moon className="h-3.5 w-3.5 text-primary transition-transform duration-300" />
        )}
      </span>
    </button>
  );
}
