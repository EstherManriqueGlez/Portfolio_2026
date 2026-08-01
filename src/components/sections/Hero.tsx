import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button/Button';

import { GradientText } from '@/components/ui/GradientText/GradientText';
import logo_pos from '@/assets/images/logo_pos.png';
import logo_neg from '@/assets/images/logo_neg.png';

import styles from './Hero.module.scss';
import { useTheme } from '@/context/useTheme';

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <div>
          <img
            src={theme === 'dark' ? logo_neg : logo_pos}
            alt="Manrique logo"
            className={styles.logoImg}
          />
        </div>
        <h1 className={styles.title}>
          Building <GradientText>intelligent interfaces</GradientText> with purpose.
        </h1>
        <p className={styles.subtitle}>Frontend Software Engineer</p>

        <div className={styles.techBadges}>
          <span className={styles.badge}>React & Next.js</span>
          <span className={styles.badge}>TypeScript</span>
          <span className={styles.badge}>Design Systems</span>
          <span className={styles.badge}>Architecture</span>
        </div>

        <div className={styles.actions}>
          <a href="#projects" className={styles.actionsLink}>
            <Button>View my Work</Button>
          </a>
          <a href="#contact" className={styles.secondaryLink}>
            Let's Talk
          </a>
        </div>
      </motion.div>
    </section>
  );
};
