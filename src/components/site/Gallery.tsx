import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import { Reveal, SectionHeading } from "./Section";

const ITEMS = [
  {
    type: "video" as const,
    src: "/Images/clinic-video.mp4",
    alt: "Klinik Tanıtım Videosu",
  },
  {
    type: "video" as const,
    src: "/Images/clinic-video-2.mp4",
    alt: "",
  },
  {
    type: "image" as const,
    src: clinic1,
    alt: "Diş Tedavi Odası",
  },
  {
    type: "image" as const,
    src: clinic2,
    alt: "Klinik Giriş ve Bekleme Alanı",
  },
  {
    type: "image" as const,
    src: clinic3,
    alt: "Modern Diş Muayene Ünitesi",
  },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % ITEMS.length);
      if (e.key === "ArrowLeft") setIndex((i) => ((i ?? 0) - 1 + ITEMS.length) % ITEMS.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index]);

  return (
    <section id="galeri" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Galeri"
          title="Kliniğimizden kareler"
          description="Ferah, hijyenik ve konforlu bir ortamda hizmet veriyoruz. Fotoğrafa tıklayarak büyütebilirsiniz."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => {
            const isVideo = item.type === "video";
            return (
              <Reveal
                key={i}
                delay={(i % 3) * 0.06}
                className={
                  i === 0
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                    : i === 1
                      ? "sm:col-span-2 lg:col-span-1 lg:row-span-2"
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
                  aria-label={`${item.alt || "Klinik Görseli"} — büyüt`}
                >
                  {isVideo ? (
                    <>
                      <video
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
                          {item.alt}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        {index !== null && (
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
              className="absolute top-5 right-5 grid size-11 place-items-center rounded-full bg-background/10 text-primary-foreground"
              aria-label="Kapat"
              onClick={() => setIndex(null)}
            >
              <X className="size-5" />
            </button>
            <button
              className="absolute left-3 grid size-11 place-items-center rounded-full bg-background/10 text-primary-foreground sm:left-8"
              aria-label="Önceki"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => ((i ?? 0) - 1 + ITEMS.length) % ITEMS.length);
              }}
            >
              <ChevronLeft className="size-5" />
            </button>

            {ITEMS[index]!.type === "video" ? (
              <motion.video
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                src={ITEMS[index]!.src}
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
              />
            ) : (
              <motion.img
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                src={ITEMS[index]!.src}
                alt={ITEMS[index]!.alt}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
              />
            )}

            <button
              className="absolute right-3 grid size-11 place-items-center rounded-full bg-background/10 text-primary-foreground sm:right-8"
              aria-label="Sonraki"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => ((i ?? 0) + 1) % ITEMS.length);
              }}
            >
              <ChevronRight className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
