"use client";

import {
  ArrowUpRight,
  Check,
  Droplet,
  Eye,
  Layers,
  type LucideIcon,
  ScanFace,
  Smile,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Blob } from "@/components/decor/blob";
import { Parallax } from "@/components/decor/parallax";
import { Ramo } from "@/components/decor/ramo";
import { Seringa } from "@/components/decor/seringa";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import type { Tratamento } from "@/data/types";
import fotoBotox from "../../../public/images/drabotox.webp";

const icones: Record<string, LucideIcon> = {
  "toxina-botulinica": Sparkles,
  "preenchimento-labial": Smile,
  olheiras: Eye,
  "acido-hialuronico": Droplet,
  "bioestimulador-de-colageno": Layers,
  "harmonizacao-de-perfil": ScanFace,
};

const ease = [0.22, 1, 0.36, 1] as const;

// Animação da seção: stagger de cards subindo em sequência.
export function Tratamentos({ tratamentos }: { tratamentos: Tratamento[] }) {
  return (
    <section id="tratamentos" className="relative isolate overflow-clip bg-areia py-24 md:py-32">
      <Blob cor="terracota" atraso="-4s" className="-top-20 -right-24 size-80 opacity-60 md:size-[34rem]" />
      <Blob cor="nude" className="bottom-[-8%] -left-40 size-[26rem] opacity-70 md:size-[40rem]" />
      <Parallax distancia={45} className="top-[44%] -left-24 w-72 -rotate-[24deg] text-ouro-3 opacity-35 md:top-[40%] md:-left-16 md:w-[30rem]">
        <Seringa className="w-full" />
      </Parallax>
      <Parallax distancia={30} giro={-4} className="-right-8 -bottom-6 w-40 -scale-y-100 rotate-[160deg] text-ouro-3 opacity-40 md:w-72">
        <Ramo className="w-full" />
      </Parallax>

      <div className="container-lp relative z-10">
        {/* Cabeçalho dividido: texto à esquerda, arte do botox à direita */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="text-4xl leading-tight font-light md:text-5xl">
              Cada tratamento pensado para o <span className="font-semibold">seu</span> rosto.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cafe-suave">
              A indicação acontece na avaliação, e às vezes a melhor resposta é fazer menos do que você
              imaginava. Botox, por exemplo, é sobre suavizar, não congelar.
            </p>
            <WhatsAppLink
              secao="tratamento"
              extra="qual tratamento é indicado para mim"
              className={buttonClasses("terracota", "lg", "mt-9")}
            >
              Descobrir o que é indicado para mim
            </WhatsAppLink>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:col-span-5 lg:col-start-8 lg:max-w-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            {/* Moldura dourada fina deslocada atrás da arte */}
            <div aria-hidden="true" className="bg-gold absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] p-px">
              <div className="size-full rounded-[calc(2rem-1px)] bg-areia" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-elevada">
              <Image
                src={fotoBotox}
                alt="Arte com Deysiane Lopes de perfil e o texto: Botox é sobre suavizar, não congelar"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Grade regular 3 × 2 */}
        <motion.ul
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3"
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visivel: { transition: { staggerChildren: 0.1 } } }}
        >
          {tratamentos.map((t) => {
            const Icone = icones[t.slug] ?? Sparkles;
            return (
              <motion.li
                key={t.slug}
                variants={{
                  oculto: { opacity: 0, y: 40 },
                  visivel: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
              >
                <article className="group flex h-full flex-col rounded-3xl bg-off/90 p-7 shadow-suave ring-1 ring-cafe/5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-elevada">
                  <div className="flex items-center gap-4">
                    <span className="bg-gold grid size-12 shrink-0 place-items-center rounded-full p-px">
                      <span className="grid size-full place-items-center rounded-full bg-off text-terracota">
                        <Icone className="size-5" aria-hidden />
                      </span>
                    </span>
                    <h3 className="text-xl leading-snug font-medium">{t.nome}</h3>
                  </div>
                  <p className="mt-5 leading-relaxed text-cafe-suave">{t.resumo}</p>
                  <p className="mt-4 text-sm font-semibold text-cafe">{t.paraQuem}</p>
                  <ul className="mt-4 space-y-2 text-sm text-cafe-suave">
                    {t.destaques.map((d) => (
                      <li key={d} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-terracota" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppLink
                    secao="tratamento"
                    extra={t.nome.toLowerCase()}
                    className="mt-auto inline-flex items-center gap-1.5 pt-7 font-semibold text-terracota transition-colors hover:text-terracota-hover"
                  >
                    Quero saber mais
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </WhatsAppLink>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
