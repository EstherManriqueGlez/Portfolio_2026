import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Card } from '@/components/ui/Card/Card';
import { projects } from '@/constants/data';
import styles from './Projects.module.scss';

export const Projects = () => (
  <section id="projects" className={styles.projects}>
    <h2 className={styles.title}>Selected Projects</h2>
    <div className={styles.grid}>
      {projects.map((p) => (
        <motion.div
          key={p.title}
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Card className={styles.projectCard}>
            <img src={p.image} alt={p.title} className={styles.image} />
            <div className={styles.content}>
              <h3>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.details}>
                <p>
                  <strong>C:</strong> {p.challenge}
                </p>
                <p>
                  <strong>S:</strong> {p.solution}
                </p>
                <p>
                  <strong>R:</strong> {p.result}
                </p>
              </div>
              <div className={styles.footer}>
                <div className={styles.tags}>
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="View source code">
                    <Code2 size={20} />
                  </a>
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="View on GitHub">
                    <FaGithub size={20} />
                  </a>
                  <a href={p.link} target="_blank" rel="noreferrer" aria-label="View live project">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);
