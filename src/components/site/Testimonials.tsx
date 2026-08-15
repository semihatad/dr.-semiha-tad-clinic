import { Star, Quote } from "lucide-react";
import { Reveal, SectionHeading } from "./Section";

const REVIEWS = [
  {
    name: "Ramazan Ceviz",
    treatment: "Diş Tedavisi",
    text: "Klinik çok temiz ve düzenli. Doktor ve çalışanlar çok ilgiliydi. Diş tedavim sırasında hiç ağrı hissetmedim. Gönül rahatlığıyla tavsiye ederim. Bünyamin Turhan hocama özellikle çok teşekkür ederim 🙂",
  },
  {
    name: "Derya Yıldız",
    treatment: "Köprü Tedavisi",
    text: "Semiha Hanım'a yıllar önce dişlerime köprü yaptırmıştım. Uzun yıllar kullandım, herhangi bir sorunla karşılaşmadım. Ablam sürekli ona gider, o da çok memnun.",
  },
  {
    name: "Murat Ateş",
    treatment: "Kaplama & Kanal Tedavisi",
    text: "3 adet kaplama yaptırdım, harika şu anda. Kaplama ve kanal tedavisi işlemlerinde gerçekten başarılılar, elinize sağlık.",
  },
  {
    name: "Emel Bıçakçı",
    treatment: "Gülüş Tasarımı",
    text: "Kendimi en iyi ve güvenilir ellerde hissettiğim en güzel klinik. Doktorlarım güler yüzlü ve işinin ehli. Şu an gülüşümü onlara borçluyum diyebilirim. Emeği geçen tüm hocalarıma teşekkür ederim, herkese tavsiye ederim. ❤️",
  },
  {
    name: "Nimet Telli Demirhan",
    treatment: "Genel Diş Hekimliği",
    text: "Sevgili arkadaşlar, doktor Semiha Tad hanımefendi gerçekten yüreği, kalbi kadar eli de hünerli biridir. Çok güzel diş yapıyor, ben kimi tavsiye ettiysem çok memnun kaldı. Özünde çok iyi bir insan, fiyatları da çok uygundur.",
  },
  {
    name: "Serdar Elmas",
    treatment: "Çocuk Diş Hekimliği",
    text: "6 yaşındaki kızımı dolgu ve diş çekimi için götürdüm. Hocanın yaklaşımı çok iyiydi, Cebeci bölgesinde en iyisi diyebilirim.",
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
