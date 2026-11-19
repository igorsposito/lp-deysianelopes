"use client";

import { useSyncExternalStore } from "react";

// Ano do build serve de valor no prerender (Cache Components não permite `new Date()` ali).
const ANO_BUILD = 2026;
const inscrever = () => () => {};

export function AnoAtual() {
  const ano = useSyncExternalStore(
    inscrever,
    () => new Date().getFullYear(),
    () => ANO_BUILD,
  );
  return <>{ano}</>;
}
