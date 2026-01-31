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

const indsatser = [
    {
        title: "Fællesskab & Inklusion",
        description: "Vi skaber trygge mødesteder, hvor alle føler sig velkomne. Gennem fælles aktiviteter og arrangementer styrker vi sammenhængskraften i lokalsamfundet.",
        image: "/logo-placeholder.jpg",
        alt: "Fællesskab",
    },
    {
        title: "Bæredygtighed",
        description: "Vi arbejder for en grønnere fremtid med projekter inden for genbrug, energibesparelse og bevidst forbrug. Små skridt med stor betydning.",
        image: "/logo-placeholder.jpg",
        alt: "Bæredygtighed",
    },
    {
        title: "Uddannelse & Læring",
        description: "Vi tilbyder kurser og workshops for alle aldre – fra børn til seniorer. Viden deles, kompetencer udvikles, og nye muligheder åbner sig.",
        image: "/logo-placeholder.jpg",
        alt: "Uddannelse",
    },
];

export function VoresIndsatser() {
    return (
        <Container>
            <div className="space-y-4 text-center mb-8 sm:mb-10">
                <Badge variant="default" className="mb-2">
                    Vores fokus
                </Badge>
                <h2 className="text-2xl font-bold sm:text-3xl">Sådan gør vi forskel</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                    Vi arbejder på tværs af flere områder for at gøre en reel forskel i lokalsamfundet.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {indsatser.map((indsats) => (
                    <Card
                        key={indsats.title}
                        className="flex flex-col overflow-hidden transition-shadow hover:shadow-md"
                    >
                        <CardHeader className="p-0">
                            <div className="relative w-full aspect-16/10 sm:aspect-video overflow-hidden rounded-t-xl bg-muted">
                                <Image
                                    src={indsats.image}
                                    alt={indsats.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="px-6 pt-4">
                                <CardTitle className="text-lg sm:text-xl">
                                    {indsats.title}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 px-6 pb-6">
                            <CardDescription className="text-sm sm:text-base text-left">
                                {indsats.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Container>
    );
}
