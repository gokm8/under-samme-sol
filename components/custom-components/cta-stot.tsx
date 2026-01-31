import Image from "next/image";
import Link from "next/link";
import { Container } from "../ds";
import { Button } from "@/components/ui/button";

type CtaStotProps = {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
    imageSrc?: string;
    imageAlt?: string;
};

export function CtaStot({
    title = "STØT OS",
    description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText = "STØT",
    buttonHref = "#",
    imageSrc,
    imageAlt = "Billede",
}: CtaStotProps) {
    return (
        <section className="py-8 sm:py-12 bg-muted">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-lg border border-border bg-card">
                    <div className="relative min-h-[200px] lg:min-h-0 lg:aspect-auto aspect-video bg-muted flex items-center justify-center">
                        {imageSrc ? (
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        ) : (
                            <span className="text-foreground font-bold">BILLEDE</span>
                        )}
                    </div>
                    <div className="flex flex-col justify-center p-6 sm:p-8 text-left bg-card">
                        <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground mb-3">
                            {title}
                        </h2>
                        <p className="text-foreground text-sm sm:text-base mb-6 leading-relaxed">
                            {description}
                        </p>
                        <Button asChild size="lg" className="w-fit font-bold uppercase">
                            <Link href={buttonHref}>{buttonText}</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
