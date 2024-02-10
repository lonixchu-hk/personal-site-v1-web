import Link from "next/link";
import React from "react";
import { NavLink } from "./NavLink";

const navLinks = [
  { name: "// home", href: "/" },
  { name: "// skills", href: "/" },
  { name: "// work", href: "/" },
  { name: "// experience", href: "/" },
  { name: "// contact", href: "/" },
];

export const NavBar = () => {
  const navLinksEles = Array.from(navLinks).map((link, index) => {
    return (
      <NavLink
        key={index}
        index={"0" + (index + 1)}
        name={link.name}
        href={link.href}
      />
    );
  });
  return (
    <nav className="absolute top-0 left-0 z-10">
      <div className="grid grid-cols-6 gap-4 py-7 mx-10">
        <div>
          {/* update to image later */}
          <Link href="./" className="text-3xl text-[#fd8cff]">
            LonixChu._
          </Link>
        </div>
        <div className="col-span-5 flex items-center justify-evenly px-20">
          {navLinksEles}
        </div>
      </div>
    </nav>
  );
};
