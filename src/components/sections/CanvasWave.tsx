import { useEffect, useRef } from 'react';
import styles from './CanvasWave.module.scss';

const WAVE_SPEED = 0.01;
const WAVE_FREQ_1 = 0.008;
const WAVE_FREQ_2 = 0.012;
const WAVE_PHASE_OFFSET = 2;
const AMPLITUDE_1 = 40;
const AMPLITUDE_2 = 25;
const STEP = 8;
const FPS = 30;
const FRAME_INTERVAL = 1000 / FPS;

const getCSSVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const CanvasWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);
      ctx.fillStyle = getCSSVar('--bg-primary');
      ctx.fillRect(0, 0, width, height);
      return;
    }

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let colors = {
      bg: getCSSVar('--bg-primary'),
      wave1: getCSSVar('--wave-primary'),
      wave2: getCSSVar('--wave-secondary'),
    };

    const observer = new MutationObserver(() => {
      colors = {
        bg: getCSSVar('--bg-primary'),
        wave1: getCSSVar('--wave-primary'),
        wave2: getCSSVar('--wave-secondary'),
      };
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    let time = 0;
    let isVisible = true;
    let isPageVisible = !document.hidden;
    let lastTime = performance.now();

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(canvas);

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (!isVisible || !isPageVisible) return;

      const elapsed = currentTime - lastTime;
      if (elapsed < FRAME_INTERVAL) return;

      lastTime = currentTime - (elapsed % FRAME_INTERVAL);
      time += WAVE_SPEED;
      const halfHeight = height / 2;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      // Pre-calculate sine cache for current time to avoid redundant Math.sin calls
      const maxSteps = Math.ceil(width / STEP) + 1;
      const wave1Y = new Float32Array(maxSteps);
      const wave2Y = new Float32Array(maxSteps);

      let idx = 0;
      for (let i = 0; i <= width; i += STEP, idx++) {
        wave1Y[idx] = halfHeight + Math.sin(i * WAVE_FREQ_1 + time) * AMPLITUDE_1;
        wave2Y[idx] =
          halfHeight + Math.sin(i * WAVE_FREQ_2 + time * 1.2 + WAVE_PHASE_OFFSET) * AMPLITUDE_2;
      }

      // Draw Wave 1
      ctx.beginPath();
      ctx.strokeStyle = colors.wave1;
      ctx.lineWidth = 2;
      idx = 0;
      for (let i = 0; i <= width; i += STEP, idx++) {
        if (idx === 0) {
          ctx.moveTo(i, wave1Y[idx]);
        } else {
          ctx.lineTo(i, wave1Y[idx]);
        }
      }
      ctx.stroke();

      // Draw Wave 2
      ctx.beginPath();
      ctx.strokeStyle = colors.wave2;
      ctx.lineWidth = 2;
      idx = 0;
      for (let i = 0; i <= width; i += STEP, idx++) {
        if (idx === 0) {
          ctx.moveTo(i, wave2Y[idx]);
        } else {
          ctx.lineTo(i, wave2Y[idx]);
        }
      }
      ctx.stroke();
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};
