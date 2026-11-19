@AGENTS.md

# LP Deysiane Lopes · Enfermeira esteta (Ágave Lab)

Landing page de página única, 100% pt-BR. Next.js 16 (App Router, Turbopack, Cache Components), React 19, TypeScript estrito, Tailwind v4, motion, lucide-react, embla-carousel, Vercel Analytics/Speed Insights.

O briefing original está em `PROMPT-LP-DRA-DEYSIANE.md`. **As regras deste arquivo têm prioridade sobre ele em caso de conflito.**

## Cliente
- **Deysiane Lopes**, enfermeira esteta. Registro: COREN (placeholder visível `[COREN-RJ nº]` no rodapé e no Sobre até a cliente enviar). Não usar "Dra." (é enfermeira).
- Posicionamento: "Rejuvenescimento e Naturalidade". Especialista em rejuvenescimento. "Te ajudo a conquistar autoestima através de tratamentos."
- Rio de Janeiro, RJ · Instagram https://www.instagram.com/deysianelb · WhatsApp 21 99717-6374 (`5521997176374`).
- Sobre ela (texto corrido, sem bullets): 40 anos, pernambucana, criada em Rondônia, mora no Rio. Esposa e mãe, ama viajar, treinar, aprender coisas novas, pilota moto ("entre jalecos e agulhas"). Lema: "entre ciência e essência, sigo evoluindo com propósito, leveza e verdade".
- Tratamentos: toxina botulínica, preenchimento labial, tratamento de olheiras ("nem toda olheira precisa de preenchimento"), preenchimento com ácido hialurônico, bioestimulador de colágeno, harmonização de perfil/equilíbrio facial, procedimentos guiados por ultrassonografia ("o que você não vê também importa").
- Tom: próximo, leve, bem-humorado, foco em naturalidade ("resultado que a gente não precisa explicar", "todo resultado começa na conversa", "por que começar com 1 ml?"). Sem promessa de resultado.

## Conformidade (COFEN)
- **Sem antes e depois com fotos de pacientes** até confirmação das regras do COFEN. A seção Resultados usa depoimentos em texto + filosofia de naturalidade.
- Sem promessas de resultado, sem preços.

## Identidade visual
- Base clara: off-white `#FAF7F2`, areia/nude `#EFE6DC`, texto café `#2B211C`.
- Destaque: terracota `#B4532A` (hover `#9A4321`).
- Dourado em degradê brilhante **só** em botões principais, linhas finas e detalhes: `linear-gradient(135deg, #A67C2E, #F3D98B, #B8892F)` com shimmer no hover (utilitários `bg-gold`, `btn-gold`).
- Pelo menos 2 seções de contraste: uma fundo terracota com texto claro, uma fundo café escuro `#2B1E18`. Nelas, botões e textos nunca podem sumir no fundo (usar variantes `on-dark`).
- **Somente fontes sem serifa** (Plus Jakarta Sans para títulos, Manrope para texto).

## Regras de design e layout (obrigatórias)
- Nunca fonte serifada.
- **PROIBIDO**: badges/pills, eyebrows (textinho acima do título), rótulos pequenos acima de títulos, linhas/fios/tracinhos decorativos acima ou abaixo de títulos, **travessões no texto (— e –)**, textos genéricos de template.
- **Nunca título centralizado no topo da seção** e nunca todas as seções com a mesma composição. Variar: título à esquerda com imagem à direita, grid assimétrico, texto sobre imagem, split 60/40, cards deslocados, número grande como elemento gráfico, título lateral sticky. Exceção: o CTA final pode centralizar.
- Contraste de peso na mesma frase (ex.: 300 + 500) e no máximo 1 palavra destacada por título.
- **Cada seção com uma animação diferente** (reveal com máscara, parallax suave, stagger de cards, slide lateral, contador, scale-in de imagem, texto linha a linha...). Usar `motion/react` e respeitar `prefers-reduced-motion`.
- Degradês sempre com cores sólidas (nunca `transparent`, que gera faixa cinza), registrados com `@utility` + `background-image` e `background-color` de fallback.
- Botões secundários sobre fundo escuro com variante `on-dark` (nunca texto escuro em fundo escuro).
- Mobile-first, muito respiro, cantos arredondados suaves, sombras sutis, animações discretas.

## WhatsApp (regra fixa)
- Todo link de WhatsApp vem de `getWhatsAppLink(secao, extra?)` em `src/lib/whatsapp.ts`: `wa.me` + mensagem com `encodeURIComponent`, sempre começando com **"Olá, vim do site"** e citando a seção de origem. Nunca montar mensagem no JSX.
- No JSX, usar o componente `WhatsAppLink` (dispara o evento `whatsapp_click` com a seção).

## Dados e imagens
- Conteúdo em arquivos TS tipados em `src/data/`, lido por funções em `src/lib/data/` (pronto para virar CMS).
- Imagens em `public/images/` com nomes descritivos (`hero.jpg`, `sobre.jpg`, `jaleco.jpg`, `consultorio.jpg`, `procedimento.jpg`). Placeholders gerados por `npm run placeholders`, que **nunca sobrescreve arquivo existente**.
- `next/image`: usar `preload` (não `priority`). Sem `new Date()`/`Math.random()` em Server Components (Cache Components): usar Client Component.

## Fluxo de trabalho
- Modo econômico: sem prints/screenshots a não ser que pedido; resumos curtos.
- Ao fim de cada etapa: `npm run lint` + `npm run build` sem erros, commit (`feat:`/`fix:`/`style:`) e push (quando houver remote).
- Manter `README.md` (pt-BR), `.env.example` e `PENDENCIAS.md` atualizados.
