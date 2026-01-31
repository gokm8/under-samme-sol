import Link from "next/link";
import { Container } from "../ds";
import { Badge } from "@/components/ui/badge";

export function KontaktOs() {
    return (
        <Container>
            <div className="space-y-4 text-center mb-8 sm:mb-10">
                <Badge variant="secondary" className="mb-2">
                    Kom i gang
                </Badge>
                <h2 className="text-2xl font-bold sm:text-3xl">Kontakt os</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                    Har du spørgsmål eller vil du høre mere? Vi glæder os til at høre fra dig.
                </p>
            </div>
            <div className="text-center text-foreground">
                <p className="text-sm font-medium text-muted-foreground mb-1">E-mail</p>
                <Link
                    href="mailto:kontakt@undersammesol.dk"
                    className="text-base font-medium hover:text-primary transition-colors"
                >
                    kontakt@undersammesol.dk
                </Link>
            </div>
        </Container>
    );
}
