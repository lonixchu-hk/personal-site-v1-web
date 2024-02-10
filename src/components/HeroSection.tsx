import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

interface Props {
  isDev: boolean;
}

export const HeroSection = (props: Props) => {
  return (
    <section className="h-full flex flex-col items-center justify-center relative">
      <div className="flex flex-col justify-center items-center drop-shadow-lg">
        <h1
          className={
            poppins.className + " text-white mb-4 text-9xl font-extrabold"
          }
        >
          {props.isDev ? `` : `Lonix Chu`}
        </h1>
        <h5 className="text-white mb-4 text-2xl pt-2 tracking-wider">
          {props.isDev
            ? `UNDER DEVELOPMENT...`
            : `SOFTWARE ENGINEER, FULL STACK DEVELOPER.`}
        </h5>
      </div>
    </section>
  );
};
