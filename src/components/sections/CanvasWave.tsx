import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/useTheme';
import styles from './CanvasWave.module.scss';

const CanvasWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

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

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const draw = () => {
      time += 0.02;
      ctx.fillStyle = theme === 'dark' ? '#030014' : '#faf8fc';
      ctx.fillRect(0, 0, width, height);

      ctx.beginPath();
      ctx.strokeStyle = theme === 'dark' ? '#9d4edd' : '#9c76ff';
      ctx.lineWidth = 2;
      for (let i = 0; i < width; i++) {
        const dx = i - mouse.x;
        const dist = Math.sqrt(dx * dx);
        const repulsion = dist < 200 ? (200 - dist) * 0.1 : 0;
        ctx.lineTo(i, height / 2 + Math.sin(i * 0.01 + time) * (50 + repulsion));
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = theme === 'dark' ? '#00f5ff' : '#3de1f2';
      ctx.lineWidth = 2;
      for (let i = 0; i < width; i++) {
        const dx = i - mouse.x;
        const dist = Math.sqrt(dx * dx);
        const repulsion = dist < 200 ? (200 - dist) * 0.05 : 0;
        ctx.lineTo(i, height / 2 + Math.sin(i * 0.015 + time * 1.5 + 2) * (30 + repulsion));
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
};

export default CanvasWave;
