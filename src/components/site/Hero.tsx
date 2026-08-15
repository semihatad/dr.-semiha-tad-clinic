import { motion } from "motion/react";
import { Clock, MessageCircle, Phone, MapPin } from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";
import { CLINIC } from "@/lib/clinic";
import { useOpenStatus } from "./hooks";
import { cn } from "@/lib/utils";

export function Hero() {
  const status = useOpenStatus();

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute -top-40 -right-32 size-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-40 size-[24rem] rounded-full bg-navy-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
            <span className="size-1.5 rounded-full bg-accent" />
            Çankaya / Ankara
          </span>

          <h1 className="mt-5 text-4xl leading-[1.08] font-bold text-primary sm:text-5xl lg:text-6xl">
            Dr. Semiha Tad
            <span className="block text-muted-foreground">Diş Hekimi</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sağlıklı gülüşler için modern, hijyenik ve konforlu bir klinik deneyimi. Her gün açığız
            — randevunuzu tek dokunuşla WhatsApp üzerinden alın.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" />
              WhatsApp'tan Randevu Al
            </a>
            <a
              href={CLINIC.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-navy-50"
            >
              <Phone className="size-4" />
              {CLINIC.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 font-medium text-primary">
              <Clock className="size-4 text-accent" />
              {CLINIC.hours}
            </span>
            {status && (
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold",
                  status.open ? "bg-accent/15 text-primary" : "bg-muted text-muted-foreground",
                )}
              >
                <span className="relative flex size-2">
                  {status.open && (
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                  )}
                  <span
                    className={cn(
                      "relative inline-flex size-2 rounded-full",
                      status.open ? "bg-accent" : "bg-muted-foreground",
                    )}
                  />
                </span>
                {status.label}
              </span>
            )}
          </div>

          <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
            {CLINIC.address}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-navy-50" aria-hidden />
          <img
            src={doctorImg}
            alt="Dr. Semiha Tad, diş hekimi, kliniğinde"
            width={1024}
            height={1280}
            className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl shadow-primary/10"
          />
          <div className="absolute right-4 bottom-4 rounded-2xl bg-background/95 px-5 py-3 shadow-lg backdrop-blur">
            <p className="font-display text-2xl font-bold text-primary">15+</p>
            <p className="text-xs text-muted-foreground">Yıllık Deneyim</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
