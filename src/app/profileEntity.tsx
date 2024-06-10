import React from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandGmail,
  IconFileTypePdf,
  IconDeviceDesktop,
  IconBrandVue,
  IconCloudCode,
} from "@tabler/icons-react";

export interface IProfile {
  name: string;
  tagline: string;
  profileImage: string;
  profileImageAlt: string;
  contactMethods: IContactMethod[];
  skills: ISkill[];
  certifications: ICert[];
  experiences: IExperience[];
}

export interface IBasicProfile {
  name?: string;
  tagline?: string;
  summary?: string;
}

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

export interface ISkill {
  title1: string;
  title2: string;
  color: string;
  icon: string;
  content: string;
}

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

export interface IContactMethod {
  name: string;
  url: string;
  icon: string;
  color: string;
}

interface IconMap {
  [key: string]: React.ReactElement; // Index signature to allow string keys
}

const icons: IconMap = {
  IconBrandLinkedin: <IconBrandLinkedin color="white" stroke={1} />,
  IconBrandGithub: <IconBrandGithub color="white" stroke={1} />,
  IconBrandGmail: <IconBrandGmail color="white" stroke={1} />,
  IconFileTypePdf: <IconFileTypePdf color="white" stroke={1} />,
  IconDeviceDesktop: <IconDeviceDesktop color="white" stroke={1} />,
  IconBrandVue: <IconBrandVue color="white" stroke={1} />,
  IconCloudCode: <IconCloudCode color="white" stroke={1} />,
};

type IconKeys = keyof typeof icons;

// Function to get an icon by key
export const getIcon = (key: string, iconSize: number) => {
  let icon = icons[key as IconKeys];
  if (icon !== undefined) {
    icon = React.cloneElement(icon, {
      ...icon.props,
      size: iconSize,
    });
  }
  return icon;
};
