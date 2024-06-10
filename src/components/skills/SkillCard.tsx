import React from "react";
import { Poppins } from "next/font/google";
import { ISkill } from "@/app/profileEntity";
import {
  IconDeviceDesktop,
  IconBrandVue,
  IconCloudCode,
} from "@tabler/icons-react";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

interface Props {
  skill: ISkill;
}

const skillIconSize = "50";
const iconMap = {
  IconDeviceDesktop: <IconDeviceDesktop stroke={1} size={skillIconSize} />,
  IconBrandVue: <IconBrandVue stroke={1} size={skillIconSize} />,
  IconCloudCode: <IconCloudCode stroke={1} size={skillIconSize} />,
};

export const SkillCard = (props: Props) => {
  const backStrokeColor = `shadow-[${props.skill.color}]`;
  return (
    <div className="lg:col-span-1 col-span-full border border-white flex flex-col px-4 pt-6 pb-10 text-white mb-4 max-w-96">
      <div className="flex items-end mb-4">
        <span className="p-3">{iconMap[props.skill.icon]}</span>
        <div className={`${poppins.className} text-2xl font-bold ml-1`}>
          <div
            className={`w-fit px-[1px] pr-1 leading-6 shadow-inner2 ${backStrokeColor}`}
          >
            {props.skill.title1}
          </div>
          <div className="">{props.skill.title2}</div>
        </div>
        <div className="cardTitleDeco"></div>
      </div>
      <div className="px-1">
        <div className="text-[#777] text-sm pl-1 font-extralight">{`<h3>`}</div>
        <div className="border-l-2 border-[#777] ml-5 my-1 pl-5 font-extralight">
          {props.skill.content}
        </div>
        <div className="text-[#777] text-sm pl-1 font-extralight">{`</h3>`}</div>
      </div>
    </div>
  );
};
