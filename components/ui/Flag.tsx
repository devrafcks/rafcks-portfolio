import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";

/**
 * Bandeiras redondas em SVG, desenhadas aqui mesmo: emoji de bandeira não aparece no
 * Windows (vira "BR", "US"...) e assim nada precisa ser baixado. O círculo recorta
 * os detalhes, então cada uma fica simples e legível em 20 px.
 */
const flags: Record<Locale, ReactNode> = {
  pt: (
    <>
      <rect width="32" height="32" fill="#009c3b" />
      <path d="M16 5 29 16 16 27 3 16Z" fill="#ffdf00" />
      <circle cx="16" cy="16" r="6.4" fill="#002776" />
      <path d="M9.8 14.6c4.3-.9 8.7-.2 12.3 2.1l-.4 1.1c-3.5-2.1-7.7-2.8-11.8-2Z" fill="#fff" />
    </>
  ),
  en: (
    <>
      <rect width="32" height="32" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={i * (32 / 13)} width="32" height={32 / 13} fill="#b22234" />
      ))}
      <rect width="16" height={(32 / 13) * 7} fill="#3c3b6e" />
      {[
        [4, 4],
        [9, 4],
        [6.5, 8],
        [11.5, 8],
        [4, 12],
        [9, 12],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1" fill="#fff" />
      ))}
    </>
  ),
  es: (
    <>
      <rect width="32" height="32" fill="#aa151b" />
      <rect y="8" width="32" height="16" fill="#f1bf00" />
    </>
  ),
  fr: (
    <>
      <rect width="32" height="32" fill="#fff" />
      <rect width="10.67" height="32" fill="#0055a4" />
      <rect x="21.33" width="10.67" height="32" fill="#ef4135" />
    </>
  ),
  de: (
    <>
      <rect width="32" height="32" fill="#ffce00" />
      <rect width="32" height="10.67" fill="#000" />
      <rect y="10.67" width="32" height="10.67" fill="#dd0000" />
    </>
  ),
  it: (
    <>
      <rect width="32" height="32" fill="#fff" />
      <rect width="10.67" height="32" fill="#009246" />
      <rect x="21.33" width="10.67" height="32" fill="#ce2b37" />
    </>
  ),
};

export function Flag({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={`shrink-0 rounded-full ring-1 ring-ink/15 dark:ring-white/25 ${className}`}>
      <defs>
        <clipPath id={`flag-${locale}`}>
          <circle cx="16" cy="16" r="16" />
        </clipPath>
      </defs>
      <g clipPath={`url(#flag-${locale})`}>{flags[locale]}</g>
    </svg>
  );
}
