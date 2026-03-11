import Image from "next/image";
import type { Repository } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";

interface RepositorySectionProps {
  repositories: Repository[];
}

function SingleRepository({ repo }: { repo: Repository }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={repo.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors duration-150 hover:text-primary"
      >
        <Github className="h-4 w-4" />
        {repo.name}
      </a>
      {repo.liveDemoUrl && (
        <a
          href={repo.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-primary"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Live Demo
        </a>
      )}
    </div>
  );
}

function RepositoryCard({ repo }: { repo: Repository }) {
  return (
    <div className="group/repo flex cursor-default flex-col overflow-hidden rounded-lg bg-muted/40 transition-all duration-300 ease-out hover:bg-muted/70 sm:flex-row">
      {/* Image column */}
      {repo.image && (
        <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-muted sm:aspect-auto sm:w-44 md:w-52">
          <Image
            src={repo.image}
            alt={repo.name}
            fill
            className="object-cover transition-transform duration-300 group-hover/repo:scale-105"
            sizes="(max-width: 640px) 100vw, 208px"
          />
        </div>
      )}

      {/* Content column */}
      <div className="flex flex-1 flex-col justify-center gap-3 p-4">
        <div>
          <h5 className="font-mono text-sm font-semibold transition-colors duration-150 group-hover/repo:text-primary">
            {repo.name}
          </h5>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {repo.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={repo.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground transition-colors duration-150 hover:bg-primary/10 hover:text-primary"
          >
            <Github className="h-3.5 w-3.5" />
            Source Code
          </a>
          {repo.liveDemoUrl && (
            <a
              href={repo.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground transition-colors duration-150 hover:bg-primary/10 hover:text-primary"
            >
              <ExternalLink className="h-3 w-3" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function RepositorySection({ repositories }: RepositorySectionProps) {
  if (repositories.length === 0) return null;

  const isSingle = repositories.length === 1;

  return (
    <div className="space-y-3">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {isSingle ? "Repository" : "Repositories"}
      </h4>

      {isSingle ? (
        <SingleRepository repo={repositories[0]} />
      ) : (
        <div className="flex flex-col gap-3">
          {repositories.map((repo) => (
            <RepositoryCard key={repo.name} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}
