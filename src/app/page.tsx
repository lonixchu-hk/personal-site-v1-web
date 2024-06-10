"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from "@/components/nav/NavBar";
import { BackToTopBtn } from "@/components/BackToTopBtn";
import { siteFlow } from "./siteFlow";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://personal-website-data-fetcher.azurewebsites.net/api/GetFullProfile"
        );
        setProfile(response.data[0]); // Assuming only one profile document
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchData();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = siteFlow.map((section, index) => {
    // get section data
    let component = section.component;
    if (component?.props.data !== undefined) {
      component = React.cloneElement(component, {
        ...component.props,
        data: profile[section.name] ?? [],
      });
    }
    if (component?.props.basicProfile !== undefined) {
      component = React.cloneElement(component, {
        ...component.props,
        basicProfile: profile["basic"] ?? {},
      });
    }
    return component;
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
