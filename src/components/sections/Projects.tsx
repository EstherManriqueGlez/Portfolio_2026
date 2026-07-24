import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { projects } from '@/constants/data';
import styles from './Projects.module.scss';

export const Projects = () => (
  <section id="projects" className={styles.projects}>
    <h2 className={styles.title}>Selected Projects</h2>
    <div className={styles.grid}>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  </section>
);
