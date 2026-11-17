import { Button } from "@/components/ui/Button";

const fields = [
  { id: "nome", name: "from_name", label: "Nome", type: "text", auto: "name" },
  { id: "email", name: "reply_email", label: "E-mail", type: "email", auto: "email" },
  { id: "assunto", name: "subject", label: "Assunto", type: "text", auto: "off" },
] as const;

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-xl px-5 py-20 sm:px-10">
      <h2 className="text-center font-display text-[clamp(2rem,1.2rem+2.4vw,3.4rem)] leading-none font-semibold tracking-[-0.04em]">
        Contato
      </h2>
      <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-ink/80 dark:text-white/75">
        Quer falar sobre um projeto ou uma vaga? Envie uma mensagem por aqui. Se preferir, me chame no LinkedIn.
      </p>
      <form action="https://formsubmit.co/rafcksps@gmail.com" method="POST" className="mt-10 space-y-7">
        {fields.map((field) => (
          <div key={field.id} className="relative pt-5">
            <input
              id={field.id}
              name={field.name}
              type={field.type}
              required
              autoComplete={field.auto}
              placeholder=" "
              className="peer w-full border-b border-ink/25 bg-transparent py-2 text-ink outline-none focus:border-ember dark:border-white/30 dark:text-white"
            />
            <label
              htmlFor={field.id}
              className="pointer-events-none absolute top-6 left-0 text-ink/70 transition peer-focus:-translate-y-5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs dark:text-white/70"
            >
              {field.label}
            </label>
          </div>
        ))}
        <div className="relative pt-5">
          <textarea
            id="mensagem"
            name="message"
            required
            rows={4}
            placeholder=" "
            className="peer w-full resize-none border-b border-ink/25 bg-transparent py-2 text-ink outline-none focus:border-ember dark:border-white/30 dark:text-white"
          />
          <label
            htmlFor="mensagem"
            className="pointer-events-none absolute top-6 left-0 text-ink/70 transition peer-focus:-translate-y-5 peer-focus:text-xs peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs dark:text-white/70"
          >
            Mensagem
          </label>
        </div>
        <Button type="submit" variant="primary" className="w-full">
          Enviar mensagem
        </Button>
      </form>
    </section>
  );
}
