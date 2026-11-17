"use client";

import { m, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Rings } from "@/components/art/Rings";

/**
 * Fundo da Hero: os arcos do banner e um brilho quente atrás deles.
 * Mexe um pouco com o mouse e com o scroll. Só decoração.
 */
export function HeroArt() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 40, damping: 18, mass: 0.8 });
  const sy = useSpring(py, { stiffness: 40, damping: 18, mass: 0.8 });

  const { scrollY } = useScroll();
  const ringsY = useTransform(scrollY, [0, 900], [0, -120]);
  const ringsRotate = useTransform(scrollY, [0, 900], [0, 30]);
  const ringX = useTransform(sx, (v) => v * -20);
  const ringPY = useTransform(sy, (v) => v * -20);
  const orbX = useTransform(sx, (v) => v * 30);
  const orbY = useTransform(sy, (v) => v * 30);

  // os loops CSS da Hero (anéis, brilho, chapéu) pausam quando ela sai da tela
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const hero = rootRef.current?.parentElement;
    if (!hero) return;
    const io = new IntersectionObserver(([entry]) => hero.classList.toggle("offscreen", !entry.isIntersecting));
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (event: PointerEvent) => {
      px.set(event.clientX / window.innerWidth - 0.5);
      py.set(event.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py, reduce]);

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <m.div style={{ x: orbX, y: orbY }} className="absolute top-[10%] right-[-30%] size-[min(110vw,760px)] sm:right-[-12%] lg:top-[4%] lg:right-[-6%]">
        <div className="hero-orb size-full rounded-full" />
      </m.div>
      <m.div
        style={{ y: ringsY, rotate: ringsRotate }}
        className="absolute top-[-12%] right-[-45%] w-[min(130vw,780px)] sm:right-[-24%] lg:top-[-18%] lg:right-[-8%]"
      >
        <m.div style={{ x: ringX, y: ringPY }}>
          <div className="spin-slow">
            <Rings className="h-auto w-full opacity-60 lg:opacity-90 dark:opacity-80" />
          </div>
        </m.div>
      </m.div>
    </div>
  );
}
