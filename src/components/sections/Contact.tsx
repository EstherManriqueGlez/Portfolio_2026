import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

import { Card } from '@/components/ui/Card/Card';
import { contacts } from '@/constants/data';
import styles from './Contact.module.scss';

const iconMap = {
  Mail: <Mail />,
  Phone: <Phone />,
  LuLinkedin: <LuLinkedin />,
  LuGithub: <LuGithub />,
} as const;

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Let's Connect</h2>
      <div className={styles.grid}>
        {contacts.map((c) => (
          <motion.div
            key={c.label}
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Card className={styles.card}>
              <div className={styles.icon}>{iconMap[c.icon]}</div>
              <h3>{c.label}</h3>
              <p>{c.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
