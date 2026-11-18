"use client";

import dynamic from "next/dynamic";
import { NearView } from "@/components/motion/NearView";
import type { DeckProject } from "@/components/ui/project-deck";
import { useI18n } from "@/lib/i18n/I18nProvider";

const ProjectDeck = dynamic(() => import("@/components/ui/project-deck").then((mod) => mod.ProjectDeck), { ssr: false });

/** O deck só baixa quando a seção está chegando; antes disso, um bloco do mesmo tamanho segura o lugar. */
export function FeaturedDeck({ projects }: { projects: DeckProject[] }) {
  const { t } = useI18n();
  const height = `${Math.max(1, projects.length) * 100}svh`;
  return (
    <NearView fallback={<div style={{ height }} aria-hidden="true" />}>
      <ProjectDeck projects={projects} label={t.featured.deckLabel} />
    </NearView>
  );
}
