import { motion } from "motion/react";
import { Clock, MessageCircle, Phone, MapPin } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { useOpenStatus } from "./hooks";
import { cn } from "@/lib/utils";

export function Hero() {
  const status = useOpenStatus();

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Arka plan videosu */}
      <video
        src="/Images/clinic-video-hero.mp4"
        muted
        loop
        playsInline
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Okunabilirlik için navy degrade overlay */}
      <div className="absolute inset-0 bg-primary/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/55 to-primary/85" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent" />
            Çankaya / Ankara
          </span>

          <h1 className="mt-5 text-4xl leading-[1.08] font-bold text-white sm:text-5xl lg:text-6xl">
            Dr. Semiha Tad
            <span className="block text-white/80">Diş Hekimi</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Sağlıklı gülüşler için modern, hijyenik ve konforlu bir klinik deneyimi. Her gün açığız
            — randevunuzu tek dokunuşla WhatsApp üzerinden alın.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" />
              WhatsApp'tan Randevu Al
            </a>
            <a
              href={CLINIC.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <Phone className="size-4" />
              {CLINIC.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-medium text-white backdrop-blur">
              <Clock className="size-4 text-accent" />
              {CLINIC.hours}
            </span>
            {status && (
              <span
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold backdrop-blur",
                  status.open
                    ? "bg-accent/20 text-white"
                    : "bg-white/10 text-white/80",
                )}
              >
                <span className="relative flex size-2">
                  {status.open && (
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
                  )}
                  <span
                    className={cn(
                      "relative inline-flex size-2 rounded-full",
                      status.open ? "bg-accent" : "bg-white/60",
                    )}
                  />
                </span>
                {status.label}
              </span>
            )}
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/80">
            <MapPin className="size-4 shrink-0 text-accent" />
            {CLINIC.address}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
