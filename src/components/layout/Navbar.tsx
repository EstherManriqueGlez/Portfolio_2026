import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

import styles from './Navbar.module.scss';
import { useTheme } from '@/context/useTheme';
import logo from '@/assets/images/logo.png';
import { navLinks } from '@/constants/data';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <nav className={styles.navbar}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <a href="#">
        <img src={logo} alt="logo" className={styles.logoImg} />
      </a>

      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={styles.navLink}
          >
            {link.name}
          </a>
        ))}
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
};
