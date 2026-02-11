import Link from "next/link";
import { Container } from "@/components/ds";
import { Button } from "@/components/ui/button";

export default function DonationCancelPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-12">
      <Container className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-2">Betaling annulleret</h1>
        <p className="text-muted-foreground mb-6">
          Du annullerede betalingen. Du er velkommen til at støtte os når som helst.
        </p>
        <Button asChild>
          <Link href="/">Tilbage til forsiden</Link>
        </Button>
      </Container>
    </main>
  );
}
