"use client";

import { Container } from "../ds";
import { Button } from "@/components/ui/button";

export function CtaStotSimple() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <Container>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="font-bold uppercase text-xl sm:text-2xl md:text-3xl py-10 px-20 sm:py-14 sm:px-28 md:py-8 md:px-70 border-0 shadow-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            STØT HER
          </Button>
        </div>
      </Container>
    </section>
  );
}
