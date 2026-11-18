/**
 * Veleiro de desenho: casco na cor da tinta (creme no escuro) com friso laranja,
 * vela grande creme com uma faixa cor de sol, bujarrona amarela e uma flâmula vermelha
 * da mesma cor da faixa do chapéu. Desenho próprio, só formas simples.
 */
export function Boat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <g strokeLinejoin="round" strokeLinecap="round">
        {/* mastro e flâmula */}
        <path d="M60 8V71" stroke="#2b1e20" strokeWidth="3" className="dark:stroke-[#f6efe6]" />
        <path d="M60 8.5l15 3.6-15 4.2z" fill="#c8322a" stroke="#2b1e20" strokeWidth="1.6" className="dark:stroke-[#f6efe6]" />
        {/* vela grande */}
        <path d="M63.5 16c14 10 24 26 28.5 48H63.5z" fill="#fff4dc" stroke="#2b1e20" strokeWidth="2" className="dark:stroke-[#f6efe6]" />
        <path d="M63.5 41c7.5-.9 14.6-.6 21.2.8l1.6 6.1c-7.4-1.6-15.2-2-22.8-1z" fill="#ffbc00" />
        {/* bujarrona */}
        <path d="M56.5 21c-9.5 11-16.6 25-19 43h19z" fill="#ffbc00" stroke="#2b1e20" strokeWidth="2" className="dark:stroke-[#f6efe6]" />
        {/* casco */}
        <path d="M14 70h93c-3.6 11-12 17.5-23.5 17.5H37.5C26 87.5 18 81 14 70z" className="fill-ink dark:fill-cream" stroke="#2b1e20" strokeWidth="2" />
        <path d="M20.5 76h80" stroke="#ff7f1a" strokeWidth="2.6" />
        <circle cx="45" cy="81" r="2" fill="#fffbf2" />
        <circle cx="55" cy="81" r="2" fill="#fffbf2" />
        {/* espuma na proa e na popa */}
        <path d="M8 86c4-2.4 7-2.4 10 0M104 86c3-2.4 6.5-2.4 9.5 0" fill="none" stroke="#ff7f1a" strokeWidth="2" opacity="0.7" />
      </g>
    </svg>
  );
}
