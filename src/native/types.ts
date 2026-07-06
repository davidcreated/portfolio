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
  architecture?: string;
  description: string;
  highlights?: string[];
  href: string;
  kind?: "first-party" | "contribution";
  links: ContactItem[];
  media?: string;
  role?: string;
  techStack?: string[];
  title: string;
};

export type ShowcaseItem = {
  aspectRatio: number;
  description: string;
  href: string;
  note?: string;
  screenshots: string[];
  tagline: string;
  title: string;
};

export type WritingItem = {
  excerpt: string;
  tag: string;
  title: string;
  url: string;
};

export type PortfolioData = {
  avatar: ImageSource;
  contact: ContactItem[];
  description: string;
  education: EducationItem[];
  headline: string;
  location: string;
  name: string;
  navbar: ContactItem[];
  mediumUrl: string;
  projects: ProjectItem[];
  resumeUrl: string;
  showcase: ShowcaseItem[];
  skills: string[];
  summary: string;
  work: WorkItem[];
  writing: WritingItem[];
};
