import { Contato } from "@/components/sections/contato";
import { Duvidas } from "@/components/sections/duvidas";
import { Hero } from "@/components/sections/hero";
import { Resultados } from "@/components/sections/resultados";
import { Seguranca } from "@/components/sections/seguranca";
import { Sobre } from "@/components/sections/sobre";
import { Tratamentos } from "@/components/sections/tratamentos";
import { PrimeiroPasso } from "@/components/sections/primeiro-passo";
import { getAntesDepois, getDepoimentos, getPerguntas, getSite, getTratamentos } from "@/lib/data";

export default function Home() {
  const site = getSite();
  const perguntas = getPerguntas();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: perguntas.map((p) => ({
      "@type": "Question",
      name: p.pergunta,
      acceptedAnswer: { "@type": "Answer", text: p.resposta },
    })),
  };

  return (
    <>
      <Hero />
      <Sobre site={site} />
      <Tratamentos tratamentos={getTratamentos()} />
      <Seguranca />
      <Resultados depoimentos={getDepoimentos()} antesDepois={getAntesDepois()} />
      <PrimeiroPasso />
      <Duvidas perguntas={perguntas} />
      <Contato site={site} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
