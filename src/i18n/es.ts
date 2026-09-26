import { projectImages } from './media';
import type { Content } from './types';

export const es: Content = {
  navLinks: [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ],

  hero: {
    intro: 'Creando ',
    highlight: 'interfaces inteligentes',
    outro: ' con propósito.',
    logoAlt: 'Esther Manrique González',
    viewWork: 'Ver mi trabajo',
    letsTalk: 'Hablemos',
  },

  about: {
    title: 'Sobre mí',
    subtitle: 'Desarrollo productos digitales con intención y propósito.',
    paragraph:
      'Me gusta desarrollar productos digitales donde la ingeniería, el diseño y la experiencia de usuario trabajan juntos para resolver problemas reales de forma clara e intuitiva. Como Frontend Software Engineer, disfruto transformar necesidades complejas en interfaces bien estructuradas, fáciles de usar y pensadas hasta el detalle. Con la experiencia he aprendido que un buen producto no solo debe funcionar: también debe ser accesible, escalable, mantenible y ofrecer una excelente experiencia de usuario. Para mí, cada decisión cuenta, desde cómo se estructura un componente hasta un pequeño ajuste visual. Son esos detalles los que hacen que una interfaz se sienta sólida, confiable y bien desarrollada. Eso es lo que más me gusta del frontend: transformar tecnología en experiencias que realmente conecten con las personas.',
    manifesto: 'Piensa con intención. Diseña con claridad. Desarrolla con propósito.',
  },

  experience: {
    title: 'Experiencia',
    items: [
      {
        company: 'Desarrollo frontend independiente',
        totalPeriod: 'Abr 2026 — Presente',
        stages: [],
        role: 'Desarrolladora frontend independiente',
        projectName: 'Proyectos freelance y personales',
        projectDesc:
          'Desarrollo frontend independiente enfocado en la creación y modernización de aplicaciones web, mientras continúo fortaleciendo mis conocimientos e incorporando herramientas y flujos de trabajo asistidos por IA a mi proceso de desarrollo.',
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
        totalPeriod: 'Dic 2021 — Feb 2026',
        stages: [
          {
            period: 'Mar 2024 — Dic 2025',
            role: 'Software Engineer',
            projectName: 'Proyecto para cliente — Adopción de Design System y framework de UI',
            projectDesc:
              'Proyecto empresarial enfocado en la adopción de un nuevo Design System en productos desarrollados sobre un framework de UI propio basado en Angular. Mi trabajo se centró en modernizar componentes existentes, alineados con el lenguaje visual del sistema, sus design tokens, requisitos de accesibilidad y patrones de interacción.',
            description: [
              'Actualicé componentes de UI en Angular siguiendo los lineamientos visuales y funcionales del nuevo Design System.',
              'Convertí diseños de Figma en componentes reutilizables y listos para producción, trabajando de cerca con el equipo de diseño para mantener consistencia visual y funcional.',
              'Trabajé con design tokens para mantener consistencia en propiedades visuales, estados de componentes y patrones de interacción.',
              'Incorporé accesibilidad como parte del proceso de desarrollo, alineando componentes e interfaces con los requisitos aplicables de WCAG 2.1.',
              'Validé la accesibilidad mediante herramientas automatizadas de auditoría y pruebas con lectores de pantalla.',
              'Desarrollé y mantuve pruebas unitarias para componentes frontend, cuidando que la modernización de la UI no afectara la funcionalidad ni la compatibilidad existentes.',
              'Participé en code reviews y colaboré con diseñadores y otros ingenieros durante todo el ciclo de desarrollo.',
              'Trabajé con TypeScript, Angular, RxJS y SCSS dentro de una arquitectura frontend basada en componentes.',
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
            period: 'Ago 2022 — Mar 2024',
            role: 'Junior Software Engineer',
            projectName: 'Proyecto para cliente',
            projectDesc:
              'Aplicación empresarial orientada a programas de sostenibilidad, con flujos para recopilar, dar seguimiento y generar reportes a partir de datos.',
            description: [
              'Desarrollé interfaces de usuario y funcionalidades de la aplicación utilizando Angular, Dart, HTML y SCSS.',
              'Desarrollé y mantuve páginas y funcionalidades frontend a partir de los requisitos y lineamientos técnicos definidos para el proyecto.',
              'Trabajé de cerca con el Lead Frontend Developer para alinear criterios de implementación y mantener consistencia dentro de la aplicación.',
              'Desarrollé y mantuve pruebas unitarias para componentes frontend.',
              'Utilicé Reactive Forms para desarrollar interfaces interactivas orientadas al manejo de datos.',
              'Participé activamente en el proceso Agile/Scrum, incluyendo sprint planning, backlog refinement y daily stand-ups.',
              'Colaboré con el equipo para cumplir los objetivos de cada sprint y entregar las funcionalidades asignadas dentro del ciclo de desarrollo.',
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
            projectName: 'Programa de formación GO2-GTH',
            projectDesc:
              'Programa de formación técnica enfocado en Angular y TypeScript, en el que desarrollamos herramientas frontend para distintas verticales tecnológicas de Google a través de un proyecto práctico de aplicación web.',
            description: [
              'Desarrollé el frontend de una aplicación web utilizando Angular y TypeScript.',
              'Implementé la interfaz con componentes de Angular Material.',
              'Integré una API CRUD de productos para realizar operaciones de consulta y administración de datos.',
              'Utilicé Node.js y json-server como soporte para la funcionalidad de backend durante el desarrollo.',
              'Gestioné el código fuente y el control de versiones con Git y GitHub.',
            ],
            technologies: ['Angular', 'TypeScript', 'Angular Material', 'Git', 'GitHub'],
          },
          {
            period: 'Dic 2021 — Mar 2022',
            role: 'Full Stack Developer',
            projectName: 'Programa EPM-RDMX — PET Project | Aplicación MERN Stack',
            projectDesc:
              'Proyecto intensivo de formación en ingeniería de software enfocado en el desarrollo de una aplicación full stack con MERN, donde adquirí experiencia práctica con React, JavaScript, fundamentos de backend y flujos modernos de desarrollo.',
            description: [
              'Desarrollé una aplicación web full stack como parte del programa de formación.',
              'Implementé funcionalidades frontend utilizando React y JavaScript.',
              'Trabajé con funcionalidades de backend para ampliar mi comprensión del desarrollo de aplicaciones full stack.',
              'Apliqué buenas prácticas de desarrollo de software y control de versiones durante el proyecto.',
              'Desarrollé interfaces responsive utilizando patrones modernos basados en componentes.',
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
          'Plataforma web para administrar y organizar torneos de videojuegos. Fue mi primera experiencia profesional en desarrollo de software, donde participé como desarrolladora frontend.',
        description: [
          'Desarrollé interfaces de usuario utilizando Vue.js y JavaScript.',
          'Integré APIs REST para gestionar datos dinámicos y las interacciones de la aplicación.',
          'Colaboré dentro de un equipo Agile/Scrum, participando activamente en las ceremonias y en el proceso de desarrollo de software.',
        ],
        technologies: ['Vue.js', 'JavaScript', 'REST APIs', 'Scrum'],
      },
    ],
  },

  projects: {
    title: 'Proyectos seleccionados',
    subtitle:
      'Aplicaciones y proyectos que reflejan mi forma de trabajar con arquitectura frontend, visión de producto, accesibilidad e ingeniería de calidad.',
    items: [
      {
        title: 'AVBINME — Sitio web corporativo de Valuación de Bienes Inmubles',
        tech: ['React 19', 'TypeScript', 'Vite', 'Sass/SCSS', 'React Router'],
        desc: 'Modernización de un sitio web legacy desarrollado en React y renovación del frontend para una empresa B2B de Valuación de Bienes Inmubles.',
        challenge:
          'Modernizar un sitio web legacy en React manteniendo la imagen profesional y la credibilidad institucional que requiere un servicio dirigido a clientes corporativos y profesionales de la valuación.',
        solution:
          'Renové el frontend con React, TypeScript y Vite, incorporando una arquitectura moderna basada en componentes, un sistema de diseño responsive, navegación multipágina, lazy loading y llamadas a la acción más claras.',
        result:
          'Un sitio web corporativo responsive, accesible y más fácil de mantener, con una identidad institucional más sólida y un recorrido más claro para conocer los servicios y contactar a la empresa.',
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
        desc: 'Proyecto colaborativo — landing page responsive para una empresa de limpieza residencial en San Diego, desarrollada con una arquitectura modular sin framework y una experiencia centrada en la interacción.',
        challenge:
          'Crear una experiencia one-page rápida, visualmente cuidada y orientada a generar reservas, integrando servicios, reseñas, galerías y distintos flujos de conversión sin utilizar un framework frontend.',
        solution:
          'Desarrollamos una arquitectura modular con componentes reutilizables, animaciones de scroll con GSAP, galerías y sliders interactivos, layouts responsive y datos estructurados para SEO local, manteniendo un frontend ligero.',
        result:
          'Una landing page responsive y lista para producción, con componentes reutilizables, interacciones dinámicas y una arquitectura ligera',
        image: projectImages.harborshine,
        link: 'https://harborshine-cleaning.com/',
        github: 'https://github.com/DianyelaMaldonado/harborshine-landing',
      },
      {
        title: 'Mística Web Studio — Presencia digital',
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
        desc: 'Proyecto colaborativo — landing page bilingüe para un estudio web boutique, donde combinamos identidad de marca, experiencia de usuario, accesibilidad, motion y desarrollo asistido por IA.',
        challenge:
          'Transformar la idea de un estudio web boutique en una experiencia digital atractiva y orientada a conversión, incorporando contenido bilingüe, accesibilidad y animaciones sin comprometer el rendimiento.',
        solution:
          'Participé desde la ideación hasta la implementación, desarrollando una experiencia en React con design tokens propios, animaciones con GSAP y Framer Motion, contenido bilingüe, soporte para reduced motion y un flujo de contacto listo para producción con hCaptcha y Web3Forms.',
        result:
          'Una experiencia digital bilingüe y lista para producción, con una identidad visual coherente, interacciones accesibles, fundamentos de SEO y un flujo completo de contacto.',
        image: projectImages.mistica,
        link: 'https://mistica-web-studio.netlify.app/',
        github: 'https://github.com/EstherManriqueGlez/mistica-web-studio',
      },
      {
        title: 'Teslo Shop — E-commerce en React y Angular con Panel de Administración',
        badge: 'Proyecto de aprendizaje',
        tech: [],
        desc: '',
        challenge: '',
        solution: '',
        result: '',
        image: '',
        link: '',
        github: 'https://github.com/EstherManriqueGlez/react-teslo-shop-app',
        variants: [
          {
            id: 'react',
            label: 'React',
            tech: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
            desc: 'E-commerce desarrollado en React con storefront y panel de administración, enfocada en data fetching, gestión de estado, autenticación y arquitectura de componentes escalable.',
            challenge:
              'Desarrollar una experiencia de e-commerce completa — catálogo, detalle de producto, autenticación, administración protegida por roles, CRUD y carga de archivos — manteniendo seguridad de tipos y una arquitectura limpia.',
            solution:
              'Desarrollada con React 19, TypeScript y Vite, utilizando TanStack Query para estado de servidor y caché, Zustand para estado de UI, formularios validados, rutas protegidas y una estructura modular tipada.',
            result:
              'Una implementación funcional con una separación clara entre estados, una capa de datos con caché y componentes reutilizables con seguridad de tipos.',
            image: projectImages.reactTesloShop,
            link: 'https://react-teslo-shop-app.netlify.app',
            github: 'https://github.com/EstherManriqueGlez/react-teslo-shop-app',
          },
          {
            id: 'angular',
            label: 'Angular',
            tech: ['Angular 19', 'TypeScript', 'RxJS Signals', 'Tailwind CSS', 'daisyUI', 'Swiper'],
            desc: 'E-commerce desarrollado en Angular, aplicando Signals, recursos reactivos, interceptores HTTP, route guards y arquitectura standalone.',
            challenge:
              'Desarrollar una experiencia de e-commerce completa — catálogo, detalle de producto, autenticación, administración protegida por roles, CRUD y carga de archivos — manteniendo seguridad de tipos y una arquitectura limpia.',
            solution:
              'Desarrollada con Angular 19 y TypeScript, utilizando Signals y rxResource para estado reactivo y caché, autenticación JWT mediante interceptores y guards, formularios reactivos validados y una estructura modular con lazy loading, Tailwind, daisyUI y Swiper.',
            result:
              'Una implementación funcional en Angular del mismo dominio, con una arquitectura reactiva, tipada y mantenible, siguiendo las convenciones propias del framework.',
            image: projectImages.angularTesloShop,
            link: 'https://ang-teslo-shop-app.netlify.app',
            github: 'https://github.com/EstherManriqueGlez/angular-teslo-shop-app',
          },
        ],
      },
      {
        title: 'GifsApp — Buscador de GIFs en React y Angular',
        badge: 'Proyecto de aprendizaje',
        tech: [],
        desc: '',
        challenge: '',
        solution: '',
        result: '',
        image: '',
        link: '',
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
            desc: 'Buscador de GIFs desarrollado en React, con una experiencia rápida y accesible, búsquedas confirmadas, caché y con flujo de resultados.',
            challenge:
              'Desarrollar una búsqueda de GIFs rápida y confiable sobre la API de Giphy, manejando estados de resultados, paginación y accesibilidad sin realizar una petición en cada pulsación de tecla.',
            solution:
              'Desarrollada con React 19, TypeScript y Vite, utilizando un hook useGifs propio para manejar caché en memoria, deduplicación de requests y cancelación de respuestas obsoletas; búsqueda confirmada con Enter; historial en localStorage de hasta ocho consultas; estados de carga, vacío y error con reintento; paginación con Load more; y un lightbox accesible con copia de URL, focus trap y manejo de la tecla Escape. La aplicación cuenta con 48 pruebas unitarias.',
            result:
              'Una aplicación de búsqueda probada y accesible, con tests offline deterministas, contraste AA, soporte para prefers-reduced-motion y una estrategia latest-query-wins que mantiene los resultados consistentes durante búsquedas rápidas.',
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
            desc: 'Buscador de GIFs desarrollado en Angular, con contenido trending, infinite scroll, búsqueda, historial persistente y tema claro/oscuro manejados mediante estado reactivo con Signals.',
            challenge:
              'Desarrollar una experiencia de exploración y búsqueda de GIFs en Angular, manteniendo estado reactivo, historial persistente y un manejo claro de errores HTTP dentro de una interfaz completamente responsive.',
            solution:
              'Desarrollada con componentes standalone de Angular 19, Signals y RxJS para manejar estado reactivo y flujos HTTP; contenido trending con infinite scroll; historial persistido en localStorage; tema claro/oscuro que conserva la preferencia del usuario y respeta la configuración del sistema; skeleton loaders; interceptor de errores HTTP con feedback mediante toasts; y una sidebar responsive colapsable.',
            result:
              'Una aplicación Angular responsive, con theming e historial persistentes, gestión de estado reactiva y manejo claro de errores, resolviendo el mismo dominio desde las convenciones propias de Angular.',
            image: projectImages.angularGifsApp,
            link: 'https://ang-gifs-app.netlify.app/',
            github: 'https://github.com/EstherManriqueGlez/gifs-app',
          },
        ],
      },
      {
        title: 'Superhero Universe — Catálogo de Héroes y Villanos',
        badge: 'Proyecto de aprendizaje',
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
        desc: 'SPA desarrollada en React para explorar y gestionar un catálogo de superhéroes y villanos, consumiendo una API externa y persistiendo favoritos en el navegador.',
        challenge:
          'Desarrollar un catálogo completo con estadísticas en dashboard, favoritos, búsqueda con debounce y filtros combinados, ordenamiento y vista de detalle, manteniendo consistencia y seguridad de tipos en el manejo de datos, routing y estado persistente.',
        solution:
          'Desarrollé la aplicación con React 19, TypeScript y Vite, utilizando TanStack Query y Axios para manejar datos de servidor con caché, React Router con navegación basada en hash, un Context de favoritos persistido en localStorage, búsqueda con debounce, filtros avanzados, vistas grid/list y una capa de UI desarrollada con Tailwind CSS v4 y shadcn/ui',
        result:
          'Una SPA responsive y probada, con dashboard, favoritos, búsqueda, filtros y detalle de personajes; estados de carga y vacío; y una capa de datos con seguridad de tipos, desplegada en Netlify y conectada a una API alojada en Render.',
        image: projectImages.heroes,
        link: 'https://rct-heroes-app.netlify.app/',
        github: 'https://github.com/EstherManriqueGlez/react-heroes-app',
      },
    ],
  },

  skills: {
    title: 'Habilidades y experiencia',
    subtitle:
      'Las herramientas con las que trabajo y los principios de ingeniería que guían mi forma de desarrollar.',
    filterAria: 'Filtrar habilidades por área',
    all: 'Todas',
    tech: 'Tecnología',
    categoryLabels: {
      'Core Frontend': 'Core Frontend',
      Architecture: 'Arquitectura',
      'UI/UX Tools': 'Herramientas UI/UX',
      'How I Work': 'Cómo trabajo',
    },
    cards: [
      {
        id: 'user-centered-engineering',
        kind: 'capability',
        title: 'Ingeniería centrada en el usuario',
        category: 'How I Work',
        desc: 'Tomo decisiones técnicas pensando en las personas que usan el producto, buscando un equilibrio entre usabilidad, accesibilidad y necesidades de negocio.',
      },
      {
        id: 'engineering-craftsmanship',
        kind: 'capability',
        title: 'Cuidado en la ingeniería',
        category: 'How I Work',
        desc: 'Cuido las decisiones técnicas, desde la arquitectura de componentes hasta los detalles visuales, para desarrollar productos confiables, mantenibles y escalables.',
      },
      {
        id: 'continuous-growth',
        kind: 'capability',
        title: 'Aprendizaje continuo',
        category: 'How I Work',
        desc: 'Me mantengo aprendiendo y explorando nuevas tecnologías, sin perder de vista los fundamentos de ingeniería que siguen siendo importantes con el tiempo.',
      },
      {
        id: 'thoughtful-problem-solving',
        kind: 'capability',
        title: 'Resolución de problemas con criterio',
        category: 'How I Work',
        desc: 'Prefiero entender bien un problema antes de elegir una solución y priorizo la calidad a largo plazo sobre los arreglos rápidos.',
      },
      {
        id: 'collaborative-engineering',
        kind: 'capability',
        title: 'Trabajo colaborativo',
        category: 'How I Work',
        desc: 'Creo en el trabajo en equipo, la comunicación abierta y la colaboración cercana entre ingeniería, diseño y producto para llegar a mejores soluciones.',
      },
      {
        id: 'quality-by-design',
        kind: 'capability',
        title: 'Calidad desde el inicio',
        category: 'How I Work',
        desc: 'Considero la accesibilidad, el testing y el rendimiento durante todo el proceso de desarrollo, no como tareas que se agregan al final.',
      },
      {
        id: 'ai-assisted',
        kind: 'capability',
        title: 'Desarrollo asistido por IA',
        category: 'How I Work',
        desc: 'Integro herramientas y flujos de trabajo asistidos por IA manteniendo revisión, testing y responsabilidad sobre las decisiones de ingeniería.',
      },
      { id: 'react', kind: 'tech', title: 'React 19', category: 'Core Frontend' },
      { id: 'angular', kind: 'tech', title: 'Angular 19', category: 'Core Frontend' },
      { id: 'typescript', kind: 'tech', title: 'TypeScript', category: 'Core Frontend' },
      { id: 'javascript', kind: 'tech', title: 'JavaScript', category: 'Core Frontend' },
      { id: 'html5', kind: 'tech', title: 'HTML5', category: 'Core Frontend' },
      { id: 'scss', kind: 'tech', title: 'SCSS / CSS Modules', category: 'Core Frontend' },
      { id: 'tailwind', kind: 'tech', title: 'Tailwind CSS', category: 'Core Frontend' },
      {
        id: 'frontend-architecture',
        kind: 'capability',
        title: 'Arquitectura frontend',
        category: 'Architecture',
        desc: 'Arquitecturas modulares, tipadas y pensadas para aplicaciones React y Angular con enfoque de producción.',
      },
      {
        id: 'reusable-components',
        kind: 'capability',
        title: 'Componentes reutilizables',
        category: 'Architecture',
        desc: 'Desde diseños en Figma hasta componentes reutilizables y listos para producción, alineados con principios de Design System.',
      },
      {
        id: 'state-management',
        kind: 'capability',
        title: 'Gestión de estado',
        category: 'Architecture',
        desc: 'Separación clara entre estado de servidor y cliente utilizando herramientas como TanStack Query, Zustand y Signals.',
      },
      {
        id: 'api-integration',
        kind: 'capability',
        title: 'Integración de APIs',
        category: 'Architecture',
        desc: 'Integración de capas de datos tipadas con caché, interceptores y manejo claro de errores HTTP.',
      },
      {
        id: 'performance',
        kind: 'capability',
        title: 'Optimización de rendimiento',
        category: 'Architecture',
        desc: 'Uso de caché, lazy loading y cancelación de respuestas obsoletas para mantener interfaces rápidas y consistentes.',
      },
      {
        id: 'accessibility',
        kind: 'capability',
        title: 'Accesibilidad',
        category: 'Architecture',
        desc: 'Aplicación de prácticas WCAG 2.1 en componentes, gestión de foco y flujos validados con lectores de pantalla.',
      },
      {
        id: 'responsive-ui',
        kind: 'capability',
        title: 'Desarrollo de UI responsive',
        category: 'UI/UX Tools',
        desc: 'Layouts mobile-first y patrones de navegación responsive para interfaces con múltiples funcionalidades.',
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
    title: 'Conectemos',
  },

  contacts: [
    {
      icon: 'Mail' as const,
      label: 'Email',
      value: 'dev.publicidadweb@gmail.com',
      href: 'mailto:dev.publicidadweb@gmail.com',
    },
    {
      icon: 'Phone' as const,
      label: 'Teléfono',
      value: '+52 55 2852 9983',
      href: 'tel:+5528529983',
    },
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
    manifesto: 'Piensa con intención. Diseña con claridad. Construye con propósito.',
  },

  meta: {
    title: 'Esther Manrique González — Frontend Software Engineer',
    description:
      'Frontend Software Engineer especializada en Angular, React, TypeScript, accesibilidad y desarrollo web moderno.',
    ogTitle: 'Esther Manrique González — Frontend Software Engineer',
    ogDescription:
      'Frontend Software Engineer especializada en Angular, React, TypeScript, accesibilidad y desarrollo web moderno.',
    ogLocale: 'es_MX',
  },

  ui: {
    skipLink: 'Saltar al contenido principal',
    errorBoundary: {
      title: 'Algo salió mal',
      message: 'Esta sección no pudo cargarse. Intenta recargar la página.',
    },
    navbar: {
      label: 'Navegación principal',
      logoAlt: 'Logo de Manrique',
      switchToLight: 'Cambiar a tema claro',
      switchToDark: 'Cambiar a tema oscuro',
      openMenu: 'Abrir menú de navegación',
      closeMenu: 'Cerrar menú de navegación',
      langGroup: 'Idioma',
    },
    projectCard: {
      challenge: 'Reto:',
      solution: 'Solución:',
      result: 'Resultado:',
      github: 'GitHub',
      liveDemo: 'Demo en vivo',
      imageFallback: 'Imagen no disponible',
      variantGroup: 'Versión por framework',
      imgAlt: (title) => `Captura de pantalla de ${title}`,
      sourceAria: (label) => `Ver el código fuente de ${label} en GitHub`,
      liveAria: (label) => `Ver demo en vivo de ${label}`,
      sourceAriaDefault: 'Ver código fuente en GitHub',
      liveAriaDefault: 'Ver demo en vivo',
    },
  },
};
