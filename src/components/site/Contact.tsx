import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { CLINIC, NAV_ITEMS } from "@/lib/clinic";
import { Reveal, SectionHeading } from "./Section";
import { useOpenStatus } from "./hooks";
import { cn } from "@/lib/utils";

export function Contact() {
  const status = useOpenStatus();

  return (
    <section id="iletisim" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="İletişim"
          title="Kliniğimize ulaşın"
          description="Cebeci'deki kliniğimizde her gün sizi ağırlıyoruz."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <div className="flex gap-4 rounded-2xl border border-border p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-primary">
                <MapPin className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-semibold text-primary">Adres</h3>
                <p className="mt-1 text-sm text-muted-foreground">{CLINIC.address}</p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-primary">
                <Phone className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-semibold text-primary">Telefon</h3>
                <a
                  href={CLINIC.phoneHref}
                  className="mt-1 block text-sm text-muted-foreground hover:text-primary"
                >
                  {CLINIC.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-border p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-primary">
                <Clock className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-sm font-semibold text-primary">Çalışma Saatleri</h3>
                <p className="mt-1 text-sm text-muted-foreground">{CLINIC.hours}</p>
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
                    {status.label}
                  </span>
                )}
              </div>
            </div>

            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-700"
            >
              <MessageCircle className="size-4" />
              WhatsApp'tan Randevu Al
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full min-h-80 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Klinik konumu — Google Haritalar"
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
              <span className="grid size-10 place-items-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">
                ST
              </span>
              <span>
                <span className="block font-display text-base font-semibold text-primary">
                  {CLINIC.name}
                </span>
                <span className="block text-xs text-muted-foreground">{CLINIC.title}</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Çankaya / Ankara'da modern ve hijyenik diş hekimliği hizmetleri.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-primary">Bölümler</h3>
            <ul className="mt-4 space-y-2">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-primary">İletişim</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>{CLINIC.address}</li>
              <li>
                <a href={CLINIC.phoneHref} className="hover:text-primary">
                  {CLINIC.phone}
                </a>
              </li>
              <li>{CLINIC.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-border px-4 py-6 sm:px-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {CLINIC.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </section>
  );
}
