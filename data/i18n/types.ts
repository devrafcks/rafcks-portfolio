/**
 * Tradução do conteúdo longo de data/. Cada idioma traz só o texto; links, imagens,
 * tags, stack e ids continuam vindo dos arquivos em português.
 * Listas seguem a mesma ordem dos arquivos originais.
 */
export type ProjectText = {
  /** Só quando o título muda de idioma. */
  title?: string;
  summary: string;
  points: string[];
  notice?: string;
  /** Um alt por imagem, na ordem de `images`. */
  alts: string[];
  coverAlt?: string;
};

export type ExperienceText = {
  role: string;
  period: string;
  mode: string;
  summary: string;
  more?: string[];
  didLabel?: string;
  did: string[];
  closing?: string;
  resultValue?: string;
  resultLabel?: string;
};

export type StudyText = {
  title: string;
  place: string;
  period: string;
  text: string;
};

export type RecommendationText = {
  role: string;
  date: string;
  paragraphs: string[];
};

export type ContentText = {
  projects: Record<string, ProjectText>;
  experiences: ExperienceText[];
  studies: StudyText[];
  recommendations: RecommendationText[];
};
