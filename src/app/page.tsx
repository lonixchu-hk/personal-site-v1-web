import { NavBar } from "@/components/nav/NavBar";
import { siteFlow } from "./siteFlow";

export default function Home() {
  const sections = siteFlow.map((section, index) => {
    return section.component;
  });

  return (
    <main className="bg-[#1a191d]">
      <NavBar />
      {sections}
      <div className="h-96"></div>
    </main>
  );
}
