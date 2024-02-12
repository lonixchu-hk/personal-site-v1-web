"use client";

import React, { use } from "react";
import { TypeAnimation } from "react-type-animation";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

interface Props {
  underMaintenance: boolean;
}

export const HeroSection = (props: Props) => {
  return (
    <section className="h-full flex flex-col items-center justify-center relative px-10 bg-[url('/main-bg.jpg')] bg-cover bg-center">
      <div className="flex flex-col justify-center items-center drop-shadow-lg xl2:px-10 z-[2]">
        <h1
          className={
            poppins.className +
            " text-white text-center mb-4 text-8xl font-extrabold"
          }
        >
          {props.underMaintenance ? `` : `LONIX CHU`}
        </h1>
        <h5 className="text-white text-center mb-4 text-2xl  leading-6 tracking-wider">
          {props.underMaintenance
            ? `UNDER DEVELOPMENT...`
            : // <TypeAnimation
              //   sequence={[
              //     "UNDER DEVELOPMENT...",
              //     5000,
              //     "UNDER MAINTENANCE...",
              //     5000,
              //   ]}
              //   wrapper="span"
              //   speed={30}
              //   style={{ fontSize: "2em", display: "inline-block" }}
              //   repeat={Infinity}
              // />
              `SOFTWARE ENGINEER, FULL STACK DEVELOPER.`}
        </h5>
      </div>
    </section>
  );
};
