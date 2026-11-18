/**
 * Mar ao nascer do sol, atrás do chapéu: a água num degradê quente, a linha do
 * horizonte, ondas em perspectiva que deslizam devagar (cada uma no seu ritmo) e o
 * reflexo do sol na água. O sol e o navio ficam fora daqui (em HeroArt) para a
 * máscara do mar não cortar nada. Só SVG + transform em CSS; pausa fora da tela
 * e com "reduzir movimento".
 */

const WIDTH = 1200;

/** Uma onda que se repete a cada `length` (divisor de 1200); desenhada com o dobro da largura para o loop não ter emenda. */
function wavePath(length: number, amp: number) {
  let d = `M0 ${amp}`;
  for (let x = 0; x < WIDTH * 2; x += length) {
    d += ` Q${x + length / 4} 0 ${x + length / 2} ${amp} T${x + length} ${amp}`;
  }
  return d;
}

// perspectiva: perto do horizonte as ondas são baixas e juntas; perto de quem olha, maiores e mais espaçadas
const waves = [
  { top: 9, length: 100, amp: 2.5, stroke: 1.5, className: "text-ember/55 dark:text-ember/60", duration: 16 },
  { top: 20, length: 120, amp: 4, stroke: 2, className: "text-sun dark:text-sun/85", duration: 20 },
  { top: 35, length: 150, amp: 6, stroke: 2.5, className: "text-ember/50 dark:text-ember/50", duration: 26 },
  { top: 55, length: 200, amp: 8, stroke: 3, className: "text-sun/55 dark:text-sun/40", duration: 32 },
  { top: 79, length: 240, amp: 10, stroke: 3.5, className: "text-ink/12 dark:text-white/14", duration: 40 },
];

/** Reflexo do sol: traços que cintilam numa coluna embaixo dele, mais espalhados perto de quem olha. */
const glints = [
  { width: 56, offset: 0, opacity: 0.95 },
  { width: 72, offset: -4, opacity: 0.85 },
  { width: 60, offset: 6, opacity: 0.7 },
  { width: 84, offset: -8, opacity: 0.55 },
  { width: 50, offset: 10, opacity: 0.42 },
  { width: 70, offset: -6, opacity: 0.3 },
];

export function Sea({ className = "" }: { className?: string }) {
  return (
    <div className={`sea ${className}`}>
      {/* a água: um degradê quente logo abaixo do horizonte que some para a frente */}
      <div className="absolute inset-0 bg-gradient-to-b from-ember/20 via-sun/[0.07] to-transparent dark:from-ember/30 dark:via-ember/[0.08]" />
      {/* horizonte */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-ember/70 to-ember" />

      {/* reflexo, centrado embaixo do sol */}
      <div className="absolute top-[5%] right-[16%] flex w-[9rem] flex-col items-center gap-[0.55rem]">
        {glints.map((glint, index) => (
          <span
            key={index}
            className="sea-glint block h-[3px] rounded-full bg-gradient-to-r from-transparent via-sun to-transparent"
            style={{ width: `${glint.width}%`, marginLeft: `${glint.offset}%`, opacity: glint.opacity, animationDelay: `${index * -0.7}s` }}
          />
        ))}
      </div>

      {waves.map((wave) => (
        <div
          key={wave.top}
          className={`absolute inset-x-0 overflow-hidden ${wave.className}`}
          style={{ top: `${wave.top}%`, height: wave.amp * 2 + wave.stroke * 2 }}
        >
          <svg
            className="sea-wave absolute top-0 left-0 h-full"
            style={{ width: "200%", animationDuration: `${wave.duration}s` }}
            viewBox={`0 ${-wave.stroke} ${WIDTH * 2} ${wave.amp * 2 + wave.stroke * 2}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d={wavePath(wave.length, wave.amp)} fill="none" stroke="currentColor" strokeWidth={wave.stroke} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      ))}
    </div>
  );
}
