import { Sidebar } from "@/components/sidebar";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { CursorGradient } from "@/components/ui/cursor-gradient";

export default function Home() {
  return (
    <div className="relative mx-auto max-w-7xl md:px-6 lg:px-10 xl:px-16 md:flex md:gap-10 lg:gap-16 xl:gap-24">
      <CursorGradient />
      <Sidebar />
      <main className="min-h-screen flex-1 px-4 pt-16 sm:px-6 md:px-0 md:pt-14">
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
