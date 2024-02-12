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
    title: "Software Development",
    color: "#ffffff",
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
    title: "Frontend Development",
    color: "#ffffff",
    icon: <IconBrandVue stroke={1} size={skillIconSize} />,
    content: (
      <div>
        Over 6 years of development experience in HTML, CSS, JS, Vue, React and
        NextJS frameworks.
      </div>
    ),
  },
  {
    title: "Cloud Computing",
    color: "#ffffff",
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
