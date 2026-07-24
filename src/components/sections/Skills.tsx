import { motion } from 'framer-motion';
import { skills } from '@/constants/data';
import styles from './Skills.module.scss';

export const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Tech Stack & Expertise</h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={styles.skillCard}
          >
            <span className={styles.category}>{skill.category}</span>
            <h3 className={styles.name}>{skill.name}</h3>
            <span className={styles.level}>{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
