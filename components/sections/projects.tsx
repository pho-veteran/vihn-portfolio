"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/section";
import { projects, type Project } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, ChevronRight, X } from "lucide-react";
import { ProjectGallery } from "@/components/ui/project-gallery";
import { RepositorySection } from "@/components/ui/repository-section";

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="group flex cursor-pointer flex-col rounded-lg border border-border bg-card p-5 transition-all duration-300 ease-out hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-md bg-muted">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) calc(100vw - 2rem), calc(50vw - 2rem)"
        />
      </div>

      <div className="mb-2 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold tracking-tight transition-colors duration-300 ease-out group-hover:text-primary">
            {project.title}
          </h3>
          <span className="text-[11px] text-muted-foreground">{project.year}</span>
        </div>
        <span className="flex items-center gap-1 text-[11px] text-muted-foreground opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
          View <ChevronRight className="h-3 w-3" />
        </span>
      </div>

      <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 4).map((t) => (
          <span
            key={t}
            className="cursor-pointer rounded bg-accent px-2 py-0.5 text-xs text-foreground/70 transition-colors duration-150 hover:bg-primary/10 hover:text-primary"
          >
            {t}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="cursor-default rounded bg-accent px-2 py-0.5 text-xs text-muted-foreground">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
    </article>
  );
}

function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!project) return null;

  const isMultiRepo = project.repositories.length > 1;
  const showProjectDemo = project.demoUrl && !isMultiRepo;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[90vh] w-full max-w-[calc(100%-2rem)] flex-col overflow-hidden p-0 sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[60vw] xl:max-w-[55vw]"
      >
        {/* Fixed header */}
        <div className="flex shrink-0 items-center gap-4 border-b border-border px-6 py-4">
          <div className="min-w-0 flex-1">
            <DialogTitle className="truncate text-base font-semibold tracking-tight sm:text-lg">
              {project.title}
            </DialogTitle>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {showProjectDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors duration-150 hover:bg-primary/90"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            <button
              onClick={() => onOpenChange(false)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="modal-scroll flex-1 space-y-6 overflow-y-auto p-6">
          {/* Image Gallery */}
          <ProjectGallery images={project.images} alt={project.title} />

          {/* Role */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Role
            </h4>
            <p className="text-sm text-foreground/80">{project.role}</p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Description
            </h4>
            <p className="text-sm text-foreground/80">{project.description}</p>
          </div>

          {/* Key Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Key Features
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-foreground/80"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="cursor-pointer text-xs text-foreground/70 transition-colors duration-150 hover:bg-primary/10 hover:text-primary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Repositories */}
          <div className="border-t border-border pt-6">
            <RepositorySection repositories={project.repositories} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <Section id="projects">
      <SectionHeader
        label="Projects"
        title="Featured Work"
        description="A selection of projects I've built for school assignments."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onClick={() => openProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </Section>
  );
}
