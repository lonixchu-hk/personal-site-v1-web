import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { BackgroundOverlay } from "@/components/BackgroundOverlay";
import { ScrollDownIcon } from "@/components/ScrollDownIcon";

interface Props {
  underMaintenance: boolean;
}

export const HomeSection = (props: Props) => {
  return (
    <section id="home" className="flex flex-col w-full h-screen relative">
      <HeroSection underMaintenance={props.underMaintenance} />
      <BackgroundOverlay underMaintenance={props.underMaintenance} />
      {props.underMaintenance ? null : <ScrollDownIcon />}
    </section>
  );
};
