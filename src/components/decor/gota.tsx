/** Gotinha em contorno fino. Cor via `currentColor`. */
export function Gota({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 52" fill="none" aria-hidden="true" className={className}>
      <path
        d="M20 3 C 20 3, 36 24, 36 33 A 16 16 0 0 1 4 33 C 4 24, 20 3, 20 3 Z"
        stroke="currentColor"
        strokeWidth={1.2}
        vectorEffect="non-scaling-stroke"
      />
      <path d="M12 32 A 8 8 0 0 0 17 40" stroke="currentColor" strokeWidth={1} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
