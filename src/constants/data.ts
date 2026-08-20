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
    title: 'Fintech Dashboard',
    tech: ['React', 'TypeScript', 'SCSS'],
    desc: 'Real-time financial management system.',
    challenge: 'High latency in data updates across the platform.',
    solution: 'Implemented WebSockets for real-time data synchronization.',
    result: '40% reduction in page load time.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
  {
    title: 'E-commerce AI',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    desc: 'E-commerce platform with personalized product recommendations.',
    challenge: 'Low conversion rate on the checkout flow.',
    solution: 'Redesigned the checkout experience with micro-animations.',
    result: '15% increase in conversion rate.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
  {
    title: 'Task Management App',
    tech: ['React', 'TypeScript', 'Node.js'],
    desc: 'Collaborative task management platform with real-time updates.',
    challenge: 'Complex state synchronization across multiple users.',
    solution: 'Built a robust state machine with optimistic updates.',
    result: 'Seamless multi-user experience with zero data conflicts.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
  {
    title: 'Weather Analytics',
    tech: ['React', 'D3.js', 'GraphQL'],
    desc: 'Interactive weather visualization and analytics dashboard.',
    challenge: 'Rendering large datasets without performance degradation.',
    solution: 'Implemented virtualized rendering and data aggregation.',
    result: 'Smooth 60fps rendering with datasets of 100k+ points.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
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
  {
    title: 'Design System Library',
    tech: ['React', 'Storybook', 'SCSS'],
    desc: 'Modular component library with design token integration.',
    challenge: 'Maintaining consistency across multiple applications.',
    solution: 'Built a token-driven architecture with automated visual regression testing.',
    result: 'Reduced UI development time by 60% across 3 products.',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
    link: '#',
    github: '#',
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  projectName: string;
  projectDesc: string;
  description: string[];
  technologies: string;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer',
    company: 'EPAM Systems',
    period: 'May 2024 - Feb 2026',
    projectName: '',
    projectDesc: '',
    description: [
      'Leading frontend development and optimizing component architecture for scalable, high-performance web applications.',
      'Collaborating with cross-functional global teams to deliver robust user experiences and pixel-perfect UIs.',
      'Promoting engineering best practices, code quality standards, and modern TypeScript workflows.',
    ],
    technologies: '',
  },
  {
    role: 'Junior Software Engineer',
    company: 'EPAM Systems',
    period: 'Dic 2021 - Mar 2022',
    projectName: '',
    projectDesc: 'EPM-RDMX Program',
    description: [
      'Engineered responsive web applications utilizing React, TypeScript, and modern CSS architectures.',
      'Improved core web vitals and overall site performance by 30% through code splitting and memoization.',
    ],
    technologies: '',
  },
  {
    role: 'Front End Developer Jr.',
    company: 'Spiralis, S.A. de C.V.',
    period: 'Nov 2020 - Mar 2021',
    projectName: 'Bravo - Gaming',
    projectDesc:
      'Started my professional career in software development, contributing to the frontend of a web platform for the administration and organization of video game tournaments.',
    description: [
      'Developed user interfaces using Vue.js and JavaScript',
      'Integrated REST APIs to enable dynamic data management and interaction with the application.',
      'Collaborated within an Agile/Scrum team, actively participating in ceremonies and the software development process.',
    ],
    technologies: 'Vue.js · JavaScript · REST APIs · Scrum',
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
