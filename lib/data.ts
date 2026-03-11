export const siteConfig = {
  name: "Nguyen Thanh Vinh",
  role: "College Student",
  tagline: "Full-Stack Developer exploring DevOps, Cloud, and AI",
  email: "vinhnt.23it@vku.udn.vn",
  github: "https://github.com/pho-veteran",
  location: "Da Nang, Vietnam",
};

export interface Repository {
  name: string;
  description: string;
  image?: string;
  sourceUrl: string;
  liveDemoUrl?: string;
}

export interface ProjectImage {
  type?: "image" | "youtube";
  src: string;
  desc?: string;
}

export interface Project {
  title: string;
  description: string;
  coverImage: string;
  images: ProjectImage[];
  techStack: string[];
  features: string[];
  role: string;
  demoUrl?: string;
  repositories: Repository[];
}

export const projects: Project[] = [
  {
    title: "DevBoard",
    description:
      "A real-time project management dashboard for developer teams with kanban boards, sprint tracking, and GitHub integration.",
    coverImage: "/projects/devboard/cover.svg",
    images: [
      { src: "/projects/devboard/cover.svg", desc: "Project overview" },
      { src: "/projects/devboard/board.svg", desc: "Kanban board view" },
      { src: "/projects/devboard/sprint.svg", desc: "Sprint tracking" },
      { type: "youtube", src: "hwer-XZEG-E", desc: "Demo video" },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Socket.IO"],
    features: [
      "Real-time kanban boards with drag-and-drop",
      "Sprint planning and velocity tracking",
      "GitHub webhook integration for automatic issue sync",
      "Team activity feed with live updates",
      "Customizable project workflows",
    ],
    role: "Full-Stack Developer",
    demoUrl: "https://example.com",
    repositories: [
      {
        name: "devboard-web",
        description: "Next.js frontend with real-time UI and dashboard components",
        image: "/projects/devboard/board.svg",
        sourceUrl: "https://github.com",
        liveDemoUrl: "https://example.com",
      },
      {
        name: "devboard-api",
        description: "Express.js REST API with WebSocket support and GitHub integration",
        image: "/projects/devboard/sprint.svg",
        sourceUrl: "https://github.com",
      },
    ],
  },
  {
    title: "CodeNote",
    description:
      "A markdown-powered note-taking app designed for developers with syntax highlighting, tags, and cloud sync.",
    coverImage: "/projects/codenote/cover.svg",
    images: [
      { src: "/projects/codenote/cover.svg", desc: "Homepage" },
      { src: "/projects/codenote/editor.svg", desc: "Markdown editor" },
    ],
    techStack: ["React", "Node.js", "MongoDB", "Markdown"],
    features: [
      "Markdown editor with live preview",
      "Syntax highlighting for 50+ languages",
      "Tag-based organization and search",
      "Cloud sync across devices",
      "Offline support with local-first architecture",
    ],
    role: "Full-Stack Developer",
    demoUrl: "https://example.com",
    repositories: [
      {
        name: "codenote",
        description: "Full-stack markdown note-taking app with cloud sync",
        image: "/projects/codenote/editor.svg",
        sourceUrl: "https://github.com",
        liveDemoUrl: "https://example.com",
      },
    ],
  },
  {
    title: "API Forge",
    description:
      "A CLI tool for scaffolding REST and GraphQL APIs with authentication, validation, and database migrations built in.",
    coverImage: "/projects/apiforge/cover.svg",
    images: [
      { src: "/projects/apiforge/cover.svg" },
      { src: "/projects/apiforge/cli.svg", desc: "CLI interface" },
      { src: "/projects/apiforge/output.svg", desc: "Generated output" },
    ],
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "CLI", "Yeoman"],
    features: [
      "Interactive CLI for project scaffolding",
      "REST and GraphQL API templates",
      "Built-in JWT authentication setup",
      "Database migration generators",
      "Auto-generated API documentation",
    ],
    role: "Creator & Maintainer",
    repositories: [
      {
        name: "api-forge",
        description: "CLI tool for scaffolding production-ready APIs",
        image: "/projects/apiforge/cli.svg",
        sourceUrl: "https://github.com",
      },
    ],
  },
  {
    title: "PixelSnap",
    description:
      "An image optimization and transformation service with automatic format conversion, resizing, and CDN delivery.",
    coverImage: "/projects/pixelsnap/cover.svg",
    images: [
      { src: "/projects/pixelsnap/cover.svg" },
      { src: "/projects/pixelsnap/dashboard.svg", desc: "Upload dashboard" },
      { src: "/projects/pixelsnap/transform.svg", desc: "Image transforms" },
    ],
    techStack: ["Python", "FastAPI", "AWS S3", "Docker", "Redis"],
    features: [
      "Automatic format conversion (WebP, AVIF, JPEG)",
      "On-the-fly image resizing via URL parameters",
      "CDN delivery with edge caching",
      "Batch upload and processing dashboard",
      "Usage analytics and quota management",
    ],
    role: "Backend Developer",
    demoUrl: "https://example.com",
    repositories: [
      {
        name: "pixelsnap-service",
        description: "FastAPI image processing service with S3 storage",
        image: "/projects/pixelsnap/cover.svg",
        sourceUrl: "https://github.com",
      },
      {
        name: "pixelsnap-dashboard",
        description: "React dashboard for managing uploads and analytics",
        image: "/projects/pixelsnap/dashboard.svg",
        sourceUrl: "https://github.com",
        liveDemoUrl: "https://example.com",
      },
      {
        name: "pixelsnap-cdn",
        description: "CDN edge worker for image transformation and caching",
        image: "/projects/pixelsnap/transform.svg",
        sourceUrl: "https://github.com",
      },
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
