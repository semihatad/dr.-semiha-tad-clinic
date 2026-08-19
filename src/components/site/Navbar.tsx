import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import { CLINIC, NAV_ITEMS } from "@/lib/clinic";
import { useScrollSpy } from "./hooks";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/components/site/LanguageContext";

const IDS = NAV_ITEMS.map((n) => n.id);

const getNavLabel = (id: string, t: any) => {
  switch (id) {
    case "hakkimizda":
      return t("nav.about");
    case "basinda-biz":
      return t("nav.basindaBiz");
    case "hizmetler":
      return t("nav.services");
    case "ekibimiz":
      return t("nav.team");
    case "galeri":
      return t("nav.gallery");
    case "yorumlar":
      return t("nav.testimonials");
    case "sss":
      return t("nav.faq");
    case "iletisim":
      return t("nav.contact");
    default:
      return id;
  }
};

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const whatsappUrl = "https://wa.me/905333001780?text=" + encodeURIComponent(t("whatsappMsg"));
  const active = useScrollSpy(IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt={`${CLINIC.name} logosu`}
            className="size-10 shrink-0 object-contain"
          />

          <span className="min-w-0">
            <span className="block truncate font-display text-base font-semibold text-primary">
              {CLINIC.name}
            </span>
            <span className="block text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
              {t("nav.clinicType")}
            </span>
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                active === item.id ? "text-primary" : "text-muted-foreground hover:text-primary",
              )}
            >
              {getNavLabel(item.id, t)}
              {active === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="flex items-center border border-border rounded-full p-0.5 bg-navy-50/50 mr-1">
            <button
              onClick={() => setLanguage("tr")}
              className={cn(
                "px-2 py-0.5 text-[10px] font-bold rounded-full transition-all cursor-pointer",
                language === "tr" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-primary"
              )}
            >
              TR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={cn(
                "px-2 py-0.5 text-[10px] font-bold rounded-full transition-all cursor-pointer",
                language === "en" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-primary"
              )}
            >
              EN
            </button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-700 sm:inline-flex"
          >
            <MessageCircle className="size-4" />
            {t("nav.whatsapp")}
          </a>
          <button
            aria-label="Menüyü aç"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-border text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="flex flex-col p-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-medium",
                    active === item.id ? "bg-navy-50 text-primary" : "text-muted-foreground",
                  )}
                >
                  {getNavLabel(item.id, t)}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="size-4" />
                {t("nav.whatsapp")}
              </a>

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
