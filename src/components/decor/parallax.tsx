"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Deslocamento vertical máximo em px (positivo desce ao rolar). */
  distancia?: number;
  /** Rotação extra em graus ao longo da rolagem. */
  giro?: number;
};

/** Camada decorativa com parallax leve. Parada para quem prefere menos movimento. */
export function Parallax({ children, className = "", distancia = 60, giro = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduzir = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduzir ? [0, 0] : [-distancia, distancia]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduzir ? [0, 0] : [-giro, giro]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 ${className}`}
      style={{ y, rotate }}
    >
      {children}
    </motion.div>
  );
}
