"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUp, Mail, Phone, Zap } from "lucide-react";
import { LEGAL_LINKS, NAV, SITE } from "@/lib/site";
import { scrollToSection } from "./SiteHeader";

export function SiteFooter() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const f = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <Image
            src="/cruzeev-logo.webp"
            alt="CRUZE ev"
            width={1920}
            height={576}
            loading="lazy"
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm text-navy-muted">India's growing EV charging network.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-muted">
            {NAV.map((n) => (
              <li key={n.id}>
                {isHome ? (
                  <a
                    href={`#${n.id}`}
                    className="hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(n.id);
                    }}
                  >
                    {n.label}
                  </a>
                ) : (
                  <Link href={`/#${n.id}`} className="hover:text-primary">
                    {n.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-muted">
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-muted">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:+91${SITE.phone}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-navy-border py-4">
        <div className="flex-1 text-center text-xs text-navy-muted">
          Copyright © 2026 JCD ELECTRIC PRIVATE LIMITED. All rights reserved.
        </div>
        <p className="mr-4 flex items-center gap-1 text-sm text-navy-muted">
          <span>Powered by</span>
          <a
            href="https://nexinev.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-gradient-to-r from-[rgb(96,93,186)] to-[rgb(63,120,224)] bg-clip-text font-semibold leading-none text-transparent hover:opacity-80"
          >
            <Zap className="size-3.5 shrink-0 text-navy-muted" />
            <span className="text-base">Nexinev</span>
          </a>
        </p>
      </div>
      {showTop && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="animate-in fade-in fixed bottom-18 right-6 z-40 rounded-full bg-gradient-brand p-3 text-primary-foreground shadow-glow transition-transform hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
