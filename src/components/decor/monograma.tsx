/** Monograma "DL" geométrico em contorno fino (sem preenchimento). Cor via `currentColor`. */
export function Monograma({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 270 210" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth={1.25} vectorEffect="non-scaling-stroke" strokeLinejoin="round">
        {/* D com contorno duplo */}
        <path d="M10 10 H62 A95 95 0 0 1 62 200 H10 Z" vectorEffect="non-scaling-stroke" />
        <path d="M30 30 H62 A75 75 0 0 1 62 180 H30 Z" vectorEffect="non-scaling-stroke" />
        {/* L com contorno duplo */}
        <path d="M168 10 H188 V180 H260 V200 H168 Z" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}
