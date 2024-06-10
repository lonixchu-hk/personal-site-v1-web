import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "./SkillCard";
import { ISkill } from "@/app/profileEntity";

interface Props {
  data: ISkill[];
}

export const SkillsSection = (props: Props) => {
  const skills = props.data ?? [];
  return (
    skills.length > 0 && (
      <section
        id="skills"
        className="scroll-mt-8 lg:mt-10 pt-20 px-5 lg:px-14 relative w-full flex flex-col items-center"
      >
        <SectionTitle className="text-5xl md:text-7xl text-center">
          My Skills
        </SectionTitle>
        <div className="mt-10 grid grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </section>
    )
  );
};
