import { Card } from '@/components/ui/Card/Card';
import { experience } from '@/constants/data';
import styles from './Experience.module.scss';

export const Experience = () => (
  <section id="experience" className={styles.experience}>
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.timeline}>
      {experience.map((exp) => {
        const hasStages = exp.stages && exp.stages.length > 0;
        return (
          <Card key={`${exp.company}`} className={styles.item}>
            <div className={styles.headerRow}>
              <div>
                <h3>{exp.company}</h3>
                <span className={styles.period}>{exp.totalPeriod}</span>
              </div>
            </div>

            {hasStages ? (
              <div className={styles.innerTimeline}>
                {exp.stages.map((stage, idx) => (
                  <div key={idx} className={styles.innerStage}>
                    <span className={styles.innerPeriod}>{stage.period}</span>
                    <div className={styles.innerRole}>{stage.role}</div>
                    {stage.projectName && (
                      <div className={styles.innerProject}>{stage.projectName}</div>
                    )}
                    {stage.projectDesc && <p>{stage.projectDesc}</p>}
                    {stage.description && stage.description.length > 0 && (
                      <ul>
                        {stage.description.map((descItem, dIdx) => (
                          <li key={dIdx}>{descItem}</li>
                        ))}
                      </ul>
                    )}
                    {stage.technologies && stage.technologies.length > 0 && (
                      <div className={styles.techTags}>
                        {stage.technologies.map((tech, tIdx) => (
                          <span key={tIdx}>{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.singleStage}>
                <div className={styles.innerRole}>{exp.role}</div>
                {exp.projectName && <div className={styles.innerProject}>{exp.projectName}</div>}
                {exp.projectDesc && <p>{exp.projectDesc}</p>}
                {exp.description && exp.description.length > 0 && (
                  <ul>
                    {exp.description.map((descItem, dIdx) => (
                      <li key={dIdx}>{descItem}</li>
                    ))}
                  </ul>
                )}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className={styles.techTags}>
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx}>{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Card>
        );
      })}
    </div>
  </section>
);
