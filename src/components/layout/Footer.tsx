import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.manifesto}>
        Think with intention. Design with clarity. Build with purpose.
      </p>
      <p>© {new Date().getFullYear()} Esther Manrique González.</p>
    </footer>
  );
};
