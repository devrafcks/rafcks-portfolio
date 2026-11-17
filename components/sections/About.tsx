import Image from "next/image";
import { CountUp } from "@/components/motion/CountUp";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-10 lg:grid-cols-[minmax(16rem,0.8fr)_1.2fr] lg:items-start lg:px-0">
      <div>
        <SectionHeading title="Do problema ao produto no ar." />
        <div className="mt-8 max-w-md">
                    <ImageReveal parallax={24}>
            <Image
              src="/images/rafael.webp"
              alt="Rafael Blanco"
              width={960}
              height={960}
              sizes="(max-width: 1024px) 100vw, 28rem"
              className="h-auto w-full object-contain"
            />
          </ImageReveal>
        </div>
      </div>
      <RevealGroup className="space-y-4 text-[clamp(1rem,0.95rem+0.15vw,1.125rem)] leading-relaxed text-ink/85 dark:text-white/85" stagger={0.1}>
        <RevealItem as="p">
          Meu nome é Rafael Henrique Blanco. Tenho 19 anos, moro em São Paulo e trabalho como desenvolvedor full stack. Crio SaaS, sistemas e apps de ponta a ponta, e é na construção de produto que eu rendo mais.
        </RevealItem>
        <RevealItem as="p" className="inline-flex max-w-md flex-col bg-ink px-5 py-4 text-white dark:bg-sun dark:text-ink">
          <CountUp value="+R$ 20.000" className="font-display text-[clamp(1.8rem,1.4rem+1vw,2.6rem)] leading-none font-bold" />
          <span className="mt-2 text-sm leading-snug">
            economizados em ferramentas e infraestrutura. Eu construo em casa o que a empresa pagaria num SaaS. Assim ela gasta menos, o produto escala e a operação fica livre de fornecedor.
          </span>
        </RevealItem>
        <RevealItem as="p">
          Já construí um ERP com PDV, financeiro com conciliação e gateway de pagamento, apps publicados na App Store e na Google Play, marketplaces, sistemas internos com dezenas de integrações e um SaaS próprio que funciona até com sinal fraco.
        </RevealItem>
        <RevealItem as="p">
          Gosto de entender a dor antes de abrir o editor. Participo do levantamento de requisitos, escrevo a especificação, desenho a arquitetura e modelo o banco. Depois cuido das integrações com pagamentos e plataformas externas, do deploy e da evolução do produto em produção. Trabalho bem com TypeScript, React, Next.js, Node.js, React Native e PostgreSQL, e me viro com Docker, VPS, Coolify, Cloudflare e CI/CD quando a infraestrutura também é minha.
        </RevealItem>
        <RevealItem as="p">
          Acessibilidade e performance entram no começo do projeto. Criei o SeeB, um widget de acessibilidade open source que nasceu no meu TCC e hoje vai embutido nos meus outros produtos. Uso IA e automação no dia a dia para ganhar velocidade, com agentes e MCP no fluxo de trabalho, e continuo responsável pela arquitetura, pela revisão e pela qualidade do que vai para produção.
        </RevealItem>
        <RevealItem as="p">
          Quem trabalhou comigo costuma destacar a calma em projetos complexos, a organização e a mania de antecipar problema na reunião de planejamento. Sou técnico em Informática para Internet pela ETEC Parque Belém, curso Engenharia de Software na Gran Faculdade e Inteligência Artificial e Automação Digital na UniFECAF com a Faculdade de Tecnologia Rocketseat. Também faço a extensão curricular em Arquitetura de Software com IA na Anhanguera, com o Full Stack Club, de 360 horas, em andamento. Me comunico bem em inglês, o que me ajuda a ler documentação, acompanhar a comunidade e trabalhar com ferramentas e times de fora.
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
