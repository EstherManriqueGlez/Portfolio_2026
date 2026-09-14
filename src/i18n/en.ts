import { projectImages } from './media';
import type { Content } from './types';

export const en: Content = {
  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ],

  hero: {
    intro: 'Building ',
    highlight: 'intelligent interfaces',
    outro: ' with purpose.',
    logoAlt: 'Esther Manrique González',
    viewWork: 'View My Work',
    letsTalk: "Let's Talk",
  },

  about: {
    title: 'About Me',
    subtitle: 'Developing products with intention and purpose.',
    paragraph:
      'I develop digital products where engineering, design, and user experience come together to create useful, intuitive, and purposeful solutions. As a Frontend Software Engineer, I enjoy turning complex problems into clear, intuitive interfaces through thoughtful architecture, clean code, and attention to detail. Throughout my professional experience, I have learned that good software should not only work well, but also be accessible, scalable, maintainable, and enjoyable to use. I believe every decision matters, from the structure of a component to the spacing between two elements. Those details build trust, improve usability, and contribute to better products. For me, frontend development is where technology meets people, and that is what makes this work meaningful.',
    manifesto: 'Think with intention. Design with clarity. Build with purpose.',
  },

  experience: {
    title: 'Experience',
    items: [
      {
        company: 'Independent Frontend Development',
        totalPeriod: 'Apr 2026 — Present',
        stages: [],
        role: 'Independent Frontend Developer',
        projectName: 'Freelance and personal projects',
        projectDesc:
          'Independent frontend work focused on building and modernizing web applications, alongside continuous learning and the integration of AI-assisted engineering workflows into my development process.',
        description: [],
        technologies: [
          'React',
          'Angular',
          'TypeScript',
          'JavaScript',
          'Vite',
          'SCSS',
          'Design System',
        ],
      },
      {
        company: 'EPAM Systems',
        totalPeriod: 'Dec 2021 — Feb 2026',
        stages: [
          {
            period: 'Mar 2024 — Dec 2025',
            role: 'Software Engineer',
            projectName: 'Client Project — Design System & UI Framework Adoption',
            projectDesc:
              "Enterprise Design System adoption initiative across products built on a proprietary Angular-based UI framework. The work focused on modernizing existing UI components and creating new ones aligned with the Design System's visual language, design tokens, accessibility requirements, and interaction patterns.",
            description: [
              "Developed and updated Angular UI components to align with the new Design System's visual and functional guidelines.",
              'Translated Figma designs into reusable, production-ready components while collaborating closely with product design to maintain visual and functional consistency.',
              'Worked with design tokens to maintain consistency across visual properties, component states, and interaction patterns.',
              'Applied accessibility throughout development, aligning components and interfaces with applicable WCAG 2.1 requirements.',
              'Validated accessibility using automated auditing tools and screen reader testing.',
              'Wrote and maintained unit tests for frontend components and helped preserve existing functionality and compatibility during UI modernization.',
              'Participated in code reviews and collaborated with designers and engineers throughout the development lifecycle.',
              'Worked with TypeScript, Angular, RxJS, and SCSS in a component-based frontend architecture.',
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
              'Enterprise application supporting sustainability programs through data collection, tracking, and reporting workflows.',
            description: [
              'Developed user interfaces and application functionality using Angular, Dart, HTML, and SCSS.',
              'Built and maintained web pages and frontend features based on assigned requirements and technical guidelines.',
              'Worked closely with the Lead Frontend Developer to align implementation approaches and maintain consistency across the application.',
              'Developed and maintained unit tests for frontend components.',
              'Worked with Reactive Forms to implement interactive, data-driven user interfaces.',
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
            period: 'May 2022 — Jul 2022',
            role: 'Frontend Developer',
            projectName: 'GO2-GTH Training Program',
            projectDesc:
              'Technical training program focused on Angular and TypeScript, centered on building frontend tools for different Google technology verticals through a practical web application project.',
            description: [
              'Developed the frontend of a web application using Angular and TypeScript.',
              'Built the application UI with Angular Material components.',
              'Integrated a simple CRUD product API for backend data operations.',
              'Used Node.js and json-server to support backend functionality during development.',
              'Managed source code using Git and GitHub.',
            ],
            technologies: ['Angular', 'TypeScript', 'Angular Material', 'Git', 'GitHub'],
          },
          {
            period: 'Dec 2021 — Mar 2022',
            role: 'Full Stack Developer',
            projectName: 'EPM-RDMX Program — PET Project | MERN Stack Application',
            projectDesc:
              'Intensive software engineering training project centered on building a full-stack MERN application while developing practical experience with React, JavaScript, backend fundamentals, and modern development workflows.',
            description: [
              'Developed a full-stack web application as part of the training program.',
              'Built frontend features using React and JavaScript.',
              'Worked with backend functionality to strengthen my understanding of full-stack application development.',
              'Applied software development and version control best practices throughout the project.',
              'Built responsive interfaces using modern component-based patterns.',
            ],
            technologies: ['React', 'JavaScript', 'MERN Stack', 'Git'],
          },
        ],
      },
      {
        company: 'Spiralis, S.A. de C.V.',
        totalPeriod: 'Nov 2020 — Mar 2021',
        stages: [],
        role: 'Front End Developer Jr.',
        projectName: 'Bravo — Gaming',
        projectDesc:
          'Web platform for the administration and organization of video game tournaments, where I began my professional software development career contributing to frontend development.',
        description: [
          'Developed user interfaces using Vue.js and JavaScript.',
          'Integrated REST APIs to support dynamic data management and application interactions.',
          'Collaborated within an Agile/Scrum team, actively participating in ceremonies and the software development process.',
        ],
        technologies: ['Vue.js', 'JavaScript', 'REST APIs', 'Scrum'],
      },
    ],
  },

  projects: {
    title: 'Selected Projects',
    subtitle:
      'Applications and technical builds that demonstrate frontend architecture, product thinking, accessibility, and engineering depth.',
    items: [
      {
        title: 'AVBINME — Corporate Valuation & Appraisal Platform',
        tech: ['React 19', 'TypeScript', 'Vite', 'Sass/SCSS', 'React Router'],
        desc: 'Legacy React modernization and frontend rebuild for a B2B corporate valuation and appraisal platform.',
        challenge:
          'Modernize a legacy React application while presenting technical rigor, legal validity, and institutional credibility to corporate and professional audiences.',
        solution:
          'Rebuilt the frontend with React, TypeScript, and Vite, introducing a modern component architecture, responsive design system, multi-page routing, lazy loading, and clearer conversion-focused calls to action.',
        result:
          'A responsive, accessible, and maintainable platform with a stronger institutional identity, deployed to GitHub Pages and structured to guide visitors toward client contact.',
        image: projectImages.avbinme,
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
        desc: 'Collaborative project — responsive landing page for a San Diego residential cleaning company, built with a modular no-framework architecture and interaction-driven UX.',
        challenge:
          'Create a fast, visually polished one-page experience designed to support booking conversion while presenting multiple services, reviews, galleries, and move-out flows without relying on a frontend framework.',
        solution:
          'Built a modular architecture with reusable components, GSAP-powered scroll animations, interactive galleries and sliders, responsive layouts, and structured data for local SEO while keeping the frontend lightweight.',
        result:
          'A production-ready responsive landing page with reusable components, rich interactions, and a lightweight architecture, deployed to Netlify.',
        image: projectImages.harborshine,
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
        desc: 'Collaborative project — bilingual, cinematic landing page for a boutique web studio, combining brand strategy, immersive UX, accessibility, and AI-assisted development.',
        challenge:
          'Turn a boutique web studio concept into a conversion-focused digital experience while supporting bilingual content, accessibility-aware interactions, and rich motion without compromising performance.',
        solution:
          'Collaborated from ideation through implementation, building a React-based experience with custom design tokens, GSAP and Framer Motion interactions, bilingual content, reduced-motion support, and a production-ready contact flow with hCaptcha and Web3Forms.',
        result:
          'A production-ready bilingual digital experience combining immersive motion, accessible interactions, SEO foundations, and a complete client contact flow within a cohesive brand experience.',
        image: projectImages.mistica,
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
        desc: 'Technical build — the same e-commerce domain implemented in React and Angular to compare approaches to state, data fetching, routing, authentication, and component architecture.',
        challenge:
          'Build a complete e-commerce experience with product catalog, authentication, role-protected administration, CRUD operations, and file uploads while maintaining type safety and a scalable frontend architecture.',
        solution:
          'Implemented the application in both React and Angular, using TanStack Query and Zustand for server and client state in React, and Signals with reactive resources and caching in Angular, alongside protected routes, validated forms, and modular architecture.',
        result:
          'Two functional implementations of the same e-commerce domain, demonstrating cross-framework frontend architecture and the ability to apply comparable engineering principles across React and Angular.',
        image: projectImages.reactTesloShop,
        link: 'https://react-teslo-shop-app.netlify.app',
        github: 'https://github.com/EstherManriqueGlez/react-teslo-shop-app',
        variants: [
          {
            id: 'react',
            label: 'React',
            tech: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
            desc: 'E-commerce storefront and admin panel implemented in React — a hands-on exploration of data fetching, state management, authentication, and scalable component architecture.',
            challenge:
              'Build a complete e-commerce experience — catalog, product detail, authentication, role-protected admin, CRUD, and file uploads — while maintaining type safety and clean architecture.',
            solution:
              'Built with React 19, TypeScript, and Vite, using TanStack Query for server state and caching, Zustand for UI state, validated forms, protected routes, and a modular typed structure.',
            result:
              'A functional implementation demonstrating clear state separation, a cached data layer, and reusable type-safe components.',
            image: projectImages.reactTesloShop,
            link: 'https://react-teslo-shop-app.netlify.app',
            github: 'https://github.com/EstherManriqueGlez/react-teslo-shop-app',
          },
          {
            id: 'angular',
            label: 'Angular',
            tech: ['Angular 19', 'TypeScript', 'RxJS Signals', 'Tailwind CSS', 'daisyUI', 'Swiper'],
            desc: 'The same e-commerce domain implemented in Angular — applying Signals, reactive resources, HTTP interceptors, route guards, and standalone architecture.',
            challenge:
              'Build a complete e-commerce experience — catalog, product detail, authentication, role-protected admin, CRUD, and file uploads — while maintaining type safety and clean architecture.',
            solution:
              'Built with Angular 19 and TypeScript, using Signals and rxResource for reactive state and caching, JWT authentication through interceptors and guards, validated reactive forms, and a modular lazy-loaded structure with Tailwind, daisyUI, and Swiper.',
            result:
              'A functional Angular implementation of the same domain, applying comparable engineering standards through a reactive, typed, and maintainable architecture.',
            image: projectImages.angularTesloShop,
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
        desc: 'Technical build — the same GIF search domain implemented in React and Angular to compare approaches to async state, caching, persistence, and accessible UI.',
        challenge:
          'Build a fast, accessible GIF search experience on the Giphy API while exploring how two frameworks approach reactive state, request handling, persistence, and accessibility.',
        solution:
          'Implemented two independent apps on the Giphy API: a React app with confirmed search, in-memory caching, stale-response cancellation, and a tested accessible flow; and an Angular app with trending content, infinite scroll, persistent search history, theming, and Signals-based reactive state.',
        result:
          'Two production-minded implementations of the same domain, each reflecting its framework’s conventions for state, data fetching, persistence, and accessibility.',
        image: projectImages.reactGifsApp,
        link: 'https://rct-gifs-app.netlify.app/',
        github: 'https://github.com/EstherManriqueGlez/react-gifs-app',
        variants: [
          {
            id: 'react',
            label: 'React',
            tech: [
              'React 19',
              'TypeScript 5.9',
              'Vite 7 (SWC)',
              'Axios',
              'Vitest + Testing Library',
            ],
            desc: 'Giphy search implemented in React — a fast, accessible experience with confirmed queries, smart caching, and a polished result flow.',
            challenge:
              'Build a fast, reliable GIF search against the Giphy API while balancing result states, pagination, and accessibility without sending a request on every keystroke.',
            solution:
              'Built with React 19, TypeScript, and Vite, using a custom useGifs hook for in-memory caching, request deduplication, and stale-response cancellation; confirmed search on Enter; localStorage history for up to eight previous queries; complete loading, empty, and error states with retry; pagination with Load more; and an accessible lightbox with copy-URL, focus trap, and Escape-key handling — backed by 48 unit tests.',
            result:
              'A tested, accessible search app with deterministic offline tests, AA-contrast styling, and prefers-reduced-motion support, with a latest-query-wins guard that keeps results consistent during rapid searches.',
            image: projectImages.reactGifsApp,
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
            desc: 'Giphy search implemented in Angular — trending content with infinite scroll, search, persistent history pages, and light/dark theming powered by reactive Signals state.',
            challenge:
              'Build a GIF discovery experience in Angular covering trending content and search while keeping state reactive, history persistent, and HTTP failures understandable across a fully responsive layout.',
            solution:
              'Built with Angular 19 standalone components, Signals, and RxJS for reactive state and HTTP streams; trending content with infinite scroll; search history persisted in localStorage and exposed through the sidebar and query pages; a light/dark theme that persists and respects OS preference; skeleton loaders; HTTP error interception with toast feedback; and a collapsible responsive sidebar.',
            result:
              'A polished, responsive Angular app with persistent theming and history, reactive state management, and graceful error feedback — the same domain solved using Angular conventions.',
            image: projectImages.angularGifsApp,
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
        desc: 'Learning build — a React single-page application for exploring and managing a catalog of superheroes and villains, consuming an external API and persisting favorites in the browser.',
        challenge:
          'Build a complete hero catalog with dashboard statistics, favorites, debounced search with combined filters, sorting, and a detail page while keeping data fetching, routing, and persisted state consistent and type-safe against an external API.',
        solution:
          'Built with React 19, TypeScript, and Vite, using TanStack Query and Axios for cached server data, React Router with hash-based navigation, a favorites Context persisted in localStorage, debounced search with advanced filters and grid/list views, and a UI layer built with Tailwind CSS v4 and shadcn/ui using Radix primitives.',
        result:
          'A responsive, tested SPA with dashboard, favorites, search, and detail flows; loading and empty states; and a type-safe data layer, deployed to Netlify against a Render-hosted API.',
        image: projectImages.heroes,
        link: 'https://superhero-universe.netlify.app/',
        github: 'https://github.com/EstherManriqueGlez/react-heroes-app',
      },
    ],
  },

  skills: {
    title: 'Skills & Expertise',
    subtitle: 'The tools I work with and the engineering principles behind my approach.',
    filterAria: 'Filter skills by area',
    all: 'All',
    tech: 'Tech',
    categoryLabels: {
      'Core Frontend': 'Core Frontend',
      Architecture: 'Architecture',
      'UI/UX Tools': 'UI/UX Tools',
      'How I Work': 'How I Work',
    },
    cards: [
      {
        id: 'user-centered-engineering',
        kind: 'capability',
        title: 'User-Centered Engineering',
        category: 'How I Work',
        desc: 'Technical decisions are guided by the people using the product, balancing usability, accessibility, and product needs.',
      },
      {
        id: 'engineering-craftsmanship',
        kind: 'capability',
        title: 'Engineering Craftsmanship',
        category: 'How I Work',
        desc: 'Small technical decisions, from component architecture to visual polish, shape products that are reliable, maintainable, and scalable.',
      },
      {
        id: 'continuous-growth',
        kind: 'capability',
        title: 'Continuous Growth',
        category: 'How I Work',
        desc: 'I continuously explore new technologies while strengthening the engineering fundamentals that remain valuable over time.',
      },
      {
        id: 'thoughtful-problem-solving',
        kind: 'capability',
        title: 'Thoughtful Problem Solving',
        category: 'How I Work',
        desc: 'I prefer understanding the problem before choosing a solution, prioritizing long-term quality over quick fixes.',
      },
      {
        id: 'collaborative-engineering',
        kind: 'capability',
        title: 'Collaborative Engineering',
        category: 'How I Work',
        desc: 'I believe strong solutions emerge through shared ownership, open communication, and close collaboration across engineering, design, and product.',
      },
      {
        id: 'quality-by-design',
        kind: 'capability',
        title: 'Quality by Design',
        category: 'How I Work',
        desc: 'Accessibility, testing, and performance are considered throughout the process rather than treated as afterthoughts.',
      },
      {
        id: 'ai-assisted',
        kind: 'capability',
        title: 'AI-Assisted Development',
        category: 'How I Work',
        desc: 'I use AI-assisted workflows alongside deliberate review, testing, and engineering ownership.',
      },
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
        desc: 'Modular, type-safe foundations for production-oriented React and Angular applications.',
      },
      {
        id: 'reusable-components',
        kind: 'capability',
        title: 'Reusable Components',
        category: 'Architecture',
        desc: 'From Figma to reusable, production-ready components aligned with design-system principles.',
      },
      {
        id: 'state-management',
        kind: 'capability',
        title: 'State Management',
        category: 'Architecture',
        desc: 'Clear separation of server and client state using tools such as TanStack Query, Zustand, and Signals.',
      },
      {
        id: 'api-integration',
        kind: 'capability',
        title: 'API Integration',
        category: 'Architecture',
        desc: 'Typed data layers with caching, interceptors, and graceful HTTP error handling.',
      },
      {
        id: 'performance',
        kind: 'capability',
        title: 'Performance Optimization',
        category: 'Architecture',
        desc: 'Caching, lazy loading, and stale-response cancellation for fast, consistent interfaces.',
      },
      {
        id: 'accessibility',
        kind: 'capability',
        title: 'Accessibility',
        category: 'Architecture',
        desc: 'WCAG 2.1 practices applied to components, focus management, and flows validated with screen readers.',
      },
      {
        id: 'responsive-ui',
        kind: 'capability',
        title: 'Responsive UI Development',
        category: 'UI/UX Tools',
        desc: 'Mobile-first layouts and responsive navigation patterns across feature-rich application interfaces.',
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
    ],
  },

  contact: {
    title: "Let's Connect",
  },

  contacts: [
    {
      icon: 'Mail' as const,
      label: 'Email',
      value: 'dev.publicidadweb@gmail.com',
      href: 'mailto:dev.publicidadweb@gmail.com',
    },
    { icon: 'Phone' as const, label: 'Phone', value: '+52 55 2852 9983', href: 'tel:+5528529983' },
    {
      icon: 'LuLinkedin' as const,
      label: 'LinkedIn',
      value: 'linkedin.com/in/esther-manrique',
      href: 'https://www.linkedin.com/in/esther-manrique/',
    },
    {
      icon: 'LuGithub' as const,
      label: 'GitHub',
      value: 'github.com/EstherManriqueGlez',
      href: 'https://github.com/EstherManriqueGlez',
    },
  ],

  footer: {
    manifesto: 'Think with intention. Design with clarity. Build with purpose.',
  },

  meta: {
    title: 'Esther Manrique González — Frontend Software Engineer',
    description:
      'Frontend Software Engineer specializing in Angular, React, TypeScript, accessibility, and modern web development.',
    ogTitle: 'Esther Manrique González — Frontend Software Engineer',
    ogDescription:
      'Frontend Software Engineer specializing in Angular, React, TypeScript, accessibility, and modern web development.',
    ogLocale: 'en_US',
  },

  ui: {
    skipLink: 'Skip to main content',
    errorBoundary: {
      title: 'Something went wrong',
      message: 'This section failed to load. Try refreshing the page.',
    },
    navbar: {
      label: 'Main navigation',
      logoAlt: 'Manrique logo',
      switchToLight: 'Switch to light theme',
      switchToDark: 'Switch to dark theme',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      langGroup: 'Language',
    },
    projectCard: {
      challenge: 'Challenge:',
      solution: 'Solution:',
      result: 'Result:',
      github: 'GitHub',
      liveDemo: 'Live Demo',
      imageFallback: 'Image not available',
      variantGroup: 'Framework version',
      imgAlt: (title) => `Screenshot of ${title}`,
      sourceAria: (label) => `View ${label} source code on GitHub`,
      liveAria: (label) => `View ${label} live project`,
      sourceAriaDefault: 'View source code on GitHub',
      liveAriaDefault: 'View live project',
    },
  },
};
