import React from "react";
import Link from "next/link";

interface Props {
  contactMethod: ContactMethod;
}

interface ContactMethod {
  name: string;
  url: string;
  icon: JSX.Element;
  color: string;
}

export const ContactBlock = (props: Props) => {
  return (
    <Link
      className={`w-full h-full flex flex-col items-center justify-center bg-[${props.contactMethod.color}] bg-opacity-50 transition-all duration-300 hover:scale-[1.03]`}
      href={props.contactMethod.url}
      target="_blank"
    >
      {props.contactMethod.icon}{" "}
      <div className="mt-5 text-white">{props.contactMethod.name}</div>
    </Link>
  );
};
