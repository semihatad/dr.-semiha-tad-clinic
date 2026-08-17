import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Team } from "@/components/site/Team";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { VideoSection } from "@/components/site/VideoSection";

const title = "Dr. Semiha Tad — Diş Hekimi | Çankaya, Ankara";
const description =
  "Dr. Semiha Tad diş kliniği: Cebeci, Çankaya/Ankara. Genel diş hekimliği, implant, ortodonti ve estetik tedaviler. 7/24 açık.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <VideoSection />
      <Services />
      <Team />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
      <WhatsAppFab />
    </main>
  );
}
