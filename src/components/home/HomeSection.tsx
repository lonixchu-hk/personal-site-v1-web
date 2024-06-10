import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { BackgroundOverlay } from "@/components/home/BackgroundOverlay";
import { ScrollDownIcon } from "@/components/home/ScrollDownIcon";
import { IBasicProfile } from "@/app/profileEntity";

interface Props {
  underMaintenance: boolean;
  basicProfile: IBasicProfile;
}

export const HomeSection = (props: Props) => {
  return (
    <section id="home" className="flex flex-col w-full h-screen relative">
      <HeroSection
        underMaintenance={props.underMaintenance}
        basicProfile={props.basicProfile}
      />
      <BackgroundOverlay underMaintenance={props.underMaintenance} />
      {props.underMaintenance ? null : <ScrollDownIcon />}
    </section>
  );
};
