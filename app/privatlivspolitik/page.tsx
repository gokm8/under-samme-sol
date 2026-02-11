import Link from "next/link";
import { Container, Section } from "@/components/ds";
import { Footer } from "@/components/custom-components/footer";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privatlivspolitik | Under Samme Sol",
  description: "Læs om, hvordan Under Samme Sol behandler dine personoplysninger.",
};

export default function PrivatlivspolitikPage() {
  return (
    <>
      <main>
        <Section className="py-12 sm:py-16 bg-gray-100">
          <Container className="max-w-3xl">
            <Button variant="ghost" size="sm" asChild className="mb-6 -ml-2">
              <Link href="/">← Tilbage til forsiden</Link>
            </Button>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Privatlivspolitik
            </h1>
            <p className="text-muted-foreground text-sm">
              Sidst opdateret: {new Date().toLocaleDateString("da-DK")}
            </p>
          </Container>
        </Section>

        <Section className="py-10 sm:py-12">
          <Container className="max-w-3xl prose prose-neutral dark:prose-invert">
            <h2>1. Indledning</h2>
            <p>
              Under Samme Sol („vi“, „os“, „vores“) respekterer dit privatliv. Denne
              privatlivspolitik beskriver, hvordan vi indsamler, bruger og beskytter
              dine personoplysninger, når du besøger vores hjemmeside eller
              kommunikerer med os.
            </p>

            <h2>2. Dataansvarlig</h2>
            <p>
              Under Samme Sol er dataansvarlig for de personoplysninger, vi behandler.
              Du kan kontakte os på{" "}
              <a href="mailto:kontakt@undersammesol.dk" className="underline">
                kontakt@undersammesol.dk
              </a>
              .
            </p>

            <h2>3. Hvilke oplysninger indsamler vi?</h2>
            <p>Vi kan indsamle og behandle følgende typer af oplysninger:</p>
            <ul>
              <li>
                <strong>Kontaktoplysninger:</strong> navn, e-mailadresse og eventuelle
                beskeder, du sender os
              </li>
              <li>
                <strong>Tekniske data:</strong> IP-adresse, browsertype, besøgstidspunkt
                og lignende (fx via cookies eller analyseværktøjer)
              </li>
              <li>
                <strong>Donationsdata:</strong> ved donationer kan betalings- og
                transaktionsoplysninger blive behandlet af vores betalingsudbyder
              </li>
            </ul>

            <h2>4. Formål og retsgrundlag</h2>
            <p>
              Vi bruger dine oplysninger til at besvare henvendelser, administrere
              donationer, forbedre vores hjemmeside og – hvor du har givet samtykke
              eller det er lovligt – til nyhedsbreve og information om vores arbejde.
              Behandlingen sker på baggrund af samtykke, opfyldelse af aftale eller
              vores berettigede interesse, afhængigt af det konkrete formål.
            </p>

            <h2>5. Deling af oplysninger</h2>
            <p>
              Vi sælger ikke dine personoplysninger. Vi kan dele oplysninger med
              tredjeparter, der hjælper os med at drive hjemmesiden (fx hosting,
              betalingsløsninger eller e-mailtjenester), og som er forpligtet til at
              beskytte dem i overensstemmelse med gældende lovgivning.
            </p>

            <h2>6. Opbevaring</h2>
            <p>
              Vi opbevarer dine oplysninger så længe, det er nødvendigt for de
              formål, der er beskrevet her, eller som loven kræver. Du kan til enhver
              tid anmode om indsigt, rettelse eller sletning af dine data.
            </p>

            <h2>7. Dine rettigheder</h2>
            <p>
              I henhold til databeskyttelsesforordningen har du ret til indsigt,
              berigtigelse, sletning og begrænsning af behandling samt til at gøre
              indsigelse. Du kan klage til Datatilsynet, hvis du mener, at vores
              behandling ikke er i overensstemmelse med loven.
            </p>

            <h2>8. Cookies</h2>
            <p>
              Vores hjemmeside kan anvende cookies til at forbedre brugeroplevelsen
              og til statistik. Du kan styre cookies i din browsers indstillinger.
            </p>

            <h2>9. Ændringer</h2>
            <p>
              Vi kan opdatere denne privatlivspolitik. Ændringer vil blive offentliggjort
              på denne side med en opdateret dato.
            </p>

            <p className="pt-6 text-muted-foreground text-sm">
              Har du spørgsmål, er du velkommen til at kontakte os på{" "}
              <a href="mailto:kontakt@undersammesol.dk" className="underline">
                kontakt@undersammesol.dk
              </a>
              .
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
