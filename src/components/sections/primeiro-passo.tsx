"use client";

import { ClipboardCheck, type LucideIcon, MessageCircleHeart, ScanFace } from "lucide-react";
import { motion } from "motion/react";
import { Grain } from "@/components/decor/grain";
import { Monograma } from "@/components/decor/monograma";
import { Parallax } from "@/components/decor/parallax";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";

const etapas: { icone: LucideIcon; titulo: string; texto: string }[] = [
  {
    icone: MessageCircleHeart,
    titulo: "Você conta o que te incomoda",
    texto: "Uma conversa franca sobre o que você sente, a sua rotina e o que espera do tratamento.",
  },
  {
    icone: ScanFace,
    titulo: "Análise do seu rosto",
    texto: "Pele, proporções e expressões avaliadas com calma, com ultrassom quando indicado.",
  },
  {
    icone: ClipboardCheck,
    titulo: "Um plano feito para você",
    texto: "Você recebe a indicação, entende cada etapa e decide no seu tempo, sem pressão.",
  },
];

// Animação da seção: etapas entram em scale-in, uma depois da outra.
export function PrimeiroPasso() {
  return (
    <section
      aria-labelledby="titulo-primeiro-passo"
      className="bg-terracota-grad relative isolate overflow-clip py-20 text-off md:py-28"
    >
      <Grain />
      <Parallax distancia={40} className="bottom-[-30%] left-[-18%] w-[22rem] -rotate-[8deg] text-ouro-2 opacity-[0.08] md:left-[-6%] md:w-[36rem]">
        <Monograma className="w-full" />
      </Parallax>

      <div className="container-lp relative z-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h2 id="titulo-primeiro-passo" className="text-4xl leading-tight font-light md:text-5xl">
            Você merece se olhar no espelho e se <span className="font-semibold">reconhecer</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-off/90">
            E tudo começa com uma avaliação individual. Muita gente chega achando que precisa de muito e sai
            descobrindo que precisa de bem menos do que imaginava.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsAppLink secao="primeiro-passo" className={buttonClasses("gold", "lg")}>
              Quero agendar minha avaliação
            </WhatsAppLink>
            <a href="#duvidas" className={buttonClasses("on-dark", "lg")}>
              Ver dúvidas frequentes
            </a>
          </div>
        </div>

        <ol className="relative space-y-4 lg:col-span-6">
          {etapas.map(({ icone: Icone, titulo, texto }, i) => (
            <motion.li
              key={titulo}
              className="flex gap-5 rounded-3xl bg-cafe-escuro/25 p-6 ring-1 ring-off/15 md:p-7"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="bg-gold grid size-12 shrink-0 place-items-center rounded-full p-px">
                <span className="grid size-full place-items-center rounded-full bg-terracota-hover text-ouro-2">
                  <Icone className="size-5" aria-hidden />
                </span>
              </span>
              <div>
                <h3 className="text-xl font-medium text-off">
                  <span className="sr-only">Etapa {i + 1}: </span>
                  {titulo}
                </h3>
                <p className="mt-1.5 leading-relaxed text-off/80">{texto}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
