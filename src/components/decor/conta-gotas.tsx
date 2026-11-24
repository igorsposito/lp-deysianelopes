/** Frasco conta-gotas de sérum em line art fino. Cor via `currentColor`. */
export function ContaGotas({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 270" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        {/* Bulbo */}
        <path d="M46 52 V 18 C 46 2, 74 2, 74 18 V 52" vectorEffect="non-scaling-stroke" />
        {/* Tampa */}
        <rect x="38" y="52" width="44" height="20" rx="4" vectorEffect="non-scaling-stroke" />
        <path d="M44 60 H 76" vectorEffect="non-scaling-stroke" />
        {/* Frasco */}
        <path
          d="M48 72 V 86 C 48 96, 20 100, 20 120 V 236 C 20 248, 28 256, 40 256 H 80 C 92 256, 100 248, 100 236 V 120 C 100 100, 72 96, 72 86 V 72"
          vectorEffect="non-scaling-stroke"
        />
        {/* Pipeta de vidro */}
        <path d="M56 72 V 206 C 56 214, 64 214, 64 206 V 72" vectorEffect="non-scaling-stroke" />
        {/* Nível do sérum */}
        <path d="M20 168 C 40 162, 80 174, 100 166" vectorEffect="non-scaling-stroke" />
        {/* Brilho do vidro */}
        <path d="M30 130 V 150" vectorEffect="non-scaling-stroke" />
        {/* Gota caindo */}
        <path
          d="M122 196 C 122 196, 132 210, 132 217 A 10 10 0 0 1 112 217 C 112 210, 122 196, 122 196 Z"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}
