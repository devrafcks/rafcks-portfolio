export type ProjectTag =
  | "Landing pages"
  | "Link na bio"
  | "Sites"
  | "Apps"
  | "PWA"
  | "SaaS"
  | "E-commerce"
  | "Sistemas"
  | "IA"
  | "Extensões"
  | "Jogos";

export type LinkKind = "site" | "repo" | "apple" | "play" | "blog" | "roblox";

export type Shot = {
  src: string;
  alt: string;
  device: "laptop" | "phone";
  tall?: boolean;
  width?: number;
  height?: number;
};

export type ProjectLink = {
  href: string;
  label: string;
  kind: LinkKind;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  stack: string[];
  tags: ProjectTag[];
  links: ProjectLink[];
  images: Shot[];
  cover?: Shot;
  notice?: string;
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  mode: string;
  summary: string;
  /** Parágrafos entre o resumo e a lista. */
  more?: string[];
  /** Rótulo da lista, quando ela tem um título próprio. */
  didLabel?: string;
  did: string[];
  /** Parágrafo depois da lista. */
  closing?: string;
  result?: { value: string; label: string };
  /** Cargo atual: ganha o selo "Atual" e o ponto pulsando na linha do tempo. */
  current?: boolean;
  stack: string[];
};

export type StudyLink = {
  href: string;
  kind: "credential" | "repo" | "site";
  /** Nome curto para distinguir vários repositórios ou deploys do mesmo curso. */
  name?: string;
};

export type StudyArea = "frontend" | "backend" | "ia" | "carreira" | "design";

export type IssuerId =
  | "rocketseat"
  | "dio"
  | "alura"
  | "udemy"
  | "ebac"
  | "hashtag"
  | "proa"
  | "brainstorm"
  | "unifecaf"
  | "microsoft";

export type Study = {
  group: "formacao" | "curso";
  title: string;
  place: string;
  period: string;
  text: string;
  /** Credencial, repositório ou site publicado do projeto. */
  links?: StudyLink[];
  track?: "livre" | "certificacao";
  /** Só na formação: em andamento ou concluída. */
  status?: "andamento" | "concluido";
  /** Emissor estável, para o logo. Não entra na tradução. */
  issuers?: IssuerId[];
  /** Área para o filtro de cursos. Um curso pode caber em mais de uma. */
  areas?: StudyArea[];
};

export type Recommendation = {
  name: string;
  role: string;
  date: string;
  linkedin: string;
  photo: string;
  paragraphs: string[];
};
