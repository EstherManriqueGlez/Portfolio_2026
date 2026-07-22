import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Code2 } from 'lucide-react';
import { Card } from '../ui/Card/Card';
import styles from './Contact.module.scss';

export const Contact = () => {
  const contacts = [
    { icon: <Mail />, label: 'Email', value: 'esther@example.com' },
    { icon: <Phone />, label: 'Phone', value: '+34 600 000 000' },
    { icon: <Globe />, label: 'LinkedIn', value: 'linkedin.com/in/esther' },
    { icon: <Code2 />, label: 'GitHub', value: 'github.com/esther' },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Let's Connect</h2>
      <div className={styles.grid}>
        {contacts.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Card className={styles.card}>
              <div className={styles.icon}>{c.icon}</div>
              <h3>{c.label}</h3>
              <p>{c.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
