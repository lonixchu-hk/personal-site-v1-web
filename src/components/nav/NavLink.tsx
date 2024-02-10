import Link from "next/link";
import React from "react";

interface Props {
  index: string;
  name: string;
  href: string;
}

export const NavLink = (props: Props) => {
  return (
    <div>
      <Link href={props.href} className="text-white relative">
        {props.name}
        <div className="absolute right-0 top-[-16px] text-xs text-[#aaa]">
          {props.index}
        </div>
      </Link>
    </div>
  );
};
