import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import clinic4 from "@/assets/clinic-4.jpg";
import { Reveal, SectionHeading } from "./Section";

const PHOTOS = [
  { src: clinic1, alt: "Tedavi odası" },
  { src: clinic2, alt: "Bekleme alanı" },
  { src: clinic3, alt: "Steril tedavi ekipmanları" },
  { src: clinic4, alt: "Klinik koridoru" },
  { src: clinic2, alt: "Resepsiyon" },
  { src: clinic1, alt: "Muayene ünitesi" },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % PHOTOS.length);
      if (e.key === "ArrowLeft") setIndex((i) => ((i ?? 0) - 1 + PHOTOS.length) % PHOTOS.length);
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
          {PHOTOS.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <button
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl"
                aria-label={`${p.alt} — büyüt`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-primary/0 transition-colors duration-300 group-hover:bg-primary/40">
                  <Expand className="size-6 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </button>
            </Reveal>
          ))}
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
                setIndex((i) => ((i ?? 0) - 1 + PHOTOS.length) % PHOTOS.length);
              }}
            >
              <ChevronLeft className="size-5" />
            </button>
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              src={PHOTOS[index]!.src}
              alt={PHOTOS[index]!.alt}

              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[92vw] rounded-2xl object-contain"
            />
            <button
              className="absolute right-3 grid size-11 place-items-center rounded-full bg-background/10 text-primary-foreground sm:right-8"
              aria-label="Sonraki"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => ((i ?? 0) + 1) % PHOTOS.length);
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
