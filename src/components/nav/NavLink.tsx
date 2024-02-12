import Link from "next/link";
import React from "react";

interface Props {
  index: string;
  name: string;
  href: string;
}

export const TopNavLink = (props: Props) => {
  return (
    <div>
      <Link href={props.href} className="text-white relative text-base mx-3">
        {/* $<small>cd </small> */}
        // {props.name}
        <div className="absolute right-0 top-[-16px] text-xs text-[#aaa]">
          {props.index}
        </div>
      </Link>
    </div>
  );
};

export const SideNavLink = (props: Props) => {
  return (
    <div className="h-10">
      <Link
        href={props.href}
        className="text-black relative text-base tracking-tighter"
      >
        // {props.name}
      </Link>
    </div>
  );
};
