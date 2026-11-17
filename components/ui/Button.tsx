import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const styles = {
  primary:
    "bg-sun text-ink hover:bg-ember",
  ghost:
    "bg-transparent text-ink hover:text-ember-ink dark:text-white",
};

export function Button({ href, children, variant = "ghost", external, className = "", type = "button", onClick, disabled }: Props) {
  const classNames = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-label text-[0.78rem] font-extrabold italic uppercase tracking-[0.06em] transition disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classNames}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classNames} disabled={disabled} aria-busy={disabled || undefined}>
      {children}
    </button>
  );
}
