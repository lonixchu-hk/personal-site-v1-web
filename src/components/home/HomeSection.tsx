import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { BackgroundOverlay } from "@/components/home/BackgroundOverlay";
import { ScrollDownIcon } from "@/components/home/ScrollDownIcon";

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
