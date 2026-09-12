import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

import styles from './Navbar.module.scss';
import { useTheme } from '@/context/useTheme';
import logo from '@/assets/images/logo.png';
import { navLinks } from '@/constants/data';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null);

    const hero = document.getElementById('home');
    if (hero) sections.push(hero);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === 'home' ? '' : `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const frame = requestAnimationFrame(() => {
      firstMenuLinkRef.current?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [isOpen]);

  return (
    <nav ref={navRef} aria-label="Main" className={styles.navbar}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <a href="#" onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Manrique logo" className={styles.logoImg} />
      </a>

      <div id="primary-menu" className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        {navLinks.map((link, linkIndex) => (
          <a
            key={link.name}
            ref={linkIndex === 0 ? firstMenuLinkRef : undefined}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`${styles.navLink}${activeSection === link.href ? ` ${styles.active}` : ''}`}
            aria-current={activeSection === link.href ? 'true' : undefined}
          >
            {link.name}
          </a>
        ))}
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? (
            <Sun aria-hidden="true" size={20} />
          ) : (
            <Moon aria-hidden="true" size={20} />
          )}
        </button>
      </div>

      <button
        ref={hamburgerRef}
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="primary-menu"
      >
        {isOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
      </button>
    </nav>
  );
};
