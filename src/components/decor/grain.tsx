import { useId } from "react";

/** Textura de grão bem leve (feTurbulence) para as seções de contraste. */
export function Grain({ className = "opacity-[0.04]" }: { className?: string }) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 size-full ${className}`}
    >
      <filter id={id}>
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={3} stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}
