import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button/Button';

import { GradientText } from '@/components/ui/GradientText/GradientText';
import logo_pos from '@/assets/images/logo_pos.png';
import logo_neg from '@/assets/images/logo_neg.png';

import styles from './Hero.module.scss';
import { useTheme } from '@/context/useTheme';
import { useLanguage } from '@/context/useLanguage';

export const Hero = () => {
  const { theme } = useTheme();
  const { content } = useLanguage();
  const hero = content.hero;

  return (
    <section id="home" className={styles.hero}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <div>
          <img
            src={theme === 'dark' ? logo_neg : logo_pos}
            alt={hero.logoAlt}
            className={styles.logoImg}
          />
        </div>
        <h1 className={styles.title}>
          {hero.intro}
          <GradientText>{hero.highlight}</GradientText>
          {hero.outro}
        </h1>

        <div className={styles.actions}>
          <Button as="a" href="#projects">
            {hero.viewWork}
          </Button>
          <a href="#contact" className={styles.secondaryLink}>
            {hero.letsTalk}
          </a>
        </div>
      </motion.div>
    </section>
  );
};
