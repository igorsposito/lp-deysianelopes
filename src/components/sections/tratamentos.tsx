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
import { Blob } from "@/components/decor/blob";
import { Parallax } from "@/components/decor/parallax";
import { Ramo } from "@/components/decor/ramo";
import { WhatsAppLink } from "@/components/whatsapp-link";
import type { Tratamento } from "@/data/types";

const icones: Record<string, LucideIcon> = {
  "toxina-botulinica": Sparkles,
  "preenchimento-labial": Smile,
  olheiras: Eye,
  "acido-hialuronico": Droplet,
  "bioestimulador-de-colageno": Layers,
  "harmonizacao-de-perfil": ScanFace,
};

// Animação da seção: stagger de cards subindo em sequência.
export function Tratamentos({ tratamentos }: { tratamentos: Tratamento[] }) {
  return (
    <section id="tratamentos" className="relative isolate overflow-clip bg-areia py-24 md:py-32">
      <Blob cor="nude" className="bottom-[-10%] -left-40 size-[26rem] opacity-70 md:size-[40rem]" />
      <Parallax distancia={30} giro={4} className="-top-4 -right-10 w-40 rotate-[200deg] text-ouro-3 opacity-40 md:-right-6 md:w-72">
        <Ramo className="w-full" />
      </Parallax>

      <div className="container-lp relative z-10 grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl leading-tight font-light md:text-5xl">
              Cada tratamento pensado para o <span className="font-semibold">seu</span> rosto.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cafe-suave">
              A indicação acontece na avaliação, e às vezes a melhor resposta é fazer menos do que você
              imaginava.
            </p>
          </div>
        </div>

        <motion.ul
          className="grid gap-6 sm:grid-cols-2 lg:col-span-8"
          initial="oculto"
          whileInView="visivel"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visivel: { transition: { staggerChildren: 0.12 } } }}
        >
          {tratamentos.map((t, i) => {
            const Icone = icones[t.slug] ?? Sparkles;
            return (
              <motion.li
                key={t.slug}
                className={i % 2 === 1 ? "sm:translate-y-12" : ""}
                variants={{
                  oculto: { opacity: 0, y: 40 },
                  visivel: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <article className="flex h-full flex-col rounded-3xl bg-off p-7 shadow-suave transition-shadow duration-300 hover:shadow-elevada">
                  <span className="bg-gold grid size-12 place-items-center rounded-full p-px">
                    <span className="grid size-full place-items-center rounded-full bg-off text-terracota">
                      <Icone className="size-5" aria-hidden />
                    </span>
                  </span>
                  <h3 className="mt-6 text-2xl font-medium">{t.nome}</h3>
                  <p className="mt-3 leading-relaxed text-cafe-suave">{t.resumo}</p>
                  <p className="mt-4 text-sm font-semibold text-cafe">{t.paraQuem}</p>
                  <ul className="mt-5 space-y-2 text-sm text-cafe-suave">
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
                    <ArrowUpRight className="size-4" aria-hidden />
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
