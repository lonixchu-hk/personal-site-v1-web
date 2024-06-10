import React from "react";
import { HomeSection } from "@/components/home/HomeSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { CertSection } from "@/components/certifications/CertSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
// import { WorkSection } from "@/components/WorkSection";
import { ContactSection } from "@/components/contact/ContactSection";

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
    component: (
      <HomeSection
        underMaintenance={underMaintenance}
        key="1"
        basicProfile={{}}
      />
    ),
  },
  {
    name: "skills",
    href: "#skills",
    component: !underMaintenance ? <SkillsSection key="2" data={[]} /> : null,
  },
  {
    name: "certifications",
    href: "#certifications",
    component: !underMaintenance ? <CertSection key="3" data={[]} /> : null,
  },
  {
    name: "experience",
    href: "#experience",
    component: !underMaintenance ? (
      <ExperienceSection key="4" basicProfile={{}} data={[]} />
    ) : null,
  },
  // {
  //   name: "work",
  //   href: "#work",
  //   component: !underMaintenance ? <WorkSection key="5" data={null} /> : null,
  // },
  {
    name: "contacts",
    href: "#contacts",
    component: !underMaintenance ? <ContactSection key="6" data={[]} /> : null,
  },
];
