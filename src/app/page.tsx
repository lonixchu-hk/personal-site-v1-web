"use client";

import React, { useEffect, useState } from "react";
import { NavBar } from "@/components/nav/NavBar";
import { BackToTopBtn } from "@/components/BackToTopBtn";
import { siteFlow } from "./siteFlow";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = siteFlow.map((section, index) => {
    return section.component;
  });
  return (
    <main className="bg-[#1a191d] flex flex-col items-center text-white">
      <NavBar scrollY={scrollY} />
      <BackToTopBtn scrollY={scrollY} />
      {sections}
      <Footer />
    </main>
  );
}
