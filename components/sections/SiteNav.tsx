import { IconBriefcase, IconHome, IconLayoutGrid, IconMail, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "#inicio", label: "Início", Icon: IconHome },
  { href: "#sobre", label: "Sobre", Icon: IconUser },
  { href: "#experiencia", label: "Experiência", Icon: IconBriefcase },
  { href: "#projetos", label: "Projetos", Icon: IconLayoutGrid },
  { href: "#contato", label: "Contato", Icon: IconMail },
];

export function SiteNav() {
  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-4 sm:px-8">
        <a href="#inicio" className="pointer-events-auto" aria-label="Rafael Blanco, início">
          <Image src="/images/logo-light.svg" alt="" width={92} height={40} className="h-8 w-auto dark:hidden" />
          <Image src="/images/logo-dark.svg" alt="" width={92} height={40} className="hidden h-8 w-auto dark:block" />
        </a>
        <div className="pointer-events-auto">
          <ThemeToggle />
        </div>
      </div>
      <nav
        aria-label="Seções"
        className="fixed bottom-4 left-1/2 z-40 flex max-w-[calc(100%-1.5rem)] -translate-x-1/2 items-center gap-1 rounded-full bg-ink/95 px-2 py-2 text-white shadow-[0_16px_40px_rgba(43,30,32,0.28)] backdrop-blur"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.label}
            title={link.label}
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-white/10 sm:h-auto sm:w-auto sm:px-4 sm:py-2"
          >
            <link.Icon size={22} stroke={1.75} aria-hidden="true" className="sm:hidden" />
            <span className="hidden font-label text-[0.68rem] font-extrabold uppercase tracking-[0.06em] italic sm:inline">{link.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
