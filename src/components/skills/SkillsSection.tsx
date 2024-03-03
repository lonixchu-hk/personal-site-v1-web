import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "./SkillCard";
import { CertificateBlock } from "./CertificateBlock";
import { skills } from "./data";

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-8 lg:mt-10 py-20 px-5 lg:px-14 relative w-full flex flex-col items-center"
    >
      <SectionTitle className="text-5xl md:text-7xl text-center">
        My Skills
      </SectionTitle>
      <div className="mt-10 grid grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
      <div className="w-full md:mx-5 xl:w-[1180px] mt-5 relative overflow-hidden">
        <SectionTitle className="text-xl md:text-2xl text-left">
          Qualified In:
        </SectionTitle>
        <CertificateBlock />
      </div>
    </section>
  );
};
