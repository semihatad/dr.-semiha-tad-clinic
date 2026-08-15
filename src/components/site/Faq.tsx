import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./Section";

const FAQS = [
  { q: "Randevu nasıl alabilirim?", a: "Randevularımızı WhatsApp üzerinden alıyoruz. Sayfadaki WhatsApp butonuna tıklayarak bize yazabilir veya telefonla ulaşabilirsiniz." },
  { q: "Çalışma saatleriniz nedir?", a: "Kliniğimiz her gün 09:00 - 23:00 saatleri arasında hizmet vermektedir. Hafta sonu da açığız." },
  { q: "Tedavi ücretleri hakkında bilgi alabilir miyim?", a: "Ücretler tedavi türüne ve ağız yapınıza göre değişir. Muayene sonrası size net bir tedavi planı ve fiyat bilgisi sunuyoruz." },
  { q: "Anlaşmalı olduğunuz sigortalar var mı?", a: "Özel sağlık sigortaları ve kurumsal anlaşmalar hakkında güncel bilgi için bizimle iletişime geçebilirsiniz." },
  { q: "Tedaviler ağrılı mı?", a: "Modern lokal anestezi yöntemleri sayesinde işlemler büyük ölçüde ağrısızdır. Konforunuz her aşamada önceliğimizdir." },
  { q: "Otopark imkanı var mı?", a: "Klinik Cebeci'de merkezi bir konumda yer alır; çevrede sokak otoparkı ve toplu taşıma seçenekleri bulunmaktadır." },
];

export function Faq() {
  return (
    <section id="sss" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="SSS"
          title="Sıkça sorulan sorular"
          description="Aklınıza takılan başka bir soru varsa WhatsApp'tan yazmanız yeterli."
        />

        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
