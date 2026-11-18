"use client";

import { useEffect, useState } from "react";
import { Boat } from "@/components/art/Boat";
import { Sea } from "@/components/art/Sea";
import { SeaMonsters } from "@/components/art/SeaMonsters";

/**
 * Tela de abertura: o navio navegando no meio da tela, as ondas correndo, os monstros
 * passando atrás e uma barra cor de sol enchendo. Aparece só na primeira visita da sessão
 * (e nunca com "reduzir movimento"); o script em app/layout.tsx decide antes da primeira
 * pintura colocando .intro-skip no <html>. Some assim que a página está pronta: no mínimo
 * ~0,9 s para a animação ser vista, no máximo ~1,6 s para não segurar ninguém.
 */
export function IntroScreen() {
  const [state, setState] = useState<"on" | "leaving" | "off">("on");

  useEffect(() => {
    if (document.documentElement.classList.contains("intro-skip")) {
      setState("off");
      return;
    }
    let done = false;
    const timers: number[] = [];
    const leave = () => {
      if (done) return;
      done = true;
      setState("leaving");
      timers.push(window.setTimeout(() => setState("off"), 550));
    };
    // performance.now() já conta desde o começo da navegação
    const ready = () => timers.push(window.setTimeout(leave, Math.max(0, 900 - performance.now())));
    if (document.readyState === "complete") ready();
    else window.addEventListener("load", ready, { once: true });
    timers.push(window.setTimeout(leave, 1600));
    return () => {
      window.removeEventListener("load", ready);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <div aria-hidden="true" className={`intro ${state === "leaving" ? "intro-leaving" : ""} ${state === "off" ? "intro-off" : ""}`}>
      <div className="intro-scene">
        <div className="sun-glow absolute top-[34%] left-1/2 size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute top-[34%] left-1/2 h-[6rem] w-[12rem] -translate-x-1/2 -translate-y-full overflow-hidden">
          <div className="sun-disc absolute bottom-[-3rem] left-[1.5rem] size-[9rem] rounded-full" />
        </div>
        <div className="absolute inset-x-0 top-[34%] bottom-0">
          <SeaMonsters className="absolute inset-x-0 top-[-11rem] bottom-[86%]" />
          <Sea className="absolute inset-0" />
          <div className="absolute top-[calc(20%-7.2rem)] left-1/2 w-[11rem] -translate-x-1/2">
            <Boat className="boat-bob block h-auto w-full" />
          </div>
        </div>
      </div>
      <p className="mt-6 font-display text-xl font-bold tracking-[-0.03em]">Rafael Blanco</p>
      <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-ink/10 dark:bg-white/15">
        <div className="intro-bar h-full rounded-full bg-sun" />
      </div>
    </div>
  );
}
