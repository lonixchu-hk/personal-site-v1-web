import React from "react";
import { SectionTitle } from "./SectionTitle";
import { JourneyCard } from "./JourneyCard";

const experiences = [
  {
    title: ["Analyst Programmer"],
    company: "MaBelle Jewellery Company Limited",
    companySite: "https://www.mabelle.com/",
    employmentType: "Full-time",
    duration: "Jun 2023 — PRESENT",
    description: [
      "Headed Booking System Revamp. Integration on various existing booking CMS to a multi-functional internal system using C# and Vue.js.",
      "Responsible for company Image Management System (IMS) revamping project, with testcases implementation and documentation",
      "Design and develop several Wechat Mini Programs (微信小程序) for business to serve Mainland customers, with WeCom integration.",
      "Responsible for Internal Systems, E-commerce Site, CRM Sites, POS System and Supply Chain System development",
      "Responsible for company's internal and external system maintenance and support",
    ],
    skills: [
      "C#",
      ".NET",
      "Vue.js",
      "Windows Dev",
      "Windows Server",
      "WeChat Mini Program",
      "Microsoft SQL Server",
      "Flutter",
    ],
  },
  {
    title: ["Senior Programmer", "Programmer"],
    company: "Ztore 士多",
    companySite: "https://www.ztore.com/",
    employmentType: "Full-time",
    duration: "Jul 2020 — Jun 2023",
    description: [
      "Responsible for Ztore and Neigbuy development, including API service and CMS, managing E-commerce service with over 1.4M customers and 8M orders",
      "Headed multiple services revamps and development as both project and IT PIC. Service: Supply Chain, Accounting, Trading, Promotion, etc.",
      "Responsible for different payment gateway integration to help business growth.",
      "TDD for development",
    ],
    skills: [
      "PHP",
      "Laravel",
      "MySQL",
      "AWS",
      "Linux",
      "Docker",
      "Javascript",
      "JQuery",
      "TDD",
      "Payment Gateway",
      "Supply Chain",
    ],
  },
  {
    title: ["Data Solution Developer", "Graduate Trainee"],
    company: "Fimmick Limited",
    companySite: "https://www.fimmick.com/",
    employmentType: "Full-time",
    duration: "Jul 2018 — Jul 2020",
    description: [
      "Work on CRM and Analytic products and projects design and full-stack development to collect and analyze data, helping client's CRM businesses.",
      "Products: Marketing Automation Tool, Stampcard System, Chatbot, Payment Solutions.",
      "Rotated as Web Developer, CRM Data Analyst and Account Executive in Graduate Trainee Programme.",
      "Designed, developed and maintain a web based CRM System to enhence Consumer Journey setup process on both frontend and backend side.",
      "Worked on social media marketing, serving accounts and launching online campaigns.",
    ],
    skills: [
      "HTML",
      "CSS",
      "PHP",
      "Laravel",
      "MySQL",
      "Javascript",
      "JQuery",
      "CRM",
      "Customer Journey",
      "Google Analytics",
      "Facebook Pixel",
    ],
  },
];

export const ExperienceSection = () => {
  const journeyCards = Array.from(experiences).map((experience, index) => {
    return (
      <JourneyCard
        key={index}
        experience={experience}
        isLast={index == experiences.length - 1}
      />
    );
  });

  return (
    <section
      id="experience"
      className="scroll-mt-32 lg:mt-10 py-20 px-5 lg:px-14 relative grid grid-cols-12"
    >
      <div className="text-white col-span-full md:col-span-4 mb-14">
        <SectionTitle classname="text-5xl md:text-7xl text-center lg:text-left">
          My Journey
        </SectionTitle>
        <p>
          A business & CS student grduated from CityU HK with more than 6 years
          of software developing experience of working in Luxury, CRM, Retail
          and e-Commerce industry.
        </p>
      </div>
      <div className="journeyProcess col-span-full md:col-start-6 md:col-span-7">
        {journeyCards}
      </div>
    </section>
  );
  ``;
};
