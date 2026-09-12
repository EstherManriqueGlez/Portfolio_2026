import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { useLanguage } from '@/context/useLanguage';
import styles from './Projects.module.scss';

export const Projects = () => {
  const { content } = useLanguage();
  const { title, subtitle, items } = content.projects;

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.grid}>
        {items.map((p) => (
          <ProjectCard key={p.github} project={p} />
        ))}
      </div>
    </section>
  );
};
