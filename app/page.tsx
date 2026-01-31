import { Section } from "@/components/ds";
import Hero from "@/components/custom-components/hero";
import LogoLoop from "@/components/LogoLoop";
import Image from "next/image";
import { VoresIndsatser } from "@/components/custom-components/vores-indsatser";


export default function Home() {

  // Alternative with image sources
  const techLogos = [
    { src: "/logo-placeholder.jpg", alt: "Company 1" },
    { src: "/logo-placeholder.jpg", alt: "Company 2" },
    { src: "/logo-placeholder.jpg", alt: "Company 3" },
  ];

  return (
    <>
      <Section className="p-0!">
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

      <Section>
        <VoresIndsatser />
      </Section>
    </>
  );
}
