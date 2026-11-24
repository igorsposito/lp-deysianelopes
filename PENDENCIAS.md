# Pendências

## Depende da cliente
- [ ] Número do COREN-RJ (hoje aparece `[COREN-RJ nº]` no rodapé; também vai no Sobre).
- [ ] Fotos originais em alta resolução (não usar prints do Instagram):
  - ~~hero~~: recebida (`herosection.png`, usada em tela cheia no hero).
  - ~~sobre~~: recebida (`aboutsection.webp`, jaleco terracota). Se houver versão em resolução maior (828 px de largura hoje), trocar mantendo o nome.
  - ~~segurança~~: recebida (`procedimentos.webp`, ela atendendo um paciente). Confirmar que o paciente autorizou o uso da imagem.
  - ~~contato~~: recebida (`contatocta.webp`, ela no notebook).
  - `procedimento.jpg`: ela atendendo ou aplicando, de preferência com o ultrassom (horizontal, mín. 1200×900).
- [ ] Logo oficial (se houver). Hoje o logo é tipográfico.
- [ ] Endereço do consultório e horários de atendimento (seção Contato, mapa e JSON-LD).
- [ ] Fotos de antes e depois (só com autorização escrita das pacientes e após confirmar regras do COFEN). Salvar em `public/images/resultados/` e preencher `src/data/resultados.ts` (tratamento, legenda, antes, depois).
- [ ] Depoimentos reais em texto, com autorização das pacientes (`src/data/depoimentos.ts`).
- [ ] Validar respostas do FAQ (`src/data/faq.ts`) e textos dos tratamentos.
- [ ] Formação e especializações para a seção Sobre.

## Depende do dev / Ágave Lab
- [ ] Logo da Ágave Lab em `public/brand/logo-agave.png` (hoje é placeholder em texto).
- [ ] Confirmar regras do COFEN sobre antes e depois. Até lá, sem fotos de pacientes.
- [ ] Domínio final em `NEXT_PUBLIC_SITE_URL`.
- [ ] Criar repositório remoto e configurar push/deploy na Vercel.

## Antes de publicar
- [ ] Trocar todos os placeholders de imagem.
- [ ] Remover `[COREN-RJ nº]`.
- [ ] OG image 1200×630, favicon, sitemap, robots, JSON-LD (etapa 4).
- [ ] Revisão mobile completa.
