/**
 * O navio do chapéu de palha, em desenho próprio no estilo do site (fan art):
 * casco de madeira clara com tábuas, amurada branca, carranca de carneiro com chifres
 * enrolados, vela grande creme com a caveira de chapéu de palha, vela de popa listrada
 * de vermelho e branco e bandeira preta no topo do mastro.
 */
const INK = "#2b1e20";

export function Boat({ className = "", width, height }: { className?: string; width?: number; height?: number }) {
  return (
    <svg viewBox="0 0 240 200" width={width} height={height} className={className} aria-hidden="true">
      <defs>
        <clipPath id="merry-stern-sail">
          <path d="M168 54c11-2.6 23-3.2 35-2l2.4 40c-12-1.6-25-1.2-38 1.4z" />
        </clipPath>
      </defs>
      <g stroke={INK} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
        {/* cordame da proa até o topo do mastro */}
        <path d="M44 92L120 24M60 108l60-62" fill="none" strokeWidth="1.2" opacity="0.7" />

        {/* mastro de popa e vela listrada */}
        <path d="M186 104V46" stroke="#7a4b2a" strokeWidth="3.4" />
        <path d="M168 54c11-2.6 23-3.2 35-2l2.4 40c-12-1.6-25-1.2-38 1.4z" fill="#fff8ec" />
        <path d="M174.5 50l1.6 46M186 50l.9 46M197 50l2.1 46" stroke="#c8322a" strokeWidth="6" strokeLinecap="butt" clipPath="url(#merry-stern-sail)" />
        <path d="M168 54c11-2.6 23-3.2 35-2l2.4 40c-12-1.6-25-1.2-38 1.4z" fill="none" />

        {/* mastro principal, cesto da gávea e bandeira */}
        <path d="M120 108V20" stroke="#7a4b2a" strokeWidth="4" />
        <path d="M110 30h20l-2.4 7h-15.2z" fill="#a8743f" />
        <path d="M120 21l25 4.6-25 6.4z" fill={INK} />
        <circle cx="128" cy="26.2" r="2.1" fill="#fff8ec" stroke="none" />

        {/* vela grande, estufada pelo vento */}
        <path d="M84 44c24-6 48-6 72 0l3 50c-26 6-52 6-78 0z" fill="#f4ead2" />
        <path d="M86 52c22-4 46-4 68 0M84.6 86c24 4.6 49 4.6 73.6 0" fill="none" strokeWidth="1" opacity="0.35" />
        {/* caveira com chapéu de palha e ossos cruzados */}
        <path d="M106 80l28-16M106 64l28 16" stroke={INK} strokeWidth="3.6" />
        <circle cx="106" cy="80" r="2.6" fill="#fffbf2" />
        <circle cx="134" cy="64" r="2.6" fill="#fffbf2" />
        <circle cx="106" cy="64" r="2.6" fill="#fffbf2" />
        <circle cx="134" cy="80" r="2.6" fill="#fffbf2" />
        <path d="M110.5 70c0-6 4.3-9.6 9.5-9.6s9.5 3.6 9.5 9.6c0 3.6-1.8 5.8-4 6.8v3.4h-11v-3.4c-2.2-1-4-3.2-4-6.8z" fill="#fffbf2" />
        <circle cx="116.3" cy="70.5" r="2.3" fill={INK} stroke="none" />
        <circle cx="123.7" cy="70.5" r="2.3" fill={INK} stroke="none" />
        <path d="M117.5 77.5v2.6M120 77.5v2.6M122.5 77.5v2.6" strokeWidth="1" />
        <ellipse cx="120" cy="61.6" rx="13" ry="3" fill="#f2c14e" />
        <path d="M112.8 61c0-4.4 3.2-7.4 7.2-7.4s7.2 3 7.2 7.4z" fill="#f2c14e" />
        <path d="M113 59h14v2.4h-14z" fill="#c8322a" strokeWidth="1.2" />

        {/* casco: madeira clara com tábuas e faixa escura na linha d'água */}
        <path d="M40 110c4 30 26 46 56 48h82c22-4 34-24 38-62l-26 8-130 10z" fill="#e0ad6c" />
        <path d="M46 124c40 4 112 2 160-10M52 138c38 3 100 2 146-8" fill="none" stroke="#b07a42" strokeWidth="1.4" />
        <path d="M66 152c34 6 84 7 118-1-2 3.4-4.6 6-7.4 7H96c-11-.6-21.4-2.6-30-6z" fill="#8a5a33" />
        {/* janelas da popa */}
        <circle cx="200" cy="114" r="3.2" fill="#ffd27a" />
        <circle cx="190" cy="118" r="3.2" fill="#ffd27a" />

        {/* amurada branca com balaústres */}
        <path d="M50 106l140-10v9l-140 11z" fill="#fffbf2" />
        <path d="M66 105v9.6M84 103.6v9.8M102 102.4v9.8M138 99.8v9.8M156 98.6v9.6M174 97.4v9.4" strokeWidth="1.3" />
        {/* castelo de popa */}
        <path d="M188 96l26-6v10l-26 7z" fill="#fffbf2" />
        <path d="M214 90c4-2 8 0 7.6 3.6-.4 3-4 3.6-5.4 1.4" fill="none" strokeWidth="1.8" />

        {/* pescoço e carranca de carneiro */}
        <path d="M50 112c-4-10-6-22-12-30l8-4c6 8 9 20 12 32z" fill="#fffbf2" />
        <path d="M22 70c0-7 7-12 16-12 8 0 14 5 14 11 0 7-7 11-15 11-9 0-15-4-15-10z" fill="#fffbf2" />
        <path d="M23.5 72.5c3.4 1.2 6.4 1.4 9.6.6" fill="none" strokeWidth="1.4" />
        <circle cx="31" cy="66" r="2" fill={INK} stroke="none" />
        {/* chifres enrolados */}
        <circle cx="45" cy="61" r="8.4" fill="#c79a6a" />
        <path d="M45 61m-4.6 0a4.6 4.6 0 1 0 4.6-4.6c-2.6 0-3.8 1.8-3.4 3.6.4 1.4 1.8 2 3 1.4" fill="none" strokeWidth="1.6" />

        {/* espuma */}
        <path d="M30 160c8-5 15-5 22 0M196 160c7-5 14-5 21 0" fill="none" stroke="#ff7f1a" strokeWidth="2.4" opacity="0.8" />
      </g>
    </svg>
  );
}
