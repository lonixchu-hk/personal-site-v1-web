import { NavBar } from "@/components/nav/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { BackgroundOverlay } from "@/components/BackgroundOverlay";
import { SkillsSection } from "@/components/SkillsSection";

const underMaintenance = process.env.underMaintenance == "true";

export default function Home() {
  return (
    <main className="bg-[#1a191d]">
      <NavBar />
      <div className="flex flex-col w-full h-screen relative">
        <HeroSection underMaintenance={underMaintenance} />
        {/* TODO: Add scroll down animation*/}
        <BackgroundOverlay />
      </div>
      <SkillsSection />
    </main>
  );
}
