import { Card } from '@/components/ui/Card/Card';
import { experience } from '@/constants/data';
import styles from './Experience.module.scss';

export const Experience = () => (
  <section id="experience" className={styles.experience}>
    <h2>Experience</h2>
    {experience.map((exp) => (
      <Card key={`${exp.role}-${exp.company}`} className={styles.item}>
        <h3>
          {exp.role} @ {exp.company}
        </h3>
        <p>{exp.period}</p>
      </Card>
    ))}
  </section>
);
