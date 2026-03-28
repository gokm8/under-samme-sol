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
    { src: "/logos/1.png", alt: "1" },
    { src: "/logos/2.png", alt: "2" },
    { src: "/logos/3.png", alt: "3" },
    { src: "/logos/4.png", alt: "4" },
    { src: "/logos/5.png", alt: "5" },
    { src: "/logos/6.png", alt: "6" },
    { src: "/logos/7.png", alt: "7" },
    { src: "/logos/8.png", alt: "8" },
    { src: "/logos/9.png", alt: "9" },
    { src: "/logos/10.png", alt: "10" },
    { src: "/logos/11.png", alt: "11" },
    { src: "/logos/12.png", alt: "12" },
    { src: "/logos/13.png", alt: "13" },
    { src: "/logos/14.png", alt: "14" },
    { src: "/logos/15.png", alt: "15" },
    { src: "/logos/16.png", alt: "16" },
    { src: "/logos/17.png", alt: "17" },
  ];

  const techLogosTwo = [
    { src: "/logos/18.png", alt: "18" },
    { src: "/logos/19.png", alt: "19" },
    { src: "/logos/20.png", alt: "20" },
    { src: "/logos/21.png", alt: "21" },
    { src: "/logos/21.png", alt: "21" },
    { src: "/logos/22.png", alt: "22" },
    { src: "/logos/23.png", alt: "23" },
    { src: "/logos/24.png", alt: "24" },
    { src: "/logos/25.png", alt: "25" },
    { src: "/logos/26.png", alt: "26" },
    { src: "/logos/27.png", alt: "27" },
    { src: "/logos/28.png", alt: "28" },
    { src: "/logos/29.png", alt: "29" },
    { src: "/logos/30.png", alt: "30" },
    { src: "/logos/31.png", alt: "31" },
    { src: "/logos/32.png", alt: "32" },
    { src: "/logos/32.png", alt: "32" },
    { src: "/logos/33.png", alt: "33" },
    { src: "/logos/34.png", alt: "34" },
    { src: "/logos/35.png", alt: "35" },
    { src: "/logos/36.png", alt: "36" },
  ];

  return (
    <>
      <Section id="hero" className="p-0! scroll-mt-0">
        <Hero />
      </Section>

      <Section className="bg-secondary">
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
