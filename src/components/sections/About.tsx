import { Card } from '../ui/Card/Card';
import styles from './About.module.scss';

export const About = () => (
  <section id="about" className={styles.about}>
    <h2 className={styles.title}>About Me</h2>
    <Card>
      <p>Frontend Engineer apasionada por la elegancia y la funcionalidad.</p>
    </Card>
  </section>
);
