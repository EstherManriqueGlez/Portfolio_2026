import { Card } from '@/components/ui/Card/Card';
import { useLanguage } from '@/context/useLanguage';

import { GradientText } from '../ui/GradientText/GradientText';
import styles from './About.module.scss';

export const About = () => {
  const { content } = useLanguage();
  const about = content.about;

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>{about.title}</h2>
      <h3 className={styles.subtitle}>{about.subtitle}</h3>
      <Card>
        <p className={styles.contentCard}>{about.paragraph}</p>

        <p className={`${styles.contentCard} ${styles.contentCardGradientText}`}>
          <GradientText>{about.manifesto}</GradientText>
        </p>
      </Card>
    </section>
  );
};
