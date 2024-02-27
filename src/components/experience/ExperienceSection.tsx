import React from "react";
import { SectionTitle } from "../SectionTitle";
import { JourneyCard } from "./JourneyCard";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { experiences } from "./data";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className=" lg:mt-10 max-w-[1400px] py-20 px-5 lg:px-14 relative grid grid-cols-12"
    >
      <div className="text-white col-span-full md:col-span-4 mb-14">
        <SectionTitle classname="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-center md:text-left">
          My Journey
        </SectionTitle>
        <p className="mt-5">
          A business & CS student grduated from CityU HK with more than 6 years
          of software developing experience of working in Luxury, CRM, Retail
          and e-Commerce industry.
        </p>
        <Link
          href="resume.pdf"
          target="_blank"
          className="underline flex items-center mt-10"
        >
          View Full Résumé
          <IconArrowUpRight className="ml-2" stroke={1} size={15} />
        </Link>
      </div>
      <div className="journeyProcess col-span-full md:col-start-6 md:col-span-7">
        {experiences.map((experience, index) => (
          <JourneyCard
            key={index}
            experience={experience}
            isLast={index == experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
  ``;
};
