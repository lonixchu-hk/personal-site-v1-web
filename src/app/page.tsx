import { NavBar } from "@/components/nav/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { BackgroundOverlay } from "@/components/BackgroundOverlay";
import { SkillsSection } from "@/components/SkillsSection";
import { ScrollDownIcon } from "@/components/ScrollDownIcon";

const underMaintenance = process.env.underMaintenance == "true";

export default function Home() {
  return (
    <main className="bg-[#1a191d]">
      <NavBar />
      <div id="home" className="flex flex-col w-full h-screen relative">
        <HeroSection underMaintenance={underMaintenance} />
        <BackgroundOverlay />
        <ScrollDownIcon />
      </div>
      <SkillsSection />
      <div className="h-20"></div>
    </main>
  );
}
