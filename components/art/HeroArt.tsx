"use client";

import { m, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { Boat } from "@/components/art/Boat";
import { Sea } from "@/components/art/Sea";
import { SeaMonsters } from "@/components/art/SeaMonsters";

/**
 * Fundo da Hero: o sol nascendo no horizonte, o mar com o navio, e o chapéu
 * pendurado no nome. Quando você rola, o sol sobe para fora do mar ("amanhece")
 * e o mar desce um pouco. Mexe de leve com o mouse. Só decoração.
 * No celular fica só o brilho do sol, para não brigar com o texto.
 */
export function HeroArt() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 40, damping: 18, mass: 0.8 });
  const sy = useSpring(py, { stiffness: 40, damping: 18, mass: 0.8 });

  const { scrollY } = useScroll();
  const sunRise = useTransform(scrollY, [0, 700], [0, -64]);
  const seaY = useTransform(scrollY, [0, 900], [0, 60]);
  const seaX = useTransform(sx, (v) => v * -14);
  const glowX = useTransform(sx, (v) => v * 24);
  const glowY = useTransform(sy, (v) => v * 18);

  // os loops CSS da Hero (ondas, brilho, navio) pausam quando ela sai da tela
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
    let frame = 0;
    let nx = 0;
    let ny = 0;
    const flush = () => {
      frame = 0;
      px.set(nx);
      py.set(ny);
    };
    const onMove = (event: PointerEvent) => {
      nx = event.clientX / window.innerWidth - 0.5;
      ny = event.clientY / window.innerHeight - 0.5;
      if (!frame) frame = requestAnimationFrame(flush);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, [px, py, reduce]);

  return (
    <div ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* celular e tablet: só o brilho quente no canto */}
      <div className="absolute top-[2%] right-[-30%] size-[min(110vw,640px)] sm:right-[-12%] lg:hidden">
        <div className="hero-orb size-full rounded-full" />
      </div>

      {/* desktop: horizonte, sol, mar e navio */}
      <m.div
        style={{ y: seaY, x: seaX }}
        className="absolute right-0 hidden lg:top-[56%] lg:block lg:h-[34%] lg:w-[max(52%,calc((100%-80rem)/2+38rem))]"
      >
        {/* brilho do sol, centrado no disco (fica atrás de tudo) */}
        <m.div style={{ x: glowX, y: glowY }} className="absolute top-0 right-[calc(16%+4.5rem)] size-[36rem] translate-x-1/2 -translate-y-1/2">
          <div className="sun-glow size-full rounded-full" />
        </m.div>

        {/* o sol: metade ainda dentro do mar; sobe quando você rola */}
        <div className="absolute right-[calc(16%-2.5rem)] bottom-full h-[12rem] w-[14rem] overflow-hidden">
          <m.div style={{ y: sunRise }} className="absolute bottom-[-4.5rem] left-[2.5rem] size-[9rem]">
            <div className="sun-disc size-full rounded-full" />
          </m.div>
        </div>

        {/* monstros passando atrás do navio, cortados na linha d'água (um pouco abaixo do horizonte) */}
        <SeaMonsters className="absolute inset-x-0 top-[-11rem] bottom-[86%]" />

        <Sea className="absolute inset-0" />

        {/* o navio entre a primeira e a segunda onda, fora da máscara do mar para as velas não serem cortadas */}
        <div className="boat-drift absolute top-[calc(20%-7.2rem)] left-[22%] w-[11rem]">
          <Boat className="boat-bob block h-auto w-full" />
        </div>
      </m.div>
    </div>
  );
}
