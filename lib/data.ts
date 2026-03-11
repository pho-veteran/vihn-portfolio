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
  year: number;
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
    title: "Photure",
    year: 2025,
    description:
      "A self-hosted photo management platform where authenticated users can upload, browse, and delete their personal photos. Built primarily to demonstrate a full GitLab CI/CD pipeline deployed to a DigitalOcean server.",
    coverImage: "/projects/photure/4_gitlab-cicd-pipeline.png",
    images: [
      { src: "/projects/photure/1_albums.png", desc: "Photo gallery" },
      { src: "/projects/photure/2_image-preview.png", desc: "Full-screen image preview" },
      { src: "/projects/photure/3_docker-microservices-containers.png", desc: "Docker microservices" },
      { src: "/projects/photure/4_gitlab-cicd-pipeline.png", desc: "GitLab CI/CD pipeline" },
    ],
    techStack: [
      "GitLab CI/CD",
      "GitLab Container Registry",
      "DigitalOcean (Ubuntu 22.04)",
      "Docker Compose",
      "Nginx",
      "FastAPI (Python 3.11)",
      "Vite (ReactJS 19)",
      "MongoDB",
      "Clerk",
      "Zustand",
      "Tailwind CSS + Radix UI",
    ],
    features: [
      "Drag-and-drop batch photo upload with per-file progress feedback",
      "Browse photos in a responsive gallery with sorting and category filters",
      "View photos in a full-screen modal viewer",
      "Download photos directly from the gallery",
      "Per-user data isolation enforced on every request",
      "Automated CI/CD pipeline: build, lint, Docker image push, and one-click deploy to production",
    ],
    role: "Individual",
    repositories: [
      {
        name: "photure",
        description: "Monorepo containing the React frontend, four Python microservices, Nginx reverse proxy, Docker Compose configs, and the GitLab CI/CD pipeline definition.",
        sourceUrl: "https://github.com/pho-veteran/photure",
      },
    ],
  },
  {
    title: "Stoom",
    year: 2025,
    description:
      "A browser-based real-time video conferencing platform with collaborative whiteboard, shared notes, and in-room chat. Built to demonstrate WebRTC technology (via LiveKit) alongside synchronous collaboration features.",
    coverImage: "/projects/stoom/1_landing.png",
    images: [
      { src: "/projects/stoom/1_landing.png", desc: "Landing page" },
      { src: "/projects/stoom/2_meeting-session-demo.png", desc: "Meeting session" },
      { src: "/projects/stoom/3_meeting-session-recap.png", desc: "Session recap" },
    ],
    techStack: [
      "Next.js 16 (React 19)",
      "LiveKit (WebRTC)",
      "tldraw",
      "Tiptap",
      "Clerk",
      "Prisma",
      "MongoDB",
      "coturn (TURN/STUN)",
    ],
    features: [
      "Join or create password-protected rooms using a 6-character code",
      "Real-time video and audio conferencing via WebRTC (LiveKit)",
      "Collaborative whiteboard with multi-user drawing synced live across participants",
      "Shared rich-text notes edited simultaneously by all participants",
      "Private personal notes saved per user per session",
      "In-room text chat persisted to the database",
      "Screen sharing with automatic conflict resolution",
      "Hand-raise system with host management controls",
      "Host controls: kick participants, promote to co-host, and end meeting",
      "Granular permissions for whiteboard and notes access (open, restricted, or disabled)",
      "Session history dashboard showing past meetings with notes and whiteboard snapshots",
      "Pre-join screen before entering a room",
    ],
    role: "Individual",
    repositories: [
      {
        name: "stoom",
        description: "Full-stack Next.js application covering the frontend UI, API routes, WebRTC room logic, and real-time collaboration features.",
        sourceUrl: "https://github.com/pho-veteran/stoom",
      },
    ],
  },
  {
    title: "Koflix",
    year: 2025,
    description:
      "A full-stack movie streaming platform targeting Vietnamese users, featuring an AI-powered recommendation engine and offline playback. Admins manage the content catalogue via a web dashboard while end users stream and download movies on Android.",
    coverImage: "/projects/koflix/koflix-cover.png",
    images: [
      { type: "youtube", src: "hwer-XZEG-E", desc: "Koflix Demo video" },
      { src: "/projects/koflix/1_kkphimapi-crawler-dashboard.png", desc: "Content crawler dashboard" },
      { src: "/projects/koflix/2_movie_editor_form.png", desc: "Movie editor form" },
    ],
    techStack: [
      "Next.js 15",
      "React Native (Expo 52)",
      "AWS S3",
      "Firebase Auth",
      "OpenAI Embeddings",
      "MongoDB Atlas Search",
      "Cloudinary",
      "TypeScript",
      "MongoDB (Prisma ORM)",
      "FFmpeg",
    ],
    features: [
      "Register and sign in with email/password or Google account",
      "Browse and search movies by genre, country, type, and keyword",
      "Stream HLS (.m3u8) and MP4 content with a custom in-app video player",
      "Select from multiple streaming servers and episodes per title",
      "Download movies for offline playback (HLS via FFmpeg, MP4 with pause/resume)",
      "Receive personalized AI-powered recommendations based on watch history and preferences",
      "Continue watching with per-episode progress synced to the backend",
      "Like, dislike, rate, and leave threaded comments on movies",
      "Manage user profile including avatar upload",
      "Admins perform full CRUD on movies, episodes, genres, countries, and users",
      "Bulk-import movies from external catalogue with automatic AI embedding generation",
      "Role-based access control for admins, uploaders, and customers",
    ],
    role: "Individual",
    demoUrl: "https://koflix-a.vercel.app",
    repositories: [
      {
        name: "koflix-a",
        description: "Next.js web admin dashboard and REST API backend powering content management, AI recommendations, and all data consumed by the mobile client.",
        image: "/projects/koflix/repo_koflix-a.png",
        sourceUrl: "https://github.com/pho-veteran/koflix-a",
        liveDemoUrl: "https://koflix-a.vercel.app",
      },
      {
        name: "koflix-c",
        description: "React Native Android mobile client providing the end-user streaming experience including video playback, offline downloads, and personalized recommendations.",
        image: "/projects/koflix/repo_koflix-c.png",
        sourceUrl: "https://github.com/pho-veteran/koflix-c",
      },
    ],
  },
  {
    title: "VStore",
    year: 2024,
    description:
      "A full-stack e-commerce platform that lets customers browse products, manage a cart and wishlist, and pay online. Store owners get a multi-tenant admin dashboard to manage products, orders, and revenue analytics.",
    coverImage: "/projects/vstore/1_store.png",
    images: [
      { src: "/projects/vstore/1_store.png", desc: "Storefront homepage" },
      { src: "/projects/vstore/2_product.png", desc: "Product detail page" },
      { src: "/projects/vstore/3_checkout.png", desc: "Checkout flow" },
      { src: "/projects/vstore/4_order-status.png", desc: "Order status tracking" },
      { src: "/projects/vstore/5_product_edit_form.png", desc: "Admin product editor" },
    ],
    techStack: ["Next.js 14", "React 18", "TypeScript", "MongoDB (Prisma ORM),", "Shadcn/ui", "Clerk", "Cloudinary", "VNPay", "Tailwind CSS", "Zustand"],
    features: [
      "Browse and filter products by category, color, size, and price range",
      "Persistent shopping cart and wishlist with local storage",
      "Secure checkout flow with VNPay payment integration",
      "Order placement, history, and status tracking",
      "Address book management with Vietnamese province data",
      "Multi-store management for store owners",
      "Product catalog management with images, variants, and stock tracking",
      "Order status management from Pending to Delivered",
      "Billboard and category management for storefront customization",
      "Revenue dashboard with sales stats and monthly charts",
      "Dark and light theme toggle",
      "REST API consumed by the storefront for all store data",
    ],
    role: "Individual",
    repositories: [
      {
        name: "e-commerce-store",
        description: "Customer-facing storefront for browsing products, managing cart and wishlist, and completing purchases.",
        image: "/projects/vstore/repo1_store.jpeg",
        sourceUrl: "https://github.com/pho-veteran/e-commerce-store",
        liveDemoUrl: "https://vstore-sigma.vercel.app",
      },
      {
        name: "e-commerce-admin",
        description: "Multi-tenant admin dashboard providing product, order, and store management along with a REST API for the storefront.",
        image: "/projects/vstore/repo2_admin.png",
        sourceUrl: "https://github.com/pho-veteran/e-commerce-admin",
        liveDemoUrl: "https://vstore-admin.vercel.app",
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
