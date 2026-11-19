type Props = {
  tom?: "claro" | "escuro";
  className?: string;
};

/** Logo tipográfico provisório (sem serifa) até a cliente enviar a marca oficial. */
export function Logo({ tom = "escuro", className = "" }: Props) {
  const cor = tom === "escuro" ? "text-cafe" : "text-off";
  return (
    <span className={`font-display leading-none ${cor} ${className}`}>
      <span className="block text-xl font-light tracking-tight md:text-2xl">
        Deysiane <span className="font-semibold">Lopes</span>
      </span>
    </span>
  );
}
