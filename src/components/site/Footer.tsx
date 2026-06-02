import { Link } from "@tanstack/react-router";
import { useLocale } from "@/i18n/context";
import { withLocale } from "@/i18n/path";
import { PHONE, TEL, wa } from "@/i18n/dictionaries";
import logo from "@/assets/logo-opt.png";
import { Instagram, Youtube } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/private_jet.kz";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCAAx3YHdlbb7GMpiIXscRwA";

export function Footer() {
  const { t, locale } = useLocale();
  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/fleet", label: t.nav.fleet },
    { to: "/services", label: t.nav.services },
    { to: "/contact", label: t.nav.contact },
  ] as const;
  return (
    <footer className="border-t border-gold/15 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Private Jet KZ" className="h-14 w-auto" />
            <div className="font-display text-2xl">
              Private<span className="gradient-gold-text"> Jet KZ</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            {t.tagline}. Hyundai Staria LUXE.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{t.footer.nav}</div>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={withLocale(locale, n.to)} className="text-foreground/80 hover:text-gold transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{t.nav.contact}</div>
          <a href={`tel:${TEL}`} className="block text-lg font-display hover:text-gold transition-colors">
            {PHONE}
          </a>
          <a
            href={wa(t.cta.bookMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-foreground/70 hover:text-gold transition-colors"
          >
            WhatsApp
          </a>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gold/20 text-foreground/60 hover:text-gold hover:border-gold/50 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gold/20 text-foreground/60 hover:text-gold hover:border-gold/50 transition-colors"
            >
              <Youtube size={16} />
            </a>
          </div>
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <p><span className="text-foreground/50">Режим работы · </span>{t.footer.hours}</p>
            <p>{t.footer.city}</p>
            <p>{t.footer.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 text-xs text-muted-foreground">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
