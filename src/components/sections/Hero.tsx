import { motion } from 'framer-motion';
import { Button } from '../ui/Button/Button';
import { GradientText } from '../ui/GradientText/GradientText';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <h1 className={styles.title}>
          Building <GradientText>intelligent interfaces</GradientText> with purpose.
        </h1>
        <p className={styles.subtitle}>Frontend Software Engineer</p>
        <div className={styles.actions}>
          <a href="#projects" style={{ textDecoration: 'none' }}>
            <Button>VIEW MY WORK</Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
