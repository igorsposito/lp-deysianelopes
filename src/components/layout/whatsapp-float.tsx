"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function WhatsAppFloat() {
  const reduzir = useReducedMotion();

  return (
    <motion.div
      className="group fixed right-4 bottom-4 z-40 md:right-6 md:bottom-6"
      initial={reduzir ? false : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        role="tooltip"
        className="pointer-events-none absolute top-1/2 right-full mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-cafe-escuro px-4 py-2 text-sm text-off opacity-0 shadow-suave transition-opacity duration-300 group-hover:opacity-100 md:block"
      >
        Fale com a Deysiane
      </span>
      {/* Aro dourado em degradê sólido + miolo terracota */}
      <div className="bg-gold rounded-full p-[3px] shadow-elevada">
        <WhatsAppLink
          secao="flutuante"
          aria-label="Fale com a Deysiane pelo WhatsApp"
          className="relative grid size-14 place-items-center overflow-hidden rounded-full bg-terracota-grad text-off transition-transform duration-300 hover:scale-105 md:size-16"
        >
          <MessageCircle className="relative z-10 size-7" aria-hidden />
          {/* Reflexo no hover */}
          <span
            aria-hidden
            className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-off/25 transition-[left] duration-700 group-hover:left-[150%]"
          />
        </WhatsAppLink>
      </div>
    </motion.div>
  );
}
