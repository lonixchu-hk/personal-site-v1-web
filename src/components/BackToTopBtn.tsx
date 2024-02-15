import React from "react";
import { IconSquareRoundedArrowUpFilled } from "@tabler/icons-react";

interface Props {
  scrollY: number;
}

export const BackToTopBtn = (props: Props) => {
  return (
    <div
      className={`${
        props.scrollY > 500 ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-500 fixed right-2 bottom-20 h-12 w-12 lg:h-16 lg:w-16 bg-[#ffffff80] rounded-xl z-10 flex items-center justify-center cursor-pointer hover:bg-[#aaaaaa80] hover:shadow-xl text-[#ddd]`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <IconSquareRoundedArrowUpFilled stroke={1.5} size={40} />
    </div>
  );
};
