import type { Metadata } from "next";
import { getSite } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de privacidade | Deysiane Lopes",
  description: "Como o site de Deysiane Lopes trata dados de navegação e contato.",
  robots: { index: false },
};

export default function PoliticaDePrivacidade() {
  const site = getSite();

  return (
    <article className="container-lp max-w-3xl pt-40 pb-24 leading-relaxed text-cafe-suave">
      <h1 className="text-4xl font-light text-cafe md:text-5xl">
        Política de <span className="font-semibold">privacidade</span>
      </h1>
      <div className="mt-10 space-y-6">
        <p>
          Este site é de {site.nome}, {site.profissao.toLowerCase()} em {site.cidade}/{site.uf}. Ele não
          tem formulários e não pede dados pessoais. O contato acontece pelo WhatsApp, fora deste site,
          e segue a política de privacidade do próprio WhatsApp.
        </p>
        <h2 className="pt-4 text-2xl font-medium text-cafe">Dados de navegação</h2>
        <p>
          Usamos o Vercel Analytics e o Speed Insights para medir visitas e desempenho de forma agregada,
          sem identificar quem visita. Também registramos cliques nos botões de WhatsApp para saber quais
          partes do site ajudam mais.
        </p>
        <h2 className="pt-4 text-2xl font-medium text-cafe">Cookies e armazenamento local</h2>
        <p>
          Guardamos no seu navegador apenas a informação de que você já viu o aviso de cookies, para não
          mostrar de novo.
        </p>
        <h2 className="pt-4 text-2xl font-medium text-cafe">Seus direitos</h2>
        <p>
          Conforme a LGPD, você pode pedir informações sobre seus dados a qualquer momento pelo WhatsApp{" "}
          {site.whatsappExibicao}.
        </p>
      </div>
    </article>
  );
}
