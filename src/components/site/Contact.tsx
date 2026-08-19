import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram } from "lucide-react";
import { CLINIC, NAV_ITEMS } from "@/lib/clinic";
import { Reveal, SectionHeading } from "./Section";
import { useOpenStatus } from "./hooks";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/components/site/LanguageContext";

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

export function Contact() {
  const { language, t } = useLanguage();
  const whatsappUrl = "https://wa.me/905333001780?text=" + encodeURIComponent(t("whatsappMsg"));
  const status = useOpenStatus();

  return (
    <section id="iletisim" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.description")}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <a
              href={CLINIC.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 rounded-2xl border border-border p-6 hover:bg-navy-50/50 transition-colors"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-primary">
                <MapPin className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-semibold text-primary">
                  {t("contact.addressTitle")}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{CLINIC.address}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover">
                  {t("contact.mapsLinkText")}
                </span>
              </div>
            </a>

            <div className="flex gap-4 rounded-2xl border border-border p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-primary">
                <Phone className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-semibold text-primary">
                  {t("contact.phoneTitle")}
                </h3>
                <a
                  href={CLINIC.phoneHref}
                  className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                >
                  {CLINIC.phone}
                </a>
                <a
                  href={CLINIC.phone2Href}
                  className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                >
                  {CLINIC.phone2}
                </a>
                <a
                  href={CLINIC.phone3Href}
                  className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                >
                  {CLINIC.phone3}
                </a>
                <a
                  href={CLINIC.phone4Href}
                  className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                >
                  {CLINIC.phone4}
                </a>
              </div>
            </div>

            <a
              href={`mailto:${CLINIC.email}`}
              className="flex gap-4 rounded-2xl border border-border p-6 hover:bg-navy-50/50 transition-colors"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-primary">
                <Mail className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-semibold text-primary">
                  {t("contact.emailTitle")}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{CLINIC.email}</p>
              </div>
            </a>

            <div className="flex gap-4 rounded-2xl border border-border p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-primary">
                <Clock className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-semibold text-primary">
                  {t("contact.hoursTitle")}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{t("hero.openHours")}</p>
                {status && (
                  <span
                    className={cn(
                      "mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                      status.open ? "bg-accent/15 text-primary" : "bg-muted text-muted-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 rounded-full",
                        status.open ? "bg-accent" : "bg-muted-foreground",
                      )}
                    />
                    {status.open ? t("hero.statusOpen") : t("hero.statusClosed")}
                  </span>
                )}
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-700"
            >
              <MessageCircle className="size-4" />
              {t("hero.btnWhatsapp")}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full min-h-80 overflow-hidden rounded-2xl border border-border">
              <iframe
                title={t("contact.mapsLinkText")}
                src={CLINIC.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-80 w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="mt-20 border-t border-border pt-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={`${CLINIC.name} logosu`}
                className="size-10 object-contain"
              />

              <span>
                <span className="block font-display text-base font-semibold text-primary">
                  {CLINIC.name}
                </span>
                <span className="block text-xs text-muted-foreground">{CLINIC.title}</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {language === "tr"
                ? "Çankaya / Ankara'da modern ve hijyenik diş hekimliği hizmetleri."
                : "Modern and hygienic dental services in Cankaya / Ankara."}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={CLINIC.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
                aria-label="Google Business"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.377-2.87-6.377-6.38s2.867-6.38 6.377-6.38c1.5 0 2.915.545 4.025 1.545l3.078-3.078C19.043 2.146 15.772 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c5.84 0 10.963-4.148 10.963-11.24 0-.746-.073-1.4-.2-1.955H12.24z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-primary">
              {language === "tr" ? "Bölümler" : "Sections"}
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {getNavLabel(n.id, t)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-primary">
              {t("contact.eyebrow")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{CLINIC.address}</li>
              <li>
                <a href={CLINIC.phoneHref} className="hover:text-primary">
                  {CLINIC.phone}
                </a>
              </li>
              <li>
                <a href={CLINIC.phone2Href} className="hover:text-primary">
                  {CLINIC.phone2}
                </a>
              </li>
              <li>
                <a href={CLINIC.phone3Href} className="hover:text-primary">
                  {CLINIC.phone3}
                </a>
              </li>
              <li>
                <a href={CLINIC.phone4Href} className="hover:text-primary">
                  {CLINIC.phone4}
                </a>
              </li>
              <li>
                <a href={`mailto:${CLINIC.email}`} className="hover:text-primary">
                  {CLINIC.email}
                </a>
              </li>
              <li>{t("hero.openHours")}</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-border px-4 py-6 sm:px-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {CLINIC.name}. {t("contact.copyright")}
          </p>
        </div>
      </footer>
    </section>
  );
}
