import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/constants/data';
import styles from './Skills.module.scss';

const categories = ['All', 'Core Frontend', 'Architecture', 'UI/UX Tools'];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All' ? skills : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Tech Stack & Expertise</h2>
      <p className={styles.subtitle}>
        Tested technologies and architectural patterns built for scalability and performance.
      </p>

      <div className={styles.filterTabs}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.tabBtn} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={styles.skillCard}
            >
              <span className={styles.category}>{skill.category}</span>
              <h3 className={styles.name}>{skill.name}</h3>
              <span className={styles.level}>{skill.level}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
