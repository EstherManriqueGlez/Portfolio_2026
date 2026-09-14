import type {
  Contact,
  ExperienceItem,
  NavLink,
  Project,
  SkillCard,
  SkillCategory,
} from '@/types/content';

export type Lang = 'en' | 'es';

export interface HeroContent {
  intro: string;
  highlight: string;
  outro: string;
  logoAlt: string;
  viewWork: string;
  letsTalk: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  paragraph: string;
  manifesto: string;
}

export interface ExperienceContent {
  title: string;
  items: ExperienceItem[];
}

export interface ProjectsContent {
  title: string;
  subtitle: string;
  items: Project[];
}

export interface SkillsContent {
  title: string;
  subtitle: string;
  filterAria: string;
  all: string;
  tech: string;
  categoryLabels: Record<SkillCategory, string>;
  cards: SkillCard[];
}

export interface MetaContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogLocale: string;
}

export interface ProjectCardContent {
  challenge: string;
  solution: string;
  result: string;
  github: string;
  liveDemo: string;
  imageFallback: string;
  variantGroup: string;
  imgAlt: (title: string) => string;
  sourceAria: (label: string) => string;
  liveAria: (label: string) => string;
  sourceAriaDefault: string;
  liveAriaDefault: string;
}

export interface UiContent {
  skipLink: string;
  errorBoundary: {
    title: string;
    message: string;
  };
  navbar: {
    label: string;
    logoAlt: string;
    switchToLight: string;
    switchToDark: string;
    openMenu: string;
    closeMenu: string;
    langGroup: string;
  };
  projectCard: ProjectCardContent;
}

export interface Content {
  navLinks: NavLink[];
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  skills: SkillsContent;
  contact: {
    title: string;
  };
  contacts: Contact[];
  footer: {
    manifesto: string;
  };
  meta: MetaContent;
  ui: UiContent;
}
