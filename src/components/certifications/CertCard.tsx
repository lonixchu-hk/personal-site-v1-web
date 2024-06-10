import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";
import { ICert } from "@/app/profileEntity";

interface Props {
  cert: ICert;
}

export const CertCard = (props: Props) => {
  return (
    <div className="scale-90 sm:scale-100 relative inline-flex items-center h-64 w-[28rem]  bg-[#fff] rounded-lg bg-cover backdrop-blur-lg overflow-hidden mx-5 text-sm tracking-tighter transition-all ease-in-out duration-300 sm:hover:scale-[1.02]">
      <div
        className={`cert-image-type absolute top-5 right-0 w-[50%] h-6 flex justify-center items-center bg-opacity-50 bg-[${props.cert.color}] z-[6]`}
      >
        {props.cert.type}
      </div>
      <div className="cert-image-block w-fit absolute top-[-50px] left-[-50px]">
        <Image
          src={props.cert.certImage}
          width={250}
          height={250}
          alt="Cert image"
        />
      </div>
      <div className="cert-nature-block w-32 absolute bottom-2 left-2 text-5xl font-extrabold opacity-25">
        {props.cert.nature}
      </div>
      <div
        className={`cert-image-overlay top-0 left-0 h-full w-full z-[5] bg-transparent bg-gradient-to-br from-[#ffffffa0] from-30% to-[${props.cert.color}ff] to-100%`}
      />

      <div className="z-[6] text-[#454545]">
        <div className="w-60 absolute top-[4.5rem] right-3 whitespace-normal">
          <h3 className="text-lg font-semibold">{props.cert.title}</h3>
          <div className="flex items-center mt-2">
            <Image
              src={props.cert.issuerImage}
              width={30}
              height={30}
              alt="Issuer Logo"
            />
            <span className="ml-3">{props.cert.issuer}</span>
          </div>
        </div>

        <div className="absolute bottom-3 right-5 text-right">
          <span>Issue Date: {props.cert.issueDate}</span>
          {props.cert.certLink != "" ? (
            <Link
              href={props.cert.certLink}
              target="_blank"
              className="underline flex items-center"
            >
              <span className="mr-2">View Certificate</span>
              <IconExternalLink stroke={1} size={15} />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
