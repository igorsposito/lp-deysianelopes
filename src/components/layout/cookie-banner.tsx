"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonClasses } from "@/components/ui/button";

const CHAVE = "dl-cookies-ok";

export function CookieBanner() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    let aceito = false;
    try {
      aceito = window.localStorage.getItem(CHAVE) === "1";
    } catch {
      // Armazenamento indisponível: mostra o aviso mesmo assim.
    }
    if (!aceito) {
      const t = window.setTimeout(() => setVisivel(true), 1500);
      return () => window.clearTimeout(t);
    }
  }, []);

  const aceitar = () => {
    try {
      window.localStorage.setItem(CHAVE, "1");
    } catch {
      // ignora
    }
    setVisivel(false);
  };

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          role="region"
          aria-label="Aviso de cookies"
          className="fixed inset-x-4 bottom-24 z-40 rounded-2xl bg-off p-5 text-sm text-cafe shadow-elevada ring-1 ring-cafe/10 md:inset-x-auto md:bottom-6 md:left-6 md:max-w-md"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
        >
          <p className="leading-relaxed">
            Usamos cookies só para entender como o site é usado e deixá-lo melhor. Saiba mais na{" "}
            <Link href="/politica-de-privacidade" className="font-semibold text-terracota underline underline-offset-4">
              política de privacidade
            </Link>
            .
          </p>
          <button type="button" onClick={aceitar} className={buttonClasses("terracota", "md", "mt-4")}>
            Entendi
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
