import { site } from "@/data/site";

export type SecaoWhatsApp =
  | "hero"
  | "header"
  | "tratamento"
  | "sobre"
  | "ultrassom"
  | "resultados"
  | "um-ml"
  | "faq"
  | "contato"
  | "cta-final"
  | "flutuante"
  | "rodape";

const mensagens: Record<SecaoWhatsApp, (extra?: string) => string> = {
  hero: () => "Olá, vim do site e quero agendar minha avaliação com a Deysiane.",
  header: () => "Olá, vim do site e quero agendar minha avaliação.",
  tratamento: (nome) =>
    `Olá, vim do site e quero saber mais sobre ${nome ?? "os tratamentos"}.`,
  sobre: () => "Olá, vim do site, conheci sua história e quero agendar uma conversa.",
  ultrassom: () =>
    "Olá, vim do site e quero saber como funciona o procedimento guiado por ultrassom.",
  resultados: () =>
    "Olá, vim do site, li os depoimentos e quero agendar minha avaliação.",
  "um-ml": () =>
    "Olá, vim do site, li sobre começar com 1 ml e quero agendar minha avaliação.",
  faq: () => "Olá, vim do site, li as perguntas frequentes e ainda tenho uma dúvida.",
  contato: () => "Olá, vim do site e quero falar com a Deysiane.",
  "cta-final": () => "Olá, vim do site e quero dar o primeiro passo com uma avaliação.",
  flutuante: () => "Olá, vim do site e gostaria de tirar uma dúvida.",
  rodape: () => "Olá, vim do site e quero agendar minha avaliação.",
};

export function getWhatsAppMessage(secao: SecaoWhatsApp, extra?: string): string {
  return mensagens[secao](extra);
}

/** Link wa.me com mensagem pré-preenchida, sempre começando com "Olá, vim do site". */
export function getWhatsAppLink(secao: SecaoWhatsApp, extra?: string): string {
  const texto = encodeURIComponent(getWhatsAppMessage(secao, extra));
  return `https://wa.me/${site.whatsappNumero}?text=${texto}`;
}
