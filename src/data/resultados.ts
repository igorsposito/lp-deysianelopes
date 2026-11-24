import type { AntesDepois } from "./types";

/**
 * Antes e depois (somente com autorização por escrito das pacientes e após confirmar as regras do COFEN).
 * Para publicar: salve as fotos em public/images/resultados/ e preencha `antes` e `depois`,
 * ex.: antes: "/images/resultados/labial-antes.jpg", depois: "/images/resultados/labial-depois.jpg".
 */
export const antesDepois: AntesDepois[] = [
  { tratamento: "Toxina botulínica" },
  { tratamento: "Preenchimento labial" },
  { tratamento: "Bioestimulador de colágeno" },
];
