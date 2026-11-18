"use client";

import { useEffect } from "react";

/**
 * O painel do SeeB fica fechado logo além da borda direita, mas a sombra dele
 * (-4px 0 25px) vaza ~25px para dentro da página: vira uma faixa cinza na borda e,
 * por cima do que está animando (faixa, letreiro), pisca a cada quadro.
 * Enquanto o painel está fechado, sem sombra e invisível; ao abrir, tudo volta.
 */
const css = `
#a11y-panel:not(.open) { box-shadow: none !important; visibility: hidden; transition: right 0.3s ease-out, visibility 0s linear 0.3s; }
#a11y-panel.open { visibility: visible; transition: right 0.3s ease-out; }
`;

export function SeeBFix() {
  useEffect(() => {
    let tries = 0;
    let timer = 0;
    const patch = () => {
      const root = document.querySelector("seeb-widget")?.shadowRoot;
      if (root) {
        if (!root.querySelector("style[data-portfolio-fix]")) {
          const style = document.createElement("style");
          style.setAttribute("data-portfolio-fix", "");
          style.textContent = css;
          root.appendChild(style);
        }
        return;
      }
      // o widget carrega preguiçoso: tenta por até ~30 s
      if (tries++ < 60) timer = window.setTimeout(patch, 500);
    };
    patch();
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
