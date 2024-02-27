import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactBlock } from "./ContactBlock";
import { contactMethods } from "./data";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#763897] w-full h-64 py-10 border-t-4 border-white"
    >
      <SectionTitle classname="text-5xl md:text-6xl text-center">
        Contact Me!
      </SectionTitle>
      <div className="relative flex items-center mt-1 h-32">
        {contactMethods.map((contactMethod, index) => (
          <ContactBlock key={index} contactMethod={contactMethod} />
        ))}
      </div>
    </section>
  );
};
