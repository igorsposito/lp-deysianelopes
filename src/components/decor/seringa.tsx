/** Seringa em line art fino, com graduação e uma gota na ponta. Cor via `currentColor`. */
export function Seringa({ className = "" }: { className?: string }) {
  const marcas = [92, 106, 120, 134, 148, 162, 176, 190];

  return (
    <svg viewBox="0 0 310 80" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        {/* Apoio do polegar e haste do êmbolo */}
        <rect x="4" y="18" width="7" height="34" rx="2" vectorEffect="non-scaling-stroke" />
        <path d="M11 35 H 74" vectorEffect="non-scaling-stroke" />
        {/* Aletas */}
        <rect x="62" y="12" width="7" height="46" rx="2" vectorEffect="non-scaling-stroke" />
        {/* Corpo */}
        <rect x="69" y="23" width="150" height="24" rx="4" vectorEffect="non-scaling-stroke" />
        {/* Borracha do êmbolo */}
        <path d="M74 25 V 45 M 82 25 V 45" vectorEffect="non-scaling-stroke" />
        {/* Graduação */}
        {marcas.map((x, i) => (
          <path key={x} d={`M${x} 23 V ${i % 2 === 0 ? 31 : 28}`} vectorEffect="non-scaling-stroke" />
        ))}
        {/* Conector e agulha */}
        <path d="M219 29 H 234 L 242 33 V 37 L 234 41 H 219" vectorEffect="non-scaling-stroke" />
        <path d="M242 35 H 296" vectorEffect="non-scaling-stroke" />
        {/* Gota na ponta */}
        <path
          d="M300 46 C 300 46, 306 54, 306 58 A 6 6 0 0 1 294 58 C 294 54, 300 46, 300 46 Z"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}
