"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/lib/data";

interface ProjectGalleryProps {
  images: ProjectImage[];
  alt: string;
}

function getYouTubeId(src: string): string {
  const urlMatch = src.match(/[?&]v=([^&]+)/);
  if (urlMatch) return urlMatch[1];
  const shortMatch = src.match(/youtu\.be\/([^?&/]+)/);
  if (shortMatch) return shortMatch[1];
  return src;
}

export function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const active = images[activeIndex];
  const isYouTube = active.type === "youtube";
  const videoId = isYouTube ? getYouTubeId(active.src) : "";

  return (
    <div className="space-y-2">
      {/* Main preview */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
        {isYouTube ? (
          <iframe
            key={active.src}
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`${alt} video ${activeIndex + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <Image
            key={active.src}
            src={active.src}
            alt={`${alt} preview ${activeIndex + 1}`}
            fill
            className="object-cover object-top animate-in fade-in duration-300"
            sizes="(max-width: 640px) calc(100vw - 5rem), (max-width: 768px) calc(85vw - 3rem), (max-width: 1024px) calc(75vw - 3rem), (max-width: 1280px) calc(60vw - 3rem), calc(55vw - 3rem)"
            priority={activeIndex === 0}
          />
        )}
        {active.desc && (
          <span className="pointer-events-none absolute top-2 right-2 z-10 rounded-md bg-background/70 px-2 py-1 text-[11px] font-medium text-foreground/80 backdrop-blur-sm">
            {active.desc}
          </span>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => {
            const isThumbYT = image.type === "youtube";
            const thumbVideoId = isThumbYT ? getYouTubeId(image.src) : "";
            return (
              <button
                key={image.src}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative h-14 w-20 shrink-0 cursor-pointer overflow-hidden rounded-md border-2 transition-all duration-200 sm:h-16 sm:w-24",
                  index === activeIndex
                    ? "border-primary shadow-sm"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
                aria-label={`View ${isThumbYT ? "video" : "preview"} ${index + 1}`}
              >
                {isThumbYT ? (
                  <>
                    <Image
                      src={`https://img.youtube.com/vi/${thumbVideoId}/mqdefault.jpg`}
                      alt={`${alt} video thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                      <Play className="h-4 w-4 fill-white text-white drop-shadow" />
                    </div>
                  </>
                ) : (
                  <Image
                    src={image.src}
                    alt={`${alt} thumbnail ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
