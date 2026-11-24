// Gera placeholders elegantes nas cores da marca.
// NUNCA sobrescreve um arquivo existente: basta colocar a foto real com o mesmo nome.
// Uso: npm run placeholders
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

const imagens = [
  { arquivo: "images/sobre.jpg", w: 1200, h: 1500, rotulo: "Foto do Sobre" },
  { arquivo: "images/jaleco.jpg", w: 1200, h: 1500, rotulo: "Foto de jaleco" },
  { arquivo: "images/consultorio.jpg", w: 1600, h: 1067, rotulo: "Consultório" },
  { arquivo: "images/procedimento.jpg", w: 1200, h: 900, rotulo: "Procedimento" },
];

function svgFoto({ w, h, rotulo }) {
  const r = Math.min(w, h);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="fundo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FAF7F2"/>
      <stop offset="1" stop-color="#E2D4C4"/>
    </linearGradient>
    <radialGradient id="sol" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#C9744D"/>
      <stop offset="1" stop-color="#EFE6DC"/>
    </radialGradient>
    <linearGradient id="ouro" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#A67C2E"/>
      <stop offset="0.5" stop-color="#F3D98B"/>
      <stop offset="1" stop-color="#B8892F"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#fundo)"/>
  <circle cx="${w * 0.68}" cy="${h * 0.38}" r="${r * 0.32}" fill="url(#sol)" opacity="0.55"/>
  <circle cx="${w * 0.68}" cy="${h * 0.38}" r="${r * 0.36}" fill="none" stroke="url(#ouro)" stroke-width="${Math.max(2, r * 0.003)}"/>
  <text x="${w * 0.08}" y="${h * 0.9}" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="${r * 0.045}" font-weight="300" fill="#5C4A40">${rotulo}</text>
</svg>`;
}

function svgLogoAgave() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="70">
  <text x="0" y="48" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="38" font-weight="600" fill="#FAF7F2">Ágave Lab</text>
</svg>`;
}

let criados = 0;

async function gerar(arquivo, svg, formato) {
  const destino = join(raiz, arquivo);
  if (existsSync(destino)) {
    console.log(`mantido  ${arquivo} (já existe)`);
    return;
  }
  mkdirSync(dirname(destino), { recursive: true });
  const img = sharp(Buffer.from(svg));
  await (formato === "png" ? img.png() : img.jpeg({ quality: 82, mozjpeg: true })).toFile(destino);
  criados++;
  console.log(`criado   ${arquivo}`);
}

for (const item of imagens) {
  await gerar(item.arquivo, svgFoto(item), "jpg");
}
await gerar("brand/logo-agave.png", svgLogoAgave(), "png");

console.log(`\n${criados} placeholder(s) criado(s).`);
