import React from "react";
import Link from "next/link";
import { IconExternalLink, IconArrowCurveLeft } from "@tabler/icons-react";
import { SkillBadge } from "@/components/skills/SkillBadge";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

interface Props {
  experience: IExperience;
  isLast: boolean;
}

export const JourneyCard = (props: Props) => {
  return (
    <div className="journey-timeline-block text-white lg:p-10 flex rounded-md transition-all ease-in-out lg:hover:scale-[1.02] duration-300 lg:hover:cursor-pointer lg:hover:bg-[#56535f50]">
      <div className="journey-timeline flex flex-col items-center mr-10 text-sm text-[#809090]">
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
          {props.experience.title.map((title, index) => (
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
          ))}
          <div className="journey-content-company text-[#aaa] text-base">
            <Link
              href={props.experience.companySite}
              target="_blank"
              className="flex items-center"
            >
              <Image
                src={props.experience.companyLogo}
                width={25}
                height={25}
                alt="Company Logo"
                className="mr-3 rounded-md"
              />
              <span className="mr-2">{props.experience.company}</span>
              <IconExternalLink stroke={1} size={15} />
            </Link>
            Full-time
          </div>
        </div>
        <div
          className={`journey-content-desc leading-6 text-[#ccc] ${roboto.className} font-light`}
        >
          <ul className="list-none list-inside">
            {props.experience.description.map((desc, index) => (
              <li key={index} className="mb-2">
                {desc}
              </li>
            ))}
          </ul>
        </div>
        <div className="journey-content-skills-container w-full flex flex-wrap mt-6 whitespace-normal">
          {props.experience.skills.map((skill, index) => (
            <SkillBadge key={index}>{skill}</SkillBadge>
          ))}
        </div>
      </div>
    </div>
  );
};
