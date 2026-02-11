import Link from "next/link";
import { Container } from "@/components/ds";
import { Button } from "@/components/ui/button";

export default function DonationSuccessPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-12">
      <Container className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-2">Tak for din donation</h1>
        <p className="text-muted-foreground mb-6">
          Din betaling er gennemført. Din støtte betyder meget for os.
        </p>
        <Button asChild>
          <Link href="/">Tilbage til forsiden</Link>
        </Button>
      </Container>
    </main>
  );
}
