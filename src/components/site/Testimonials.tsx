import { Star, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { useLanguage } from "@/components/site/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  const reviewsList = t("testimonials.list") as Array<{ author: string; treatment: string; text: string }>;

  return (
    <section id="yorumlar" className="scroll-mt-24 bg-navy-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          description={t("testimonials.description")}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviewsList.map((r, i) => (
            <Reveal key={r.author} delay={(i % 3) * 0.06}>
              <article className="relative h-full rounded-2xl border border-border bg-card p-6">
                <Quote className="absolute top-6 right-6 size-6 text-accent/30" />
                <div className="flex gap-0.5" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy-50 font-display text-sm font-semibold text-primary">
                    {r.author.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-primary">{r.author}</p>
                    <p className="truncate text-xs text-muted-foreground">{r.treatment}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
