"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ComparadorAntesDepois } from "@/components/comparador-antes-depois";
import { Arcos } from "@/components/decor/arcos";
import { Blob } from "@/components/decor/blob";
import { Monograma } from "@/components/decor/monograma";
import { Parallax } from "@/components/decor/parallax";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import type { AntesDepois, Depoimento } from "@/data/types";

const principios = [
  {
    numero: "01",
    titulo: "Resultado que a gente não precisa explicar",
    texto:
      "Ninguém precisa perguntar o que você fez. Só perceber que você está com uma cara ótima, descansada, mais você.",
  },
  {
    numero: "02",
    titulo: "Todo resultado começa na conversa",
    texto:
      "Antes de falar de produto, a gente fala de você: rotina, incômodos, expectativas e aquilo de que você não abre mão.",
  },
  {
    numero: "03",
    titulo: "Avaliação antes de qualquer agulha",
    texto:
      "Nem toda olheira precisa de preenchimento, e nem todo incômodo pede procedimento. Às vezes a indicação é esperar.",
  },
];

// Animação da seção: reveal com máscara (clip-path abrindo de baixo para cima).
// Quem observa a rolagem é o grid (não recortado); os filhos herdam o estado via variants.
// Observar o próprio elemento recortado em 100% pode nunca disparar.
const revelar = {
  oculto: { clipPath: "inset(100% 0% 0% 0%)" },
  visivel: (i: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 1, delay: i * 0.12, ease: [0.65, 0, 0.35, 1] as const },
  }),
};
export function Resultados({
  depoimentos,
  antesDepois,
}: {
  depoimentos: Depoimento[];
  antesDepois: AntesDepois[];
}) {
  const reduzir = useReducedMotion();

  return (
    <section id="resultados" className="relative isolate overflow-clip bg-off py-24 md:py-32">
      <Blob cor="terracota" atraso="-6s" className="top-[30%] -right-40 size-[24rem] opacity-50 md:size-[38rem]" />
      <Parallax distancia={60} className="top-10 right-[-14%] hidden w-[40rem] -rotate-6 text-cafe opacity-[0.04] md:block">
        <Monograma className="w-full" />
      </Parallax>
      <Parallax distancia={45} giro={10} className="bottom-[-8%] -left-28 w-72 opacity-30 md:-left-24 md:w-[30rem]">
        <Arcos forma="circulos" className="w-full" />
      </Parallax>

      <div className="container-lp relative z-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="text-4xl leading-tight font-light md:col-span-7 md:text-6xl">
            Naturalidade é o <span className="font-semibold text-terracota">resultado</span>.
          </h2>
          <p className="text-lg leading-relaxed text-cafe-suave md:col-span-5">
            Três princípios guiam cada atendimento. O objetivo é que as pessoas percebam que você está
            ótima, sem descobrir o que você fez.
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-6 md:mt-24 lg:grid-cols-3 lg:gap-8"
          initial={reduzir ? false : "oculto"}
          whileInView="visivel"
          viewport={{ once: true, amount: 0.15 }}
        >
          {principios.map((p, i) => (
            <motion.article
              key={p.numero}
              className="relative h-full overflow-hidden rounded-3xl bg-areia p-8 md:p-10"
              custom={i}
              variants={revelar}
            >
              <span
                aria-hidden
                className="block font-display text-7xl leading-none font-light text-terracota/25 md:text-8xl"
              >
                {p.numero}
              </span>
              <h3 className="mt-6 text-2xl leading-snug font-medium md:text-3xl lg:text-2xl">{p.titulo}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-cafe-suave">{p.texto}</p>
            </motion.article>
          ))}
        </motion.div>

        {antesDepois.length > 0 && (
          <div className="mt-24 md:mt-32">
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <h3 className="text-3xl leading-tight font-light md:col-span-7 md:text-4xl">
                Antes e depois, sem <span className="font-semibold">exagero</span>.
              </h3>
              <p className="leading-relaxed text-cafe-suave md:col-span-5">
                Arraste a linha para comparar. Imagens publicadas com autorização das pacientes.
              </p>
            </div>
            <motion.ul
              className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial={reduzir ? false : "oculto"}
              whileInView="visivel"
              viewport={{ once: true, amount: 0.15 }}
            >
              {antesDepois.map((item, i) => (
                <motion.li
                  key={item.tratamento}
                  custom={i}
                  variants={revelar}
                >
                  <ComparadorAntesDepois item={item} />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )}

        {depoimentos.length > 0 && <CarrosselDepoimentos depoimentos={depoimentos} />}

        <div className="mt-16 flex flex-col gap-6 md:mt-20 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-cafe-suave">Resultados variam de pessoa para pessoa.</p>
          <WhatsAppLink secao="resultados" className={buttonClasses("terracota", "lg")}>
            Quero minha avaliação
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

function CarrosselDepoimentos({ depoimentos }: { depoimentos: Depoimento[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  ]);

  return (
    <div className="mt-20" role="region" aria-roledescription="carrossel" aria-label="Depoimentos de pacientes">
      <div className="overflow-hidden" ref={emblaRef}>
        <ul className="flex">
          {depoimentos.map((d) => (
            <li key={d.nome} className="min-w-0 shrink-0 grow-0 basis-full pr-6 md:basis-1/2 lg:basis-1/3">
              <figure className="h-full rounded-3xl bg-off p-8 shadow-suave ring-1 ring-cafe/5">
                <Quote className="size-7 text-terracota" aria-hidden />
                <blockquote className="mt-5 leading-relaxed text-cafe-suave">{d.texto}</blockquote>
                <figcaption className="mt-6 font-semibold">
                  {d.nome}
                  {d.tratamento && <span className="font-normal text-cafe-suave"> · {d.tratamento}</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          className="grid size-11 place-items-center rounded-full ring-1 ring-cafe/20 hover:ring-terracota"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          className="grid size-11 place-items-center rounded-full ring-1 ring-cafe/20 hover:ring-terracota"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
