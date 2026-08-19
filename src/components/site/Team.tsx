import { Reveal, SectionHeading } from "./Section";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.webp";
import { useLanguage } from "@/components/site/LanguageContext";

const TEAM = [
  {
    img: team1,
    name: "Dt. Semiha Tad",
  },
  {
    img: team2,
    name: "Dr. Bünyamin Turhan & Filiz Kütük",
  },
];

export function Team() {
  const { t } = useLanguage();

  return (
    <section id="ekibimiz" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t("team.eyebrow")}
          title={t("team.title")}
          description={t("team.description")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TEAM.map((m, i) => {
            const isSemiha = m.name === "Dt. Semiha Tad";
            const name = isSemiha ? t("team.members.semiha.name") : t("team.members.bunyamin.name");
            const role = isSemiha ? t("team.members.semiha.role") : t("team.members.bunyamin.role");
            const alt = isSemiha ? t("team.members.semiha.alt") : t("team.members.bunyamin.alt");

            return (
              <Reveal key={m.name} delay={i * 0.1}>
                <figure className="overflow-hidden rounded-3xl border border-border bg-navy-50/40">
                  <img
                    src={m.img}
                    alt={alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <figcaption className="p-5">
                    <h3 className="font-display text-base font-semibold text-primary">{name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
