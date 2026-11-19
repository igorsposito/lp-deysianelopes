import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { Providers } from "@/components/providers";
import { getNavegacao, getSite } from "@/lib/data";
import "./globals.css";

// next/font baixa as fontes no build e serve localmente (sem requisição ao Google).
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const site = getSite();

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: "Deysiane Lopes | Rejuvenescimento e Naturalidade no RJ",
  description:
    "Enfermeira esteta no Rio de Janeiro. Toxina botulínica, preenchimentos, olheiras e bioestimulador com foco em naturalidade e segurança.",
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const navegacao = getNavegacao();

  return (
    <html lang="pt-BR" className={`${manrope.variable} ${jakarta.variable}`}>
      <body className="min-h-svh">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-cafe focus:px-4 focus:py-2 focus:text-off"
        >
          Pular para o conteúdo
        </a>
        <Providers>
          <Header navegacao={navegacao} />
          <main id="conteudo">{children}</main>
          <Footer site={site} navegacao={navegacao} />
          <WhatsAppFloat />
          <CookieBanner />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
