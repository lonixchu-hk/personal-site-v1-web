import React from "react";
import Link from "next/link";
import { IconExternalLink, IconArrowCurveLeft } from "@tabler/icons-react";
import { SkillBadge } from "@/components/SkillBadge";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

interface Props {
  experience: Experience;
  isLast: boolean;
}

interface Experience {
  title: string[];
  company: string;
  companySite: string;
  employmentType: string;
  duration: string;
  description: string[];
  skills: string[];
}

export const JourneyCard = (props: Props) => {
  const descListElements = props.experience.description.map((desc, index) => {
    return (
      <li key={index} className="mb-2">
        {desc}
      </li>
    );
  });

  const skillListElements = props.experience.skills.map((skill, index) => {
    return <SkillBadge key={index}>{skill}</SkillBadge>;
  });

  const titleElements = props.experience.title.map((title, index) => {
    return (
      <div
        key={index}
        className={`journey-content-title flex items-center ${
          index == 0 ? "text-2xl" : "text-base text-[#777]"
        }`}
      >
        <div className={index == 0 ? "hidden" : "block mr-2"}>
          <IconArrowCurveLeft stroke={1.5} size={18} />
        </div>
        {title}
      </div>
    );
  });

  return (
    <div className="journey-timeline-block text-white flex">
      <div className="journey-timeline flex flex-col items-center mr-10 pt-2 text-sm text-[#809090]">
        <div className="journey-timeline-duration w-24">
          {props.experience.duration}
        </div>
        <div className="my-3 processLine w-[1px] h-[calc(100%+4rem)] bg-[#777]"></div>
        <div className={`${props.isLast ? "block" : "hidden"} text-center`}>
          Journey Start
        </div>
      </div>
      <div className="journey-content-block mb-16">
        <div className="journey-content-headline mb-5">
          {titleElements}
          <div className="journey-content-company text-[#aaa] text-base">
            <Link
              href={props.experience.companySite}
              target="_blank"
              className="flex items-center"
            >
              <span className="mr-2">{props.experience.company}</span>
              <IconExternalLink stroke={1} size={15} />
            </Link>
            Full-time
          </div>
        </div>
        <div
          className={`journey-content-desc leading-6 text-[#ccc] ${roboto.className} font-light`}
        >
          <ul className="list-none list-inside">{descListElements}</ul>
        </div>
        <div className="journey-content-skills-container w-full flex flex-wrap mt-6 whitespace-normal">
          {skillListElements}
        </div>
      </div>
    </div>
  );
};
