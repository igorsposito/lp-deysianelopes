"use client";

import { motion } from "motion/react";
import { Grain } from "@/components/decor/grain";
import { Monograma } from "@/components/decor/monograma";
import { Parallax } from "@/components/decor/parallax";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";

// Animação da seção: número grande entrando em scale-in.
export function UmMl() {
  return (
    <section aria-labelledby="titulo-um-ml" className="bg-terracota-grad relative isolate overflow-clip py-20 text-off md:py-28">
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
          1<span className="text-[0.4em] font-light">ml</span>
        </motion.p>

        <div className="md:col-span-7">
          <h2 id="titulo-um-ml" className="text-3xl leading-tight font-light md:text-5xl">
            Por que começar com <span className="font-semibold">1 ml?</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-off/90">
            Porque naturalidade se constrói aos poucos. A gente começa com menos, espera o produto assentar e
            reavalia junto antes de decidir se precisa de mais. Assim o resultado acompanha o seu rosto, sem
            exagero.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsAppLink secao="um-ml" className={buttonClasses("gold", "lg")}>
              Quero começar assim
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
