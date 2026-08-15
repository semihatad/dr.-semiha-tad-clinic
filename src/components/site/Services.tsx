import {
  Smile,
  Stethoscope,
  Sparkles,
  Baby,
  Bone,
  Braces,
  ShieldPlus,
  Syringe,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { CLINIC } from "@/lib/clinic";

const SERVICES = [
  { icon: Stethoscope, title: "Genel Diş Muayenesi", text: "Detaylı ağız-diş kontrolü ve kişiye özel tedavi planlaması." },
  { icon: ShieldPlus, title: "Dolgu Tedavisi", text: "Estetik kompozit dolgular ile doğal görünüm ve dayanıklılık." },
  { icon: Syringe, title: "Kanal Tedavisi", text: "Ağrısız, tek seansta tamamlanabilen modern kanal tedavisi." },
  { icon: Sparkles, title: "Diş Beyazlatma", text: "Klinik tipi beyazlatma ile birkaç ton daha aydınlık gülüş." },
  { icon: Smile, title: "Protez ve Kaplama", text: "Zirkonyum ve porselen kaplamalarla fonksiyon ve estetik." },
  { icon: Bone, title: "İmplant Uygulaması", text: "Eksik dişler için kalıcı ve konforlu implant çözümleri." },
  { icon: Braces, title: "Ortodonti", text: "Tel ve şeffaf plak tedavileri ile düzgün diş dizilimi." },
  { icon: Baby, title: "Çocuk Diş Hekimliği", text: "Çocuklar için korkusuz, oyunlaştırılmış tedavi yaklaşımı." },
];

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-24 bg-navy-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Genel diş hekimliği hizmetleri"
          description="İhtiyacınıza uygun tedaviyi birlikte planlıyoruz. Detaylı bilgi için WhatsApp'tan bize yazabilirsiniz."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-primary/5">
                <span className="grid size-11 place-items-center rounded-xl bg-navy-50 text-primary transition-colors group-hover:bg-accent/15">
                  <s.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Hizmetler hakkında bilgi alın
          </a>
        </Reveal>
      </div>
    </section>
  );
}
