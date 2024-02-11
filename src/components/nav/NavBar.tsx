"use client";

import Link from "next/link";
import React, { useState } from "react";
import { TopNavLink, SideNavLink } from "./NavLink";
import { IconMenu, IconX } from "@tabler/icons-react";

const navLinks = [
  { name: "// home", href: "/" },
  { name: "// skills", href: "/" },
  { name: "// work", href: "/" },
  { name: "// experience", href: "/" },
  { name: "// contact", href: "/" },
];

export const NavBar = () => {
  const [sideNavBarIsOpen, setIsShowSideNavBar] = useState(false);
  const showSideNavBarHandler = (hardcodeCondition: null | boolean = null) => {
    if (hardcodeCondition !== null) {
      setIsShowSideNavBar(hardcodeCondition);
    } else {
      setIsShowSideNavBar(!sideNavBarIsOpen);
    }
    console.log(sideNavBarIsOpen);
  };

  const topNavLinksEles = Array.from(navLinks).map((link, index) => {
    return (
      <TopNavLink
        key={index}
        index={"0" + (index + 1)}
        name={link.name}
        href={link.href}
      />
    );
  });

  const sidewNavLinksEles = Array.from(navLinks).map((link, index) => {
    return (
      <SideNavLink
        key={index}
        index={"0" + (index + 1)}
        name={link.name}
        href={link.href}
      />
    );
  });

  return (
    <nav className="absolute top-0 left-0 z-10 w-full">
      <div className="py-7 mx-10 relative">
        <div className="leftSide absolute grid gap-4 grid-cols-3 w-[200px]">
          {/* Nav Btn */}
          <div className="lg:hidden md:col-span-1 flex items-center">
            <IconMenu
              color="white"
              stroke="1"
              onClick={() => {
                showSideNavBarHandler();
              }}
            />
          </div>

          {/* Logo */}
          <div className="lg:col-span-full md:col-span-2">
            {/* update to image later */}
            <Link href="./" className="text-3xl text-[#fd8cff]">
              LonixChu._
            </Link>
          </div>
        </div>

        {/* Top Nav Links */}
        <div className="topNavBar lg:flex lg:justify-center lg:absolute lg:left-[50%] lg:translate-x-[-50%] w-[800px] h-[40px] hidden">
          <div className="items-center flex justify-between">
            {topNavLinksEles}
          </div>
        </div>
      </div>

      {/* Side Nav Links */}
      <div
        id="sideNavBarContainer"
        className={sideNavBarIsOpen ? "invisible" : "visible"}
      >
        <div
          className={
            (sideNavBarIsOpen ? "visible opacity-100" : "invisible opacity-0") +
            ` z-20 transition-opacity duration-300 w-full h-screen absolute left-0 top-0 bg-[#00000090]`
          }
          onClick={() => {
            showSideNavBarHandler(false);
          }}
        />
        <div
          className={
            (sideNavBarIsOpen ? "visible left-0" : "invisible left-[-500px]") +
            ` sideNavBar transition-all duration-300 w-[75%] flex flex-col absolute bg-white top-0 left-0 h-screen z-30 p-5`
          }
        >
          <div className="h-20 p-3">
            <IconX
              onClick={() => {
                showSideNavBarHandler(false);
              }}
            />
          </div>
          {sidewNavLinksEles}
        </div>
      </div>
    </nav>
  );
};
