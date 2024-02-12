import React from "react";
import { SectionTitle } from "./SectionTitle";
import { SkillCard } from "./SkillCard";
import {
  IconAppWindow,
  IconDeviceDesktop,
  IconBrandVue,
  IconCloudCode,
  IconBrandAzure,
  IconBrandAws,
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
        Over 6 years of development experience in HTML, CSS, JS, Vue, React and
        NextJS frameworks.
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
  const skillCards = Array.from(skills).map((skill, index) => {
    return <SkillCard key={index} skill={skill} />;
  });

  return (
    <section
      id="skills"
      className=" -scroll-mt-96 lg:mt-10 py-20 px-5 lg:px-14 relative"
    >
      <SectionTitle classname="text-7xl">My Skills</SectionTitle>
      <div className="mt-10 grid grid-cols-3">{skillCards}</div>
    </section>
  );
};
