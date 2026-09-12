import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';

import { Card } from '@/components/ui/Card/Card';
import { contacts } from '@/constants/data';
import styles from './Contact.module.scss';
import type React from 'react';

const iconMap: Record<string, React.ReactNode> = {
  Mail: <Mail aria-hidden="true" />,
  Phone: <Phone aria-hidden="true" />,
  LuLinkedin: <LuLinkedin aria-hidden="true" />,
  LuGithub: <LuGithub aria-hidden="true" />,
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
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  title={c.value}
                >
                  {c.value}
                </a>
              ) : (
                <p title={c.value}>{c.value}</p>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
