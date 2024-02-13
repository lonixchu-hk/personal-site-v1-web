import React from "react";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"] });

interface Props {
  children: string;
  // classname: string;
}

export const SkillBadge = (props: Props) => {
  return (
    <div
      className={`rounded-xl bg-[#e0e0e020] w-fit whitespace-nowrap py-1 px-3 text-[0.8rem] text-[#d0d0d0e0] mr-1.5 mt-2 ${robotoMono.className}`}
    >
      <h1>{props.children}</h1>
    </div>
  );
};
