import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

interface Props {
  children: string;
  className: string;
}

export const SectionTitle = (props: Props) => {
  return (
    <h1
      className={`${poppins.className} text-white mb-4 font-extrabold tracking-wide ${props.className}`}
    >
      {props.children}
    </h1>
  );
};
