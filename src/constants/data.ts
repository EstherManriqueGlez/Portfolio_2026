import avbinmeImg from '@/assets/images/avbinme.png';
import harborshineImg from '@/assets/images/harborshine.png';
import misticaImg from '@/assets/images/mistica.png';
import reactTesloShopImg from '@/assets/images/react-teslo-shop.png';
import angularTesloShopImg from '@/assets/images/angular-teslo-shop.png';
import angularGifsAppImg from '@/assets/images/angular-gifs-app.png';
import reactGifsAppImg from '@/assets/images/react-gifs-app.png';
import heroesImg from '@/assets/images/heroes.png';

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
    image: avbinmeImg,
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
    image: harborshineImg,
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
    image: misticaImg,
    link: 'https://mistica-web-studio.netlify.app/',
    github: 'https://github.com/DianyelaMaldonado/Mistica-Web-Studio',
  },
  {
    title: 'Teslo Shop — Cross-Framework E-commerce with Admin Panel',
    badge: 'Learning project',
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
    image: reactTesloShopImg,
    link: 'https://react-teslo-shop-app.netlify.app',
    github: 'https://github.com/EstherManriqueGlez/react-teslo-shop-app',
    variants: [
      {
        id: 'react',
        label: 'React',
        tech: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
        desc: 'E-commerce storefront and admin panel implemented in React — a hands-on exploration of data fetching, state management, authentication, and scalable component architecture.',
        challenge:
          'Build a complete e-commerce experience — catalog, product detail, auth, role-protected admin, CRUD and file uploads — while maintaining type safety and clean architecture.',
        solution:
          'React 19, TypeScript and Vite, with TanStack Query for server state and caching, Zustand for UI state, validated forms, protected routes, and a modular typed structure.',
        result:
          'A functional implementation demonstrating disciplined state separation, a cached data layer, and reusable type-safe components.',
        image: reactTesloShopImg,
        link: 'https://react-teslo-shop-app.netlify.app',
        github: 'https://github.com/EstherManriqueGlez/react-teslo-shop-app',
      },
      {
        id: 'angular',
        label: 'Angular',
        tech: ['Angular 19', 'TypeScript', 'RxJS Signals', 'Tailwind CSS', 'daisyUI', 'Swiper'],
        desc: 'The same e-commerce domain implemented in Angular — applying Signals, reactive resources, HTTP interceptors, route guards, and standalone architecture.',
        challenge:
          'Build a complete e-commerce experience — catalog, product detail, auth, role-protected admin, CRUD and file uploads — while maintaining type safety and clean architecture.',
        solution:
          'Angular 19 and TypeScript, with Signals and rxResource for reactive state and caching, JWT auth via interceptors and guards, validated reactive forms, and a modular lazy-loaded structure (Tailwind + daisyUI, Swiper).',
        result:
          'A functional Angular implementation of the same domain, matching comparable engineering standards — reactive, typed, and maintainable — under a different framework.',
        image: angularTesloShopImg,
        link: 'https://ang-teslo-shop-app.netlify.app',
        github: 'https://github.com/EstherManriqueGlez/angular-teslo-shop-app',
      },
    ],
  },
  {
    title: 'GifsApp — Cross-Framework GIF Search App',
    badge: 'Learning project',
    tech: [
      'React 19',
      'Angular 19',
      'TypeScript',
      'Vite',
      'Angular Signals',
      'RxJS',
      'Tailwind CSS 4',
      'Axios',
    ],
    desc: 'Technical build — the same GIF search domain implemented in React and Angular, exploring different approaches to async state, caching, persistence, and accessible UI.',
    challenge:
      'Build a fast, accessible GIF search experience on the Giphy API while exploring how two frameworks approach reactive state, request handling, persistence, and accessibility.',
    solution:
      'Implemented two independent apps over the Giphy API: a React app with confirmed search, in-memory caching, stale-response cancellation, and a fully tested accessible flow; and an Angular app with trending and infinite scroll, persistent search history pages, theming, and Signals-based reactive state.',
    result:
      'Two production-oriented implementations of the same domain, each reflecting its framework\u2019s conventions for state, data fetching, persistence, and accessibility.',
    image: reactGifsAppImg,
    link: 'https://rct-gifs-app.netlify.app/',
    github: 'https://github.com/EstherManriqueGlez/react-gifs-app',
    variants: [
      {
        id: 'react',
        label: 'React',
        tech: ['React 19', 'TypeScript 5.9', 'Vite 7 (SWC)', 'Axios', 'Vitest + Testing Library'],
        desc: 'Giphy search implemented in React — a fast, accessible experience with confirmed queries, smart caching, and a polished result flow.',
        challenge:
          'Build a fast, reliable GIF search against the Giphy API — balancing result states, pagination, and accessibility without per-keystroke requests.',
        solution:
          'React 19, TypeScript and Vite, with a custom useGifs hook handling in-memory caching, request deduplication, and stale-response cancellation; confirmed search on Enter, a localStorage history of past queries (max 8) as clickable chips, complete skeleton/empty/error states with retry, pagination with Load more, and an accessible lightbox with copy-URL, focus trap, and Esc handling — backed by 48 unit tests.',
        result:
          'A tested, accessible search app with deterministic offline tests, AA-contrast styling, and prefers-reduced-motion support — the "latest query always wins" guard keeps results consistent during rapid searches.',
        image: reactGifsAppImg,
        link: 'https://rct-gifs-app.netlify.app/',
        github: 'https://github.com/EstherManriqueGlez/react-gifs-app',
      },
      {
        id: 'angular',
        label: 'Angular',
        tech: [
          'Angular 19',
          'TypeScript',
          'Angular Signals',
          'RxJS',
          'Tailwind CSS 4',
          'Font Awesome',
        ],
        desc: 'Giphy search implemented in Angular — trending with infinite scroll, search, persistent history pages, and light/dark theming on reactive Signals state.',
        challenge:
          'Build a GIF discovery experience in Angular covering trending and search while keeping state reactive, history persistent, and HTTP failures friendly across a fully responsive layout.',
        solution:
          'Angular 19 standalone components with Signals and RxJS for reactive state and HTTP streams; trending with infinite scroll, search with localStorage-backed history in the sidebar plus a page per query, a dark/light toggle that persists and respects the OS preference, skeleton loaders, an HTTP error interceptor that surfaces toast notifications, and a collapsible responsive sidebar.',
        result:
          'A polished, responsive Angular app with persistent theming and history, reactive state management, and graceful error feedback — the same domain solved with Angular conventions.',
        image: angularGifsAppImg,
        link: 'https://ang-gifs-app.netlify.app/',
        github: 'https://github.com/EstherManriqueGlez/gifs-app',
      },
    ],
  },
  {
    title: 'Superhero Universe — Hero & Villain Catalog',
    badge: 'Learning project',
    tech: [
      'React 19',
      'TypeScript',
      'Vite 7',
      'TanStack Query v5',
      'React Router 7',
      'Tailwind CSS v4',
      'shadcn/ui',
      'Axios',
      'Vitest',
    ],
    desc: 'Learning build — a React single-page app to discover and manage a catalog of superheroes and villains, consuming an external API and persisting favorites in the browser.',
    challenge:
      'Build a full hero catalog with dashboard stats, favorites, debounced search with combined filters, sorting, and a detail page — keeping data fetching, routing, and persisted state consistent and type-safe against an external API.',
    solution:
      'React 19, TypeScript and Vite, with TanStack Query and axios for cached server data, React Router (hash) for navigation, a favorites Context persisted in localStorage, debounced search with advanced filters and grid/list views, and a UI layer built on Tailwind CSS v4 and shadcn/ui (Radix primitives).',
    result:
      'A responsive, tested SPA with dashboard, favorites, search and detail flows, skeleton and empty states, and a type-safe data layer — deployed to Netlify against a Render-hosted API.',
    image: heroesImg,
    link: 'https://superhero-universe.netlify.app/',
    github: 'https://github.com/EstherManriqueGlez/react-heroes-app',
  },
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

export type SkillCategory = 'Core Frontend' | 'Architecture' | 'UI/UX Tools';

export type SkillKind = 'capability' | 'tech';

export interface SkillCard {
  id: string;
  kind: SkillKind;
  title: string;
  category: SkillCategory;
  desc?: string;
}

export const skillCards: SkillCard[] = [
  { id: 'react', kind: 'tech', title: 'React 19', category: 'Core Frontend' },
  { id: 'angular', kind: 'tech', title: 'Angular 19', category: 'Core Frontend' },
  { id: 'typescript', kind: 'tech', title: 'TypeScript', category: 'Core Frontend' },
  { id: 'javascript', kind: 'tech', title: 'JavaScript', category: 'Core Frontend' },
  { id: 'html5', kind: 'tech', title: 'HTML5', category: 'Core Frontend' },
  { id: 'scss', kind: 'tech', title: 'SCSS / CSS Modules', category: 'Core Frontend' },
  { id: 'tailwind', kind: 'tech', title: 'Tailwind CSS v4', category: 'Core Frontend' },
  {
    id: 'frontend-architecture',
    kind: 'capability',
    title: 'Frontend Architecture',
    category: 'Architecture',
    desc: 'Modular, type-safe foundations behind production builds in React and Angular.',
  },
  {
    id: 'reusable-components',
    kind: 'capability',
    title: 'Reusable Components',
    category: 'Architecture',
    desc: 'From Figma to production-ready, design-system-aligned components.',
  },
  {
    id: 'state-management',
    kind: 'capability',
    title: 'State Management',
    category: 'Architecture',
    desc: 'Server and client state separated with TanStack Query, Zustand and Signals.',
  },
  {
    id: 'api-integration',
    kind: 'capability',
    title: 'API Integration',
    category: 'Architecture',
    desc: 'Typed data layers with caching, interceptors and graceful HTTP error handling.',
  },
  {
    id: 'performance',
    kind: 'capability',
    title: 'Performance Optimization',
    category: 'Architecture',
    desc: 'Caching, lazy loading and stale-response cancellation for fast, consistent UIs.',
  },
  {
    id: 'accessibility',
    kind: 'capability',
    title: 'Accessibility',
    category: 'Architecture',
    desc: 'WCAG 2.1 applied to components, focus management and screen-reader validated flows.',
  },
  {
    id: 'responsive-ui',
    kind: 'capability',
    title: 'Responsive UI Development',
    category: 'UI/UX Tools',
    desc: 'Mobile-first layouts and collapsible navigation across feature-rich app UIs.',
  },
  {
    id: 'ai-assisted',
    kind: 'capability',
    title: 'AI-Assisted Development',
    category: 'UI/UX Tools',
    desc: 'AI-augmented workflows paired with rigorous review, testing and ownership.',
  },
  { id: 'vite', kind: 'tech', title: 'Vite & SWC', category: 'UI/UX Tools' },
  { id: 'framer-motion', kind: 'tech', title: 'Framer Motion', category: 'UI/UX Tools' },
  {
    id: 'testing',
    kind: 'tech',
    title: 'Testing — Vitest & Testing Library',
    category: 'UI/UX Tools',
  },
  { id: 'git', kind: 'tech', title: 'Git & CI/CD', category: 'UI/UX Tools' },
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
