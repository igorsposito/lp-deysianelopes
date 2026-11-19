# PROJETO: Landing page — Dra. Deysiane · Estética (Ágave Lab)

Você é um dev sênior front-end (Next.js/React/TypeScript) e designer de UI. Vai construir uma **landing page de página única, 100% em português (pt-BR)**, nesta pasta (projeto já criado com `create-next-app`).

Antes de começar, leia o `package.json` e use as APIs **das versões instaladas**. Se existir `AGENTS.md` ou documentação em `node_modules/next/dist/docs`, siga-a. Nada de API antiga (`middleware.ts` → `proxy.ts`; `params` assíncronos; `priority` → `preload` no `next/image`).

---

## 1. Cliente
- **Dra. Deysiane** · [profissão: biomédica esteta / médica / enfermeira esteta / dentista] · [registro: CRBM/CRM/COREN/CRO nº ____]
- Clínica: [nome] · [cidade/UF] · [endereço]
- WhatsApp: [55DDDNÚMERO] · Instagram: [@usuario]
- Público: [ex.: mulheres de 25 a 55 anos que buscam naturalidade]
- Tom: elegante, acolhedor, seguro e profissional. Naturalidade acima de exagero.

## 2. Stack (a mesma do projeto Chrys Nicacio, sem i18n e sem loja)
- **Next.js 16** (App Router, Turbopack, Server Components por padrão), **React 19**, **TypeScript estrito**, **Tailwind CSS v4** (tema via `@theme`, utilitários customizados via `@utility`)
- `embla-carousel-react` + `embla-carousel-autoplay` + `embla-carousel-fade` (carrosséis)
- `motion` (animações, `motion/react`), `lucide-react` (ícones)
- `@vercel/analytics` + `@vercel/speed-insights`
- `next/image`, `next/font` (fontes servidas localmente)
- **Sem next-intl** (só pt-BR), **sem carrinho, sem backend**. Conteúdo em arquivos TS tipados em `src/data/`, lidos por funções em `src/lib/data/` (pronto para virar CMS no futuro).

## 3. Regras de design (gravar também no CLAUDE.md)
- **Nunca fonte serifada**, exceto no nome/logo da marca se a identidade pedir.
- **Nunca eyebrow, badge ou rótulo pequeno acima de títulos.** Nunca linhas/fios/travessões decorativos acima ou abaixo de títulos.
- **Nunca título centralizado no topo da seção.** Variar entre: título dividido (título à esquerda, texto + ação à direita), título lateral fixo (sticky) com conteúdo ao lado, título dentro da grade, título integrado ao lado da foto. Exceção: CTA final pode centralizar.
- Contraste de peso na mesma frase (ex.: 300 + 500) e no máximo 1 palavra destacada por título.
- Degradês sempre registrados com `@utility` + `background-image` e uma `background-color` de fallback (para nada ficar transparente).
- Botões secundários sobre fundo escuro com variante `on-dark` (nunca texto escuro em fundo escuro).
- Mobile-first, muito respiro, cantos arredondados suaves, sombras sutis, animações discretas, `prefers-reduced-motion` respeitado.
- Paleta e fontes: **[definir pela identidade da cliente — logo/Instagram]**. Sugestão inicial até recebermos: branco predominante, um tom principal da marca, um neutro quente (nude/areia) e um acento metálico (rosé/champanhe) em degradê.

## 4. Seções (página única, menu com âncoras e rolagem suave)
1. **Header** fixo: logo, menu (Início, Sobre, Procedimentos, Resultados, Depoimentos, Dúvidas, Contato), botão "Agendar avaliação" (WhatsApp). Alto (~96px) com respiro; encolhe ao rolar (~72px) com fundo branco e sombra. Menu mobile em gaveta.
2. **Hero** (100svh): foto da Dra. com degradê suave para o lado do texto (máscara, sem corte reto), título forte, subtítulo, CTA principal (WhatsApp) + secundário ("Ver procedimentos"), linha de prova social (ex.: Google 5,0 · X avaliações, ou "+X pacientes atendidas"). Indicador sutil de rolar.
3. **Sobre**: foto + história, formação, registro profissional visível, números (anos de experiência, pacientes, especializações), frase-assinatura em destaque, CTA.
4. **Procedimentos**: cards com foto/ícone, nome, para quem é, benefícios em 2–3 bullets, duração e "Saiba mais" que abre um modal/drawer com detalhes (o que é, como funciona, resultado esperado, cuidados) e CTA WhatsApp com o nome do procedimento. Filtro por categoria se houver muitos (ex.: Facial, Corporal, Harmonização).
5. **Resultados**: antes/depois com **slider de comparação arrastável** (arrastar a divisória), legenda com procedimento e nº de sessões, aviso discreto "Resultados variam de pessoa para pessoa". Só fotos com autorização das pacientes.
6. **Depoimentos**: estilo avaliações do Google (bolinha colorida com inicial, nome, 5 estrelas, "G" do Google, texto original, "Ler mais"), cabeçalho com nota e total, botões "Ver todas no Google" e "Avaliar no Google". Carrossel.
7. **FAQ**: accordion acessível, 8–10 perguntas (dói? quanto tempo dura? quando vejo resultado? posso voltar à rotina? como agendar? formas de pagamento?), + JSON-LD `FAQPage`.
8. **Contato**: WhatsApp, Instagram, endereço com mapa (iframe do Google Maps com carregamento sob demanda), horários de atendimento, botão "Como chegar".
9. **CTA final**: bloco com degradê da marca, título, texto curto, botão WhatsApp.
10. **Footer**: logo, frase, links das seções, contato, Instagram, registro profissional, política de privacidade, © ano, e à direita **"Desenvolvido por" + logo `public/brand/logo-agave.png` → https://www.agavelab.com.br** (nova aba).
11. **Botão flutuante de WhatsApp** nas cores da marca (degradê, aro metálico, reflexo no hover, tooltip "Fale com a Dra. Deysiane").

## 5. WhatsApp contextual (regra fixa)
Todo CTA usa `getWhatsAppLink(topic, extra?)` em `src/lib/whatsapp/` com mensagem pré-preenchida começando com **"Olá, Dra. Deysiane! Vim pelo seu site e…"** e citando o assunto da seção (agendar avaliação, procedimento {nome}, resultados, dúvida do FAQ, contato). Nunca montar mensagem no JSX.

## 6. SEO e extras
- `metadata` completa (title ≤ 60, description ≤ 155), `metadataBase`, OG estática 1200×630 em `public/images/og/og.jpg`, favicon da logo, `sitemap.ts`, `robots.ts`.
- JSON-LD `LocalBusiness`/`MedicalBusiness` (nome, endereço, telefone, horário, geo, sameAs Instagram) + `FAQPage`.
- Banner de cookies simples; página `/politica-de-privacidade`.
- Vercel Analytics com eventos `whatsapp_click` (com tópico) e `procedure_open`.
- Acessibilidade: semântica, alt, foco visível, teclado no accordion, no slider antes/depois e nos carrosséis.

## 7. Imagens
- `public/images/hero/`, `about/`, `procedimentos/{slug}.jpg`, `resultados/{slug}-antes.jpg` / `-depois.jpg`, `backgrounds/`, `brand/logo.png`, `brand/logoicon.png`, `brand/logo-agave.png`.
- Até chegarem as reais: placeholders elegantes gerados por script que **nunca sobrescreve arquivo existente**.

## 8. Fluxo de trabalho
- Modo econômico: **sem prints/screenshots** a não ser que eu peça; resumos curtos.
- Ao fim de cada etapa: `npm run lint` + `npm run build` sem erros, commit (`feat:`/`fix:`/`style:`) e push.
- Criar `.gitignore` correto, `.env.example`, `README.md` em pt-BR com passo a passo, e `PENDENCIAS.md` (o que depende da cliente / dev / antes de publicar).

## 9. Ordem
1. Fundação: tema, fontes, layout (header, footer, WhatsApp, cookies), dados tipados, `getWhatsAppLink`, CLAUDE.md.
2. Hero + Sobre + Procedimentos.
3. Resultados + Depoimentos + FAQ + Contato + CTA final.
4. SEO, JSON-LD, OG, analytics, política de privacidade, README, PENDENCIAS, revisão mobile.
