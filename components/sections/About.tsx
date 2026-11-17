export function About() {
  return (
    <section id="sobre" className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-0">
      <div>
        <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember italic">Sobre</p>
        <h2 className="mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
          Trabalho de produto, do requisito ao ar.
        </h2>
      </div>
      <div className="space-y-4 text-[clamp(1rem,0.95rem+0.15vw,1.125rem)] leading-relaxed text-ink/85 dark:text-white/85">
        <p>
          Meu nome é Rafael Henrique Blanco. Tenho 19 anos, moro em São Paulo e trabalho como desenvolvedor full stack.
        </p>
        <p>
          Hoje cuido da tecnologia da T2 Educação: o sistema interno, as integrações entre plataformas, a automação de processos, o banco de dados, a infraestrutura e o deploy. Também construo produtos para empresas e startups, do levantamento de requisitos até a publicação e a evolução em produção.
        </p>
        <p>
          Acessibilidade e performance entram no início do projeto. Uso IA e automação para ganhar velocidade, e sigo responsável pela revisão e pela qualidade do que vai para produção.
        </p>
        <p>
          Sou formado em Informática para Internet pela ETEC Parque Belém. Curso Engenharia de Software na Gran Faculdade e Inteligência Artificial e Automação Digital na UniFECAF, com a Faculdade de Tecnologia Rocketseat. O inglês está em andamento na United Idiomas.
        </p>
      </div>
    </section>
  );
}
