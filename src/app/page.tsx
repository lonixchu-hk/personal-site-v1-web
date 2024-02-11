import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/nav/NavBar";
import { BackgroundOverlay } from "@/components/BackgroundOverlay";

export default function Home() {
  return (
    <main className="bg-[#1a191d]">
      <NavBar />
      <div className="flex flex-col w-full h-screen relative">
        <HeroSection isDev={true} />
        {/* TODO: Add scroll down */}
        <BackgroundOverlay />
      </div>
    </main>
  );
}
