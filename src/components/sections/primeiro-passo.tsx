"use client";

import { motion } from "motion/react";
import { Grain } from "@/components/decor/grain";
import { Monograma } from "@/components/decor/monograma";
import { Parallax } from "@/components/decor/parallax";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";

// Animação da seção: "1º" grande entrando em scale-in.
export function PrimeiroPasso() {
  return (
    <section
      aria-labelledby="titulo-primeiro-passo"
      className="bg-terracota-grad relative isolate overflow-clip py-20 text-off md:py-28"
    >
      <Grain />
      <Parallax distancia={40} className="right-[-18%] bottom-[-30%] w-[22rem] rotate-[8deg] text-ouro-2 opacity-[0.08] md:right-[-6%] md:w-[36rem]">
        <Monograma className="w-full" />
      </Parallax>

      <div className="container-lp relative z-10 grid items-center gap-10 md:grid-cols-12">
        <motion.p
          aria-hidden
          className="font-display text-[8rem] leading-[0.85] font-extralight tracking-tighter text-off/90 md:col-span-5 md:text-[12rem] lg:text-[14rem]"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          1<span className="align-top text-[0.4em] font-light">º</span>
        </motion.p>

        <div className="md:col-span-7">
          <h2 id="titulo-primeiro-passo" className="text-3xl leading-tight font-light md:text-5xl">
            Você merece se olhar no espelho e se <span className="font-semibold">reconhecer</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-off/90">
            E o primeiro passo é só uma conversa. Na avaliação você conta o que te incomoda, entende as opções
            e decide no seu tempo, sem pressão. Muita gente descobre que precisa de bem menos do que imaginava.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsAppLink secao="primeiro-passo" className={buttonClasses("gold", "lg")}>
              Quero dar o primeiro passo
            </WhatsAppLink>
            <a href="#duvidas" className={buttonClasses("on-dark", "lg")}>
              Ver dúvidas frequentes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
