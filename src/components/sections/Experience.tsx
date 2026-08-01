import { Card } from '@/components/ui/Card/Card';
import { experience } from '@/constants/data';
import styles from './Experience.module.scss';

export const Experience = () => (
  <section id="experience" className={styles.experience}>
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.timeline}>
      {experience.map((exp) => (
        <Card key={`${exp.role}-${exp.company}`} className={styles.item}>
          <span className={styles.period}>{exp.period}</span>
          <h3>
            {exp.role} @ {exp.company}
          </h3>
          <p>
            Leading frontend development and optimizing component architecture for scalable,
            high-performance web applications.
          </p>
        </Card>
      ))}
    </div>
  </section>
);
