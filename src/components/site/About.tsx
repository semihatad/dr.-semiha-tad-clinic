import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import doctorImg from "@/assets/team-1.jpg";
import { Reveal, SectionHeading } from "./Section";

const STATS = [
  { value: 15, suffix: "+", label: "Yıllık Deneyim" },
  { value: 20000, suffix: "+", label: "Mutlu Hasta" },
  { value: 20, suffix: "+", label: "Farklı Tedavi" },
  { value: 98, suffix: "%", label: "Memnuniyet Oranı" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Steril ve Güvenli",
    text: "Tüm ekipmanlar her hasta öncesi eksiksiz sterilize edilir.",
  },
  {
    icon: HeartHandshake,
    title: "Hasta Odaklı",
    text: "Tedavi planı, beklentileriniz ve bütçeniz birlikte belirlenir.",
  },
  {
    icon: Sparkles,
    title: "Modern Teknoloji",
    text: "Dijital görüntüleme ve güncel tedavi protokolleri.",
  },
];

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold tabular-nums text-primary sm:text-5xl">
      {n.toLocaleString("tr-TR")}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="hakkimizda" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Hakkımızda"
              title="Ankara Çankaya'da güven veren bir diş kliniği"
              description="Kliniğimizde koruyucu diş hekimliğinden estetik uygulamalara kadar geniş bir yelpazede
              hizmet veriyoruz. Amacımız; ağrısız, konforlu ve şeffaf bir tedavi süreci sunmak."
            />
            <div className="mt-8 space-y-5">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-primary">
                      <v.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold text-primary">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="grid grid-cols-2 gap-4">
            <div className="col-span-2 mx-auto w-full max-w-xs">
              <img
                src={doctorImg}
                alt="Dr. Semiha Tad, diş hekimi"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-lg shadow-primary/10"
              />
            </div>
            <img
              src={clinic1}
              alt="Klinik tedavi odası"
              loading="lazy"
              width={1280}
              height={960}
              className="h-40 w-full rounded-2xl object-cover sm:h-48"
            />
            <img
              src={clinic2}
              alt="Klinik bekleme alanı"
              loading="lazy"
              width={1280}
              height={960}
              className="h-40 w-full rounded-2xl object-cover sm:h-48"
            />
            <div className="col-span-2 flex h-24 flex-col justify-center rounded-2xl bg-primary p-5 text-primary-foreground sm:h-28">
              <p className="font-display text-lg font-semibold">7/24 açığız</p>
              <p className="mt-1 text-sm opacity-80">Gece gündüz hizmetinizdeyiz.</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-navy-50/60 p-5 sm:mt-20 sm:gap-6 sm:p-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <CountUp value={s.value} suffix={s.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
