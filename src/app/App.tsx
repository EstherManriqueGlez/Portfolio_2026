import { MotionConfig } from 'framer-motion';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { About } from '@/components/sections/About';
import { CanvasWave } from '@/components/sections/CanvasWave';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { LanguageProvider } from '@/context/LanguageProvider';
import { ThemeProvider } from '@/context/ThemeProvider';
import { useLanguage } from '@/context/useLanguage';

const AppContent = () => {
  const { content } = useLanguage();

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        {content.ui.skipLink}
      </a>
      <ErrorBoundary>
        <CanvasWave />
      </ErrorBoundary>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Experience />
        </ErrorBoundary>
        <ErrorBoundary>
          <Projects />
        </ErrorBoundary>
        <ErrorBoundary>
          <Skills />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>
      <Footer />
    </MotionConfig>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};
