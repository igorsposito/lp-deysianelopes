"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Monograma } from "@/components/decor/monograma";
import { Parallax } from "@/components/decor/parallax";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import fotoHero from "../../../public/images/herosection.png";

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
    <section
      id="inicio"
      className="relative isolate flex min-h-svh items-end overflow-clip bg-areia pt-28 pb-14 md:pb-20 lg:items-center lg:pb-16"
    >
      {/* Foto em tela cheia. Ela fica à direita; o lado esquerdo claro recebe o texto. */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={fotoHero}
          alt="Deysiane Lopes, de terno preto, no consultório"
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          quality={80}
          className="object-cover object-[80%_15%] lg:object-[70%_20%]"
        />
      </motion.div>
      {/* Véu claro para leitura: de baixo no celular, da esquerda no desktop */}
      <div aria-hidden="true" className="veil-baixo lg:veil-esquerda pointer-events-none absolute inset-0 z-0" />

      <Parallax distancia={40} className="bottom-[-8%] left-[-10%] hidden w-[40rem] text-cafe opacity-[0.05] lg:block">
        <Monograma className="w-full" />
      </Parallax>

      {/* Recuo proporcional à tela: entre a borda e o container centralizado */}
      <div className="relative z-10 w-full px-5 md:px-10 lg:pr-10 lg:pl-[7vw] 2xl:pl-[9vw]">
        <div className="max-w-xl lg:max-w-[40rem]">
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
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cafe-suave md:mt-7">
              Naturalidade não é fazer pouco. É fazer o certo, no lugar certo, na medida do seu rosto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-9">
              <WhatsAppLink secao="hero" className={buttonClasses("gold", "lg")}>
                Agendar minha avaliação
              </WhatsAppLink>
              <a href="#tratamentos" className={buttonClasses("outline", "lg", "bg-off/60 backdrop-blur-sm")}>
                Ver tratamentos
              </a>
            </div>
            <p className="mt-7 text-sm text-cafe-suave md:mt-8">
              Avaliação individual · Procedimentos guiados por ultrassom · Foco em naturalidade
            </p>
          </motion.div>
        </div>
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
