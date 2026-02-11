import Image from "next/image";
import { Container } from "../ds";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

const mission = [


    {
        title: "Mad og medicin",
        description: "Mange familier i Østtyrkiet har svært ved at få mad på bordet og adgang til nødvendig medicin. Vi donerer madkasser med fødevarer som ris, grøntsager og øvrige dagligvarer, samt medicin. Med denne støtte hjælper vi familierne med at sikre ernæring og en sundere hverdag for børnene i hjemmet.",
        image: "/images/mad-og-medicin.jpg",
        alt: "Mad og medicin",
    },
    {
        title: "Skolematerialer",
        description: "Vi støtter børn i Østtyrkiet, som mangler helt basale ting til skolen – f.eks. skoleuniform, skoletaske, penalhus og bøger. Skolegangen er afgørende for at børnene kan have en lysere fremtid. Med en skolepakke får flere børn mulighed for at komme i skole og tage et vigtigt skridt mod et bedre liv.",
        image: "/images/skolematerialer.PNG",
        alt: "Skolematerialer",
    },
    {
        title: "Tøj og varme",
        description: "I Østtyrkiet mangler mange børn varmt og tilstrækkeligt tøj til at komme igennem hverdagen, særligt i de kolde vintermåneder. Vi donerer tøj, sko og tæpper, som giver familierne en mere tryg og varm hverdag. ",
        image: "/images/toej-og-varme.avif",
        alt: "Tøj og varme",
    },

];

export function VoresMission() {
    return (
        <Container className="max-w-7xl mx-auto" >
            <div className="space-y-4 text-center mb-8 sm:mb-10">

                <h2 className="text-2xl font-bold sm:text-3xl uppercase">Vores indsats</h2>
                <p className="text-gray-800 italic max-w-3xl mx-auto text-sm sm:text-base">
                    Vi er til stede i Østtyrkiet og uddeler hjælpen direkte til de familier, der har mest brug for det. Gennem lokale partnere sikrer vi, at hjælpen indkøbes i nærområdet, så jeres donationer får størst mulig virkning
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {mission.map((mission) => (
                    <Card
                        key={mission.title}
                        className="flex flex-col overflow-hidden transition-shadow hover:shadow-md"
                    >
                        <CardHeader className="p-0">
                            <div className="relative w-full aspect-16/10 sm:aspect-video overflow-hidden  bg-muted">
                                <Image
                                    src={mission.image}
                                    alt={mission.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="px-6 pt-4">
                                <CardTitle className="text-lg sm:text-xl">
                                    {mission.title}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 px-6 pb-6">
                            <CardDescription className="text-sm sm:text-base text-left">
                                {mission.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Container>
    );
}
