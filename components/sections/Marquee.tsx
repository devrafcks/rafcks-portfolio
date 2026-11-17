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
  const row = [...items, ...items];
  return (
    <section aria-label="Tecnologias" className="overflow-hidden border-y border-ink/10 py-5 dark:border-white/10">
      <div className="flex w-max animate-[marquee_36s_linear_infinite] gap-16">
        {row.map(([label, Icon], index) => (
          <span key={`${label}-${index}`} className="flex items-center gap-3 font-label text-sm font-extrabold uppercase tracking-[0.08em] italic">
            <Icon size={22} stroke={1.75} aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
