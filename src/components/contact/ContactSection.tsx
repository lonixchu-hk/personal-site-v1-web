import React from "react";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactBlock } from "./ContactBlock";
import { IContactMethod } from "@/app/profileEntity";

interface Props {
  data: IContactMethod[];
}

export const ContactSection = (props: Props) => {
  const contacts = props.data ?? [];
  return (
    contacts.length > 0 && (
      <section
        id="contact"
        className="bg-[#763897] w-full h-72 py-8 px-5 border-t-4 border-white"
      >
        <SectionTitle className="text-5xl md:text-6xl text-center">
          Contact Me!
        </SectionTitle>
        <div className="relative flex items-center mt-8 h-32">
          {contacts.map((contact, index) => (
            <ContactBlock key={index} contactMethod={contact} />
          ))}
        </div>
      </section>
    )
  );
};
