export function Tag({ children }: { children: string }) {
  return (
    <span className="font-label text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-ink/80 dark:text-white/80">
      {children}
    </span>
  );
}
