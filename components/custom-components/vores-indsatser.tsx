import Image from "next/image";
import Link from "next/link";
import { Container } from "../ds";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function VoresIndsatser() {
    return (
        <Container className="">
            <div className="space-y-6 text-center mb-8 sm:mb-10">
                <Badge variant="default" className="mb-2">
                    Kernefortælling
                </Badge>
                <h2 className="text-2xl font-bold sm:text-3xl">Kernefortælling</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                {/* Venstre: tekst + CTA */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 text-left bg-card order-2 lg:order-1">
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                        Under Samme Sol er en forening, der bygger på en enkel, men stærk idé: at vi alle lever under den samme sol – og derfor også deler et ansvar for hinanden.
                    </p>
                    <p className="text-foreground text-sm sm:text-base leading-relaxed mb-4">
                        I Østtyrkiet lever mange børn under svære vilkår. Vi kan ikke ændre alt. Men vi kan ændre noget. Derfor indsamler vi, så fællesskab bliver til handling – og så mennesker i Danmark kan gøre en konkret forskel for børn, der ellers står uden støtte.
                    </p>
                    <p className="text-foreground font-medium text-sm sm:text-base mb-6">
                        Vi gør det, fordi vi kan. Og fordi vi er Under Samme Sol.
                    </p>
                    <Button asChild size="lg" className="w-full sm:w-fit font-semibold">
                        <Link href="#kontakt-os">Bliv fast støtte</Link>
                    </Button>
                </div>

                {/* Højre: billede */}
                <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-0 aspect-video lg:aspect-auto bg-muted order-1 lg:order-2">
                    <Image
                        src="/hero-section.jpg"
                        alt="Under Samme Sol – børn og familier, der får støtte og tryghed"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={false}
                    />
                </div>
            </div>
        </Container>
    );
}
