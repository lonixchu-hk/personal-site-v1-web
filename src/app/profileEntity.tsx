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
  name: string;
  tagline: string;
  summary: string;
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
  icon: JSX.Element;
  content: JSX.Element;
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
