import { AnimatePresence, motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { useState } from 'react';

import { Card } from '@/components/ui/Card/Card';
import { useLanguage } from '@/context/useLanguage';
import type { SkillCategory } from '@/types/content';

import styles from './Skills.module.scss';

const categories: ('All' | SkillCategory)[] = [
  'All',
  'How I Work',
  'Core Frontend',
  'Architecture',
  'UI/UX Tools',
];

const categoryColor: Record<SkillCategory, string> = {
  'How I Work': 'var(--color-cat-soft)',
  'Core Frontend': 'var(--color-tech)',
  Architecture: 'var(--color-cat-architecture)',
  'UI/UX Tools': 'var(--color-cat-ux)',
};

const tabColor: Partial<Record<(typeof categories)[number], string>> = {
  'How I Work': 'var(--color-cat-soft)',
  'Core Frontend': 'var(--color-tech)',
  Architecture: 'var(--color-cat-architecture)',
  'UI/UX Tools': 'var(--color-cat-ux)',
};

const viewportOnce = { once: true, amount: 0.15 };

export const Skills = () => {
  const { content } = useLanguage();
  const { title, subtitle, filterAria, all, tech, categoryLabels, cards } = content.skills;
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');

  const filteredCards =
    activeCategory === 'All' ? cards : cards.filter((card) => card.category === activeCategory);

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>

      <div className={styles.filterTabs} role="group" aria-label={filterAria}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.tabBtn} ${activeCategory === category ? styles.active : ''} ${activeCategory === category && tabColor[category] ? styles.activeColored : ''}`}
            style={
              tabColor[category]
                ? ({ '--tab-color': tabColor[category] } as CSSProperties)
                : undefined
            }
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category === 'All' ? all : categoryLabels[category]}
          </button>
        ))}
      </div>

      <motion.div
        layout
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4 }}
        className={styles.grid}
      >
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card) => {
            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={styles.card}>
                  <span className={styles.category} style={{ color: categoryColor[card.category] }}>
                    {categoryLabels[card.category]}
                  </span>
                  {card.kind === 'capability' ? (
                    <>
                      <h3 className={styles.name}>{card.title}</h3>
                      <span className={styles.desc}>{card.desc}</span>
                    </>
                  ) : (
                    <>
                      <h3 className={styles.name}>{card.title}</h3>
                      <span className={styles.kind}>{tech}</span>
                    </>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
