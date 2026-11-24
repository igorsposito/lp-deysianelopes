import { depoimentos } from "@/data/depoimentos";
import { perguntas } from "@/data/faq";
import { antesDepois } from "@/data/resultados";
import { navegacao, site } from "@/data/site";
import { tratamentos } from "@/data/tratamentos";
import type { AntesDepois, Depoimento, NavItem, Pergunta, SiteInfo, Tratamento } from "@/data/types";

// Camada de leitura: hoje lê arquivos TS; no futuro pode buscar de um CMS.
export function getSite(): SiteInfo {
  return site;
}

export function getNavegacao(): NavItem[] {
  return navegacao;
}

export function getTratamentos(): Tratamento[] {
  return tratamentos;
}

export function getTratamento(slug: string): Tratamento | undefined {
  return tratamentos.find((t) => t.slug === slug);
}

export function getDepoimentos(): Depoimento[] {
  return depoimentos;
}

export function getPerguntas(): Pergunta[] {
  return perguntas;
}

export function getAntesDepois(): AntesDepois[] {
  return antesDepois;
}
