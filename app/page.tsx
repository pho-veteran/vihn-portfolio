import { Sidebar } from "@/components/sidebar";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { CursorGradient } from "@/components/ui/cursor-gradient";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-7xl lg:px-10 xl:px-16 lg:flex">
      <CursorGradient />
      <Sidebar />
      <main className="min-h-screen flex-1 px-4 pt-16 sm:px-6 lg:px-0 lg:pt-14">
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
