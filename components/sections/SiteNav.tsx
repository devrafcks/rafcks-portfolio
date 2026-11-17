import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function SiteNav() {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-4 sm:px-8">
        <a href="#inicio" className="pointer-events-auto" aria-label="Rafael Blanco, início">
          <Image src="/images/logo-light.svg" alt="" width={92} height={40} className="h-8 w-auto dark:hidden" priority />
          <Image src="/images/logo-dark.svg" alt="" width={92} height={40} className="hidden h-8 w-auto dark:block" priority />
        </a>
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>
      <nav
        aria-label="Seções"
        className="fixed bottom-4 left-1/2 z-40 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 gap-1 overflow-x-auto rounded-full bg-ink/95 px-2 py-2 text-white shadow-[0_16px_40px_rgba(43,30,32,0.28)] backdrop-blur"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-2 font-label text-[0.68rem] font-extrabold uppercase tracking-[0.06em] italic hover:bg-white/10 sm:px-4"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
