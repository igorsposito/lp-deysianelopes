"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Desliga animações de movimento para quem usa prefers-reduced-motion. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
