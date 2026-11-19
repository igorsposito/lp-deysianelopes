import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";

/**
 * Etapa 1 (fundação): bloco provisório só para validar header, footer, botões e tema.
 * As seções definitivas entram nas etapas 2 e 3.
 */
export default function Home() {
  return (
    <>
      <section id="inicio" className="bg-areia-grad pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="container-lp grid gap-10 md:grid-cols-12">
          <h1 className="text-4xl leading-[1.05] font-light md:col-span-7 md:text-6xl">
            Resultado que a gente <span className="font-semibold text-terracota">não</span> precisa explicar.
          </h1>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-lg leading-relaxed text-cafe-suave">
              Rejuvenescimento com naturalidade no Rio de Janeiro. Todo resultado começa na conversa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppLink secao="hero" className={buttonClasses("gold", "lg")}>
                Agendar avaliação
              </WhatsAppLink>
              <a href="#contato" className={buttonClasses("outline", "lg")}>
                Falar comigo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-terracota-grad py-20 text-off">
        <div className="container-lp grid items-end gap-8 md:grid-cols-[3fr_2fr]">
          <h2 className="text-3xl font-light md:text-5xl">
            Por que começar com <span className="font-semibold">1 ml?</span>
          </h2>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <WhatsAppLink secao="contato" className={buttonClasses("gold", "lg")}>
              Chamar no WhatsApp
            </WhatsAppLink>
            <WhatsAppLink secao="faq" className={buttonClasses("on-dark", "lg")}>
              Tirar uma dúvida
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
