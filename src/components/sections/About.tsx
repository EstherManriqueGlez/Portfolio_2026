import { Card } from '@/components/ui/Card/Card';
import styles from './About.module.scss';
import { GradientText } from '../ui/GradientText/GradientText';

export const About = () => (
  <section id="about" className={styles.about}>
    <h2 className={styles.title}>About Me</h2>
    <h3 className={styles.subtitle}>Building Products with Intention and Purpose.</h3>
    <Card>
      <p className={styles.contentCard}>
        I build digital products where engineering, design, and user experience work together with
        purpose. As a Frontend Software Engineer, I enjoy transforming complex problems into
        intuitive interfaces through thoughtful architecture, clean code, and attention to detail.
        My experience with Angular, TypeScript, RxJS, and modern frontend technologies has taught me
        that great software is not only functional—it should also be accessible, scalable,
        maintainable, and enjoyable to use. I believe every decision matters, from the structure of
        a component to the spacing between two elements. Those details build trust, improve
        usability, and ultimately create better products. For me, frontend development is where
        technology meets people, and that's what makes it meaningful.
      </p>

      <p className={`${styles.contentCard} ${styles.contentCardGradientText}`}>
        <GradientText>Think with intention. Design with clarity. Build with purpose.</GradientText>
      </p>
    </Card>
  </section>
);
