import { useState } from "react";
import { Play, Tv, Youtube } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./Section";
import videoThumbnail from "@/assets/video-thumb.jpg";
import { useLanguage } from "@/components/site/LanguageContext";

export function VideoSection() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "o1boUSMj_uU";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <section id="basinda-biz" className="scroll-mt-24 bg-navy-50/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow={t("video.eyebrow")}
            title={t("video.title")}
            description={t("video.description")}
            className="items-center text-center"
          />

          <Reveal className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-xs font-semibold text-accent sm:text-sm">
              <Tv className="size-4" /> {t("video.badge")}
            </span>
          </Reveal>
        </div>

        <div className="mt-12 flex justify-center">
          <Reveal className="w-full max-w-4xl" delay={0.1}>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <button
                  className="group relative block aspect-video w-full overflow-hidden rounded-3xl border border-border bg-black shadow-2xl shadow-primary/10 transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 cursor-pointer"
                  aria-label={t("video.playButtonLabel")}
                >
                  {/* Thumbnail Image */}
                  <img
                    src={videoThumbnail}
                    alt={t("video.videoLightboxTitle")}
                    className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
                    loading="lazy"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 transition-opacity group-hover:opacity-40" />

                  {/* Pulsing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="relative flex size-20 items-center justify-center rounded-full bg-accent text-primary shadow-lg shadow-accent/40 transition-transform duration-300 group-hover:scale-110">
                      {/* Pulse animation */}
                      <span className="absolute -inset-4 animate-ping rounded-full bg-accent/20 opacity-75 duration-1000" />
                      <Play className="ml-1 size-8 fill-current" />
                    </span>
                  </div>

                  {/* Bottom Video Title Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                    <div className="flex items-center gap-3">
                      <span className="rounded-lg bg-red-600 p-2 text-white">
                        <Youtube className="size-5 fill-current" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold tracking-wider text-accent uppercase">
                          {t("video.videoTitleBarTag")}
                        </p>
                        <h3 className="font-display text-sm font-semibold sm:text-base">
                          {t("video.videoTitleBarTitle")}
                        </h3>
                      </div>
                    </div>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-black aspect-video sm:rounded-2xl">
                <DialogTitle className="sr-only">
                  {t("video.videoLightboxTitle")}
                </DialogTitle>
                {isOpen && (
                  <iframe
                    src={embedUrl}
                    title={t("video.videoLightboxTitle")}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </DialogContent>
            </Dialog>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
