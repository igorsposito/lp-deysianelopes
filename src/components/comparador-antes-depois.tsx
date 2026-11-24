"use client";

import { ImageIcon, MoveHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { AntesDepois } from "@/data/types";

/**
 * Card de antes e depois. Com as duas fotos, vira um comparador com divisória arrastável
 * (input range: funciona com mouse, toque e teclado). Sem fotos, mostra o molde.
 */
export function ComparadorAntesDepois({ item }: { item: AntesDepois }) {
  const [posicao, setPosicao] = useState(50);
  const { antes, depois } = item;

  return (
    <figure>
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-areia">
        {antes && depois ? (
          <>
            <Image
              src={depois}
              alt={`${item.tratamento}: depois`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - posicao}% 0 0)` }}>
              <Image
                src={antes}
                alt={`${item.tratamento}: antes`}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                className="object-cover"
              />
            </div>

            <span className="absolute top-4 left-4 text-sm font-semibold text-off drop-shadow-[0_1px_3px_rgb(43_30_24_/_0.8)]">Antes</span>
            <span className="absolute top-4 right-4 text-sm font-semibold text-off drop-shadow-[0_1px_3px_rgb(43_30_24_/_0.8)]">Depois</span>

            {/* Divisória */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0" style={{ left: `${posicao}%` }}>
              <div className="bg-gold absolute inset-y-0 -left-px w-0.5" />
              <span className="absolute top-1/2 -left-5 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-off text-cafe shadow-elevada">
                <MoveHorizontal className="size-4" />
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={posicao}
              onChange={(e) => setPosicao(Number(e.target.value))}
              aria-label={`Comparar antes e depois: ${item.tratamento}`}
              className="absolute inset-0 size-full cursor-ew-resize opacity-0"
            />
          </>
        ) : (
          <div className="absolute inset-3 grid place-items-center rounded-[1.25rem] border border-dashed border-ouro-3/60 text-center">
            <div className="px-6">
              <ImageIcon className="mx-auto size-8 text-ouro-3" aria-hidden />
              <p className="mt-4 font-display text-lg font-light text-cafe-suave">Foto antes e depois</p>
            </div>
          </div>
        )}
      </div>
      <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
        <span className="font-medium">{item.tratamento}</span>
        {item.legenda && <span className="text-sm text-cafe-suave">{item.legenda}</span>}
      </figcaption>
    </figure>
  );
}
