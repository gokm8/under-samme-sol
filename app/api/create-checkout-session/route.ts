import { NextResponse } from "next/server";
import Stripe from "stripe";

const MIN_AMOUNT_KR = 10;
const MAX_AMOUNT_KR = 100000;

function getStripe() {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
        throw new Error("STRIPE_SECRET_KEY er ikke sat i miljøvariabler");
    }
    return new Stripe(key);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const amountKr =
            typeof body.amount === "number"
                ? Math.round(body.amount)
                : undefined;

        if (
            amountKr == null ||
            amountKr < MIN_AMOUNT_KR ||
            amountKr > MAX_AMOUNT_KR
        ) {
            return NextResponse.json(
                {
                    error: `Beløb skal være mellem ${MIN_AMOUNT_KR} og ${MAX_AMOUNT_KR} kr`,
                },
                { status: 400 },
            );
        }

        const baseUrl =
            process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

        const stripe = getStripe();
        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ["card", "mobilepay"],
            line_items: [
                {
                    price_data: {
                        currency: "dkk",
                        product_data: {
                            name: "Donation",
                            description: "Donation til Under Samme Sol",
                            images: [], // valgfrit: logo-URL
                        },
                        unit_amount: amountKr * 100, // Stripe bruger øre (1 kr = 100 øre)
                    },
                    quantity: 1,
                },
            ],
            success_url: `${baseUrl}/donation/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/donation/cancel`,
            metadata: {
                type: "donation",
                amount_kr: String(amountKr),
            },
        });

        if (!session.url) {
            return NextResponse.json(
                { error: "Kunne ikke oprette betalingslink" },
                { status: 500 },
            );
        }

        return NextResponse.json({ url: session.url });
    } catch (err) {
        console.error("Stripe checkout error:", err);
        return NextResponse.json(
            { error: "Betaling kunne ikke startes" },
            { status: 500 },
        );
    }
}
