import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Card } from '@/components/ui/Card/Card';
import type { Project } from '@/constants/data';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
}

const FALLBACK_IMAGE =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="200"><rect fill="#0a081a" width="800" height="200"/><text fill="#94a3b8" font-family="Inter,sans-serif" font-size="16" text-anchor="middle" x="400" y="105">Image not available</text></svg>',
  );

export const ProjectCard = ({ project: p }: ProjectCardProps) => {
  const [imgError, setImgError] = useState(false);

  const handleImgError = useCallback(() => setImgError(true), []);

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
      <Card className={styles.card}>
        <img
          src={imgError ? FALLBACK_IMAGE : p.image}
          alt={p.title}
          className={styles.image}
          loading="lazy"
          onError={handleImgError}
        />
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
  );
};
