import { Star, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";

const REVIEWS = [
  {
    name: "Ayşe K.",
    treatment: "Dolgu Tedavisi",
    text: "Çok ilgili ve güler yüzlü bir hekim. İşlem sırasında hiç acı hissetmedim, klinik tertemiz.",
  },
  {
    name: "Mehmet Y.",
    treatment: "İmplant",
    text: "Süreç boyunca her aşamayı detaylıca anlattı. Sonuçtan çok memnunum, gönül rahatlığıyla tavsiye ederim.",
  },
  {
    name: "Zeynep A.",
    treatment: "Diş Beyazlatma",
    text: "Randevu almak çok kolaydı, akşam saatlerinde de açık olması iş çıkışı için harika.",
  },
  {
    name: "Burak D.",
    treatment: "Kanal Tedavisi",
    text: "Diş hekimi korkum vardı, burada tamamen geçti. Sakin ve güven veren bir yaklaşım.",
  },
  {
    name: "Elif S.",
    treatment: "Ortodonti",
    text: "Şeffaf plak tedavisi süreci planlandığı gibi ilerledi. Sonuç beklediğimden de iyi oldu.",
  },
  {
    name: "Canan T.",
    treatment: "Çocuk Diş Hekimliği",
    text: "Kızım hiç korkmadan tedavisini oldu. Çocuklarla iletişimi gerçekten çok iyi.",
  },
];

export function Testimonials() {
  return (
    <section id="yorumlar" className="scroll-mt-24 bg-navy-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Yorumlar"
          title="Hastalarımız ne diyor?"
          description="Kliniğimizde tedavi olan hastalarımızın deneyimleri."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={(i % 3) * 0.06}>
              <article className="relative h-full rounded-2xl border border-border bg-card p-6">
                <Quote className="absolute top-6 right-6 size-6 text-accent/30" />
                <div className="flex gap-0.5" aria-label="5 yıldız">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy-50 font-display text-sm font-semibold text-primary">
                    {r.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-primary">{r.name}</p>
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
