export interface NavLink {
  name: string;
  href: string;
}

export interface ProjectVariant {
  id: string;
  label: string;
  tech: string[];
  desc: string;
  challenge: string;
  solution: string;
  result: string;
  image?: string;
  link: string;
  github: string;
}

export interface Project {
  title: string;
  tech: string[];
  desc: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  link: string;
  github: string;
  badge?: string;
  variants?: ProjectVariant[];
}

export interface ExperienceStage {
  period: string;
  role: string;
  projectName: string;
  projectDesc?: string;
  description?: string[];
  technologies: string[];
}

export interface ExperienceItem {
  company: string;
  totalPeriod: string;
  currentRole: string;
  stages: ExperienceStage[];
  // For single role companies (like Spiralis)
  role?: string;
  period?: string;
  projectName?: string;
  projectDesc?: string;
  description?: string[];
  technologies?: string[];
}

export type SkillCategory = 'Core Frontend' | 'Architecture' | 'UI/UX Tools' | 'How I Work';

export type SkillKind = 'capability' | 'tech';

export interface SkillCard {
  id: string;
  kind: SkillKind;
  title: string;
  category: SkillCategory;
  desc?: string;
}

export interface Contact {
  icon: string;
  label: string;
  value: string;
  href?: string;
}
