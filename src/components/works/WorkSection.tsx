import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { WorkCard } from "./WorkCard";

export const WorkSection = () => {
  return (
    <section id="work" className="max-w-[1300px] w-full">
      <SectionTitle classname="text-5xl md:text-7xl text-center">
        Side Projects
      </SectionTitle>
      <div className="grid grid-cols-12 gap-5">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />s
      </div>
    </section>
  );
};
