"use client";

import { useEffect, useState } from "react";
import { StrawHat } from "@/components/art/StrawHat";

/**
 * Lugar do chapéu na Hero. Mostra o chapéu em SVG (leve, já no HTML) até a
 * versão 3D ficar pronta; daí o 3D assume a partir daqui e sai passeando
 * pela página (ver TravelingHat). A caixa não gira nem muda de tamanho: ela é a régua do 3D.
 */
export function HeroHat({ className = "" }: { className?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onReady = () => setReady(true);
    // o 3D mora na raiz e sobrevive à troca de idioma: se já estava pronto, nada de SVG por cima
    if (document.documentElement.dataset.hat === "ready") setReady(true);
    window.addEventListener("hat:ready", onReady);
    return () => window.removeEventListener("hat:ready", onReady);
  }, []);

  return (
    <div
      id="hat-anchor"
      aria-hidden="true"
      className={`pointer-events-none aspect-square ${className}`}
    >
      <div className={`absolute inset-x-[16%] top-[26%] transition-opacity duration-500 ${ready ? "opacity-0" : "opacity-100"}`}>
        <div className="hat-enter">
          <StrawHat />
        </div>
      </div>
    </div>
  );
}
