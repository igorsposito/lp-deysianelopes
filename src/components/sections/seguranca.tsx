"use client";

import { Crosshair, HeartHandshake, ScanSearch } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";

const pontos = [
  {
    icone: ScanSearch,
    titulo: "Ver antes de aplicar",
    texto: "O ultrassom mostra vasos e estruturas da face que não aparecem a olho nu.",
  },
  {
    icone: Crosshair,
    titulo: "Mais precisão",
    texto: "O produto vai para o plano planejado, com mais controle durante a aplicação.",
  },
  {
    icone: HeartHandshake,
    titulo: "Mais tranquilidade",
    texto: "Você entende cada etapa e faz o procedimento com mais segurança.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

// Animação da seção: slide lateral (foto vem da esquerda, texto da direita).
export function Seguranca() {
  return (
    <section id="seguranca" className="bg-cafe-grad overflow-hidden py-24 text-off md:py-32">
      <div className="container-lp">
        <h2 className="max-w-4xl text-4xl leading-tight font-light md:text-6xl">
          O que você não vê também <span className="font-semibold text-ouro-2">importa</span>.
        </h2>

        <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cafe-suave">
              <Image
                src="/images/jaleco.jpg"
                alt="Deysiane Lopes de jaleco, preparada para um procedimento guiado por ultrassom"
                fill
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            <p className="text-lg leading-relaxed text-off/85">
              Sempre que indicado, os procedimentos são guiados por ultrassonografia. É um cuidado a mais que
              não aparece no resultado, mas faz diferença em cada etapa.
            </p>
            <ul className="mt-10 space-y-8">
              {pontos.map(({ icone: Icone, titulo, texto }) => (
                <li key={titulo} className="flex gap-5">
                  <span className="bg-gold grid size-12 shrink-0 place-items-center rounded-full p-px">
                    <span className="grid size-full place-items-center rounded-full bg-cafe-escuro text-ouro-2">
                      <Icone className="size-5" aria-hidden />
                    </span>
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-off">{titulo}</h3>
                    <p className="mt-1.5 leading-relaxed text-off/75">{texto}</p>
                  </div>
                </li>
              ))}
            </ul>
            <WhatsAppLink secao="ultrassom" className={buttonClasses("gold", "lg", "mt-12")}>
              Como funciona o ultrassom
            </WhatsAppLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
