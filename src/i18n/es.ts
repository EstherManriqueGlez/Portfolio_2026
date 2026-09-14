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
    subtitle: 'Desarrollo productos con intención y propósito.',
    paragraph:
      'Desarrollo productos digitales donde la ingeniería, el diseño y la experiencia de usuario se unen para crear soluciones útiles, intuitivas y con propósito. Como Frontend Software Engineer, disfruto transformar problemas complejos en interfaces claras e intuitivas mediante una arquitectura bien pensada, código limpio y atención al detalle. A lo largo de mi experiencia profesional he aprendido que un buen software no solo debe funcionar bien: también debe ser accesible, escalable, mantenible y agradable de usar. Creo que cada decisión importa, desde la estructura de un componente hasta el espacio entre dos elementos. Esos detalles generan confianza, mejoran la usabilidad y contribuyen a crear mejores productos. Para mí, el desarrollo frontend es el punto donde la tecnología se encuentra con las personas, y eso es lo que hace que este trabajo tenga sentido.',
    manifesto: 'Piensa con intención. Diseña con claridad. Construye con propósito.',
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
          'Trabajo independiente en frontend enfocado en construir y modernizar aplicaciones web, acompañado de aprendizaje continuo y de la integración de flujos de ingeniería asistidos por IA en mi proceso de desarrollo.',
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
              'Iniciativa de adopción de un Design System empresarial en productos construidos sobre un framework de UI propietario basado en Angular. El trabajo se centró en modernizar componentes de UI existentes y crear nuevos componentes alineados con el lenguaje visual, los design tokens, los requisitos de accesibilidad y los patrones de interacción del Design System.',
            description: [
              'Desarrollé y actualicé componentes de UI en Angular para alinearlos con las directrices visuales y funcionales del nuevo Design System.',
              'Transformé diseños de Figma en componentes reutilizables y listos para producción, colaborando estrechamente con diseño de producto para mantener la coherencia visual y funcional.',
              'Trabajé con design tokens para mantener consistencia entre propiedades visuales, estados de componentes y patrones de interacción.',
              'Integré la accesibilidad durante todo el desarrollo, alineando componentes e interfaces con los requisitos aplicables de WCAG 2.1.',
              'Validé accesibilidad mediante herramientas de auditoría automatizada y pruebas con lectores de pantalla.',
              'Escribí y mantuve pruebas unitarias para componentes frontend, cuidando la funcionalidad y compatibilidad existentes durante la modernización de la UI.',
              'Participé en code reviews y colaboré con diseño e ingeniería a lo largo del ciclo de desarrollo.',
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
              'Aplicación empresarial para apoyar programas de sostenibilidad mediante flujos de recopilación, seguimiento y generación de reportes de datos.',
            description: [
              'Desarrollé interfaces de usuario y funcionalidades de la aplicación con Angular, Dart, HTML y SCSS.',
              'Construí y mantuve páginas web y funcionalidades frontend a partir de requisitos y lineamientos técnicos definidos.',
              'Trabajé de cerca con el Lead Frontend Developer para alinear criterios de implementación y mantener consistencia en toda la aplicación.',
              'Desarrollé y mantuve pruebas unitarias para componentes frontend.',
              'Trabajé con Reactive Forms para implementar interfaces interactivas orientadas a datos.',
              'Participé en prácticas Agile/Scrum, incluyendo sprint planning, backlog refinement y daily stand-ups.',
              'Colaboré con el equipo para cumplir los objetivos del sprint y entregar las funcionalidades asignadas dentro del ciclo de desarrollo.',
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
              'Programa técnico de formación enfocado en Angular y TypeScript, orientado al desarrollo de herramientas frontend para distintas verticales tecnológicas de Google mediante un proyecto práctico de aplicación web.',
            description: [
              'Desarrollé el frontend de una aplicación web con Angular y TypeScript.',
              'Construí la interfaz de la aplicación con componentes de Angular Material.',
              'Integré una API CRUD sencilla de productos para las operaciones de datos del backend.',
              'Utilicé Node.js y json-server para dar soporte a la funcionalidad de backend durante el desarrollo.',
              'Gestioné el código fuente con Git y GitHub.',
            ],
            technologies: ['Angular', 'TypeScript', 'Angular Material', 'Git', 'GitHub'],
          },
          {
            period: 'Dic 2021 — Mar 2022',
            role: 'Full Stack Developer',
            projectName: 'Programa EPM-RDMX — PET Project | Aplicación MERN Stack',
            projectDesc:
              'Proyecto intensivo de formación en ingeniería de software centrado en desarrollar una aplicación full stack con MERN, adquiriendo experiencia práctica con React, JavaScript, fundamentos de backend y flujos modernos de desarrollo.',
            description: [
              'Desarrollé una aplicación web full stack como parte del programa de formación.',
              'Construí funcionalidades frontend con React y JavaScript.',
              'Trabajé con funcionalidades de backend para fortalecer mi comprensión del desarrollo de aplicaciones full stack.',
              'Apliqué buenas prácticas de desarrollo de software y control de versiones durante todo el proyecto.',
              'Construí interfaces responsive utilizando patrones modernos basados en componentes.',
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
          'Plataforma web para la administración y organización de torneos de videojuegos, donde inicié mi carrera profesional en desarrollo de software contribuyendo al frontend.',
        description: [
          'Desarrollé interfaces de usuario con Vue.js y JavaScript.',
          'Integré APIs REST para soportar la gestión dinámica de datos y las interacciones de la aplicación.',
          'Colaboré dentro de un equipo Agile/Scrum, participando activamente en las ceremonias y en el proceso de desarrollo de software.',
        ],
        technologies: ['Vue.js', 'JavaScript', 'REST APIs', 'Scrum'],
      },
    ],
  },

  projects: {
    title: 'Proyectos seleccionados',
    subtitle:
      'Aplicaciones y proyectos técnicos que reflejan arquitectura frontend, visión de producto, accesibilidad y profundidad de ingeniería.',
    items: [
      {
        title: 'AVBINME — Plataforma corporativa de valuación y avalúos',
        tech: ['React 19', 'TypeScript', 'Vite', 'Sass/SCSS', 'React Router'],
        desc: 'Modernización de una aplicación legacy en React y reconstrucción del frontend para una plataforma corporativa B2B de valuación y avalúos.',
        challenge:
          'Modernizar una aplicación legacy en React y, al mismo tiempo, transmitir rigor técnico, validez legal y credibilidad institucional a una audiencia corporativa y profesional.',
        solution:
          'Reconstruí el frontend con React, TypeScript y Vite, incorporando una arquitectura moderna de componentes, un sistema de diseño responsive, navegación multipágina, lazy loading y llamadas a la acción más claras y orientadas a conversión.',
        result:
          'Una plataforma responsive, accesible y mantenible, con una identidad institucional más sólida, desplegada en GitHub Pages y estructurada para guiar a los visitantes hacia el contacto con el cliente.',
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
        desc: 'Proyecto colaborativo — landing page responsive para una empresa de limpieza residencial en San Diego, construida con una arquitectura modular sin framework y una UX centrada en la interacción.',
        challenge:
          'Crear una experiencia one-page rápida y visualmente pulida, pensada para favorecer las reservas, presentando múltiples servicios, reseñas, galerías y flujos de mudanza sin depender de un framework frontend.',
        solution:
          'Construí una arquitectura modular con componentes reutilizables, animaciones de scroll con GSAP, galerías y sliders interactivos, layouts responsive y datos estructurados para SEO local, manteniendo un frontend ligero.',
        result:
          'Una landing page responsive y lista para producción, con componentes reutilizables, interacciones ricas y una arquitectura ligera, desplegada en Netlify.',
        image: projectImages.harborshine,
        link: 'https://harborshine.netlify.app/',
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
        desc: 'Proyecto colaborativo — landing page bilingüe y cinematográfica para un estudio web boutique, combinando estrategia de marca, UX inmersiva, accesibilidad y desarrollo asistido por IA.',
        challenge:
          'Convertir el concepto de un estudio web boutique en una experiencia digital orientada a conversión, con contenido bilingüe, interacciones accesibles y motion enriquecido sin comprometer el rendimiento.',
        solution:
          'Colaboré desde la ideación hasta la implementación, construyendo una experiencia en React con design tokens propios, interacciones con GSAP y Framer Motion, contenido bilingüe, soporte para reduced motion y un flujo de contacto listo para producción con hCaptcha y Web3Forms.',
        result:
          'Una experiencia digital bilingüe lista para producción que integra motion inmersivo, interacciones accesibles, fundamentos de SEO y un flujo completo de contacto dentro de una experiencia de marca coherente.',
        image: projectImages.mistica,
        link: 'https://mistica-web-studio.netlify.app/',
        github: 'https://github.com/DianyelaMaldonado/Mistica-Web-Studio',
      },
      {
        title: 'Teslo Shop — E-commerce en React y Angular con panel de administración',
        badge: 'Proyecto de aprendizaje',
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
        desc: 'Proyecto técnico — el mismo dominio de e-commerce implementado en React y Angular para comparar distintos enfoques de estado, data fetching, routing, autenticación y arquitectura de componentes.',
        challenge:
          'Construir una experiencia de e-commerce completa con catálogo de productos, autenticación, administración protegida por roles, operaciones CRUD y carga de archivos, manteniendo seguridad de tipos y una arquitectura frontend escalable.',
        solution:
          'Implementé la aplicación tanto en React como en Angular, utilizando TanStack Query y Zustand para el estado de servidor y cliente en React, y Signals con recursos reactivos y caché en Angular, junto con rutas protegidas, formularios validados y una arquitectura modular.',
        result:
          'Dos implementaciones funcionales del mismo dominio de e-commerce que demuestran arquitectura frontend cross-framework y la capacidad de aplicar principios de ingeniería comparables en React y Angular.',
        image: projectImages.reactTesloShop,
        link: 'https://react-teslo-shop-app.netlify.app',
        github: 'https://github.com/EstherManriqueGlez/react-teslo-shop-app',
        variants: [
          {
            id: 'react',
            label: 'React',
            tech: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
            desc: 'Storefront de e-commerce y panel de administración implementados en React — una exploración práctica de data fetching, gestión de estado, autenticación y arquitectura de componentes escalable.',
            challenge:
              'Construir una experiencia de e-commerce completa — catálogo, detalle de producto, autenticación, administración protegida por roles, CRUD y carga de archivos — manteniendo seguridad de tipos y una arquitectura limpia.',
            solution:
              'Construido con React 19, TypeScript y Vite, utilizando TanStack Query para estado de servidor y caché, Zustand para estado de UI, formularios validados, rutas protegidas y una estructura modular tipada.',
            result:
              'Una implementación funcional que demuestra una separación clara de estados, una capa de datos con caché y componentes reutilizables con seguridad de tipos.',
            image: projectImages.reactTesloShop,
            link: 'https://react-teslo-shop-app.netlify.app',
            github: 'https://github.com/EstherManriqueGlez/react-teslo-shop-app',
          },
          {
            id: 'angular',
            label: 'Angular',
            tech: ['Angular 19', 'TypeScript', 'RxJS Signals', 'Tailwind CSS', 'daisyUI', 'Swiper'],
            desc: 'El mismo dominio de e-commerce implementado en Angular — aplicando Signals, recursos reactivos, interceptores HTTP, route guards y arquitectura standalone.',
            challenge:
              'Construir una experiencia de e-commerce completa — catálogo, detalle de producto, autenticación, administración protegida por roles, CRUD y carga de archivos — manteniendo seguridad de tipos y una arquitectura limpia.',
            solution:
              'Construido con Angular 19 y TypeScript, utilizando Signals y rxResource para estado reactivo y caché, autenticación JWT mediante interceptores y guards, formularios reactivos validados y una estructura modular con lazy loading, Tailwind, daisyUI y Swiper.',
            result:
              'Una implementación funcional en Angular del mismo dominio, aplicando estándares de ingeniería comparables mediante una arquitectura reactiva, tipada y mantenible.',
            image: projectImages.angularTesloShop,
            link: 'https://ang-teslo-shop-app.netlify.app',
            github: 'https://github.com/EstherManriqueGlez/angular-teslo-shop-app',
          },
        ],
      },
      {
        title: 'GifsApp — Buscador de GIFs en React y Angular',
        badge: 'Proyecto de aprendizaje',
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
        desc: 'Proyecto técnico — el mismo dominio de búsqueda de GIFs implementado en React y Angular para comparar enfoques de estado asíncrono, caché, persistencia y UI accesible.',
        challenge:
          'Construir una experiencia de búsqueda de GIFs rápida y accesible sobre la API de Giphy, explorando cómo dos frameworks resuelven el estado reactivo, la gestión de requests, la persistencia y la accesibilidad.',
        solution:
          'Implementé dos aplicaciones independientes sobre la API de Giphy: una en React con búsqueda confirmada, caché en memoria, cancelación de respuestas obsoletas y un flujo accesible cubierto por pruebas; y otra en Angular con contenido trending, infinite scroll, historial de búsqueda persistente, theming y estado reactivo basado en Signals.',
        result:
          'Dos implementaciones con enfoque de producción del mismo dominio, cada una siguiendo las convenciones de su framework para estado, data fetching, persistencia y accesibilidad.',
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
            desc: 'Búsqueda de GIFs implementada en React — una experiencia rápida y accesible con búsquedas confirmadas, caché inteligente y un flujo de resultados cuidado.',
            challenge:
              'Construir una búsqueda de GIFs rápida y confiable sobre la API de Giphy, equilibrando estados de resultados, paginación y accesibilidad sin enviar una request en cada pulsación de tecla.',
            solution:
              'Construido con React 19, TypeScript y Vite, utilizando un hook useGifs propio para manejar caché en memoria, deduplicación de requests y cancelación de respuestas obsoletas; búsqueda confirmada con Enter; historial en localStorage de hasta ocho consultas anteriores; estados completos de carga, vacío y error con reintento; paginación con Load more; y un lightbox accesible con copia de URL, focus trap y manejo de la tecla Escape — respaldado por 48 pruebas unitarias.',
            result:
              'Una aplicación de búsqueda probada y accesible, con pruebas offline deterministas, estilos con contraste AA y soporte para prefers-reduced-motion, además de una estrategia latest-query-wins que mantiene los resultados consistentes durante búsquedas rápidas.',
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
            desc: 'Búsqueda de GIFs implementada en Angular — contenido trending con infinite scroll, búsqueda, páginas de historial persistente y tema claro/oscuro sobre estado reactivo con Signals.',
            challenge:
              'Construir una experiencia de descubrimiento de GIFs en Angular que cubra contenido trending y búsqueda, manteniendo estado reactivo, historial persistente y errores HTTP comprensibles dentro de un layout completamente responsive.',
            solution:
              'Construido con componentes standalone de Angular 19, Signals y RxJS para estado reactivo y flujos HTTP; contenido trending con infinite scroll; historial de búsqueda persistido en localStorage y disponible desde la sidebar y las páginas por consulta; tema claro/oscuro persistente que respeta la preferencia del sistema operativo; skeleton loaders; interceptor de errores HTTP con feedback mediante toasts; y una sidebar responsive colapsable.',
            result:
              'Una aplicación Angular pulida y responsive, con theming e historial persistentes, gestión de estado reactiva y manejo claro de errores — el mismo dominio resuelto siguiendo las convenciones de Angular.',
            image: projectImages.angularGifsApp,
            link: 'https://ang-gifs-app.netlify.app/',
            github: 'https://github.com/EstherManriqueGlez/gifs-app',
          },
        ],
      },
      {
        title: 'Superhero Universe — Catálogo de héroes y villanos',
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
        desc: 'Proyecto de aprendizaje — SPA desarrollada en React para explorar y gestionar un catálogo de superhéroes y villanos, consumiendo una API externa y persistiendo favoritos en el navegador.',
        challenge:
          'Construir un catálogo completo de héroes con estadísticas en dashboard, favoritos, búsqueda con debounce y filtros combinados, ordenamiento y una página de detalle, manteniendo consistencia y seguridad de tipos en data fetching, routing y estado persistido frente a una API externa.',
        solution:
          'Construido con React 19, TypeScript y Vite, utilizando TanStack Query y Axios para datos de servidor con caché, React Router con navegación basada en hash, un Context de favoritos persistido en localStorage, búsqueda con debounce, filtros avanzados, vistas grid/list y una capa de UI desarrollada con Tailwind CSS v4 y shadcn/ui sobre primitivas de Radix.',
        result:
          'Una SPA responsive y probada con dashboard, favoritos, flujos de búsqueda y detalle, estados de carga y vacío, y una capa de datos con seguridad de tipos, desplegada en Netlify contra una API alojada en Render.',
        image: projectImages.heroes,
        link: 'https://superhero-universe.netlify.app/',
        github: 'https://github.com/EstherManriqueGlez/react-heroes-app',
      },
    ],
  },

  skills: {
    title: 'Habilidades y experiencia',
    subtitle:
      'Las herramientas con las que trabajo y los principios de ingeniería que guían mi forma de construir.',
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
        desc: 'Las decisiones técnicas parten de las personas que usan el producto, equilibrando usabilidad, accesibilidad y necesidades de producto.',
      },
      {
        id: 'engineering-craftsmanship',
        kind: 'capability',
        title: 'Cuidado en la ingeniería',
        category: 'How I Work',
        desc: 'Las pequeñas decisiones técnicas, desde la arquitectura de componentes hasta el detalle visual, dan forma a productos confiables, mantenibles y escalables.',
      },
      {
        id: 'continuous-growth',
        kind: 'capability',
        title: 'Aprendizaje continuo',
        category: 'How I Work',
        desc: 'Exploro nuevas tecnologías de forma continua mientras fortalezco los fundamentos de ingeniería que siguen siendo valiosos con el tiempo.',
      },
      {
        id: 'thoughtful-problem-solving',
        kind: 'capability',
        title: 'Resolución de problemas con criterio',
        category: 'How I Work',
        desc: 'Prefiero entender bien el problema antes de elegir una solución, priorizando la calidad a largo plazo sobre los arreglos rápidos.',
      },
      {
        id: 'collaborative-engineering',
        kind: 'capability',
        title: 'Ingeniería colaborativa',
        category: 'How I Work',
        desc: 'Creo que las soluciones más sólidas surgen de la responsabilidad compartida, la comunicación abierta y la colaboración cercana entre ingeniería, diseño y producto.',
      },
      {
        id: 'quality-by-design',
        kind: 'capability',
        title: 'Calidad desde el diseño',
        category: 'How I Work',
        desc: 'La accesibilidad, el testing y el rendimiento se consideran durante todo el proceso, no como algo que se agrega al final.',
      },
      {
        id: 'ai-assisted',
        kind: 'capability',
        title: 'Desarrollo asistido por IA',
        category: 'How I Work',
        desc: 'Integro flujos de trabajo asistidos por IA junto con revisión cuidadosa, testing y responsabilidad sobre las decisiones de ingeniería.',
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
        title: 'Arquitectura frontend',
        category: 'Architecture',
        desc: 'Bases modulares y con seguridad de tipos para aplicaciones en React y Angular con enfoque de producción.',
      },
      {
        id: 'reusable-components',
        kind: 'capability',
        title: 'Componentes reutilizables',
        category: 'Architecture',
        desc: 'De Figma a componentes reutilizables y listos para producción, alineados con principios de Design System.',
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
        desc: 'Capas de datos tipadas con caché, interceptores y manejo claro de errores HTTP.',
      },
      {
        id: 'performance',
        kind: 'capability',
        title: 'Optimización de rendimiento',
        category: 'Architecture',
        desc: 'Caché, lazy loading y cancelación de respuestas obsoletas para interfaces rápidas y consistentes.',
      },
      {
        id: 'accessibility',
        kind: 'capability',
        title: 'Accesibilidad',
        category: 'Architecture',
        desc: 'Prácticas WCAG 2.1 aplicadas a componentes, gestión de foco y flujos validados con lectores de pantalla.',
      },
      {
        id: 'responsive-ui',
        kind: 'capability',
        title: 'Desarrollo de UI responsive',
        category: 'UI/UX Tools',
        desc: 'Layouts mobile-first y patrones de navegación responsive en interfaces de aplicaciones con múltiples funcionalidades.',
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
