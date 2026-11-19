import { MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import Image from "next/image";
import Link from "next/link";
import { Grain } from "@/components/decor/grain";
import { Logo } from "@/components/logo";
import { WhatsAppLink } from "@/components/whatsapp-link";
import type { NavItem, SiteInfo } from "@/data/types";
import { AnoAtual } from "./ano-atual";

export function Footer({ site, navegacao }: { site: SiteInfo; navegacao: NavItem[] }) {
  return (
    <footer className="bg-cafe-grad relative isolate text-off/80">
      <Grain />
      <div className="container-lp relative z-10 grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo tom="claro" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {site.posicionamento}. {site.frase}
          </p>
          <p className="mt-5 text-sm text-off">
            {site.profissao} · {site.registro}
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ouro-2">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="space-y-4 text-sm md:col-span-4">
          <li>
            <WhatsAppLink secao="rodape" className="inline-flex items-center gap-3 hover:text-ouro-2">
              <MessageCircle className="size-4 text-ouro-2" aria-hidden />
              {site.whatsappExibicao}
            </WhatsAppLink>
          </li>
          <li>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:text-ouro-2"
            >
              <InstagramIcon className="size-4 text-ouro-2" />
              {site.instagramUsuario}
            </a>
          </li>
          <li className="inline-flex items-center gap-3">
            <MapPin className="size-4 text-ouro-2" aria-hidden />
            {site.cidade}, {site.uf}
          </li>
        </ul>
      </div>

      <div className="relative z-10 border-t border-off/10">
        <div className="container-lp flex flex-col gap-5 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © <AnoAtual /> {site.nome}. Todos os direitos reservados.{" "}
            <Link href="/politica-de-privacidade" className="underline underline-offset-4 hover:text-ouro-2">
              Política de privacidade
            </Link>
          </p>
          <a
            href="https://www.agavelab.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 opacity-80 transition-opacity hover:opacity-100"
          >
            Desenvolvido por
            <Image src="/brand/logo-agave.png" alt="Ágave Lab" width={96} height={28} className="h-6 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}
