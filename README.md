# Landing page · Deysiane Lopes

Site de página única da enfermeira esteta Deysiane Lopes (Rio de Janeiro). Desenvolvido pela [Ágave Lab](https://www.agavelab.com.br).

## Stack

Next.js 16 (App Router, Turbopack, Cache Components), React 19, TypeScript, Tailwind CSS v4, motion, lucide-react, embla-carousel, Vercel Analytics e Speed Insights.

## Como rodar

1. Instale o Node.js 20 ou superior.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Copie `.env.example` para `.env.local` e ajuste a URL do site.
4. Rode em modo de desenvolvimento e abra http://localhost:3000:
   ```bash
   npm run dev
   ```
5. Antes de publicar:
   ```bash
   npm run lint
   npm run build
   ```

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Contato, Instagram, registro, menu | `src/data/site.ts` |
| Tratamentos | `src/data/tratamentos.ts` |
| Depoimentos (texto) | `src/data/depoimentos.ts` |
| Perguntas frequentes | `src/data/faq.ts` |
| Mensagens do WhatsApp | `src/lib/whatsapp.ts` |
| Cores e degradês | `src/app/globals.css` |

## Imagens

As fotos ficam em `public/images/` (`hero.jpg`, `sobre.jpg`, `jaleco.jpg`, `consultorio.jpg`, `procedimento.jpg`). Para trocar um placeholder, substitua o arquivo mantendo o mesmo nome.

`npm run placeholders` recria só os arquivos que estiverem faltando. Ele nunca sobrescreve uma foto existente.

## Regras do projeto

Veja `CLAUDE.md` (regras de design, WhatsApp e conformidade COFEN) e `PENDENCIAS.md` (o que falta).
