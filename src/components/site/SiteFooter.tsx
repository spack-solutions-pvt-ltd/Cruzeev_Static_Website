import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUp, Mail, Phone } from "lucide-react";
import logo from "@/assets/cruzeev-logo.webp.asset.json";
import { LEGAL_LINKS, NAV, SITE } from "@/lib/site";
import { scrollToSection } from "./SiteHeader";

export function SiteFooter() {
  const isHome = useLocation().pathname === "/";
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
          <img src={logo.url} alt="CRUZE ev" width={1920} height={576} loading="lazy" className="h-10 w-auto" />
          <p className="mt-4 text-sm text-navy-muted">India's growing EV charging network.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-muted">
            {NAV.map((n) => (
              <li key={n.id}>
                {isHome ? (
                  <a href={`#${n.id}`} className="hover:text-primary" onClick={(e) => { e.preventDefault(); scrollToSection(n.id); }}>
                    {n.label}
                  </a>
                ) : (
                  <Link to="/" hash={n.id} className="hover:text-primary">{n.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-muted">
            {LEGAL_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-primary">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-muted">
            <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" />{SITE.email}</a></li>
            <li><a href={`tel:+91${SITE.phone}`} className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" />{SITE.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-border py-6 text-center text-xs text-navy-muted">
        Copyright © 2026 JCD ELECTRIC PRIVATE LIMITED. All rights reserved.
      </div>
      {showTop && (
        <button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="animate-in fade-in fixed bottom-6 right-6 z-40 rounded-full bg-gradient-brand p-3 text-primary-foreground shadow-glow transition-transform hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
