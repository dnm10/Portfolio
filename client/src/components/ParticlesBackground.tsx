"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface ParticlesBackgroundProps {
  theme?: string;
}

export function ParticlesBackground({ theme }: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  // ✅ Lock theme once after mount to prevent flicker
  const [activeTheme, setActiveTheme] = useState("light");

  useEffect(() => {
    if (resolvedTheme) {
      setActiveTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✅ stop safely if context not ready

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    const numParticles = 40; // ✅ balanced number
    const color = activeTheme === "dark" ? "#e5e5e5" : "#111111";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ✅ initialize particle positions
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 1,
      });
    }

    let animationFrame: number;

    const draw = () => {
      if (!ctx || !canvas) return; // ✅ safe guard against undefined ctx

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;

      // connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.globalAlpha = 1 - dist / 120;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;

      // draw and move particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    // cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [activeTheme]); // ✅ re-run only when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
