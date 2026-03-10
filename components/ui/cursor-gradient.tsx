"use client";

import { useEffect, useRef } from "react";

export function CursorGradient() {
  const dotRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Only enable on devices with a fine pointer (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      dot.style.opacity = "0";
    };
    const handleMouseEnter = () => {
      dot.style.opacity = "1";
    };

    const animate = () => {
      const cur = currentRef.current;
      const tgt = targetRef.current;
      cur.x += (tgt.x - cur.x) * 0.1;
      cur.y += (tgt.y - cur.y) * 0.1;
      dot.style.transform = `translate(${cur.x - 500}px, ${cur.y - 500}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    dot.style.opacity = "1";
    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[1000px] w-[1000px] rounded-full transition-opacity duration-700"
      style={{
        opacity: 0,
        background:
          "radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(59, 130, 246, 0.09) 40%, transparent 70%)",
        filter: "blur(80px)",
        willChange: "transform",
      }}
    />
  );
}
