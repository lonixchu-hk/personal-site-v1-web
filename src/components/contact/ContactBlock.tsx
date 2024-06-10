import React from "react";
import Link from "next/link";
import { getIcon, IContactMethod } from "@/app/profileEntity";
import { sendGAEvent } from "@next/third-parties/google";

interface Props {
  contactMethod: IContactMethod;
}

const iconSize = 60;

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
      {getIcon(props.contactMethod.icon, iconSize)}{" "}
      <div className="mt-1 text-white">{props.contactMethod.name}</div>
    </Link>
  );
};
