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
    <div className="lg:flex">
      <CursorGradient />
      <Sidebar />
      <main className="min-h-screen flex-1 pt-16 lg:pt-0">
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
