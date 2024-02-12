import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/nav/NavBar";
import { BackgroundOverlay } from "@/components/BackgroundOverlay";

const isDev = false;

export default function Home() {
  return (
    <main className="bg-[#1a191d]">
      <NavBar />
      <div className="flex flex-col w-full h-screen relative">
        <HeroSection isDev={isDev} />
        {/* TODO: Add scroll down animation*/}
        <BackgroundOverlay />
      </div>

      <div className="h-96"></div>
    </main>
  );
}
