import { useId } from "react";

// Cadeia de anéis no estilo da molécula de ácido hialurônico (line art).
const R = 34;
const aneis = [
  { x: 60, y: 90 },
  { x: 170, y: 130 },
  { x: 280, y: 90 },
  { x: 390, y: 130 },
];

function vertices(cx: number, cy: number) {
  return Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 180) * (60 * k - 30);
    return [cx + R * Math.cos(a), cy + R * Math.sin(a)] as const;
  });
}

function hexagono(cx: number, cy: number) {
  const v = vertices(cx, cy);
  return `M${v.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(" L")} Z`;
}

/** Molécula em linha fina dourada. */
export function Molecula({ className = "" }: { className?: string }) {
  const id = useId();

  // Ligações entre anéis passando por um átomo (círculo pequeno).
  // Vértices: 0 sup. direito, 1 inf. direito, 2 base, 3 inf. esquerdo, 4 sup. esquerdo, 5 topo.
  const ligacoes = aneis.slice(0, -1).map((a, i) => {
    const b = aneis[i + 1];
    const desce = b.y > a.y;
    const [x1, y1] = vertices(a.x, a.y)[desce ? 1 : 0];
    const [x2, y2] = vertices(b.x, b.y)[desce ? 4 : 3];
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    return { x1, y1, x2, y2, mx, my };
  });

  // Grupos laterais (traço + círculo): anéis altos para cima, baixos para baixo.
  const laterais = aneis.map((a, i) => {
    const [vx, vy] = vertices(a.x, a.y)[i % 2 === 0 ? 5 : 2];
    const dir = i % 2 === 0 ? -1 : 1;
    return { vx, vy, ex: vx, ey: vy + dir * 26 };
  });

  return (
    <svg viewBox="0 0 450 220" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#A67C2E" />
          <stop offset="0.5" stopColor="#F3D98B" />
          <stop offset="1" stopColor="#B8892F" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${id})`} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
        {aneis.map((a) => (
          <path key={a.x} d={hexagono(a.x, a.y)} vectorEffect="non-scaling-stroke" />
        ))}
        {ligacoes.map((l) => (
          <g key={l.mx}>
            <path d={`M${l.x1} ${l.y1} L${l.mx} ${l.my} L${l.x2} ${l.y2}`} vectorEffect="non-scaling-stroke" />
            <circle cx={l.mx} cy={l.my} r={5} fill="#FAF7F2" vectorEffect="non-scaling-stroke" />
          </g>
        ))}
        {laterais.map((l) => (
          <g key={l.vx}>
            <path d={`M${l.vx} ${l.vy} L${l.ex} ${l.ey}`} vectorEffect="non-scaling-stroke" />
            <circle cx={l.ex} cy={l.ey + (l.ey > l.vy ? 5 : -5)} r={5} vectorEffect="non-scaling-stroke" />
          </g>
        ))}
      </g>
    </svg>
  );
}
