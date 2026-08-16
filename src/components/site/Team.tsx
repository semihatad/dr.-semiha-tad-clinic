import { Reveal, SectionHeading } from "./Section";
import team1 from "@/assets/team-1.jpg.asset.json";
import team2 from "@/assets/team-2.png.asset.json";

const TEAM = [
  {
    img: team1.url,
    alt: "Dt. Semiha Tad hasta tedavisi sırasında",
    name: "Dt. Semiha Tad",
    role: "Diş Hekimi",
  },
  {
    img: team2.url,
    alt: "Dr. Bünyamin Turhan ve sekreter Filiz Kütük klinikte",
    name: "Dr. Bünyamin Turhan & Filiz Kütük",
    role: "Diş Hekimi & Sekreter",
  },
];

export function Team() {
  return (
    <section id="ekibimiz" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Ekibimiz"
          title="Sizi güler yüzle karşılayan ekip"
          description="Deneyimli hekimlerimiz ve klinik ekibimizle tedavi sürecinizde yanınızdayız."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <figure className="overflow-hidden rounded-3xl border border-border bg-navy-50/40">
                <img
                  src={m.img}
                  alt={m.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <figcaption className="p-5">
                  <h3 className="font-display text-base font-semibold text-primary">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
