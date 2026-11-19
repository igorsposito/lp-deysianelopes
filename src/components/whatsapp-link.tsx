"use client";

import { track } from "@vercel/analytics";
import type { ComponentPropsWithoutRef } from "react";
import { getWhatsAppLink, type SecaoWhatsApp } from "@/lib/whatsapp";

type Props = Omit<ComponentPropsWithoutRef<"a">, "href" | "target" | "rel"> & {
  secao: SecaoWhatsApp;
  extra?: string;
};

export function WhatsAppLink({ secao, extra, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      href={getWhatsAppLink(secao, extra)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        track("whatsapp_click", { secao, ...(extra ? { assunto: extra } : {}) });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
