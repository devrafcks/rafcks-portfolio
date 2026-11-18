/**
 * Monstros marinhos (fan art no traço do site) passando atrás do navio: uma serpente
 * roxa de boca aberta, um baiacu laranja espinhento e uma baleia malhada. Cada um sobe
 * do mar, atravessa num ritmo próprio e mergulha de novo, em ciclos desencontrados.
 * O recorte embaixo é a linha d'água: eles parecem sair de dentro do mar.
 * Só transform em CSS (veja .monster-* em globals.css).
 */
const INK = "#2b1e20";

function Serpent() {
  return (
    <svg viewBox="0 0 200 170" className="block h-auto w-full">
      <g stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        {/* pescoço em S */}
        <path d="M52 170c-2-46 6-86 44-112 18-12 40-14 56-4l-10 16c-12-6-26-5-38 3-26 18-30 52-28 97z" fill="#8a63c9" />
        {/* barriga clara */}
        <path d="M78 170c-1-38 4-68 28-90" fill="none" stroke="#f6d88a" strokeWidth="9" />
        <path d="M78 170c-1-38 4-68 28-90" fill="none" strokeWidth="1.6" opacity="0.4" />
        {/* barbatana dorsal */}
        <path d="M60 110l-14-8 4 16zM66 82l-14-10 4 18zM82 60l-10-14-2 18z" fill="#4fc1b8" />
        {/* cabeça */}
        <path d="M118 44c10-16 34-22 56-14 14 5 22 16 20 26-2 8-12 10-24 9l-20 18c-10 8-28 6-34-6-5-10-4-23 2-33z" fill="#8a63c9" />
        {/* boca aberta com dentes */}
        <path d="M146 62c10 4 22 4 32 0-2 12-12 20-24 20-6 0-10-4-8-20z" fill="#c8322a" />
        <path d="M150 63l3 6 3-6 3 6 3-6 3 6 3-6 3 6 3-6" fill="#fffbf2" strokeWidth="1.4" />
        {/* olho */}
        <circle cx="146" cy="40" r="9" fill="#fffbf2" />
        <circle cx="149" cy="41" r="4" fill={INK} stroke="none" />
        {/* chifrinho e pintas */}
        <path d="M132 30l-6-14 14 8z" fill="#4fc1b8" />
        <circle cx="96" cy="96" r="3" fill="#6b4aa6" stroke="none" />
        <circle cx="72" cy="128" r="3.4" fill="#6b4aa6" stroke="none" />
        <circle cx="108" cy="74" r="2.6" fill="#6b4aa6" stroke="none" />
      </g>
    </svg>
  );
}

function Puffer() {
  return (
    <svg viewBox="0 0 160 150" className="block h-auto w-full">
      <g stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        {/* espinhos */}
        <path d="M24 70l-14-8 10 16zM34 44l-10-14 2 18zM58 28l-4-16-6 16zM86 22l4-16 4 18zM112 30l10-12-2 18zM132 50l16-8-10 16zM140 78l16 0-14 10z" fill="#ffd27a" />
        {/* corpo */}
        <circle cx="80" cy="100" r="64" fill="#ff9b3d" />
        <path d="M30 120c18 10 82 10 100 0" fill="none" stroke="#ffd27a" strokeWidth="8" />
        {/* olhos enormes */}
        <circle cx="58" cy="78" r="18" fill="#fffbf2" />
        <circle cx="102" cy="78" r="18" fill="#fffbf2" />
        <circle cx="62" cy="80" r="7" fill={INK} stroke="none" />
        <circle cx="98" cy="80" r="7" fill={INK} stroke="none" />
        <circle cx="64" cy="77" r="2" fill="#fffbf2" stroke="none" />
        <circle cx="100" cy="77" r="2" fill="#fffbf2" stroke="none" />
        {/* boquinha */}
        <path d="M74 104c4 4 8 4 12 0" fill="none" />
        {/* manchas */}
        <circle cx="40" cy="104" r="4" fill="#e0742a" stroke="none" />
        <circle cx="122" cy="102" r="4" fill="#e0742a" stroke="none" />
      </g>
    </svg>
  );
}

function Whale() {
  return (
    <svg viewBox="0 0 280 130" className="block h-auto w-full">
      <g stroke={INK} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        {/* cauda */}
        <path d="M18 70c-10-14-14-30-8-40 10 6 18 18 22 30 6-12 16-22 28-26 2 12-6 26-18 34z" fill={INK} />
        {/* dorso */}
        <path d="M40 130c4-50 50-92 120-96 56-3 100 24 110 64 2 10 0 22-4 32z" fill={INK} />
        {/* manchas creme */}
        <path d="M96 60c14-10 34-10 44 0-8 12-30 14-44 0zM176 48c12-4 26 0 32 10-12 6-26 4-32-10zM70 100c10-8 26-8 34 2-10 8-26 8-34-2z" fill="#f6efe6" />
        {/* barbatana */}
        <path d="M150 36l14-26 8 30z" fill="#4fc1b8" />
        {/* boca com dentes */}
        <path d="M206 104c18 4 40 2 58-6" fill="none" stroke="#f6efe6" strokeWidth="3" />
        <path d="M214 104l3 7 4-7 4 7 4-7 4 7 4-8 4 6" fill="#fffbf2" strokeWidth="1.4" stroke="#f6efe6" />
        {/* olho */}
        <circle cx="226" cy="76" r="9" fill="#fffbf2" />
        <circle cx="229" cy="77" r="4" fill={INK} stroke="none" />
      </g>
    </svg>
  );
}

export function SeaMonsters({ className = "" }: { className?: string }) {
  return (
    <div className={`sea-monsters ${className}`}>
      <div className="monster monster-whale w-[13rem]">
        <Whale />
      </div>
      <div className="monster monster-serpent w-[8.5rem]">
        <div className="monster-sway">
          <Serpent />
        </div>
      </div>
      <div className="monster monster-puffer w-[6rem]">
        <Puffer />
      </div>
    </div>
  );
}
