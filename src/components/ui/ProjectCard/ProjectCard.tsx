import { useCallback, useState } from 'react';
import type { CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Card } from '@/components/ui/Card/Card';
import type { Project } from '@/constants/data';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
}

const FRAMEWORK_COLOR: Record<string, { bg: string; fg: string }> = {
  react: { bg: 'var(--color-react)', fg: 'var(--color-react-on)' },
  angular: { bg: 'var(--color-angular)', fg: 'var(--color-angular-on)' },
};

const FALLBACK_IMAGE =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="200"><rect fill="#0a081a" width="800" height="200"/><text fill="#94a3b8" font-family="Inter,sans-serif" font-size="16" text-anchor="middle" x="400" y="105">Image not available</text></svg>',
  );

export const ProjectCard = ({ project: p }: ProjectCardProps) => {
  const [imgError, setImgError] = useState(false);
  const [activeId, setActiveId] = useState<string>(() => p.variants?.[0]?.id ?? '');

  const handleImgError = useCallback(() => setImgError(true), []);

  const activeVariant = p.variants?.find((v) => v.id === activeId) ?? p.variants?.[0];
  const image = activeVariant?.image ?? p.image;
  const tech = activeVariant ? activeVariant.tech : p.tech;
  const link = activeVariant ? activeVariant.link : p.link;
  const github = activeVariant ? activeVariant.github : p.github;
  const desc = activeVariant ? activeVariant.desc : p.desc;
  const challenge = activeVariant ? activeVariant.challenge : p.challenge;
  const solution = activeVariant ? activeVariant.solution : p.solution;
  const result = activeVariant ? activeVariant.result : p.result;
  const sourceLabel = activeVariant
    ? `View ${activeVariant.label} source on GitHub`
    : 'View on GitHub';
  const liveLabel = activeVariant
    ? `View ${activeVariant.label} live project`
    : 'View live project';

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300 }}>
      <Card className={styles.card}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={activeVariant?.id ?? 'default'}
            src={imgError ? FALLBACK_IMAGE : image}
            alt={p.title}
            className={styles.image}
            loading="lazy"
            onError={handleImgError}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
        </AnimatePresence>
        <div className={styles.content}>
          <h3>{p.title}</h3>
          {p.badge || p.variants?.length ? (
            <div className={styles.meta}>
              {p.badge ? <span className={styles.badge}>{p.badge}</span> : null}
              {p.variants?.length ? (
                <div className={styles.variants} role="group" aria-label="Framework version">
                  {p.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      className={`${styles.variantBtn} ${activeVariant?.id === v.id ? styles.active : ''}`}
                      style={
                        FRAMEWORK_COLOR[v.id]
                          ? ({
                              '--var-bg': FRAMEWORK_COLOR[v.id].bg,
                              '--var-fg': FRAMEWORK_COLOR[v.id].fg,
                            } as CSSProperties)
                          : undefined
                      }
                      aria-pressed={activeVariant?.id === v.id}
                      onClick={() => setActiveId(v.id)}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
          <p className={styles.desc}>{desc}</p>
          <div className={styles.details}>
            <p>
              <strong>C:</strong> {challenge}
            </p>
            <p>
              <strong>S:</strong> {solution}
            </p>
            <p>
              <strong>R:</strong> {result}
            </p>
          </div>
          <div className={styles.footer}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeVariant?.id ?? 'default'}
                className={styles.tags}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </motion.div>
            </AnimatePresence>
            <div className={styles.links}>
              {/* <a href={github} target="_blank" rel="noreferrer" aria-label="View source code">
                <Code2 size={20} />
              </a> */}
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label={sourceLabel}>
                <FaGithub aria-hidden="true" size={20} />
                <span className={styles.linkLabel}>GitHub</span>
              </a>
              <a href={link} target="_blank" rel="noopener noreferrer" aria-label={liveLabel}>
                <ExternalLink aria-hidden="true" size={20} />
                <span className={styles.linkLabel}>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
