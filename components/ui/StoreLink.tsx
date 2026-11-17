import { IconBrandApple, IconBrandGithub, IconBrandGooglePlay, IconWorld } from "@tabler/icons-react";
import type { LinkKind } from "@/data/types";

const icon = {
  site: IconWorld,
  blog: IconWorld,
  repo: IconBrandGithub,
  apple: IconBrandApple,
  play: IconBrandGooglePlay,
};

export function StoreLink({ href, label, kind }: { href: string; label: string; kind: LinkKind }) {
  const Icon = icon[kind];
  const store = kind === "apple" || kind === "play";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        store
          ? "inline-flex items-center gap-2 rounded-xl bg-ink px-3.5 py-2.5 font-label text-[0.75rem] font-extrabold uppercase tracking-[0.04em] text-white italic dark:bg-sun dark:text-ink"
          : "inline-flex items-center gap-2 rounded-full bg-sun px-4 py-2.5 font-label text-[0.75rem] font-extrabold uppercase tracking-[0.05em] text-ink italic hover:bg-ember"
      }
    >
      <Icon size={16} stroke={1.75} aria-hidden="true" />
      {label}
    </a>
  );
}
