import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { WorkHistorySection } from "@/components/sections/WorkHistorySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResumeSection } from "@/components/sections/ResumeSection";

export default function Home() {
  return (
    <div className="min-h-full">
      <NavBar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <TerminalSection />
        <WorkHistorySection />
        <AboutSection />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
}
