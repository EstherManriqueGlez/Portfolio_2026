import { Card } from '@/components/ui/Card/Card';
import { experience } from '@/constants/data';
import styles from './Experience.module.scss';

export const Experience = () => (
  <section id="experience" className={styles.experience}>
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.timeline}>
      {experience.map((exp) => (
        <Card
          key={`${exp.role}-${exp.company}-${exp.projectName}-${exp.projectDesc}`}
          className={styles.item}
        >
          <span className={styles.period}>{exp.period}</span>
          <h3>
            {exp.company} @ {exp.role}
          </h3>
          <h4>Project: {exp.projectName}</h4>
          <p>{exp.projectDesc}</p>
          <ul>
            {exp.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h5>{exp.technologies}</h5>
        </Card>
      ))}
    </div>
  </section>
);
