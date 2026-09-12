import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { CanvasWave } from '@/components/sections/CanvasWave';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';

export const App = () => {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">
          Skip to main content
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
    </ThemeProvider>
  );
};
