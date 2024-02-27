import React from "react";
import Link from "next/link";
import { IContactMethod } from "./data";

interface Props {
  contactMethod: IContactMethod;
}

export const ContactBlock = (props: Props) => {
  return (
    <Link
      className={`rounded-lg mx-1 w-full h-full flex flex-col items-center justify-center bg-[${props.contactMethod.color}] bg-opacity-50 transition-all duration-300 hover:scale-[1.03]`}
      href={props.contactMethod.url}
      target="_blank"
    >
      {props.contactMethod.icon}{" "}
      <div className="mt-1 text-white">{props.contactMethod.name}</div>
    </Link>
  );
};
