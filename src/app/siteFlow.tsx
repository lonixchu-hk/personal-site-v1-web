import React from "react";
import { HomeSection } from "@/components/HomeSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";

interface flowObject {
  name: string;
  href: string;
  component?: JSX.Element;
}

const underMaintenance = process.env.underMaintenance == "true";
console.log(
  underMaintenance,
  process.env.underMaintenance,
  process.env.UNDER_MAINTENANCE
);

export const siteFlow = [
  {
    name: "home",
    href: "#home",
    component: <HomeSection underMaintenance={underMaintenance} key="1" />,
  },
  {
    name: "skills",
    href: "#skills",
    component: !underMaintenance ? <SkillsSection key="2" /> : null,
  },
  {
    name: "experience",
    href: "#experience",
    component: !underMaintenance ? <ExperienceSection key="3" /> : null,
  },
  {
    name: "work",
    href: "/",
    component: null,
  },
  {
    name: "contact",
    href: "/",
    component: null,
  },
];
