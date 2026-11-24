export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SiteInfo = {
  nome: string;
  profissao: string;
  registro: string;
  posicionamento: string;
  frase: string;
  lema: string;
  cidade: string;
  uf: string;
  whatsappNumero: string;
  whatsappExibicao: string;
  instagramUsuario: string;
  instagramUrl: string;
  siteUrl: string;
};

export type Tratamento = {
  slug: string;
  nome: string;
  resumo: string;
  paraQuem: string;
  destaques: string[];
  imagem: string;
};

export type Depoimento = {
  nome: string;
  texto: string;
  tratamento?: string;
};

export type Pergunta = {
  pergunta: string;
  resposta: string;
};

export type AntesDepois = {
  tratamento: string;
  /** Ex.: "1 sessão", "2 sessões com intervalo de 30 dias". */
  legenda?: string;
  /** Caminhos em public/images/resultados/. Sem as duas fotos, o card mostra o molde. */
  antes?: string;
  depois?: string;
};
