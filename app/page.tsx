import { Section } from "@/components/ds";
import Hero from "@/components/custom-components/hero";
import LogoLoop from "@/components/LogoLoop";
import Image from "next/image";
import { VoresIndsatser } from "@/components/custom-components/vores-indsatser";
import { CtaStot } from "@/components/custom-components/cta-stot";
import { CtaStotSimple } from "@/components/custom-components/cta-stot-simple";
import { VoresMission } from "@/components/custom-components/vores-mission";
import { KontaktOs } from "@/components/custom-components/kontakt-os";
import { Footer } from "@/components/custom-components/footer";

export default function Home() {
  // Alternative with image sources
  const techLogos = [
    { src: "/logos/mb.png", alt: "mb-ejendomsservice ApS" },
    { src: "/logos/familie-loft.png", alt: "Familie Løft ApS" },
    { src: "/logos/crispy-burger.png", alt: "Crispy Burger ApS" },
    { src: "/logos/nordic-tryk.png", alt: "Nordic Tryk ApS" },
    { src: "/logos/next-level.png", alt: "Next Level ApS" },
    { src: "/logos/blesco.png", alt: "Blesco ApS" },
    { src: "/logos/tillids-baand.png", alt: "Tillidsbånd ApS" },
    { src: "/logos/fø-revision.png", alt: "Fø-Revision ApS" },
    { src: "/logos/serhatYildiran.png", alt: "SYC ApS" },
    { src: "/logos/salon-ck.png", alt: "Salon CK ApS" },
    { src: "/logos/tiger-sandwich.png", alt: "Tiger Sandwich ApS" },
    { src: "/logos/adem-stenovns.png", alt: "Adem Stenovns ApS" },
    { src: "/logos/ankara-madhus.png", alt: "Ankara Madhus ApS" },
    { src: "/logos/tempo-trafik.png", alt: "Tempo Trafik ApS" },
  ];

  const techLogosTwo = [
    { src: "/logos2/53.png", alt: "logo53" },
    { src: "/logos2/54png", alt: "logo53" },
    { src: "/logos2/55.png", alt: "logo53" },
    { src: "/logos2/56.png", alt: "logo53" },
    { src: "/logos2/57.png", alt: "logo53" },
    { src: "/logos2/58.png", alt: "logo53" },
    { src: "/logos2/59.png", alt: "logo53" },
    { src: "/logos2/60.png", alt: "logo53" },
    { src: "/logos2/61.png", alt: "logo53" },
    { src: "/logos2/62.png", alt: "logo53" },
    { src: "/logos2/63.png", alt: "logo53" },
    { src: "/logos2/64.png", alt: "logo53" },
    { src: "/logos2/65.png", alt: "logo53" },
    { src: "/logos2/66.png", alt: "logo53" },
    { src: "/logos2/67.png", alt: "logo53" },
  ];

  return (
    <>
      <Section id="hero" className="p-0! scroll-mt-0">
        <Hero />
      </Section>

      <Section>
        <h2 className="text-2xl font-bold text-center mb-4">
          Tak til vores sponsorer
        </h2>
        <LogoLoop
          logos={techLogos}
          speed={75}
          direction="left"
          logoHeight={150}
          gap={60}
          hoverSpeed={0}
        />
        <LogoLoop
          logos={techLogosTwo}
          speed={75}
          direction="right"
          logoHeight={150}
          gap={60}
          hoverSpeed={0}
        />
      </Section>

      <Section id="vores-mission" className="scroll-mt-20 bg-gray-100">
        <VoresIndsatser />
      </Section>

      <CtaStot imageSrc="/images/stot-os.PNG" imageAlt="Billede" />

      <Section id="vores-indsats" className="scroll-mt-20 bg-gray-100">
        <VoresMission />
      </Section>

      <CtaStotSimple />

      {/* <Section id="kontakt-os" className="scroll-mt-20">
        <KontaktOs />
      </Section> */}

      <Footer />
    </>
  );
}
