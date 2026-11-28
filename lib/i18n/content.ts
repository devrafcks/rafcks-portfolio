import { studies as ptStudies } from "@/data/courses";
import { experiences as ptExperiences } from "@/data/experiences";
import { de } from "@/data/i18n/de";
import { en } from "@/data/i18n/en";
import { es } from "@/data/i18n/es";
import { fr } from "@/data/i18n/fr";
import { it } from "@/data/i18n/it";
import { ja } from "@/data/i18n/ja";
import { ko } from "@/data/i18n/ko";
import { nl } from "@/data/i18n/nl";
import { ru } from "@/data/i18n/ru";
import { zh } from "@/data/i18n/zh";
import type { ContentText } from "@/data/i18n/types";
import { filters, projects as ptProjects } from "@/data/projects";
import { recommendations as ptRecommendations } from "@/data/recommendations";
import type { Experience, Project, Recommendation, Study } from "@/data/types";
import type { Locale } from "@/lib/i18n/config";

export type Content = {
  projects: Project[];
  experiences: Experience[];
  studies: Study[];
  recommendations: Recommendation[];
  filters: typeof filters;
};

const pt: Content = { projects: ptProjects, experiences: ptExperiences, studies: ptStudies, recommendations: ptRecommendations, filters };

/**
 * Troca o texto de `base` pelo da tradução. Estrutura (links, imagens, tags, stack)
 * continua vindo de `base`; o que faltar na tradução fica como em `base`.
 */
function translate(base: Content, text: ContentText): Content {
  const projects = base.projects.map((project) => {
    const tr = text.projects[project.id];
    if (!tr) return project;
    return {
      ...project,
      title: tr.title ?? project.title,
      summary: tr.summary,
      points: tr.points.length ? tr.points : project.points,
      notice: project.notice ? (tr.notice ?? project.notice) : undefined,
      images: project.images.map((image, index) => ({ ...image, alt: tr.alts?.[index] ?? image.alt })),
      cover: project.cover ? { ...project.cover, alt: tr.coverAlt ?? project.cover.alt } : undefined,
    };
  });

  const experiences = base.experiences.map((item, index) => {
    const tr = text.experiences[index];
    if (!tr) return item;
    return {
      ...item,
      role: tr.role,
      period: tr.period,
      mode: tr.mode,
      summary: tr.summary,
      more: tr.more ?? item.more,
      didLabel: tr.didLabel ?? item.didLabel,
      did: tr.did,
      closing: tr.closing ?? item.closing,
      result: item.result ? { value: tr.resultValue ?? item.result.value, label: tr.resultLabel ?? item.result.label } : undefined,
    };
  });

  const studies = base.studies.map((item, index) => {
    const tr = text.studies[index];
    return tr ? { ...item, title: tr.title, place: tr.place, period: tr.period, text: tr.text } : item;
  });

  const recommendations = base.recommendations.map((item, index) => {
    const tr = text.recommendations[index];
    return tr ? { ...item, role: tr.role, date: tr.date, paragraphs: tr.paragraphs } : item;
  });

  return { projects, experiences, studies, recommendations, filters: base.filters };
}

const english = translate(pt, en);

/**
 * Conteúdo longo no idioma pedido. Inglês e espanhol partem do português; francês,
 * alemão e italiano partem do inglês, então o que não tiver tradução própria
 * (como os textos alternativos das imagens) aparece em inglês, não em português.
 */
const contents: Record<Locale, Content> = {
  pt,
  en: english,
  es: translate(pt, es),
  fr: translate(english, fr),
  de: translate(english, de),
  it: translate(english, it),
  ja: translate(english, ja),
  zh: translate(english, zh),
  ko: translate(english, ko),
  ru: translate(english, ru),
  nl: translate(english, nl),
};

export function getContent(locale: Locale): Content {
  return contents[locale];
}
