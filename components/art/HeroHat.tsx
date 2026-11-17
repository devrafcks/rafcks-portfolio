"use client";

import { m } from "motion/react";
import { useEffect, useState } from "react";
import { StrawHat } from "@/components/art/StrawHat";

/**
 * Lugar do chapéu na Hero. Mostra o chapéu em SVG (leve, já no HTML) até a
 * versão 3D ficar pronta; daí o 3D assume a partir daqui e sai passeando
 * pela página (ver TravelingHat). A caixa continua servindo de âncora.
 */
export function HeroHat() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onReady = () => setReady(true);
    window.addEventListener("hat:ready", onReady);
    return () => window.removeEventListener("hat:ready", onReady);
  }, []);

  return (
    <m.div
      id="hat-anchor"
      aria-hidden="true"
      initial={{ opacity: 0, y: -40, rotate: -12 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute top-14 -right-4 aspect-square w-40 sm:top-16 sm:w-52 md:top-[14%] md:right-[2%] md:w-[clamp(18rem,34vw,32rem)] lg:top-[12%] lg:right-[4%]"
    >
      <div className={`absolute inset-x-[16%] top-[26%] transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`}>
        <StrawHat />
      </div>
    </m.div>
  );
}
