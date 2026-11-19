"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { buttonClasses } from "@/components/ui/button";
import { WhatsAppLink } from "@/components/whatsapp-link";
import type { NavItem } from "@/data/types";

export function Header({ navegacao }: { navegacao: NavItem[] }) {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const reduzir = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[height,background-color,box-shadow] duration-500 ${
        rolou ? "h-18 bg-off shadow-suave" : "h-24 bg-off/0"
      }`}
    >
      <div className="container-lp flex h-full items-center justify-between gap-6">
        <a href="#inicio" aria-label="Deysiane Lopes, voltar ao início">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-cafe-suave">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-terracota">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <WhatsAppLink secao="header" className={buttonClasses("gold", "md", "hidden sm:inline-flex")}>
            Agendar avaliação
          </WhatsAppLink>
          <button
            type="button"
            onClick={() => setAberto(true)}
            className="grid size-11 place-items-center rounded-full text-cafe lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {aberto && (
          <>
            <motion.div
              key="fundo"
              className="fixed inset-0 z-50 bg-cafe-escuro/60 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAberto(false)}
            />
            <motion.div
              key="gaveta"
              id="menu-mobile"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col bg-off px-7 pt-6 pb-10 shadow-elevada lg:hidden"
              initial={reduzir ? { opacity: 0 } : { x: "100%" }}
              animate={reduzir ? { opacity: 1 } : { x: 0 }}
              exit={reduzir ? { opacity: 0 } : { x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setAberto(false)}
                  className="grid size-11 place-items-center rounded-full text-cafe"
                  aria-label="Fechar menu"
                  autoFocus
                >
                  <X className="size-6" />
                </button>
              </div>
              <nav aria-label="Menu mobile" className="mt-12 flex-1">
                <ul className="space-y-5 font-display text-2xl font-light">
                  {navegacao.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} onClick={() => setAberto(false)} className="hover:text-terracota">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <WhatsAppLink secao="header" className={buttonClasses("gold", "lg", "w-full")}>
                Agendar avaliação
              </WhatsAppLink>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
