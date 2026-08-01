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

export const experience = [
  { role: 'Frontend Engineer', company: 'TechCorp', period: '2023 - Present' },
];

export const skills = [
  { name: 'React', category: 'Frontend', level: 'Expert' },
  { name: 'TypeScript', category: 'Frontend', level: 'Expert' },
  { name: 'SASS/SCSS', category: 'Frontend', level: 'Expert' },
  { name: 'Framer Motion', category: 'Animation', level: 'Advanced' },
  { name: 'Vite', category: 'Tools', level: 'Advanced' },
  { name: 'Git', category: 'Tools', level: 'Advanced' },
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
