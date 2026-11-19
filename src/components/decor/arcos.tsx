import { useId } from "react";

type Props = {
  /** "gota": gotas concêntricas (ácido hialurônico). "circulos": círculos concêntricos. */
  forma?: "gota" | "circulos";
  className?: string;
};

const escalas = [1, 0.8, 0.6, 0.4];

/** Linhas finas douradas concêntricas. */
export function Arcos({ forma = "circulos", className = "" }: Props) {
  const id = useId();

  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A67C2E" />
          <stop offset="0.5" stopColor="#F3D98B" />
          <stop offset="1" stopColor="#B8892F" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth={1}>
        {forma === "circulos"
          ? [190, 150, 110, 70, 30].map((r) => (
              <circle key={r} cx="200" cy="200" r={r} vectorEffect="non-scaling-stroke" />
            ))
          : escalas.map((s) => (
              <path
                key={s}
                transform={`translate(200 250) scale(${s}) translate(-200 -250)`}
                d="M200 20 C 200 20, 330 175, 330 250 A130 130 0 0 1 70 250 C 70 175, 200 20, 200 20 Z"
                vectorEffect="non-scaling-stroke"
              />
            ))}
      </g>
    </svg>
  );
}
