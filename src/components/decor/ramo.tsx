/** Ramo botânico em line art fino, para detalhes de canto. Cor via `currentColor`. */
export function Ramo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 300" fill="none" aria-hidden="true" className={className}>
      <g
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Caule */}
        <path d="M10 292 C 60 222, 110 152, 228 18" vectorEffect="non-scaling-stroke" />
        {/* Folhas com nervura central */}
        <path d="M40 250 C 15 248 3 232 5 215 C 25 218 38 232 40 250 Z" vectorEffect="non-scaling-stroke" />
        <path d="M40 250 L 12 222" vectorEffect="non-scaling-stroke" />
        <path d="M75 204 C 90 192 106 197 114 214 C 97 218 83 214 75 204 Z" vectorEffect="non-scaling-stroke" />
        <path d="M75 204 L 108 212" vectorEffect="non-scaling-stroke" />
        <path d="M108 160 C 86 156 76 141 77 122 C 95 127 107 141 108 160 Z" vectorEffect="non-scaling-stroke" />
        <path d="M108 160 L 82 128" vectorEffect="non-scaling-stroke" />
        <path d="M150 112 C 164 100 181 104 191 120 C 174 126 158 123 150 112 Z" vectorEffect="non-scaling-stroke" />
        <path d="M150 112 L 185 119" vectorEffect="non-scaling-stroke" />
        <path d="M188 64 C 174 55 168 42 169 26 C 184 33 190 47 188 64 Z" vectorEffect="non-scaling-stroke" />
        <path d="M188 64 L 172 32" vectorEffect="non-scaling-stroke" />
        {/* Pequenos botões */}
        <circle cx="132" cy="150" r="3" vectorEffect="non-scaling-stroke" />
        <circle cx="210" cy="60" r="2.5" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}
