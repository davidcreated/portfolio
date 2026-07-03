import { ImageSourcePropType } from "react-native";

export type ImageSource = ImageSourcePropType | { uri: string };

export type ContactItem = {
  display?: string;
  label: string;
  url: string;
};

export type EducationItem = {
  degree: string;
  logo?: ImageSource;
  period?: string;
  school: string;
  url: string;
};

export type WorkItem = {
  company: string;
  description: string;
  employmentType: string;
  location: string;
  locationType: string;
  logo?: ImageSource;
  logoText: string;
  role: string;
  url: string;
};

export type ProjectItem = {
  description: string;
  href: string;
  links: ContactItem[];
  media?: string;
  title: string;
};

export type PortfolioData = {
  avatar: ImageSource;
  contact: ContactItem[];
  description: string;
  education: EducationItem[];
  headline: string;
  hobbies: string[];
  location: string;
  name: string;
  navbar: ContactItem[];
  projects: ProjectItem[];
  resumeUrl: string;
  skills: string[];
  summary: string;
  work: WorkItem[];
};
