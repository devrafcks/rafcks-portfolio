import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-10 lg:grid-cols-[minmax(16rem,0.8fr)_1.2fr] lg:items-start lg:px-0">
      <div>
        <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember-ink italic">Sobre</p>
        <h2 className="mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
          Trabalho de produto, do requisito ao ar.
        </h2>
        <Image
          src="/images/rafael.webp"
          alt="Rafael Blanco"
          width={960}
          height={960}
          sizes="(max-width: 1024px) 100vw, 28rem"
          className="mt-8 h-auto w-full max-w-md object-contain"
        />
      </div>
      <div className="space-y-4 text-[clamp(1rem,0.95rem+0.15vw,1.125rem)] leading-relaxed text-ink/85 dark:text-white/85">
        <p>
          Meu nome é Rafael Henrique Blanco. Tenho 19 anos, moro em São Paulo e trabalho como desenvolvedor full stack.
        </p>
        <p>
          Desenvolvo produtos web, SaaS e mobile de ponta a ponta, do requisito à produção. Já construí ERP, apps publicados nas lojas, sistemas internos com dezenas de integrações e automações que tiram trabalho manual do caminho, sempre com foco em performance, acessibilidade e custo baixo de infraestrutura.
        </p>
        <p>
          Gosto de entender o problema antes de escrever código. Participo do levantamento de requisitos, desenho a arquitetura, modelo o banco de dados, cuido das integrações com pagamentos, notas fiscais e plataformas externas, e acompanho o deploy e a evolução do produto depois que ele está no ar.
        </p>
        <p>
          Acessibilidade e performance entram no início do projeto. Uso IA e automação para ganhar velocidade, e sigo responsável pela revisão e pela qualidade do que vai para produção.
        </p>
        <p>
          Sou formado em Informática para Internet pela ETEC Parque Belém. Curso Engenharia de Software na Gran Faculdade e Inteligência Artificial e Automação Digital na UniFECAF, com a Faculdade de Tecnologia Rocketseat. Me comunico bem em inglês, o que me ajuda a ler documentação, acompanhar a comunidade e trabalhar com ferramentas e times internacionais.
        </p>
      </div>
    </section>
  );
}
