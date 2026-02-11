"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useMemo, useState } from "react";

export default function DonateBar() {
    const presetAmounts = [50, 100, 250, 500] as const;

    const [selected, setSelected] = useState<number>(100);
    const [custom, setCustom] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const amount = useMemo(() => {
        const customValue = Number(custom);
        if (custom.trim() !== "" && Number.isFinite(customValue) && customValue > 0) {
            return Math.round(customValue);
        }
        return selected;
    }, [custom, selected]);

    async function handleDonate() {
        setError(null);
        setLoading(true);
        try {
            const res = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: amount }),
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
        <div className="w-full max-w-3xl rounded-2xl bg-white/10 p-4 text-white backdrop-blur md:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                {/* Left: headline + helper */}
                <div className="min-w-0">
                    <h2 className="text-base font-semibold md:text-lg">Støt med et beløb</h2>
                    <p className="text-sm text-white/85">
                        Du støtter for <span className="font-semibold text-white">{amount}</span> kroner
                    </p>
                </div>

                {/* Middle: presets + input */}
                <div className="flex flex-wrap items-center gap-2 md:justify-end">
                    {presetAmounts.map((a) => {
                        const active = custom.trim() === "" && selected === a;

                        return (
                            <button
                                key={a}
                                type="button"
                                onClick={() => {
                                    setSelected(a);
                                    setCustom("");
                                }}
                                className={[
                                    "rounded-full px-4 py-2 text-sm font-medium transition",
                                    "border border-white/25 hover:bg-white hover:text-black",
                                    active ? "bg-white text-black" : "bg-white/5 text-white",
                                ].join(" ")}
                            >
                                {a} kr
                            </button>
                        );
                    })}

                    <div className="flex items-center gap-2">
                        <Input
                            inputMode="numeric"
                            value={custom}
                            onChange={(e) => setCustom(e.target.value.replace(/[^\d]/g, ""))}
                            placeholder="Andet"
                            className="h-10 w-28 rounded-full border-white/25 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white"
                        />
                        <span className="text-sm text-white/80">kr</span>
                    </div>
                </div>

                {/* Right: CTA */}
                <div className="md:pl-2">
                    <Button
                        size="lg"
                        className="w-full rounded-full md:w-auto"
                        onClick={handleDonate}
                        disabled={loading}
                    >
                        {loading ? "Venter..." : "Donér nu"}
                    </Button>
                </div>
            </div>

            {error && (
                <p className="mt-2 text-sm text-red-200" role="alert">
                    {error}
                </p>
            )}

            {/* Optional trust line */}
            <p className="mt-3 text-xs text-white/70">
                Sikker betaling • MobilePay • Kort
            </p>
        </div>
    );
}
