"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Blob } from "@/components/decor/blob";
import { Monograma } from "@/components/decor/monograma";
import { Parallax } from "@/components/decor/parallax";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";

const ease = [0.22, 1, 0.36, 1] as const;

// Animação da seção: título linha a linha saindo de uma máscara.
const linhas = [
  <>Rejuvenescer sem</>,
  <>
    deixar de ser <span className="font-semibold text-terracota">você</span>.
  </>,
];

export function Hero() {
  return (
    <section id="inicio" className="bg-areia-grad relative isolate overflow-clip pt-28 pb-16 md:pt-32 lg:min-h-svh lg:pb-20">
      <Blob cor="terracota" className="-top-24 right-[-10%] size-80 opacity-70 md:size-[34rem]" />
      <Blob cor="nude" atraso="-9s" className="bottom-[-12%] left-[-8%] hidden size-[28rem] opacity-60 md:block" />
      <Parallax distancia={50} className="bottom-[-6%] left-[-9%] w-[22rem] text-cafe opacity-[0.05] md:w-[44rem]">
        <Monograma className="w-full" />
      </Parallax>

      <div className="container-lp relative z-10 grid items-center gap-12 lg:min-h-[calc(100svh-12rem)] lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:pr-6">
          <h1 className="text-[2.6rem] leading-[1.04] font-light sm:text-6xl xl:text-7xl">
            {linhas.map((linha, i) => (
              <span key={i} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease }}
                >
                  {linha}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-cafe-suave">
              Tratamentos de rejuvenescimento com naturalidade no Rio de Janeiro. Todo resultado começa na
              conversa.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppLink secao="hero" className={buttonClasses("gold", "lg")}>
                Agendar avaliação
              </WhatsAppLink>
              <a href="#tratamentos" className={buttonClasses("outline", "lg")}>
                Ver tratamentos
              </a>
            </div>
            <p className="mt-8 text-sm text-cafe-suave">
              Enfermeira esteta especialista em rejuvenescimento · Rio de Janeiro, RJ
            </p>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-none lg:pl-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Fio dourado deslocado atrás da foto */}
          <div aria-hidden className="border-gold absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] lg:left-6" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-areia-escura shadow-elevada lg:max-h-[72svh] lg:w-full">
            <Image
              src="/images/hero.jpg"
              alt="Deysiane Lopes, enfermeira esteta, de jaleco terracota"
              fill
              preload
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-cafe-suave transition-colors hover:text-terracota lg:block"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
