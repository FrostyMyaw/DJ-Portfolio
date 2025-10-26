"use client";
import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  opacity?: number; // 0..1 visual opacity of the whole layer
};

export default function EqualizerCanvas({ className = "", opacity = 0.8 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0 as number;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReduce = mql.matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      // Normalize drawing to CSS pixels
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    resize();

    const bars = 72; // number of bars across the width

    function draw(t: number) {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      const barW = w / bars;
      const time = t / 900; // slower time base for smoother motion

      for (let i = 0; i < bars; i++) {
        const x = i * barW;
        // Waveform composed of a couple of sines for a richer feel
        const wave = Math.sin(time + i / 5) * 0.6 + Math.sin(time * 0.6 + i / 9) * 0.4;
        const amp = prefersReduce ? 0.18 : 0.35; // reduce amplitude if reduced motion
        const barH = Math.max(2, (Math.abs(wave) * amp + 0.06) * h);
        const y = (h - barH) / 2;

        const grad = ctx.createLinearGradient(x, y, x, y + barH);
        grad.addColorStop(0, "rgba(0,191,255,0.12)");
        grad.addColorStop(1, "rgba(0,128,255,0.40)");

        ctx.fillStyle = grad;
        ctx.shadowColor = "rgba(0,191,255,0.35)";
        ctx.shadowBlur = 8;
        ctx.fillRect(x + 2, y, Math.max(1, barW - 4), barH);
      }

      if (!prefersReduce) {
        raf = requestAnimationFrame(draw);
      }
    }

    if (prefersReduce) {
      // Render a stable frame and stop to respect the user's preference
      draw(0);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ opacity }}>
      <canvas ref={ref} className="w-full h-full [mix-blend-mode:screen]" />
    </div>
  );
}
