export interface IExperience {
  title: string[];
  company: string;
  companyLogo: string;
  companySite: string;
  employmentType: string;
  duration: string;
  description: string[];
  skills: string[];
}

export const experiences = [
  {
    title: ["Analyst Programmer"],
    company: "MaBelle Jewellery Company Limited",
    companySite: "https://www.mabelle.com/",
    companyLogo: "/mabelle_logo.jpg",
    employmentType: "Full-time",
    duration: "Jun 2023 — PRESENT",
    description: [
      "Head Booking System Develop. Integrating various existing booking CMS to a multi-functional internal system using .NET and Vue.js.",
      "Responsible for company Image Management System (IMS) revamping project, with test cases implementation and documentation",
      "Design and develop several WeChat Mini Programs (微信小程序) for business to serve Mainland customers, with WeCom integration.",
      "Propose and develop an integrated RFID solution with Flutter for capturing product data in customer in-store shopping journeys to enhance CRM businesses",
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
    companyLogo: "/ztore_logo.png",
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
    companyLogo: "/fimmick_logo.jpeg",
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
