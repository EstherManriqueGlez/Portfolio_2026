import type { Content } from './types';
import { projectImages } from './media';

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
      'Desarrollo productos digitales donde la ingeniería, el diseño y la experiencia de usuario se unen para crear soluciones útiles, intuitivas y con propósito. Como ingeniera de software frontend, disfruto transformar problemas complejos en interfaces intuitivas mediante una arquitectura cuidadosa, código limpio y atención al detalle. A lo largo de mi experiencia profesional, he aprendido que el buen software no solo debe ser funcional, sino también accesible, escalable, mantenible y agradable de usar. Creo que cada decisión importa, desde la estructura de un componente hasta el espaciado entre dos elementos. Son esos pequeños detalles los que generan confianza, mejoran la usabilidad y, en última instancia, ayudan a construir mejores productos. Para mí, el desarrollo frontend es el punto donde la tecnología se encuentra con las personas, y eso es lo que hace que este trabajo tenga sentido.',
    manifesto: 'Piensa con intención. Diseña con claridad. Construye con propósito.',
  },

  experience: {
    title: 'Experiencia',
    items: [
      {
        company: 'Desarrollo frontend independiente',
        totalPeriod: 'Abr 2026 — Presente',
        currentRole: '',
        stages: [],
        role: 'Desarrolladora frontend independiente',
        projectName: 'Proyectos freelance y personales',
        projectDesc:
          'Enfocada en el desarrollo frontend, el aprendizaje continuo y la exploración del desarrollo asistido por IA, los flujos de trabajo de ingeniería potenciados por IA y las tecnologías emergentes.',
        description: [],
        technologies: [
          'React',
          'Angular',
          'TypeScript',
          'Javascript',
          'Vite',
          'SCSS',
          'Design System',
        ],
      },
      {
        company: 'EPAM Systems',
        totalPeriod: 'Dic 2021 — Feb 2026',
        currentRole: 'Ingeniera de Software',
        stages: [
          {
            period: 'Mar 2024 — Dic 2025',
            role: 'Ingeniera de Software',
            projectName: 'Proyecto cliente - Adopción de Design System y framework de UI',
            projectDesc:
              'Trabajé como ingeniera de software frontend en la adopción de un nuevo Design System empresarial en productos construidos sobre un framework de UI propietario basado en Angular. \n La iniciativa se centró en modernizar componentes de UI existentes y crear otros nuevos para alinearlos con el lenguaje visual, los design tokens, los requisitos de accesibilidad y los patrones de interacción del Design System.',
            description: [
              'Desarrollé y actualicé componentes de UI en Angular para alinearlos con las directrices visuales y funcionales del nuevo Design System.',
              'Traduje diseños de Figma en componentes reutilizables y listos para producción, trabajando en estrecha colaboración con la persona de diseño de producto para garantizar coherencia visual y funcional.',
              'Trabajé con design tokens para mantener la consistencia entre propiedades visuales y estados de componentes.',
              'Apliqué la accesibilidad como requisito central durante todo el desarrollo, asegurando que componentes e interfaces cumplieran los estándares WCAG 2.1 aplicables.',
              'Realicé validaciones de accesibilidad con herramientas de auditoría automatizada y pruebas con lectores de pantalla.',
              'Presté especial atención a los detalles visuales, funcionales y de accesibilidad para entregar experiencias de usuario consistentes e inclusivas.',
              'Escribí y mantuve pruebas unitarias para los componentes frontend.',
              'Garanticé la consistencia entre componentes de UI manteniendo la funcionalidad y compatibilidad existentes.',
              'Participé en code reviews, contribuyendo a la calidad y consistencia del código.',
              'Trabajé en estrecha colaboración con diseñadores y otros ingenieros a lo largo del ciclo de desarrollo.',
              'Trabajé con TypeScript, Angular, RxJS y SCSS en una arquitectura frontend basada en componentes.',
              'Colaboré con el equipo para entregar experiencias de UI consistentes, accesibles y mantenibles.',
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
            role: 'Ingeniera de software junior',
            projectName: 'Proyecto cliente',
            projectDesc:
              'Me integré a un equipo de ingeniería orientado al cliente que trabajaba en una aplicación empresarial de apoyo a programas de sostenibilidad, incluyendo recopilación, seguimiento y elaboración de informes de datos.',
            description: [
              'Desarrollé interfaces de usuario y funcionalidades de la aplicación con Angular, Dart, HTML y SCSS.',
              'Construí y mantuve páginas web y funcionalidades frontend según los requisitos asignados y las directrices técnicas.',
              'Trabajé en estrecha colaboración con la lead de desarrollo frontend para alinear los enfoques de implementación y mantener la consistencia en toda la aplicación.',
              'Desarrollé y mantuve pruebas unitarias para los componentes frontend.',
              'Trabajé con Reactive Forms para implementar interfaces interactivas y orientadas a datos.',
              'Participé en prácticas Agile/Scrum, incluyendo sprint planning, refinamiento del backlog y daily stand-ups.',
              'Colaboré con el equipo para alcanzar los objetivos del sprint y entregar las funcionalidades asignadas dentro del ciclo de desarrollo.',
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
            role: 'Desarrolladora frontend',
            projectName: 'Programa de formación GO2-GTH',
            projectDesc:
              'Seleccionada para un segundo programa técnico de formación centrado en Angular y TypeScript, desarrollando herramientas para diferentes verticales de tecnología de Google.',
            description: [
              'Desarrollé el frontend de una aplicación web con Angular y TypeScript.',
              'Construí la interfaz de la aplicación con componentes de Angular Material.',
              'Integré una API de productos CRUD sencilla para las operaciones de datos del backend.',
              'Usé Node.js y json-server para dar soporte al backend de la aplicación.',
              'Gestioné el código fuente con Git y GitHub.',
            ],
            technologies: ['Angular', 'TypeScript', 'Angular Material', 'Git', 'GitHub'],
          },
          {
            period: 'Dic 2021 — Mar 2022',
            role: 'Desarrolladora full stack',
            projectName: 'Programa EPM-RDMX - PET-Project | Aplicación MERN Stack',
            projectDesc:
              'Ingresé a EPAM a través de un intensivo programa de formación en ingeniería de software centrado en React y JavaScript.',
            description: [
              'Desarrollé una aplicación web full stack como parte del programa de formación.',
              'Construí funcionalidades frontend con React y JavaScript.',
              'Trabajé con funcionalidades de backend para comprender los fundamentos del desarrollo full stack.',
              'Apliqué buenas prácticas de desarrollo de software y control de versiones durante todo el proyecto.',
              'Desarrollé aplicaciones web responsive con arquitecturas de componentes modernas.',
            ],
            technologies: ['React', 'JavaScript', 'MERN Stack', 'Git'],
          },
        ],
      },
      {
        company: 'Spiralis, S.A. de C.V.',
        totalPeriod: 'Nov 2020 — Mar 2021',
        currentRole: 'Desarrolladora frontend Jr.',
        stages: [],
        role: 'Desarrolladora frontend Jr.',
        projectName: 'Bravo - Gaming',
        projectDesc:
          'Comencé mi carrera profesional en el desarrollo de software, contribuyendo al frontend de una plataforma web para la administración y organización de torneos de videojuegos.',
        description: [
          'Desarrollé interfaces de usuario con Vue.js y JavaScript.',
          'Integré APIs REST para permitir la gestión dinámica de datos y la interacción con la aplicación.',
          'Colaboré en un equipo Agile/Scrum, participando activamente en las ceremonias y en el proceso de desarrollo de software.',
        ],
        technologies: ['Vue.js', 'JavaScript', 'REST APIs', 'Scrum'],
      },
    ],
  },

  projects: {
    title: 'Proyectos seleccionados',
    subtitle:
      'Aplicaciones listas para producción que demuestran complejidad técnica, arquitectura e impacto medible.',
    items: [
      {
        title: 'AVBINME — Plataforma corporativa de valoración y tasación',
        tech: ['React 19', 'TypeScript', 'Vite', 'Sass/SCSS', 'React Router'],
        desc: 'Modernización de un legado en React y reconstrucción del frontend para una plataforma B2B corporativa premium.',
        challenge:
          'Modernizar una aplicación heredada en React comunicando rigor técnico, validez legal y autoridad institucional a audiencias corporativas y profesionales.',
        solution:
          'Reconstruí el frontend con React, TypeScript y Vite, introduciendo una arquitectura de componentes moderna, un sistema de diseño responsive, enrutamiento multipágina, lazy loading y CTAs orientados a la conversión.',
        result:
          'Una plataforma responsive, accesible y mantenible con una identidad institucional premium, desplegada en GitHub Pages y optimizada para guiar a los visitantes hacia el contacto con el cliente.',
        image: projectImages.avbinme,
        link: 'https://esthermanriqueglez.github.io/avbinme/',
        github: 'https://github.com/EstherManriqueGlez/avbinme',
      },
      {
        title: 'Harborshine Cleaning — Landing page',
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
        desc: 'Proyecto colaborativo — Landing page de alto rendimiento para una empresa de limpieza residencial en San Diego, construida con una arquitectura modular sin framework y una UX orientada a la interacción.',
        challenge:
          'Crear una experiencia one-page rápida y visualmente pulida que convierta visitantes en reservas, presentando múltiples servicios, reseñas, galerías y flujos de mudanza sin depender de un framework frontend.',
        solution:
          'Construí una arquitectura modular con componentes reutilizables, animaciones de scroll con GSAP, galerías y sliders interactivos, layouts responsive y datos estructurados para SEO local, manteniendo un frontend ligero y eficiente.',
        result:
          'Una landing page responsive y lista para producción, con componentes reutilizables, interacciones ricas y arquitectura ligera, desplegada con éxito en Netlify.',
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
        desc: 'Proyecto colaborativo — Landing page bilingüe y cinematográfica para un estudio web boutique, que combina estrategia de marca, UX inmersiva, accesibilidad y desarrollo asistido por IA.',
        challenge:
          'Convertir el concepto de un estudio web boutique en una experiencia digital de alta conversión, con contenido bilingüe, accesibilidad consciente de WCAG y movimiento rico sin comprometer el rendimiento.',
        solution:
          'Colaboré desde la ideación hasta la implementación, construyendo una experiencia basada en React con design tokens propios, interacciones con GSAP y Framer Motion, contenido bilingüe, preferencias de movimiento accesibles y un flujo de contacto listo para producción con hCaptcha y Web3Forms.',
        result:
          'Una experiencia digital bilingüe lista para producción que combina movimiento inmersivo, interacciones accesibles, fundamentos de SEO y un flujo completo de contacto con el cliente en una experiencia de marca cohesiva.',
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
        desc: 'Proyecto técnico — Aplicación de e-commerce implementada en React y Angular, explorando distintos enfoques de estado, datos, enrutamiento, autenticación y arquitectura de componentes.',
        challenge:
          'Construir una experiencia de e-commerce completa con catálogo de productos, autenticación, administración protegida, operaciones CRUD y subida de archivos, manteniendo type safety y una arquitectura frontend escalable.',
        solution:
          'Implementé la misma aplicación en React y Angular, usando TanStack Query y Zustand para el estado del servidor y del cliente en React, y RxJS Signals con recursos reactivos y caché en Angular, junto con rutas protegidas, formularios validados y arquitectura modular.',
        result:
          'Dos implementaciones funcionales del mismo dominio de e-commerce, que demuestran arquitectura frontend cross-framework y la capacidad de aplicar principios de ingeniería equiparables en React y Angular.',
        image: projectImages.reactTesloShop,
        link: 'https://react-teslo-shop-app.netlify.app',
        github: 'https://github.com/EstherManriqueGlez/react-teslo-shop-app',
        variants: [
          {
            id: 'react',
            label: 'React',
            tech: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
            desc: 'Storefront de e-commerce y panel de administración implementados en React — una exploración práctica del fetching de datos, la gestión de estado, la autenticación y una arquitectura de componentes escalable.',
            challenge:
              'Construir una experiencia de e-commerce completa — catálogo, detalle de producto, autenticación, admin protegido por roles, CRUD y subida de archivos — manteniendo type safety y una arquitectura limpia.',
            solution:
              'React 19, TypeScript y Vite, con TanStack Query para el estado del servidor y la caché, Zustand para el estado de UI, formularios validados, rutas protegidas y una estructura modular tipada.',
            result:
              'Una implementación funcional que demuestra una separación disciplinada de estados, una capa de datos con caché y componentes reutilizables y tipados.',
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
              'Construir una experiencia de e-commerce completa — catálogo, detalle de producto, autenticación, admin protegido por roles, CRUD y subida de archivos — manteniendo type safety y una arquitectura limpia.',
            solution:
              'Angular 19 y TypeScript, con Signals y rxResource para estado reactivo y caché, autenticación JWT mediante interceptores y guards, formularios reactivos validados y una estructura modular con lazy loading (Tailwind + daisyUI, Swiper).',
            result:
              'Una implementación funcional en Angular del mismo dominio, con estándares de ingeniería equiparables — reactiva, tipada y mantenible — bajo otro framework.',
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
        desc: 'Proyecto técnico — el mismo dominio de búsqueda de GIFs implementado en React y Angular, explorando distintos enfoques de estado asíncrono, caché, persistencia y UI accesible.',
        challenge:
          'Construir una experiencia de búsqueda de GIFs rápida y accesible sobre la API de Giphy, explorando cómo dos frameworks abordan el estado reactivo, la gestión de peticiones, la persistencia y la accesibilidad.',
        solution:
          'Implementé dos apps independientes sobre la API de Giphy: una en React con búsqueda confirmada, caché en memoria, cancelación de respuestas obsoletas y un flujo accesible totalmente testeado; y otra en Angular con trending e infinite scroll, historial de búsquedas persistente, theming y estado reactivo basado en Signals.',
        result:
          'Dos implementaciones orientadas a producción del mismo dominio, cada una reflejando las convenciones de su framework para estado, fetching de datos, persistencia y accesibilidad.',
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
            desc: 'Búsqueda de GIFs en React — una experiencia rápida y accesible con búsquedas confirmadas, caché inteligente y un flujo de resultados pulido.',
            challenge:
              'Construir una búsqueda de GIFs rápida y fiable contra la API de Giphy — equilibrando estados de resultado, paginación y accesibilidad sin peticiones por cada pulsación.',
            solution:
              'React 19, TypeScript y Vite, con un hook useGifs propio que gestiona caché en memoria, deduplicación de peticiones y cancelación de respuestas obsoletas; búsqueda confirmada con Enter, un historial de las consultas anteriores (máximo 8) en localStorage como chips clicables, estados completos de skeleton/vacío/error con reintento, paginación con "Load more" y un lightbox accesible con copiar URL, focus trap y manejo de Esc — respaldado por 48 pruebas unitarias.',
            result:
              'Una app de búsqueda testeada y accesible con pruebas offline deterministas, estilo con contraste AA y soporte de prefers-reduced-motion — el guard "la última consulta siempre gana" mantiene los resultados consistentes durante búsquedas rápidas.',
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
            desc: 'Búsqueda de GIFs en Angular — trending con infinite scroll, búsqueda, páginas de historial persistente y theming claro/oscuro sobre estado reactivo con Signals.',
            challenge:
              'Construir una experiencia de descubrimiento de GIFs en Angular que cubra trending y búsqueda, manteniendo el estado reactivo, el historial persistente y errores HTTP amigables en un layout totalmente responsive.',
            solution:
              'Componentes standalone de Angular 19 con Signals y RxJS para estado reactivo y flujos HTTP; trending con infinite scroll, búsqueda con historial en localStorage en la sidebar además de una página por consulta, toggle claro/oscuro que persiste y respeta la preferencia del sistema operativo, skeleton loaders, un interceptor de errores HTTP que muestra notificaciones toast y una sidebar responsive colapsable.',
            result:
              'Una app de Angular pulida y responsive con theming e historial persistentes, gestión de estado reactiva y feedback de errores elegante — el mismo dominio resuelto con las convenciones de Angular.',
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
        desc: 'Proyecto de aprendizaje — una SPA en React para descubrir y gestionar un catálogo de superhéroes y villanos, consumiendo una API externa y persistiendo favoritos en el navegador.',
        challenge:
          'Construir un catálogo de héroes completo con estadísticas de dashboard, favoritos, búsqueda con debounce y filtros combinados, ordenación y página de detalle — manteniendo el fetching de datos, el enrutamiento y el estado persistido consistentes y type-safe contra una API externa.',
        solution:
          'React 19, TypeScript y Vite, con TanStack Query y axios para datos de servidor cacheados, React Router (hash) para la navegación, un Context de favoritos persistido en localStorage, búsqueda con debounce y filtros avanzados con vistas de cuadrícula/lista, y una capa de UI construida con Tailwind CSS v4 y shadcn/ui (primitivas de Radix).',
        result:
          'Una SPA responsive y testeada con dashboard, favoritos, flujos de búsqueda y detalle, skeleton y estados vacíos, y una capa de datos type-safe — desplegada en Netlify contra una API alojada en Render.',
        image: projectImages.heroes,
        link: 'https://superhero-universe.netlify.app/',
        github: 'https://github.com/EstherManriqueGlez/react-heroes-app',
      },
    ],
  },

  skills: {
    title: 'Stack técnico y experiencia',
    subtitle:
      'Capacidades y tecnologías refinadas en proyectos reales construidos con estándares de producción.',
    filterAria: 'Filtrar habilidades por área',
    all: 'Todos',
    tech: 'Tecnología',
    categoryLabels: {
      'Core Frontend': 'Core Frontend',
      Architecture: 'Arquitectura',
      'UI/UX Tools': 'Herramientas UI/UX',
    },
    cards: [
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
        desc: 'Fundamentos modulares y type-safe detrás de builds de producción en React y Angular.',
      },
      {
        id: 'reusable-components',
        kind: 'capability',
        title: 'Componentes reutilizables',
        category: 'Architecture',
        desc: 'De Figma a componentes listos para producción y alineados con el design system.',
      },
      {
        id: 'state-management',
        kind: 'capability',
        title: 'Gestión de estado',
        category: 'Architecture',
        desc: 'Estado de servidor y cliente separados con TanStack Query, Zustand y Signals.',
      },
      {
        id: 'api-integration',
        kind: 'capability',
        title: 'Integración de APIs',
        category: 'Architecture',
        desc: 'Capas de datos tipadas con caché, interceptores y manejo elegante de errores HTTP.',
      },
      {
        id: 'performance',
        kind: 'capability',
        title: 'Optimización de rendimiento',
        category: 'Architecture',
        desc: 'Caché, lazy loading y cancelación de respuestas obsoletas para UIs rápidas y consistentes.',
      },
      {
        id: 'accessibility',
        kind: 'capability',
        title: 'Accesibilidad',
        category: 'Architecture',
        desc: 'WCAG 2.1 aplicado a componentes, gestión de foco y flujos validados con lectores de pantalla.',
      },
      {
        id: 'responsive-ui',
        kind: 'capability',
        title: 'Desarrollo de UI responsive',
        category: 'UI/UX Tools',
        desc: 'Layouts mobile-first y navegación colapsable en UIs de apps con muchas funcionalidades.',
      },
      {
        id: 'ai-assisted',
        kind: 'capability',
        title: 'Desarrollo asistido por IA',
        category: 'UI/UX Tools',
        desc: 'Flujos de trabajo potenciados por IA combinados con revisión rigurosa, pruebas y responsabilidad.',
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
    title: 'Contacto',
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
    title: 'Esther Manrique González — Ingeniera de Software Frontend',
    description:
      'Ingeniera de software frontend especializada en Angular, React, TypeScript y desarrollo web moderno.',
    ogTitle: 'Esther Manrique González — Ingeniera Frontend',
    ogDescription:
      'Ingeniera de software frontend especializada en Angular, React, TypeScript y desarrollo web moderno.',
    ogLocale: 'es_ES',
  },

  ui: {
    skipLink: 'Saltar al contenido principal',
    errorBoundary: {
      title: 'Algo salió mal',
      message: 'Esta sección no pudo cargarse. Intenta recargar la página.',
    },
    navbar: {
      label: 'Principal',
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
      variantGroup: 'Versión del framework',
      imgAlt: (title) => `Captura de ${title}`,
      sourceAria: (label) => `Ver el código de ${label} en GitHub`,
      liveAria: (label) => `Ver el proyecto en vivo de ${label}`,
      sourceAriaDefault: 'Ver código en GitHub',
      liveAriaDefault: 'Ver proyecto en vivo',
    },
  },
};
