"use client";

import { Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { Blob } from "@/components/decor/blob";
import { Parallax } from "@/components/decor/parallax";
import { Ramo } from "@/components/decor/ramo";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import type { Pergunta } from "@/data/types";

// Animação da seção: perguntas entram desfocadas e ganham foco (blur in).
export function Duvidas({ perguntas }: { perguntas: Pergunta[] }) {
  const [aberta, setAberta] = useState<number | null>(0);
  const reduzir = useReducedMotion();
  const base = useId();

  return (
    <section id="duvidas" className="relative isolate overflow-clip bg-areia py-24 md:py-32">
      <Blob cor="areia" atraso="-12s" className="-top-32 -right-32 size-96 opacity-90 md:size-[34rem]" />
      <Parallax distancia={30} giro={-4} className="-bottom-6 -left-8 w-36 -scale-x-100 rotate-[-10deg] text-ouro-3 opacity-40 md:w-64">
        <Ramo className="w-full" />
      </Parallax>

      <div className="container-lp relative z-10 grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <div>
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl leading-tight font-light md:text-5xl">
              Antes de marcar, tire suas <span className="font-semibold">dúvidas</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cafe-suave">
              Separei as perguntas que mais aparecem no consultório e nas mensagens. Se a sua não estiver aqui,
              é só me chamar.
            </p>
            <WhatsAppLink secao="faq" className={buttonClasses("terracota", "lg", "mt-8")}>
              Ainda tenho uma dúvida
            </WhatsAppLink>
          </div>
        </div>

        <ul className="divide-y divide-cafe/10 rounded-3xl bg-off px-6 shadow-suave md:px-10">
          {perguntas.map((p, i) => {
            const estaAberta = aberta === i;
            const idBotao = `${base}-p-${i}`;
            const idPainel = `${base}-r-${i}`;
            return (
              <motion.li
                key={p.pergunta}
                initial={reduzir ? false : { opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              >
                <h3>
                  <button
                    id={idBotao}
                    type="button"
                    aria-expanded={estaAberta}
                    aria-controls={idPainel}
                    onClick={() => setAberta(estaAberta ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium transition-colors hover:text-terracota"
                  >
                    {p.pergunta}
                    <Plus
                      aria-hidden
                      className={`size-5 shrink-0 text-terracota transition-transform duration-300 ${estaAberta ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {estaAberta && (
                    <motion.div
                      id={idPainel}
                      role="region"
                      aria-labelledby={idBotao}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 leading-relaxed text-cafe-suave">{p.resposta}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
