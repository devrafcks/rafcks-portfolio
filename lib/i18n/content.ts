import { studies as ptStudies } from "@/data/courses";
import { experiences as ptExperiences } from "@/data/experiences";
import { en } from "@/data/i18n/en";
import { es } from "@/data/i18n/es";
import type { ContentText } from "@/data/i18n/types";
import { filters, projects as ptProjects } from "@/data/projects";
import { recommendations as ptRecommendations } from "@/data/recommendations";
import type { Experience, Project, Recommendation, Study } from "@/data/types";
import type { Locale } from "@/lib/i18n/config";

const texts: Partial<Record<Locale, ContentText>> = { en, es };

export type Content = {
  projects: Project[];
  experiences: Experience[];
  studies: Study[];
  recommendations: Recommendation[];
  filters: typeof filters;
};

/**
 * Conteúdo longo no idioma pedido. Estrutura (links, imagens, tags, stack) vem dos
 * arquivos em português; só o texto é trocado. O que faltar na tradução fica em português.
 */
export function getContent(locale: Locale): Content {
  const text = texts[locale];
  if (!text) {
    return { projects: ptProjects, experiences: ptExperiences, studies: ptStudies, recommendations: ptRecommendations, filters };
  }

  const projects = ptProjects.map((project) => {
    const tr = text.projects[project.id];
    if (!tr) return project;
    return {
      ...project,
      title: tr.title ?? project.title,
      summary: tr.summary,
      points: tr.points.length ? tr.points : project.points,
      notice: project.notice ? (tr.notice ?? project.notice) : undefined,
      images: project.images.map((image, index) => ({ ...image, alt: tr.alts[index] ?? image.alt })),
      cover: project.cover ? { ...project.cover, alt: tr.coverAlt ?? project.cover.alt } : undefined,
    };
  });

  const experiences = ptExperiences.map((item, index) => {
    const tr = text.experiences[index];
    if (!tr) return item;
    return {
      ...item,
      role: tr.role,
      period: tr.period,
      mode: tr.mode,
      summary: tr.summary,
      did: tr.did,
      result: item.result ? { value: tr.resultValue ?? item.result.value, label: tr.resultLabel ?? item.result.label } : undefined,
    };
  });

  const studies = ptStudies.map((item, index) => {
    const tr = text.studies[index];
    return tr ? { ...item, title: tr.title, place: tr.place, period: tr.period, text: tr.text } : item;
  });

  const recommendations = ptRecommendations.map((item, index) => {
    const tr = text.recommendations[index];
    return tr ? { ...item, role: tr.role, date: tr.date, paragraphs: tr.paragraphs } : item;
  });

  return { projects, experiences, studies, recommendations, filters };
}
