import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cruzeev-logo.webp.asset.json";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (!isHome) return;
      let current = "home";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.getBoundingClientRect().top <= 120) current = n.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = scrolled || !isHome || open;

  const NavItem = ({ id, label, mobile }: { id: string; label: string; mobile?: boolean }) => {
    const cls = cn(
      "font-medium transition-colors",
      mobile ? "block py-3 text-lg" : "text-sm",
      isHome && active === id ? "text-primary" : solid ? "text-foreground hover:text-primary" : "text-navy-foreground hover:text-primary",
    );
    if (isHome)
      return (
        <a
          href={`#${id}`}
          className={cls}
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            scrollToSection(id);
          }}
        >
          {label}
        </a>
      );
    return (
      <Link to="/" hash={id} className={cls} onClick={() => setOpen(false)}>
        {label}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "bg-background/85 shadow-soft backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" aria-label="CRUZE ev home" className="shrink-0">
          <img src={logo.url} alt="CRUZE ev" width={1920} height={576} className="h-9 w-auto md:h-11" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <NavItem key={n.id} {...n} />
          ))}
        </nav>
        <button
          className={cn("rounded-lg p-2 md:hidden", solid ? "text-foreground" : "text-navy-foreground")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="animate-in slide-in-from-top-2 fade-in border-t bg-background px-5 pb-6 md:hidden">
          {NAV.map((n) => (
            <NavItem key={n.id} {...n} mobile />
          ))}
        </nav>
      )}
    </header>
  );
}
