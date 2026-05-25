import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/context";
import { LOCALES, LOCALE_LABEL, wa, type Locale } from "@/i18n/dictionaries";
import logo from "@/assets/logo-opt.png";

export function Header() {
  const { t, locale, setLocale } = useLocale();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/fleet", label: t.nav.fleet },
    { to: "/services", label: t.nav.services },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-gold/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Private Jet KZ" className="h-10 md:h-12 w-auto drop-shadow-[0_0_18px_oklch(0.78_0.10_85/0.35)]" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-xl md:text-2xl tracking-tight text-foreground">
              Private<span className="gradient-gold-text"> Jet KZ</span>
            </span>
            <span className="hidden md:inline text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              {t.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitch locale={locale} setLocale={setLocale} />
          <a
            href={wa(t.cta.bookMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-background bg-gradient-to-br from-[var(--gold-bright)] to-[var(--gold)] hover:to-[var(--gold-bright)] transition-all shadow-[var(--shadow-gold)]"
          >
            {t.cta.book}
          </a>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <div className={`w-6 h-px bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <div className={`w-6 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <div className={`w-6 h-px bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 bg-background/95 backdrop-blur-xl border-b border-gold/15 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-5 py-6 flex flex-col gap-5">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-base text-foreground/80"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={wa(t.cta.bookMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center px-5 py-3 rounded-full text-sm font-medium text-background bg-gradient-to-br from-[var(--gold-bright)] to-[var(--gold)]"
          >
            {t.cta.book}
          </a>
        </nav>
      </div>
    </header>
  );
}

function LangSwitch({ locale, setLocale }: { locale: Locale; setLocale: (l: Locale) => void }) {
  return (
    <div className="flex items-center gap-1 p-1 rounded-full border border-gold/20 bg-background/40">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`px-2.5 py-1 text-[11px] tracking-widest rounded-full transition-colors ${
            locale === l
              ? "bg-gold text-background"
              : "text-foreground/60 hover:text-gold"
          }`}
        >
          {LOCALE_LABEL[l]}
        </button>
      ))}
    </div>
  );
}
