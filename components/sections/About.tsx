import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-10 lg:grid-cols-[minmax(16rem,0.8fr)_1.2fr] lg:items-start lg:px-0">
      <div>
        <p className="font-label text-xs font-extrabold uppercase tracking-[0.14em] text-ember-ink italic">Sobre</p>
        <h2 className="mt-3 font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
          Do problema ao produto no ar.
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
          Meu nome é Rafael Henrique Blanco. Tenho 19 anos, moro em São Paulo e trabalho como desenvolvedor full stack. Crio SaaS, sistemas e apps de ponta a ponta, e é na construção de produto que eu rendo mais.
        </p>
        <p className="inline-flex max-w-md flex-col bg-ink px-5 py-4 text-white dark:bg-sun dark:text-ink">
          <span className="font-display text-[clamp(1.8rem,1.4rem+1vw,2.6rem)] leading-none font-bold">+R$ 7.000</span>
          <span className="mt-2 text-sm leading-snug">
            economizados em ferramentas e infraestrutura. Construo por dentro e enxugo a infra para a empresa gastar menos.
          </span>
        </p>
        <p>
          Já construí um ERP com PDV, financeiro com conciliação e gateway de pagamento, apps publicados na App Store e na Google Play, marketplaces, sistemas internos com dezenas de integrações e um SaaS próprio que funciona até com sinal fraco. Em uma das reestruturações que conduzi, a troca de infraestrutura cortou mais de R$ 400 por mês em custos.
        </p>
        <p>
          Gosto de entender a dor antes de abrir o editor. Participo do levantamento de requisitos, escrevo a especificação, desenho a arquitetura e modelo o banco. Depois cuido das integrações com pagamentos e plataformas externas, do deploy e da evolução do produto em produção. Trabalho bem com TypeScript, React, Next.js, Node.js, React Native e PostgreSQL, e me viro com Docker, VPS, Coolify, Cloudflare e CI/CD quando a infraestrutura também é minha.
        </p>
        <p>
          Acessibilidade e performance entram no começo do projeto. Criei o SeeB, um widget de acessibilidade open source que nasceu no meu TCC e hoje vai embutido nos meus outros produtos. Uso IA e automação no dia a dia para ganhar velocidade, com agentes e MCP no fluxo de trabalho, e continuo responsável pela arquitetura, pela revisão e pela qualidade do que vai para produção.
        </p>
        <p>
          Quem trabalhou comigo costuma destacar a calma em projetos complexos, a organização e a mania de antecipar problema na reunião de planejamento. Sou técnico em Informática para Internet pela ETEC Parque Belém, curso Engenharia de Software na Gran Faculdade e Inteligência Artificial e Automação Digital na UniFECAF com a Faculdade de Tecnologia Rocketseat. Me comunico bem em inglês, o que me ajuda a ler documentação, acompanhar a comunidade e trabalhar com ferramentas e times de fora.
        </p>
      </div>
    </section>
  );
}
