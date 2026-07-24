import { Card } from '@/components/ui/Card/Card';
import styles from './About.module.scss';

export const About = () => (
  <section id="about" className={styles.about}>
    <h2 className={styles.title}>About Me</h2>
    <Card>
      <p className={styles.contentCard}>
        Frontend Software Engineer apasionada por la elegancia, la arquitectura limpia y la alta
        performance. Especializada en crear interfaces de usuario robustas, intuitivas y visualmente
        impactantes utilizando tecnologías modernas de vanguardia.
      </p>
    </Card>
  </section>
);
