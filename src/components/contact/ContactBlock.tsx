import React from "react";
import Link from "next/link";
import { IContactMethod } from "@/app/profileEntity";
import { sendGAEvent } from "@next/third-parties/google";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandGmail,
  IconFileTypePdf,
} from "@tabler/icons-react";

interface Props {
  contactMethod: IContactMethod;
}

const iconSize = 60;
const iconMap = {
  IconBrandLinkedin: (
    <IconBrandLinkedin color="white" stroke={1} size={iconSize} />
  ),
  IconBrandGithub: <IconBrandGithub color="white" stroke={1} size={iconSize} />,
  IconBrandGmail: <IconBrandGmail color="white" stroke={1} size={iconSize} />,
  IconFileTypePdf: <IconFileTypePdf color="white" stroke={1} size={iconSize} />,
};

export const ContactBlock = (props: Props) => {
  return (
    <Link
      className={`rounded-lg mx-1 w-full h-full flex flex-col items-center justify-center bg-[${props.contactMethod.color}] bg-opacity-50 transition-all duration-300 hover:scale-[1.03]`}
      href={props.contactMethod.url}
      target="_blank"
      onClick={() =>
        sendGAEvent({
          event: "buttonClicked",
          value: `contactMe_${props.contactMethod.name}`,
        })
      }
    >
      {iconMap[props.contactMethod.icon]}{" "}
      <div className="mt-1 text-white">{props.contactMethod.name}</div>
    </Link>
  );
};
