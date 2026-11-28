import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { Boat } from "@/components/art/Boat";
import { Serpent, Whale } from "@/components/art/SeaMonsters";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

/**
 * Imagem de compartilhamento (Open Graph / X) de cada idioma, gerada no build:
 * o nome como na Hero ("Blanco" contornado), a frase do Sobre no idioma da página
 * e, à direita, o mesmo pôr do sol da Hero com o Merry e os monstros.
 */
const size = { width: 1200, height: 630 };
const INK = "#2b1e20";
const PAPER = "#fffbf2";

export async function generateImageMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(isLocale(lang) ? lang : "pt");
  return [{ id: "card", alt: t.meta.ogAlt, size, contentType: "image/png" }];
}

/**
 * As fontes do card só têm o alfabeto latino. Em japonês, chinês, coreano e russo o card
 * desenha o texto em inglês (o alt continua no idioma da página), em vez de quadradinhos vazios.
 */
const latin = new Set(["pt", "en", "es", "fr", "de", "it", "nl"]);
const cardLocale = (lang: string) => (isLocale(lang) ? (latin.has(lang) ? lang : "en") : "pt");

const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));

/** Uma onda que se repete, desenhada de ponta a ponta da cena. */
function wave(y: number, amp: number, length: number, width: number) {
  let d = `M0 ${y}`;
  for (let x = 0; x < width + length; x += length) d += ` Q${x + length / 4} ${y - amp} ${x + length / 2} ${y} T${x + length} ${y}`;
  return d;
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(cardLocale(lang));
  const [unbounded, montserrat, inter] = await Promise.all([
    font("Unbounded-ExtraBold.woff"),
    font("Montserrat-ExtraBoldItalic.woff"),
    font("Inter-Medium.woff"),
  ]);

  // cena: horizonte em y=400, a partir de x=560
  const horizon = 400;
  const sceneLeft = 560;
  const sceneWidth = size.width - sceneLeft;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: PAPER, fontFamily: "Inter" }}>
        {/* brilho do sol */}
        <div
          style={{
            position: "absolute",
            left: 640,
            top: horizon - 330,
            width: 660,
            height: 660,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(255,188,0,0.5), rgba(255,127,26,0.2) 34%, rgba(255,127,26,0.05) 56%, rgba(255,127,26,0) 70%)",
          }}
        />
        {/* sol meio dentro do mar */}
        <div style={{ position: "absolute", left: 900, top: horizon - 110, width: 220, height: 110, display: "flex", overflow: "hidden" }}>
          <div style={{ width: 220, height: 220, borderRadius: 9999, background: "radial-gradient(circle at 50% 38%, #fff3b0, #ffd23f 34%, #ffbc00 55%, #ff7f1a 100%)" }} />
        </div>
        {/* água */}
        <div
          style={{
            position: "absolute",
            left: sceneLeft,
            top: horizon,
            width: sceneWidth,
            height: size.height - horizon,
            background: "linear-gradient(180deg, rgba(255,127,26,0.22), rgba(255,188,0,0.06) 55%, rgba(255,188,0,0))",
          }}
        />
        {/* monstros saindo da água atrás do navio */}
        <div style={{ position: "absolute", left: sceneLeft, top: horizon - 150, width: sceneWidth, height: 158, display: "flex", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 20, top: 92, display: "flex" }}>
            <Whale width={210} />
          </div>
          <div style={{ position: "absolute", left: 470, top: 22, display: "flex" }}>
            <Serpent width={150} />
          </div>
        </div>
        {/* horizonte e ondas */}
        <svg width={sceneWidth} height={size.height - horizon + 4} viewBox={`0 0 ${sceneWidth} ${size.height - horizon + 4}`} style={{ position: "absolute", left: sceneLeft, top: horizon - 2 }}>
          <path d={`M0 2H${sceneWidth}`} stroke="#ff7f1a" strokeWidth="3" opacity="0.8" />
          <path d={wave(26, 4, 90, sceneWidth)} fill="none" stroke="#ff7f1a" strokeWidth="2.5" opacity="0.6" />
          <path d={wave(58, 6, 120, sceneWidth)} fill="none" stroke="#ffbc00" strokeWidth="3" />
          <path d={wave(100, 8, 160, sceneWidth)} fill="none" stroke="#ff7f1a" strokeWidth="3.5" opacity="0.5" />
          <path d={wave(158, 10, 210, sceneWidth)} fill="none" stroke="#ffbc00" strokeWidth="4" opacity="0.55" />
          <path d={wave(220, 12, 260, sceneWidth)} fill="none" stroke={INK} strokeWidth="4" opacity="0.1" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={410 - (40 - i * 6)} y={18 + i * 16} width={(40 - i * 6) * 2} height="4" rx="2" fill="#ffbc00" opacity={0.9 - i * 0.18} />
          ))}
        </svg>
        {/* a ponta esquerda do mar some no papel, como na Hero */}
        <div
          style={{
            position: "absolute",
            left: sceneLeft - 2,
            top: horizon - 160,
            width: 170,
            height: size.height - horizon + 160,
            background: `linear-gradient(90deg, ${PAPER}, rgba(255,251,242,0))`,
          }}
        />
        {/* o Merry */}
        <div style={{ position: "absolute", left: 690, top: horizon + 24 - 214 * 0.79, display: "flex" }}>
          <Boat width={256} height={214} />
        </div>

        {/* texto */}
        <div style={{ position: "absolute", left: 72, top: 70, width: 620, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", background: "#ffbc00", color: INK, fontFamily: "Montserrat", fontSize: 20, letterSpacing: 1.5, padding: "8px 16px" }}>
              {t.hero.chip.toUpperCase()}
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 26, fontFamily: "Unbounded", fontSize: 118, lineHeight: 0.95, color: INK, letterSpacing: -2 }}>Rafael</div>
          <div
            style={{
              display: "flex",
              fontFamily: "Unbounded",
              fontSize: 118,
              lineHeight: 0.95,
              color: PAPER,
              letterSpacing: -5,
              WebkitTextStroke: `2px ${INK}`,
            }}
          >
            Blanco
          </div>
          <div style={{ display: "flex", marginTop: 34, fontSize: 32, lineHeight: 1.25, color: INK, maxWidth: 520 }}>{t.about.title}</div>
          <div style={{ display: "flex", marginTop: 18, fontFamily: "Montserrat", fontSize: 18, letterSpacing: 1.5, color: "#b45309" }}>RAFAELBLANCO.VERCEL.APP</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Unbounded", data: unbounded, weight: 800, style: "normal" },
        { name: "Montserrat", data: montserrat, weight: 800, style: "italic" },
        { name: "Inter", data: inter, weight: 500, style: "normal" },
      ],
    },
  );
}
