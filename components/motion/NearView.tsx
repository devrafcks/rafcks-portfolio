"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Só monta `children` quando o bloco chega perto da tela (uma tela e meia antes).
 * Até lá mostra `fallback`, que deve ocupar o mesmo espaço para a página não pular.
 * Junto com next/dynamic, o JS da parte decorativa só baixa quando vai ser vista.
 */
export function NearView({ children, fallback, className }: { children: ReactNode; fallback: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "150% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {near ? children : fallback}
    </div>
  );
}
