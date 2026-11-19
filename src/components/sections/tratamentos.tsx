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
    <section id="tratamentos" className="bg-areia py-24 md:py-32">
      <div className="container-lp grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl leading-tight font-light md:text-5xl">
              Tratamentos para <span className="font-semibold">rejuvenescer</span> sem deixar de ser você.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cafe-suave">
              Cada rosto pede um plano. A indicação acontece na avaliação, e às vezes a melhor resposta é
              fazer menos do que você imaginava.
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
