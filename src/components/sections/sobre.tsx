"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Blob } from "@/components/decor/blob";
import { Parallax } from "@/components/decor/parallax";
import { ContaGotas } from "@/components/decor/conta-gotas";
import { Gota } from "@/components/decor/gota";
import { Molecula } from "@/components/decor/molecula";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import type { SiteInfo } from "@/data/types";
import fotoSobre from "../../../public/images/aboutsection.webp";

// Animação da seção: parallax suave na foto.
export function Sobre({ site }: { site: SiteInfo }) {
  const ref = useRef<HTMLElement>(null);
  const reduzir = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduzir ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section id="sobre" ref={ref} className="relative isolate overflow-clip bg-off py-24 md:py-32">
      <Blob cor="areia" className="top-[12%] -left-32 size-96 opacity-80 md:size-[36rem]" />
      {/* Elementos de estética em line art dourada: molécula de ácido hialurônico, sérum e gotas */}
      <Parallax distancia={35} giro={3} className="top-6 -right-24 w-72 -rotate-6 opacity-35 md:top-10 md:-right-10 md:w-[32rem] md:opacity-40">
        <Molecula className="w-full" />
      </Parallax>
      <Parallax distancia={55} className="right-[4%] bottom-10 hidden w-28 rotate-[10deg] text-ouro-3 opacity-40 lg:block xl:w-32">
        <ContaGotas className="w-full" />
      </Parallax>
      <Parallax distancia={80} className="top-[38%] right-[30%] hidden w-7 text-ouro-3 opacity-45 lg:block">
        <div className="animate-drift">
          <Gota className="w-full" />
        </div>
      </Parallax>
      <Parallax distancia={110} className="right-[14%] bottom-[34%] w-5 text-ouro-3 opacity-40 md:w-6">
        <div className="animate-drift" style={{ animationDelay: "-8s" }}>
          <Gota className="w-full" />
        </div>
      </Parallax>

      <div className="container-lp relative z-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-areia-escura">
            <motion.div className="absolute -inset-y-[10%] inset-x-0" style={{ y }}>
              <Image
                src={fotoSobre}
                alt="Deysiane Lopes sorrindo, de jaleco terracota, no consultório"
                placeholder="blur"
                fill
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-cover object-[50%_45%]"
              />
            </motion.div>
          </div>
          <p className="absolute -bottom-6 left-6 rounded-2xl bg-cafe-escuro px-5 py-4 text-sm text-off shadow-elevada md:left-auto md:-right-6">
            {site.profissao} · {site.registro}
          </p>
        </div>

        <div className="lg:col-span-7">
          <h2 className="text-4xl leading-tight font-light md:text-5xl">
            Prazer, eu sou a <span className="font-semibold text-terracota">Deysiane</span>.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-cafe-suave">
            <p>
              Tenho 40 anos, sou pernambucana, cresci em Rondônia e hoje vivo no Rio de Janeiro. Sou esposa,
              mãe e enfermeira esteta especialista em rejuvenescimento. Fora do consultório, você me encontra
              viajando, treinando, aprendendo alguma coisa nova ou em cima da minha moto. A vida acontece
              entre jalecos e agulhas, mas não só neles.
            </p>
            <p>
              No atendimento, acredito que todo resultado começa na conversa. Quero
              entender o que te incomoda e o que você espera, para cuidar da sua autoestima sem mudar quem
              você é.
            </p>
          </div>
          <blockquote className="mt-10 border-l-2 border-terracota pl-6 font-display text-2xl leading-snug font-light text-cafe md:text-3xl">
            {site.lema}
          </blockquote>
          <WhatsAppLink secao="sobre" className={buttonClasses("terracota", "lg", "mt-10")}>
            Agendar uma conversa
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
