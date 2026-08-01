import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Esther Manrique González. Crafted with care by Manrique.</p>
    </footer>
  );
};
