"use client";

import { useState } from "react";
import { Container } from "../ds";
import Image from "next/image";
import { Button } from "../ui/button";
import Balancer from "react-wrap-balancer";
import { Input } from "../ui/input";

// Funktion der returnerer hvad et beløb svarer til
function getDonationImpact(amount: number): string {
    if (amount >= 550) {
        return "støtter familiens månedlige madbudget";
    } else if (amount >= 235) {
        return "kan du give en familie ro og tryghed med en madkasse, der sikrer mad på bordet";
    } else if (amount >= 105) {
        return "kan et barn få nye støvler og en varm jakke til de kolde vintermåneder";
    } else if (amount >= 60) {
        return "kan et barn eksempelvis få vigtige skoleredskaber – som skoletaske og penalhus";
    } else if (amount > 0) {
        return "gør en forskel for børn og familier";
    }
    return "";
}

function Hero() {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(60);
    const [customAmount, setCustomAmount] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAmountClick = (amount: string) => {
        setSelectedAmount(parseInt(amount));
        setCustomAmount("");
        setError(null);
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomAmount(value);
        if (value) {
            setSelectedAmount(parseInt(value) || 0);
        } else {
            setSelectedAmount(null);
        }
        setError(null);
    };

    const displayAmount = selectedAmount ?? 0;
    const impact = getDonationImpact(displayAmount);

    async function handleStot() {
        if (!selectedAmount || selectedAmount < 10) return;
        setError(null);
        setLoading(true);
        try {
            const res = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: selectedAmount }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error ?? "Noget gik galt");
                return;
            }
            if (data.url) window.location.href = data.url;
            else setError("Kunne ikke starte betaling");
        } catch {
            setError("Kunne ikke oprette betaling – prøv igen");
        } finally {
            setLoading(false);
        }
    }
    return (
        <section className="relative min-h-[90vh] lg:h-[90vh] ">
            {/* Background image */}
            <Image
                src="/hero-section.jpg"
                alt="Børn der vokser op med håb og tryghed"
                fill
                priority
                className="object-cover -z-10"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.85)_70%)]" />

            <Container className="relative flex items-center h-full lg:h-[90vh] py-8 lg:py-0">
                <div className="flex flex-col justify-end lg:flex-row lg:items-end lg:justify-between w-full">

                    {/* Left content */}
                    <div className="max-w-xl space-y-4">
                        <h1 className="text-3xl font-bold text-white md:text-5xl">
                            <Balancer>
                                ALLE BØRN FORTJENER AT VOKSE OP MED HÅB
                            </Balancer>
                        </h1>

                        <p className="text-lg text-white/90 md:text-xl ">
                            <Balancer>
                                Under Samme Sol arbejder for støtte og tryghed til børn og familier i Østtyrkiet.
                            </Balancer>
                        </p>
                    </div>

                    {/* CTA box */}
                    <div className="w-full max-w-sm rounded-xl bg-white/10 p-8 text-white backdrop-blur flex flex-col justify-between mt-12 lg:mt-0">
                        <div>
                            <h2 className="mb-4 text-2xl font-semibold">
                                Vælg dit bidrag
                            </h2>

                            <p className="mb-6 text-sm text-white/90 leading-relaxed">
                                Din støtte hjælper børn og familier med håb, tryghed og fremtid.
                            </p>

                            {/* Amount options */}
                            <div className="mb-6 flex flex-col gap-3">
                                <div className="grid grid-cols-2 gap-3">
                                    {["60", "105", "235", "550"].map((amount) => {
                                        const isSelected = selectedAmount === parseInt(amount) && !customAmount;
                                        return (
                                            <Button
                                                variant="ghost"
                                                key={amount}
                                                onClick={() => handleAmountClick(amount)}
                                                className={`rounded-lg border px-4 py-3 text-sm font-medium transition ${isSelected
                                                    ? "border-white bg-white text-black"
                                                    : "border-white/30 hover:bg-white hover:text-black"
                                                    }`}
                                            >
                                                {amount} kr
                                            </Button>
                                        );
                                    })}
                                </div>

                                <Input
                                    type="number"
                                    placeholder="Andet beløb"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="w-full rounded-lg bg-white/20 px-4 py-3 text-sm text-white placeholder:text-white/60 border-white/30 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
                                />
                            </div>

                            {/* Impact information */}
                            {impact && (
                                <div className="mb-6 rounded-lg bg-white/10 p-4 text-center">
                                    <p className="text-sm font-medium text-white">
                                        {displayAmount} kr {impact}
                                    </p>
                                </div>
                            )}

                            {error && (
                                <p className="mb-4 text-sm text-red-200" role="alert">
                                    {error}
                                </p>
                            )}
                        </div>

                        <Button
                            size="lg"
                            className="w-full mt-auto"
                            disabled={!selectedAmount || selectedAmount < 10 || loading}
                            onClick={handleStot}
                        >
                            {loading ? "Venter..." : selectedAmount ? `Doner ${selectedAmount} kr` : "Doner nu"}
                        </Button>
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default Hero;
