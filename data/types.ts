export type ProjectTag =
  | "Landing pages"
  | "Sites"
  | "Apps"
  | "PWA"
  | "SaaS"
  | "E-commerce"
  | "Sistemas"
  | "Extensões";

export type LinkKind = "site" | "repo" | "apple" | "play" | "blog";

export type Shot = {
  src: string;
  alt: string;
  device: "laptop" | "phone";
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
};

export type Recommendation = {
  name: string;
  role: string;
  paragraphs: string[];
};
