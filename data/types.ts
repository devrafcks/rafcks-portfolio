export type ProjectTag =
  | "Landing pages"
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
  did: string[];
  result?: { value: string; label: string };
  stack: string[];
};

export type Study = {
  group: "formacao" | "curso";
  title: string;
  place: string;
  period: string;
  text: string;
  href?: string;
  track?: "livre" | "certificacao";
};

export type Recommendation = {
  name: string;
  role: string;
  date: string;
  linkedin: string;
  photo: string;
  paragraphs: string[];
};
