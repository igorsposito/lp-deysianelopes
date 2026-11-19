const cores = {
  areia: "bg-[#E9DCCB]",
  nude: "bg-[#E8CFC0]",
  terracota: "bg-[#EDC3AC]",
} as const;

type Props = {
  cor?: keyof typeof cores;
  className?: string;
  /** Atraso da animação de drift, para os blobs não se moverem juntos. */
  atraso?: string;
};

/** Forma orgânica com blur grande e drift lento. Cor sólida (sem transparent). */
export function Blob({ cor = "areia", className = "", atraso = "0s" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`animate-drift pointer-events-none absolute z-0 rounded-[42%_58%_63%_37%/45%_40%_60%_55%] blur-3xl ${cores[cor]} ${className}`}
      style={{ animationDelay: atraso }}
    />
  );
}
