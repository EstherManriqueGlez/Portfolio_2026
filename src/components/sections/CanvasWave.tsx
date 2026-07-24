import { useEffect, useRef } from 'react';
import styles from './CanvasWave.module.scss';

const WAVE_SPEED = 0.02;
const WAVE_FREQ_1 = 0.01;
const WAVE_FREQ_2 = 0.015;
const WAVE_PHASE_OFFSET = 2;
const WAVE_SPEED_MULT_2 = 1.5;
const AMPLITUDE_1 = 50;
const AMPLITUDE_2 = 30;
const REPULSION_RADIUS = 200;
const REPULSION_STRENGTH_1 = 0.1;
const REPULSION_STRENGTH_2 = 0.05;
const MOUSE_INITIAL = -1000;
const LINE_WIDTH = 2;

const getCSSVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const CanvasWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: MOUSE_INITIAL, y: MOUSE_INITIAL };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

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

    const draw = () => {
      time += WAVE_SPEED;

      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, width, height);

      ctx.beginPath();
      ctx.strokeStyle = colors.wave1;
      ctx.lineWidth = LINE_WIDTH;
      for (let i = 0; i < width; i++) {
        const dx = i - mouse.x;
        const dist = Math.sqrt(dx * dx);
        const repulsion =
          dist < REPULSION_RADIUS ? (REPULSION_RADIUS - dist) * REPULSION_STRENGTH_1 : 0;
        ctx.lineTo(i, height / 2 + Math.sin(i * WAVE_FREQ_1 + time) * (AMPLITUDE_1 + repulsion));
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = colors.wave2;
      ctx.lineWidth = LINE_WIDTH;
      for (let i = 0; i < width; i++) {
        const dx = i - mouse.x;
        const dist = Math.sqrt(dx * dx);
        const repulsion =
          dist < REPULSION_RADIUS ? (REPULSION_RADIUS - dist) * REPULSION_STRENGTH_2 : 0;
        ctx.lineTo(
          i,
          height / 2 +
            Math.sin(i * WAVE_FREQ_2 + time * WAVE_SPEED_MULT_2 + WAVE_PHASE_OFFSET) *
              (AMPLITUDE_2 + repulsion),
        );
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default CanvasWave;
