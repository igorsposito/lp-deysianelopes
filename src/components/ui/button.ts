export type ButtonVariant = "gold" | "terracota" | "outline" | "on-dark";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-[background-color,color,border-color,box-shadow,background-position] duration-300 disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  // Principal: degradê dourado com shimmer. Texto café para contraste no claro e no escuro.
  gold: "bg-gold-shimmer text-cafe shadow-suave hover:shadow-elevada",
  terracota: "bg-terracota text-off hover:bg-terracota-hover shadow-suave",
  outline: "border border-cafe/25 text-cafe hover:border-terracota hover:text-terracota",
  // Secundário sobre fundo escuro/terracota: nunca texto escuro em fundo escuro.
  "on-dark": "border border-off/50 text-off hover:bg-off hover:text-cafe-escuro",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function buttonClasses(
  variant: ButtonVariant = "gold",
  size: ButtonSize = "md",
  extra = "",
): string {
  return [base, variants[variant], sizes[size], extra].filter(Boolean).join(" ");
}
