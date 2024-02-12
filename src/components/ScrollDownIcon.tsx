"use client";

import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import scrollDown from "../../public/scrollDown.json";

export const ScrollDownIcon = () => {
  return (
    <div className="w-full absolute bottom-24 flex justify-center">
      <Link className="w-16" href="#skills">
        <Lottie animationData={scrollDown} loop={true} />
      </Link>
    </div>
  );
};
