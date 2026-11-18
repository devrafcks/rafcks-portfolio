"use client";

import { m, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Sea } from "@/components/art/Sea";

/**
 * Fundo da Hero: o sol nascendo atrás do chapéu e o mar embaixo dele, o lugar
 * de onde ele sai para navegar pela página. Mexe um pouco com o mouse e com o scroll.
 * Só decoração.
 */
export function HeroArt() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 40, damping: 18, mass: 0.8 });
  const sy = useSpring(py, { stiffness: 40, damping: 18, mass: 0.8 });

  const { scrollY } = useScroll();
  // o sol sobe um pouco e o mar desce quando você rola: a Hero "amanhece" enquanto sai
  const sunY = useTransform(scrollY, [0, 900], [0, -90]);
  const seaY = useTransform(scrollY, [0, 900], [0, 60]);
  const seaX = useTransform(sx, (v) => v * -14);
  const orbX = useTransform(sx, (v) => v * 30);
  const orbY = useTransform(sy, (v) => v * 30);

  // os loops CSS da Hero (ondas, brilho, chapéu) pausam quando ela sai da tela
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
      <m.div style={{ y: sunY }} className="absolute top-[2%] right-[-30%] size-[min(110vw,760px)] sm:right-[-12%] lg:top-[-2%] lg:right-[max(-6%,calc((100%-80rem)/2-12rem))]">
        <m.div style={{ x: orbX, y: orbY }} className="size-full">
          <div className="hero-orb size-full rounded-full" />
        </m.div>
      </m.div>
      <m.div
        style={{ y: seaY, x: seaX }}
        className="absolute right-0 hidden lg:top-[54%] lg:block lg:h-[36%] lg:w-[max(48%,calc((100%-80rem)/2+34rem))] lg:opacity-100"
      >
        <Sea className="absolute inset-0" />
      </m.div>
    </div>
  );
}
