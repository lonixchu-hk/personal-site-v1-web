import React from "react";
import { SectionTitle } from "./SectionTitle";
import { ContactBlock } from "./ContactBlock";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandGmail,
  IconFileTypePdf,
} from "@tabler/icons-react";

const contactMethods = [
  {
    name: "LinkedIn",
    url: "https://hk.linkedin.com/in/lonixchu",
    icon: <IconBrandLinkedin color="white" stroke={1} size={70} />,
    color: "#0a66c2",
  },
  {
    name: "GitHub",
    url: "https://github.com/lonixchu-hk",
    icon: <IconBrandGithub color="white" stroke={1} size={70} />,
    color: "#0d1117",
  },
  {
    name: "Email",
    url: "mailto:lonixchu.hk@gmail.com",
    icon: <IconBrandGmail color="white" stroke={1} size={70} />,
    color: "#ff6a00",
  },
  {
    name: "CV",
    url: "resume.pdf",
    icon: <IconFileTypePdf color="white" stroke={1} size={70} />,
    color: "#363636",
  },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#763897] w-full h-64 py-10 border-t-4 border-white"
    >
      <SectionTitle classname="text-5xl md:text-6xl text-center">
        Contact Me!
      </SectionTitle>
      <div className="relative flex items-center mt-5 h-32">
        {contactMethods.map((contactMethod, index) => (
          <ContactBlock key={index} contactMethod={contactMethod} />
        ))}
      </div>
    </section>
  );
};
