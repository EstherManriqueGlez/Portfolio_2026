import styles from './Footer.module.scss';
import { useLanguage } from '@/context/useLanguage';

export const Footer = () => {
  const { content } = useLanguage();

  return (
    <footer className={styles.footer}>
      <p className={styles.manifesto}>{content.footer.manifesto}</p>
      <p>© {new Date().getFullYear()} Esther Manrique González.</p>
    </footer>
  );
};
