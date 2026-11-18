/**
 * Mar ao nascer do sol, atrás do chapéu: linha do horizonte, ondas finas que
 * deslizam devagar (cada uma no seu ritmo) e o reflexo do sol na água.
 * Só SVG + transform em CSS (roda no compositor); pausa fora da tela e com
 * "reduzir movimento". Puro desenho, sem JS.
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

const waves = [
  { top: 14, length: 120, amp: 4, stroke: 2, className: "text-ember/70 dark:text-ember/60", duration: 18 },
  { top: 30, length: 150, amp: 6, stroke: 2.5, className: "text-sun dark:text-sun/80", duration: 24 },
  { top: 50, length: 200, amp: 8, stroke: 3, className: "text-ember/45 dark:text-ember/40", duration: 30 },
  { top: 72, length: 240, amp: 10, stroke: 3.5, className: "text-ink/12 dark:text-white/12", duration: 38 },
];

export function Sea({ className = "" }: { className?: string }) {
  return (
    <div className={`sea ${className}`}>
      {/* horizonte */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-ember/60 to-ember/80" />

      {/* reflexo do sol: traços curtos que cintilam embaixo dele */}
      <div className="absolute top-[6%] right-[22%] flex w-[22%] flex-col items-center gap-[7%]">
        {[70, 52, 38, 26].map((width, index) => (
          <span
            key={width}
            className="sea-glint block h-[3px] rounded-full bg-sun/80"
            style={{ width: `${width}%`, animationDelay: `${index * -0.9}s` }}
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
