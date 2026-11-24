"use client";

import { MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { InstagramIcon } from "@/components/icons/instagram";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import type { SiteInfo } from "@/data/types";
import fotoContato from "../../../public/images/contatocta.webp";

// Animação da seção: scale-in da imagem (zoom suave de fora para dentro).
export function Contato({ site }: { site: SiteInfo }) {
  return (
    <section id="contato" className="bg-off py-24 md:py-32">
      <div className="container-lp grid items-center lg:grid-cols-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-areia-escura lg:col-span-7 lg:col-start-6 lg:row-start-1">
          <motion.div
            className="relative aspect-[4/5] sm:aspect-square"
            initial={{ scale: 1.18 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={fotoContato}
              alt="Deysiane Lopes no consultório, respondendo mensagens no notebook"
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 55vw, 92vw"
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        {/* Card sobreposto à foto no desktop */}
        <div className="relative z-10 -mt-16 mx-4 rounded-3xl bg-off p-8 shadow-elevada md:mx-10 md:p-12 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:mx-0 lg:mt-0">
          <h2 className="text-4xl leading-tight font-light md:text-5xl">
            Vamos <span className="font-semibold text-terracota">conversar</span>?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cafe-suave">
            Me chama no WhatsApp para agendar sua avaliação. A gente combina o melhor dia e horário para você.
          </p>
          <ul className="mt-8 space-y-4">
            <li>
              <WhatsAppLink secao="contato" className="inline-flex items-center gap-3 font-medium hover:text-terracota">
                <MessageCircle className="size-5 text-terracota" aria-hidden />
                {site.whatsappExibicao}
              </WhatsAppLink>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-medium hover:text-terracota"
              >
                <InstagramIcon className="size-5 text-terracota" />
                {site.instagramUsuario}
              </a>
            </li>
            <li className="inline-flex items-center gap-3 font-medium">
              <MapPin className="size-5 text-terracota" aria-hidden />
              {site.cidade}, {site.uf}
            </li>
          </ul>
          <WhatsAppLink secao="contato" className={buttonClasses("gold", "lg", "mt-10")}>
            Agendar pelo WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
