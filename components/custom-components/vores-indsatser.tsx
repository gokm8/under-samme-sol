import Image from "next/image";
import Link from "next/link";
import { Container } from "../ds";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";


export function VoresIndsatser() {
    return (
        <Container className="max-w-7xl mx-auto">
            <div className="space-y-6 text-center mb-8 sm:mb-10">

                <h2 className="text-2xl font-bold sm:text-3xl uppercase">
                    <Balancer>Vores mission</Balancer>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                {/* Venstre: tekst + CTA */}
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 text-left bg-card order-2 lg:order-1">
                    <p className="text-foreground text-xl sm:text-2xl font-black leading-tight mb-4 uppercase">
                        <Balancer>Under Samme Sol arbejder for, at alle børn i Østtyrkiet får lige muligheder</Balancer>
                    </p>
                    <div className="space-y-3 text-foreground/90 text-sm sm:text-base leading-relaxed mb-6">
                        <p>Under Samme Sol er en forening, der bygger på en enkel, men stærk idé:
                        </p>
                        <p>At vi alle lever Under Samme Sol – og derfor deler et ansvar for hinanden.
                        </p>
                        <p>Vores første projekt er en indsamling til Østtyrkiet, hvor mange børn lever under svære vilkår og mangler adgang til helt basale ting i hverdagen. Det kan være alt fra tøj og varme til skoleudstyr og mad på bordet.
                        </p>

                        <p><Balancer>Vi kan ikke ændre alt. <br /> Men vi kan ændre noget.</Balancer>
                        </p>
                        <p>Derfor skaber vi indsamlinger, hvor fællesskab bliver til handling. Hvor små bidrag bliver til reel hjælp. Og hvor mennesker i Danmark kan gøre en konkret forskel for børn i nød.
                        </p>
                        <p>Under Samme Sol er et fællesskab, der ikke vil se til, når børn lider.
                        </p>
                    </div>
                </div>

                {/* Højre: billede */}
                <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-0 aspect-video lg:aspect-auto bg-muted order-1 lg:order-2">
                    <Image
                        src="/images/vores-mission.PNG"
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
