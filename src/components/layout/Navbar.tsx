import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

import styles from './Navbar.module.scss';
import { useTheme } from '@/context/useTheme';
import { useLanguage } from '@/context/useLanguage';
import logo from '@/assets/images/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, content } = useLanguage();
  const { navLinks, ui } = content;
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
  }, [navLinks]);

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

  const closeMenu = () => {
    setIsOpen(false);
    hamburgerRef.current?.focus();
  };

  return (
    <nav ref={navRef} aria-label={ui.navbar.label} className={styles.navbar}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <a href="#" onClick={() => setIsOpen(false)}>
        <img src={logo} alt={ui.navbar.logoAlt} className={styles.logoImg} />
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
        <div className={styles.langToggle} role="group" aria-label={ui.navbar.langGroup}>
          <button
            type="button"
            className={`${styles.langBtn}${lang === 'en' ? ` ${styles.active}` : ''}`}
            aria-pressed={lang === 'en'}
            onClick={() => {
              setLang('en');
              closeMenu();
            }}
          >
            EN
          </button>
          <button
            type="button"
            className={`${styles.langBtn}${lang === 'es' ? ` ${styles.active}` : ''}`}
            aria-pressed={lang === 'es'}
            onClick={() => {
              setLang('es');
              closeMenu();
            }}
          >
            ES
          </button>
        </div>
        <button
          className={styles.themeToggle}
          onClick={() => {
            toggleTheme();
            closeMenu();
          }}
          aria-label={theme === 'dark' ? ui.navbar.switchToLight : ui.navbar.switchToDark}
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
        aria-label={isOpen ? ui.navbar.closeMenu : ui.navbar.openMenu}
        aria-expanded={isOpen}
        aria-controls="primary-menu"
      >
        {isOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
      </button>
    </nav>
  );
};
