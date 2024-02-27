import {
  IconDeviceDesktop,
  IconBrandVue,
  IconCloudCode,
} from "@tabler/icons-react";

export interface ICert {
  type: string;
  nature: string;
  title: string;
  issuer: string;
  issuerImage: string;
  issueDate: string;
  certImage: string;
  certLink: string;
  color: string;
}

export interface ISkillObj {
  title1: string;
  title2: string;
  color: string;
  icon: JSX.Element;
  content: JSX.Element;
}

export const certifications = [
  {
    type: "Professional Certificate",
    nature: "Cloud",
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services (AWS)",
    issuerImage: "/aws_logo.jpeg",
    issueDate: "Nov 2022",
    certImage: "/AWS_ASS_BADGE.png",
    certLink:
      "https://www.credly.com/badges/bc3f3e09-cb4c-4c85-a0f4-164ed251e32b",
    color: "#f79400",
  },
  {
    type: "Professional Certificate",
    nature: "Cloud",
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services (AWS)",
    issuerImage: "/aws_logo.jpeg",
    issueDate: "Nov 2022",
    certImage: "/AWS_DVA_BADGE.png",
    certLink:
      "https://www.credly.com/badges/8ced859a-65b5-491d-b064-adfce1da914b",
    color: "#f79400",
  },
  {
    type: "Professional Certificate",
    nature: "Cloud",
    title: "Microsoft Certified: Azure Developer Asso.",
    issuer: "Microsoft",
    issuerImage: "/ms_logo.jpeg",
    issueDate: "Nov 2023",
    certImage: "/MS_ASS_BADGE.svg",
    certLink:
      "https://learn.microsoft.com/api/credentials/share/en-us/LonixChu-1373/F02EF6A571E68827?sharingId",
    color: "#8462ed",
  },
  {
    type: "Professional Certificate",
    nature: "Cloud",
    title: "ACA Cloud Computing Certification",
    issuer: "Alibaba Cloud",
    issuerImage: "/ali_logo.jpeg",
    issueDate: "Dec 2023",
    certImage: "/ACA_COM_BADGE.png",
    certLink: "",
    color: "#ff6a00",
  },
  {
    type: "Professional Certificate",
    nature: "Cloud",
    title: "ACA Developer Certification",
    issuer: "Alibaba Cloud",
    issuerImage: "/ali_logo.jpeg",
    issueDate: "Dec 2023",
    certImage: "/ACA_DEV_BADGE.png",
    certLink: "",
    color: "#ff6a00",
  },
  {
    type: "Course Certificate",
    nature: "AI",
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    issuerImage: "/coursera_logo.jpeg",
    issueDate: "Sep 2023",
    certImage: "/COURSERA_BADGE.png",
    certLink:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/TJXC2VWPSUF9",
    color: "#e0eaf6",
  },
];

const skillIconSize = "50";
export const skills = [
  {
    title1: "Software",
    title2: "Development",
    color: "#df058d",
    icon: <IconDeviceDesktop stroke={1} size={skillIconSize} />,
    content: (
      <div>
        Experienced in both functional and OOP: JavaScript, TypeScript, PHP,
        .NET.
        <br />
        Skilled in developing large-scale web, mobile and desktop applications.
      </div>
    ),
  },
  {
    title1: "Frontend Dev",
    title2: "React, Vue",
    color: "#2c49d8",
    icon: <IconBrandVue stroke={1} size={skillIconSize} />,
    content: (
      <div>
        Over 6 years of development experience in HTML, CSS, JS, QJuery, Vue,
        React and NextJS frameworks.
      </div>
    ),
  },
  {
    title1: "Cloud",
    title2: "Computing",
    color: "#ff6b2b",
    icon: <IconCloudCode stroke={1} size={skillIconSize} />,
    content: (
      <div>
        Equiped with multiple cloud certifications: AWS-SAA, AWS-CDA, Azure
        Developer Associate, ACA Cloud Computing, ACA Developer.
      </div>
    ),
  },
];
