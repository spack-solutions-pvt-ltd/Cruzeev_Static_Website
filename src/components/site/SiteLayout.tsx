"use client";

import React from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export const inputCls =
  "h-11 w-full rounded-xl border border-input bg-card px-3.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-110 active:scale-[0.98]";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <SiteHeader />
      <main className="flex-1 pt-20">{children}</main>
      <SiteFooter />
    </div>
  );
}

export default SiteLayout;
