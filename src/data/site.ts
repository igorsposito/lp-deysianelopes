import type { NavItem, SiteInfo } from "./types";

export const site: SiteInfo = {
  nome: "Deysiane Lopes",
  profissao: "Enfermeira esteta",
  registro: "[COREN-RJ nº]",
  posicionamento: "Rejuvenescimento e Naturalidade",
  frase: "Te ajudo a conquistar autoestima através de tratamentos.",
  lema: "Entre ciência e essência, sigo evoluindo com propósito, leveza e verdade.",
  cidade: "Rio de Janeiro",
  uf: "RJ",
  whatsappNumero: "5521997176374",
  whatsappExibicao: "(21) 99717-6374",
  instagramUsuario: "@deysianelb",
  instagramUrl: "https://www.instagram.com/deysianelb",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://deysianelopes.com.br",
};

export const navegacao: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Resultados", href: "#resultados" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];
