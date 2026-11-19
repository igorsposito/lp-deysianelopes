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
