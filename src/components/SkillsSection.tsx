import React from "react";
import { SectionTitle } from "./SectionTitle";
import { SkillCard } from "./SkillCard";
import { CertificateBlock } from "./CertificateBlock";
import {
  IconDeviceDesktop,
  IconBrandVue,
  IconCloudCode,
} from "@tabler/icons-react";

const skillIconSize = "50";

const skills = [
  {
    title1: "Software",
    title2: "Development",
    color: "#df058d",
    icon: <IconDeviceDesktop stroke={1} size={skillIconSize} />,
    content: (
      <div>
        Experienced in both functional and OOP: JavaScript, TypeScript, PHP,
        .NET.
        <br />
        Skilled in developing large-scale web, mobile and desktop applications.
      </div>
    ),
  },
  {
    title1: "Frontend Dev",
    title2: "React, Vue",
    color: "#2c49d8",
    icon: <IconBrandVue stroke={1} size={skillIconSize} />,
    content: (
      <div>
        Over 6 years of development experience in HTML, CSS, JS, QJuery, Vue,
        React and NextJS frameworks.
      </div>
    ),
  },
  {
    title1: "Cloud",
    title2: "Computing",
    color: "#ff6b2b",
    icon: <IconCloudCode stroke={1} size={skillIconSize} />,
    content: (
      <div>
        Equiped with multiple cloud certifications: AWS-SAA, AWS-CDA, Azure
        Developer Associate, ACA Cloud Computing, ACA Developer.
      </div>
    ),
  },
];

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-10 lg:scroll-mt-10 lg:mt-10 py-20 px-5 lg:px-14 relative w-full flex flex-col items-center"
    >
      <SectionTitle classname="text-5xl md:text-7xl text-center">
        My Skills
      </SectionTitle>
      <div className="mt-10 grid grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
      <div className="w-full md:mx-5 xl:w-[1180px] mt-5 relative overflow-hidden">
        <SectionTitle classname="text-xl md:text-2xl text-left">
          Qualified In:
        </SectionTitle>
        <CertificateBlock />
      </div>
    </section>
  );
};
