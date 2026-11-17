import { IconBrandGithub, IconBrandLinkedin, IconLink } from "@tabler/icons-react";

const links = [
  { href: "https://github.com/devrafcks", label: "GitHub", icon: IconBrandGithub },
  { href: "https://www.linkedin.com/in/rafael-henrique-blanco-0455b12a6/", label: "LinkedIn", icon: IconBrandLinkedin },
  { href: "https://devrafcks.github.io/Linkbio/", label: "LinkBio", icon: IconLink },
];

export function Footer() {
  return (
    <footer className="px-5 pt-8 pb-28 text-center">
      <p className="font-display text-lg font-semibold">Rafael Henrique Blanco</p>
      <p className="mt-2 font-label text-sm font-extrabold uppercase tracking-[0.08em] italic">CNPJ 65.605.980/0001-00</p>
      <ul className="mt-4 flex justify-center gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-ink dark:text-white">
              <link.icon size={22} stroke={1.75} />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-ink/60 dark:text-white/60">© 2026 Rafael Blanco</p>
    </footer>
  );
}
