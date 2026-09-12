import { useState } from 'react';
import type { CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCards } from '@/constants/data';
import type { SkillCategory } from '@/constants/data';
import styles from './Skills.module.scss';

const categories: ('All' | SkillCategory)[] = [
  'All',
  'Core Frontend',
  'Architecture',
  'UI/UX Tools',
];

const categoryColor: Record<SkillCategory, string> = {
  'Core Frontend': 'var(--color-tech)',
  Architecture: 'var(--color-cat-architecture)',
  'UI/UX Tools': 'var(--color-cat-ux)',
};

const tabColor: Partial<Record<(typeof categories)[number], string>> = {
  'Core Frontend': 'var(--color-tech)',
  Architecture: 'var(--color-cat-architecture)',
  'UI/UX Tools': 'var(--color-cat-ux)',
};

const viewportOnce = { once: true, amount: 0.15 };

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All');

  const filteredCards =
    activeCategory === 'All'
      ? skillCards
      : skillCards.filter((card) => card.category === activeCategory);

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Tech Stack & Expertise</h2>
      <p className={styles.subtitle}>
        Capabilities and technologies refined through real projects built with production-grade
        care.
      </p>

      <div className={styles.filterTabs} role="group" aria-label="Filter skills by area">
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
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card) => {
            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={styles.skillCard}
              >
                <span className={styles.category} style={{ color: categoryColor[card.category] }}>
                  {card.category}
                </span>
                {card.kind === 'capability' ? (
                  <>
                    <h3 className={styles.name}>{card.title}</h3>
                    <span className={styles.desc}>{card.desc}</span>
                  </>
                ) : (
                  <>
                    <h3 className={styles.name}>{card.title}</h3>
                    <span className={styles.kind}>Tech</span>
                  </>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
