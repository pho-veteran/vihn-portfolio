export const siteConfig = {
  name: "Alex Chen",
  role: "Full Stack Developer",
  tagline: "I build modern web experiences with clean code and thoughtful design.",
  bio: `I'm a passionate developer who loves crafting elegant solutions to complex problems. 
Currently focused on building performant, accessible web applications using modern technologies. 
I enjoy the intersection of design and engineering — creating interfaces that are both beautiful and functional.`,
  email: "alex@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "San Francisco, CA",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "VS Code", "Figma", "Linux"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Vercel", "Netlify", "GitHub Actions", "Cloudflare"],
  },
];

export const projects = [
  {
    title: "DevBoard",
    description:
      "A real-time project management dashboard for developer teams with kanban boards, sprint tracking, and GitHub integration.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "CodeNote",
    description:
      "A markdown-powered note-taking app designed for developers with syntax highlighting, tags, and cloud sync.",
    tech: ["React", "Node.js", "MongoDB", "Markdown"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "API Forge",
    description:
      "A CLI tool for scaffolding REST and GraphQL APIs with authentication, validation, and database migrations built in.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "CLI"],
    github: "https://github.com",
  },
  {
    title: "PixelSnap",
    description:
      "An image optimization and transformation service with automatic format conversion, resizing, and CDN delivery.",
    tech: ["Python", "FastAPI", "AWS S3", "Docker"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
