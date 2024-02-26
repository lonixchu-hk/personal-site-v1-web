import React from "react";
import { HomeSection } from "@/components/HomeSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WorkSection } from "@/components/WorkSection";
import { ContactSection } from "@/components/ContactSection";

interface flowObject {
  name: string;
  href: string;
  component?: JSX.Element;
}

const underMaintenance = process.env.underMaintenance == "true";

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
  // {
  //   name: "work",
  //   href: "#work",
  //   component: !underMaintenance ? <WorkSection key="4" /> : null,
  // },
  {
    name: "contact",
    href: "#contact",
    component: !underMaintenance ? <ContactSection key="5" /> : null,
  },
];
