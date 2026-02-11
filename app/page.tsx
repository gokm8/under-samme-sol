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
    { src: "/images/din-virksomhed.png", alt: "Company 1" },
    { src: "/images/din-virksomhed.png", alt: "Company 2" },
    { src: "/images/din-virksomhed.png", alt: "Company 3" },
  ];

  return (
    <>
      <Section id="hero" className="p-0! scroll-mt-0">
        <Hero />
      </Section>

      <Section>
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={60}
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
