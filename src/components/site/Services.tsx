import {
  Smile,
  Sparkles,
  Baby,
  Bone,
  Braces,
  ShieldPlus,
  Syringe,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Section";
import { CLINIC } from "@/lib/clinic";
import { useLanguage } from "@/components/site/LanguageContext";

const SERVICES = [
  {
    icon: Braces,
    title: "Ortodonti",
    text: "Sabit (tel) ve hareketli plak tedavileriyle düzgün diş dizilimi.",
  },
  {
    icon: Syringe,
    title: "Endodonti (Kanal Tedavisi)",
    text: "Ağrısız, tek seansta tamamlanabilen modern kanal tedavisi.",
  },
  {
    icon: ShieldPlus,
    title: "Tedavi",
    text: "Genel muayeneden ışınlı dolguya, ihtiyacınıza özel koruyucu ve tedavi edici uygulamalar.",
    chips: ["Genel Muayene", "Işınlı Dolgu"],
  },
  {
    icon: Smile,
    title: "Protez",
    text: "Zirkonyum, porselen ve E-max seçenekleriyle doğal görünüm and fonksiyon.",
    chips: [
      "Monolitik Zirkonyum",
      "Katmanlı Zirkonyum",
      "Transparan Zirkonyum",
      "Çok Katmanlı Zirkonyum",
      "Porselen",
      "Yaprak Porselen",
      "E-max",
      "Total / Parsiyel Protez",
    ],
  },
  {
    icon: Bone,
    title: "Cerrahi",
    text: "İmplant, gömülü diş operasyonu ve apikal rezeksiyon gibi cerrahi çözümler.",
    chips: ["İmplant", "Gömülü Diş Operasyonu", "Apikal Rezeksiyon"],
  },
  {
    icon: Sparkles,
    title: "Diş Beyazlatma",
    text: "Klinik tipi beyazlatma ile birkaç ton daha aydınlık gülüş.",
  },
  {
    icon: Baby,
    title: "Çocuk Diş Hekimliği",
    text: "Çocuklar için korkusuz, oyunlaştırılmış tedavi yaklaşımı.",
  },
];

export function Services() {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/905333001780?text=" + encodeURIComponent(t("whatsappMsg"));

  return (
    <section id="hizmetler" className="scroll-mt-24 bg-navy-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          description={t("services.description")}
        />
        <Reveal className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-xs font-semibold text-accent sm:text-sm">
            {t("services.successRate")}
          </span>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            let key = "";
            if (s.title === "Ortodonti") key = "ortodonti";
            else if (s.title === "Endodonti (Kanal Tedavisi)") key = "endodonti";
            else if (s.title === "Tedavi") key = "tedavi";
            else if (s.title === "Protez") key = "protez";
            else if (s.title === "Cerrahi") key = "cerrahi";
            else if (s.title === "Diş Beyazlatma") key = "beyazlatma";
            else if (s.title === "Çocuk Diş Hekimliği") key = "pedodonti";

            const title = t(`services.list.${key}.title`);
            const text = t(`services.list.${key}.text`);
            const chips: string[] | undefined = s.chips ? t(`services.list.${key}.chips`) : undefined;

            return (
              <Reveal key={s.title} delay={(i % 4) * 0.06}>
                <article className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-primary/5">
                  <span className="grid size-11 place-items-center rounded-xl bg-navy-50 text-primary transition-colors group-hover:bg-accent/15">
                    <s.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  {chips ? (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {t("services.infoBtn")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
