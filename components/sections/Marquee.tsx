import {
  IconBrandCloudflare,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandSupabase,
  IconBrandTypescript,
  IconBrandVercel,
  IconDatabase,
} from "@tabler/icons-react";
import { VelocityTrack } from "@/components/motion/VelocityTrack";

const items = [
  ["TypeScript", IconBrandTypescript],
  ["React", IconBrandReact],
  ["Next.js", IconBrandNextjs],
  ["Node.js", IconBrandNodejs],
  ["React Native", IconBrandReactNative],
  ["PostgreSQL", IconDatabase],
  ["Supabase", IconBrandSupabase],
  ["Prisma", IconBrandPrisma],
  ["Drizzle", IconDatabase],
  ["Docker", IconBrandDocker],
  ["Cloudflare", IconBrandCloudflare],
  ["Vercel", IconBrandVercel],
  ["Figma", IconBrandFigma],
] as const;

export function Marquee() {
  return (
    <section aria-label="Tecnologias" className="border-y border-ink/10 py-5 dark:border-white/10">
      <VelocityTrack speed={1.6}>
        <ul className="flex shrink-0 items-center">
          {items.map(([label, Icon]) => (
            <li
              key={label}
              className="group flex items-center gap-3 pr-16 font-label text-sm font-extrabold uppercase tracking-[0.08em] italic"
            >
              <Icon size={22} stroke={1.75} aria-hidden="true" className="transition-colors duration-300 group-hover:text-ember-ink" />
              {label}
            </li>
          ))}
        </ul>
      </VelocityTrack>
    </section>
  );
}
