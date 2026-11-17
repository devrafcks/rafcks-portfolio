export default function OfflinePage() {
  return (
    <main className="grid min-h-dvh place-items-center bg-paper px-6 text-center text-ink">
      <div className="max-w-md">
        <p className="font-display text-5xl font-bold tracking-[-0.04em]">RB</p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em]">Você está offline</h1>
        <p className="mt-3 leading-relaxed text-ink/80">
          O portfólio de Rafael Blanco não conseguiu falar com a rede. Quando a conexão voltar, a página atualiza sozinha.
        </p>
        <a href="/" className="mt-6 inline-flex rounded-full bg-sun px-5 py-3 font-label text-sm font-extrabold uppercase tracking-[0.06em] text-ink italic">
          Tentar de novo
        </a>
      </div>
    </main>
  );
}
