import Contact from "@/components/Contact";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorksSection from "@/components/sections/WorksSection";
import ResumeSection from "@/components/sections/ResumeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import HobbyProjectsSection from "@/components/sections/HobbyProjectsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WorksSection />
      <HobbyProjectsSection />
      <ResumeSection />
      <SkillsSection />
      <Contact />
    </>
  );
}
