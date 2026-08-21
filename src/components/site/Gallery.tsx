import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import { Reveal, SectionHeading } from "./Section";
import { useLanguage } from "@/components/site/LanguageContext";

const getTranslationKey = (alt: string) => {
  switch (alt) {
    case "Klinik Tanıtım Videosu": return "video1";
    case "Kliniğimizden Görüntüler": return "video2";
    case "Diş Tedavi Odası": return "clinic1";
    case "Klinik Giriş ve Bekleme Alanı": return "clinic2";
    case "Modern Diş Muayene Ünitesi": return "clinic3";
    case "Şeffaf Plak Uygulaması": return "orthoAligner";
    case "Metal Diş Teli Uygulaması": return "orthoBraces";
    case "Kompozit Lamina Uygulaması": return "composite1";
    case "Estetik Kompozit Dolgu Uygulaması": return "composite2";
    case "Mikroskop Altında Kanal Tedavisi": return "rootMicroscope";
    case "Kanal Tedavisi Sonrası Röntgen Görünümü": return "rootXray";
    case "Üst Çene Zirkonyum Kron Restorasyonu": return "prosthesisCrown1";
    case "Zirkonyum Diş Protezi Uygulaması": return "prosthesisCrown2";
    case "Hassas Bağlantılı İskelet Protezi": return "prosthesisDentureMetal";
    case "Laboratuvarda Zirkonyum Diş Hazırlığı": return "prosthesisCrownModel";
    case "Grid Güçlendirmeli Total Protez Çalışması": return "prosthesisDentureTotal";
    case "Diş Laboratuvarında Zirkonyum Kron Hazırlığı": return "prosthesisCrownModelYellow";
    case "Çocuk Hasta Tedavi Süreci": return "pedodonticsTreatment";
    case "Klinik Tedavi Süreci Videosu": return "video3";
    case "Hekim Uygulaması Videosu": return "video4";
    default: return "";
  }
};

// Yeni vaka görselleri
import orthoAligner from "@/assets/cases/ortho-aligner.png";
import orthoBraces from "@/assets/cases/ortho-braces.png";
import composite1 from "@/assets/cases/composite-1.jpg";
import composite2 from "@/assets/cases/composite-2.jpg";
import rootMicroscope from "@/assets/cases/root-microscope.png";
import rootXray from "@/assets/cases/root-xray.png";
import prosthesisCrown1 from "@/assets/cases/prosthesis-crown-1.png";
import prosthesisCrown2 from "@/assets/cases/prosthesis-crown-2.png";
import prosthesisDentureMetal from "@/assets/cases/prosthesis-denture-metal.png";
import prosthesisCrownModel from "@/assets/cases/prosthesis-crown-model.jpg";
import prosthesisDentureTotal from "@/assets/cases/prosthesis-denture-total.jpg";
import prosthesisCrownModelYellow from "@/assets/cases/prosthesis-crown-model-yellow.jpg";
// import pedodonticsTreatment from "@/assets/cases/pedodontics-treatment.png";

const CATEGORIES = [
  { id: "all", label: "Tümü" },
  { id: "clinic", label: "Kliniğimiz" },
  { id: "prosthetics", label: "Zirkonyum & Protez" },
  { id: "orthodontics", label: "Şeffaf Plak & Tel" },
  { id: "rootcanal", label: "Kanal Tedavisi" },
  { id: "composite", label: "Estetik Dolgu" },
  { id: "pedodontics", label: "Çocuk Diş Hekimliği" },
] as const;

const ITEMS = [
  // Klinik Tanıtım Videosu
  {
    type: "video" as const,
    src: "/Images/clinic-video.mp4",
    alt: "Klinik Tanıtım Videosu",
    category: "clinic" as const,
    isRealCase: false,
    hasAudio: true,
  },
  {
    type: "video" as const,
    src: "/Images/clinic-video-2.mp4",
    alt: "Kliniğimizden Görüntüler",
    category: "clinic" as const,
    isRealCase: false,
    hasAudio: true,
  },
  /*
  {
    type: "video" as const,
    src: "/Images/7AC32D9C-4393-4DE9-B157-634F61C2C75C.mp4", // Not: Web tarayıcılarında çalışması için .MOV dosyası H.264/AAC ile .mp4'e dönüştürülmelidir.
    alt: "Klinik Tedavi Süreci Videosu",
    category: "clinic" as const,
    isRealCase: false,
  },
  */
  // Klinik Resimleri
  {
    type: "image" as const,
    src: clinic1,
    alt: "Diş Tedavi Odası",
    category: "clinic" as const,
    isRealCase: false,
  },
  {
    type: "image" as const,
    src: clinic2,
    alt: "Klinik Giriş ve Bekleme Alanı",
    category: "clinic" as const,
    isRealCase: false,
  },
  {
    type: "image" as const,
    src: clinic3,
    alt: "Modern Diş Muayene Ünitesi",
    category: "clinic" as const,
    isRealCase: false,
  },
  // Ortodonti
  {
    type: "image" as const,
    src: orthoAligner,
    alt: "Şeffaf Plak Uygulaması",
    category: "orthodontics" as const,
    isRealCase: true,
  },
  {
    type: "image" as const,
    src: orthoBraces,
    alt: "Metal Diş Teli Uygulaması",
    category: "orthodontics" as const,
    isRealCase: true,
  },
  // Kompozit Lamina / Dolgu
  {
    type: "image" as const,
    src: composite1,
    alt: "Kompozit Lamina Uygulaması",
    category: "composite" as const,
    isRealCase: true,
  },
  {
    type: "image" as const,
    src: composite2,
    alt: "Estetik Kompozit Dolgu Uygulaması",
    category: "composite" as const,
    isRealCase: true,
  },
  // Kanal Tedavisi
  {
    type: "image" as const,
    src: rootMicroscope,
    alt: "Mikroskop Altında Kanal Tedavisi",
    category: "rootcanal" as const,
    isRealCase: true,
  },
  {
    type: "image" as const,
    src: rootXray,
    alt: "Kanal Tedavisi Sonrası Röntgen Görünümü",
    category: "rootcanal" as const,
    isRealCase: true,
    fit: "contain" as const,
  },
  // Protez & Zirkonyum
  {
    type: "image" as const,
    src: prosthesisCrown1,
    alt: "Üst Çene Zirkonyum Kron Restorasyonu",
    category: "prosthetics" as const,
    isRealCase: true,
  },
  {
    type: "image" as const,
    src: prosthesisCrown2,
    alt: "Zirkonyum Diş Protezi Uygulaması",
    category: "prosthetics" as const,
    isRealCase: true,
  },
  {
    type: "image" as const,
    src: prosthesisDentureMetal,
    alt: "Hassas Bağlantılı İskelet Protezi",
    category: "prosthetics" as const,
    isRealCase: true,
  },
  {
    type: "image" as const,
    src: prosthesisCrownModel,
    alt: "Laboratuvarda Zirkonyum Diş Hazırlığı",
    category: "prosthetics" as const,
    isRealCase: true,
  },
  {
    type: "image" as const,
    src: prosthesisDentureTotal,
    alt: "Grid Güçlendirmeli Total Protez Çalışması",
    category: "prosthetics" as const,
    isRealCase: true,
  },
  {
    type: "image" as const,
    src: prosthesisCrownModelYellow,
    alt: "Diş Laboratuvarında Zirkonyum Kron Hazırlığı",
    category: "prosthetics" as const,
    isRealCase: true,
  },
  // Çocuk Diş Hekimliği
  {
    type: "video" as const,
    src: "/Images/videococuk.mp4",
    alt: "Çocuk Hasta Tedavi Süreci",
    category: "pedodontics" as const,
    isRealCase: true,
    fit: "contain" as const,
    hasAudio: true,
  },
  // Hekim Uygulaması
  {
    type: "video" as const,
    src: "/Images/WhatsApp Video 2026-08-20 at 22.37.38.mp4",
    alt: "Hekim Uygulaması Videosu",
    category: "clinic" as const,
    isRealCase: true,
    hasAudio: true,
  },
];

export function Gallery() {
  const { t } = useLanguage();
  const [index, setIndex] = useState<number | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  const filteredItems =
    selectedTab === "all"
      ? ITEMS
      : ITEMS.filter((item) => item.category === selectedTab);

  useEffect(() => {
    if (index === null) {
      // Lightbox kapandığında tüm thumbnail videolarını yeniden başlat
      videoRefs.current.forEach((vid) => {
        vid.play().catch(() => {});
      });
      return;
    }
    // Lightbox açıldığında tüm thumbnail videolarını durdur (ses çakışmasın)
    videoRefs.current.forEach((vid) => {
      vid.pause();
    });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % filteredItems.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => ((i ?? 0) - 1 + filteredItems.length) % filteredItems.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, filteredItems.length]);

  return (
    <section id="galeri" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("gallery.eyebrow")}
          title={t("gallery.title")}
          description={t("gallery.description")}
        />

        {/* Kategori Sekmeleri */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedTab(cat.id);
                setIndex(null);
              }}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer",
                selectedTab === cat.id
                  ? "bg-accent text-primary shadow-lg shadow-accent/20"
                  : "bg-navy-50 text-muted-foreground hover:bg-navy-100 hover:text-primary",
              )}
            >
              {t("gallery.categories." + cat.id)}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, i) => {
            const isVideo = item.type === "video";
            const key = getTranslationKey(item.alt);
            const altText = key ? t(`gallery.items.${key}`) : item.alt;

            return (
              <Reveal
                key={item.src}
                delay={(i % 3) * 0.05}
                className={
                  selectedTab === "all" && isVideo
                    ? i === 0
                      ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                      : i === 1
                        ? "sm:col-span-2 lg:col-span-1 lg:row-span-2"
                        : ""
                    : ""
                }
              >
                <button
                  onClick={() => setIndex(i)}
                  className={`group relative block w-full overflow-hidden rounded-2xl border border-border bg-muted ${
                    isVideo
                      ? "h-72 sm:h-96 lg:h-[464px]"
                      : "h-56 w-full lg:h-[224px]"
                  }`}
                  aria-label={`${altText || "Clinic Media"} — zoom`}
                >
                  {/* Real Case Badge */}
                  {item.isRealCase && (
                    <span className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-accent/95 px-2.5 py-1 text-[10px] font-bold text-primary shadow-md border border-primary/10">
                      <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                      {t("gallery.badgeRealCase")}
                    </span>
                  )}

                  {isVideo ? (
                    <>
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current.set(item.src, el);
                          else videoRefs.current.delete(item.src);
                        }}
                        src={item.src}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 grid place-items-center bg-primary/10 transition-colors duration-300 group-hover:bg-primary/45">
                        <span className="flex size-14 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <Play className="size-6 fill-current ml-0.5" />
                        </span>
                      </span>
                      {item.alt && (
                        <span className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur">
                          {altText}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      <img
                        src={item.src}
                        alt={altText}
                        loading="lazy"
                        className={cn(
                          "h-full w-full transition-transform duration-500 group-hover:scale-105",
                          item.fit === "contain" ? "object-contain bg-navy-950/10 p-2" : "object-cover"
                        )}
                      />
                      <span className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/15" />
                    </>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {index !== null && filteredItems[index] && (() => {
          const currentItem = filteredItems[index];
          const currentKey = currentItem ? getTranslationKey(currentItem.alt) : "";
          const currentAlt = currentKey ? t(`gallery.items.${currentKey}`) : currentItem?.alt;

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/95 p-4"
              onClick={() => setIndex(null)}
              role="dialog"
              aria-modal="true"
            >
              <button
                className="absolute top-5 right-5 grid size-11 place-items-center rounded-full bg-background/10 text-primary-foreground cursor-pointer"
                aria-label={t("gallery.btnClose")}
                onClick={() => setIndex(null)}
              >
                <X className="size-5" />
              </button>
              <button
                className="absolute left-3 grid size-11 place-items-center rounded-full bg-background/10 text-primary-foreground sm:left-8 cursor-pointer"
                aria-label={t("gallery.btnPrev")}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex((i) => ((i ?? 0) - 1 + filteredItems.length) % filteredItems.length);
                }}
              >
                <ChevronLeft className="size-5" />
              </button>

              {currentItem.type === "video" ? (
                <motion.video
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={currentItem.src}
                  controls
                  autoPlay
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[80vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
                />
              ) : (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={currentItem.src}
                  alt={currentAlt}
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[80vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
                />
              )}

              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[90vw] text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="font-display text-sm font-semibold text-white bg-black/75 px-5 py-2.5 rounded-full backdrop-blur-md shadow-lg border border-white/10 flex flex-wrap items-center justify-center gap-2">
                  <span>{currentAlt}</span>
                  {currentItem.isRealCase && (
                    <span className="inline-flex items-center gap-1 rounded bg-accent/25 px-2 py-0.5 text-[10px] font-bold text-accent border border-accent/20">
                      {t("gallery.badgeRealCase")}
                    </span>
                  )}
                </p>
              </div>

              <button
                className="absolute right-3 grid size-11 place-items-center rounded-full bg-background/10 text-primary-foreground sm:right-8 cursor-pointer"
                aria-label={t("gallery.btnNext")}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex((i) => ((i ?? 0) + 1) % filteredItems.length);
                }}
              >
                <ChevronRight className="size-5" />
              </button>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
