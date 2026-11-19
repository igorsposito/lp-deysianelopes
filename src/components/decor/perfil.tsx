"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";

/**
 * Perfil feminino em traço único contínuo (desenho original).
 * Linha fina dourada que se desenha uma vez ao entrar na tela.
 */
export function Perfil({ className = "" }: { className?: string }) {
  const id = useId();
  const reduzir = useReducedMotion();

  return (
    <svg viewBox="0 0 320 420" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A67C2E" />
          <stop offset="0.5" stopColor="#F3D98B" />
          <stop offset="1" stopColor="#B8892F" />
        </linearGradient>
      </defs>
      <motion.path
        d="M36 410 C 62 352, 28 300, 52 238
           C 70 190, 40 132, 82 82
           C 122 34, 200 26, 236 70
           C 252 92, 254 118, 248 138
           C 246 148, 252 156, 256 164
           L 278 208
           C 282 216, 274 222, 264 222
           C 268 230, 270 236, 264 240
           C 272 246, 268 254, 260 257
           C 264 270, 258 282, 246 290
           C 232 298, 212 298, 204 304
           C 200 330, 206 366, 214 410
           C 160 404, 120 350, 132 296
           C 142 250, 104 214, 118 168
           C 128 134, 158 112, 196 104"
        stroke={`url(#${id})`}
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={reduzir ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 3.2, ease: "easeInOut" }}
      />
    </svg>
  );
}
