import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandGmail,
  IconFileTypePdf,
} from "@tabler/icons-react";

export interface IContactMethod {
  name: string;
  url: string;
  icon: JSX.Element;
  color: string;
}

const iconSize = 60;
export const contactMethods = [
  {
    name: "LinkedIn",
    url: "https://hk.linkedin.com/in/lonixchu",
    icon: <IconBrandLinkedin color="white" stroke={1} size={iconSize} />,
    color: "#0a66c2",
  },
  {
    name: "GitHub",
    url: "https://github.com/lonixchu-hk",
    icon: <IconBrandGithub color="white" stroke={1} size={iconSize} />,
    color: "#0d1117",
  },
  {
    name: "Email",
    url: "mailto:lonixchu.hk@gmail.com",
    icon: <IconBrandGmail color="white" stroke={1} size={iconSize} />,
    color: "#ff6a00",
  },
  {
    name: "CV",
    url: "resume.pdf",
    icon: <IconFileTypePdf color="white" stroke={1} size={iconSize} />,
    color: "#363636",
  },
];
