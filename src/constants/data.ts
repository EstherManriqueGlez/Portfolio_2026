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
}

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const projects = [
  {
    title: 'AVBINME — Corporate Valuation & Appraisal Platform',
    tech: ['React 19', 'TypeScript', 'Vite', 'Sass/SCSS', 'React Router'],
    desc: 'Legacy React modernization and frontend rebuild for a premium B2B corporate platform.',
    challenge:
      'Modernize a legacy React application while communicating technical rigor, legal validity, and institutional authority to corporate and professional audiences.',
    solution:
      'Rebuilt the frontend with React, TypeScript and Vite, introducing a modern component architecture, responsive design system, multi-page routing, lazy loading, and conversion-focused CTAs.',
    result:
      'A responsive, accessible, and maintainable platform with a premium institutional identity, deployed to GitHub Pages and optimized to guide visitors toward client contact.',
    image: 'src/assets/images/avbinme.png',
    link: 'https://esthermanriqueglez.github.io/avbinme/',
    github: 'https://github.com/EstherManriqueGlez/avbinme',
  },
  {
    title: 'Harborshine Cleaning — Landing Page',
    tech: [
      'HTML',
      'Tailwind CSS v4',
      'Vite',
      'GSAP',
      'Alpine.js',
      'Splide',
      'PhotoSwipe',
      'Netlify',
    ],
    desc: 'Collaborative Project — High-performance landing page for a San Diego residential cleaning company, built with a modular no-framework architecture and interaction-driven UX.',
    challenge:
      'Create a fast, visually polished one-page experience that converts visitors into bookings while presenting multiple services, reviews, galleries, and move-out flows without relying on a frontend framework.',
    solution:
      'Built a modular architecture with reusable components, GSAP-powered scroll animations, interactive galleries and sliders, responsive layouts, and structured data for local SEO, while keeping the frontend lightweight and performant.',
    result:
      'A production-ready, responsive landing page with reusable components, rich interactions, and a lightweight architecture, successfully deployed to Netlify.',
    image: 'src/assets/images/harborshine.png',
    link: 'https://harborshine.netlify.app/',
    github: 'https://github.com/DianyelaMaldonado/harborshine-landing',
  },
  {
    title: 'Mística Web Studio — Digital Presence',
    tech: [
      'React 19',
      'Vite',
      'Tailwind CSS v4',
      'GSAP / ScrollTrigger',
      'Framer Motion',
      'Custom i18n (EN/ES)',
      'hCaptcha',
      'Web3Forms',
    ],
    desc: 'Collaborative project — Bilingual, cinematic landing page for a boutique web studio, combining brand strategy, immersive UX, accessibility, and AI-assisted development.',
    challenge:
      'Turn a boutique web studio concept into a high-conversion digital experience while supporting bilingual content, WCAG-aware accessibility, and rich motion without compromising performance.',
    solution:
      'Collaborated from ideation through implementation, building a React-based experience with custom design tokens, GSAP and Framer Motion interactions, bilingual content, accessible motion preferences, and a production-ready contact flow with hCaptcha and Web3Forms.',
    result:
      'A production-ready bilingual digital experience that combines immersive motion, accessible interactions, SEO foundations, and a complete client contact flow into a cohesive brand experience.',
    image: 'src/assets/images/mistica.png',
    link: 'https://mistica-web-studio.netlify.app/',
    github: 'https://github.com/DianyelaMaldonado/Mistica-Web-Studio',
  },
  {
    title: 'Teslo Shop — Cross-Framework E-commerce with Admin Panel',
    tech: [
      'React 19',
      'Angular 19',
      'TypeScript',
      'Vite',
      'TanStack Query',
      'Zustand',
      'RxJS Signals',
      'Tailwind CSS',
    ],
    desc: 'Technical build — E-commerce application implemented in both React and Angular, exploring different approaches to state, data, routing, authentication, and component architecture.',
    challenge:
      'Build a complete e-commerce experience with product catalog, authentication, protected administration, CRUD operations, and file uploads while maintaining type safety and a scalable frontend architecture.',
    solution:
      'Implemented the same application in React and Angular, using TanStack Query and Zustand for server and client state in React, and RxJS Signals with reactive resources and caching in Angular, alongside protected routes, validated forms, and modular architecture.',
    result:
      'Two functional implementations of the same e-commerce domain, demonstrating cross-framework frontend architecture and the ability to apply comparable engineering principles across React and Angular.',
    image: 'src/assets/images/teslo-shop.png',
    link: 'https://react-teslo-shop-app.netlify.app',
    github: 'https://github.com/EstherManriqueGlez/react-teslo-shop-app',
  },
  {
    title: 'Social Platform',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    desc: 'Full-stack social platform with content sharing and messaging.',
    challenge: 'Scaling real-time messaging for concurrent users.',
    solution: 'Designed a pub/sub architecture with message queuing.',
    result: 'Handles 10k+ concurrent connections with <100ms latency.',
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
  // {
  //   title: 'Design System Library',
  //   tech: ['React', 'Storybook', 'SCSS'],
  //   desc: 'Modular component library with design token integration.',
  //   challenge: 'Maintaining consistency across multiple applications.',
  //   solution: 'Built a token-driven architecture with automated visual regression testing.',
  //   result: 'Reduced UI development time by 60% across 3 products.',
  //   image:
  //     'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
  //   link: '#',
  //   github: '#',
  // },
];

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

export const experience: ExperienceItem[] = [
  {
    company: 'Independent Frontend Development',
    totalPeriod: 'Apr 2026 — Present',
    currentRole: '',
    stages: [],
    role: 'Independent Frontend Developer',
    projectName: 'Freelance and personal projects',
    projectDesc:
      'Focused on frontend development, continuous learning, and exploring AI-assisted development, AI-enhanced engineering workflows and emerging technologies.',
    description: [],
    technologies: ['React', 'Angular', 'TypeScript', 'Javascript', 'Vite', 'SCSS', 'Design System'],
  },
  {
    company: 'EPAM Systems',
    totalPeriod: 'Dec 2021 — Feb 2026',
    currentRole: 'Software Engineer',
    stages: [
      {
        period: 'Mar 2024 — Dec 2025',
        role: 'Software Engineer',
        projectName: 'Client Project - Design System & UI Framework Adoption',
        projectDesc:
          "Worked as a Frontend Software Engineer on the adoption of a new enterprise Design System across products built on a proprietary Angular-based UI framework. \n The initiative focused on modernizing existing UI components and creating new ones to align with the Design System's visual language, design tokens, accessibility requirements, and interaction patterns.",

        description: [
          "Developed and updated Angular UI components to align with the new Design System's visual and functional guidelines.",
          'Translated Figma designs into reusable, production-ready components, working closely with the product designer to ensure visual and functional consistency.',
          'Worked with design tokens to maintain consistency across visual properties and component states.',
          'Applied accessibility as a core requirement throughout development, ensuring components and interfaces complied with applicable WCAG 2.1 standards.',
          'Performed accessibility validation using automated auditing tools and screen reader testing.',
          'Paid close attention to visual, functional, and accessibility details to deliver consistent and inclusive user experiences.',
          'Wrote and maintained unit tests for frontend components.',
          'Ensured consistency across UI components while maintaining existing functionality and compatibility.',
          'Participated in code reviews, contributing to code quality and consistency.',
          'Worked closely with designers and other engineers throughout the development lifecycle.',
          'Worked with TypeScript, Angular, RxJS, and SCSS in a component-based frontend architecture.',
          'Collaborated with the team to deliver consistent, accessible, and maintainable UI experiences.',
        ],
        technologies: [
          'Angular',
          'TypeScript',
          'RxJS',
          'SCSS',
          'Design Tokens',
          'Figma',
          'APIs',
          'Testing',
          'Azure DevOps',
          'WCAG 2.1',
        ],
      },
      {
        period: 'Aug 2022 — Mar 2024',
        role: 'Junior Software Engineer',
        projectName: 'Client Project',
        projectDesc:
          'Joined a client-facing engineering team working on an enterprise application supporting sustainability programs, including data collection, tracking, and reporting.',
        description: [
          'Developed user interfaces and application functionality using Angular, Dart, HTML, and SCSS.',
          'Built and maintained web pages and frontend features based on assigned requirements and technical guidelines.',
          'Worked closely with the Lead Frontend Developer to align implementation approaches and maintain consistency across the application.',
          'Developed and maintained unit tests for frontend components.',
          'Worked with Reactive Forms to implement interactive and data-driven user interfaces.',
          'Participated in Agile/Scrum practices, including sprint planning, backlog refinement, and daily stand-ups.',
          'Collaborated with the team to achieve sprint goals and deliver assigned features within the development cycle.',
        ],
        technologies: [
          'Angular',
          'Dart',
          'SCSS',
          'Reactive Forms',
          'Google Cloud SQL',
          'Google BigQuery',
        ],
      },
      {
        period: 'May 2022 - Jul 2022',
        role: 'Frontend Developer',
        projectName: 'GO2-GTH Training Program',
        projectDesc:
          'Selected for a second technical training program focused on Angular and TypeScript, developing tools for different Google technology verticals',
        description: [
          'Developed the frontend of a web application using Angular and TypeScript.',
          'Built the application UI using Angular Material components.',
          'Integrated a simple CRUD Product API for backend data operations.',
          'Used Node.js and json-server to support the application backend.',
          'Managed source code using Git and GitHub.',
        ],
        technologies: ['Angular', 'TypeScript', 'Angular Material', 'Git', 'GitHub'],
      },
      {
        period: 'Dec 2021 — Mar 2022',
        role: 'Full Stack Developer',
        projectName: 'EPM-RDMX Program - PET-Project | MERN Stack Application',
        projectDesc:
          'Joined EPAM through an intensive software engineering training program focused on React and JavaScript.',
        description: [
          'Developed a full-stack web application as part of the training program.',
          'Built frontend features using React and JavaScript.',
          'Worked with backend functionality to understand the fundamentals of full-stack application development.',
          'Software development and version control best practices were applied throughout the project.',
          'Engineered responsive web applications utilizing modern component architectures.',
        ],
        technologies: ['React', 'JavaScript', 'MERN Stack', 'Git'],
      },
    ],
  },
  {
    company: 'Spiralis, S.A. de C.V.',
    totalPeriod: 'Nov 2020 — Mar 2021',
    currentRole: 'Front End Developer Jr.',
    stages: [],
    role: 'Front End Developer Jr.',
    projectName: 'Bravo - Gaming',
    projectDesc:
      'Started my professional career in software development, contributing to the frontend of a web platform for the administration and organization of video game tournaments.',
    description: [
      'Developed user interfaces using Vue.js and JavaScript.',
      'Integrated REST APIs to enable dynamic data management and interaction with the application.',
      'Collaborated within an Agile/Scrum team, actively participating in ceremonies and the software development process.',
    ],
    technologies: ['Vue.js', 'JavaScript', 'REST APIs', 'Scrum'],
  },
];

export const skills = [
  { name: 'React / Next.js', category: 'Core Frontend', level: 'Expert' },
  { name: 'TypeScript', category: 'Core Frontend', level: 'Expert' },
  { name: 'SASS / SCSS / Tailwind', category: 'Core Frontend', level: 'Expert' },
  { name: 'Design Systems', category: 'Architecture', level: 'Advanced' },
  { name: 'State Management', category: 'Architecture', level: 'Advanced' },
  { name: 'Performance Opt.', category: 'Architecture', level: 'Advanced' },
  { name: 'Framer Motion', category: 'UI/UX Tools', level: 'Advanced' },
  { name: 'Vite & Webpack', category: 'UI/UX Tools', level: 'Advanced' },
  { name: 'Git & CI/CD', category: 'UI/UX Tools', level: 'Advanced' },
];

export interface Contact {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export const contacts: Contact[] = [
  {
    icon: 'Mail' as const,
    label: 'Email',
    value: 'esther@example.com',
    href: 'mailto:esther@example.com',
  },
  { icon: 'Phone' as const, label: 'Phone', value: '+34 600 000 000', href: 'tel:+34600000000' },
  {
    icon: 'LuLinkedin' as const,
    label: 'LinkedIn',
    value: 'linkedin.com/in/esther',
    href: 'https://linkedin.com/in/esther',
  },
  {
    icon: 'LuGithub' as const,
    label: 'GitHub',
    value: 'github.com/esther',
    href: 'https://github.com/esther',
  },
];
