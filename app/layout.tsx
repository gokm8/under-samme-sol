import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Layout } from "@/components/ds";
import { Navigation } from "@/components/custom-components/navigation";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Under Samme Sol – Støt børn og familier i Østtyrkiet",
        template: "%s | Under Samme Sol",
    },
    description:
        "Vi arbejder for at alle børn kan vokse op med håb og tryghed. Under Samme Sol støtter børn og familier i Østtyrkiet med mad, skolematerialer og varme.",
    openGraph: {
        title: "Under Samme Sol – Støt børn og familier i Østtyrkiet",
        description:
            "Vi arbejder for at alle børn kan vokse op med håb og tryghed. Støt børn og familier i Østtyrkiet med mad, skolematerialer og varme.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Layout>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Navigation items={[
                    { href: "#vores-mission", label: "Vores mission" },
                    { href: "#vores-indsats", label: "Vores indsats" },
                    { href: "#kontakt-os", label: "Kontakt os" },
                ]} />
                {children}
                <Analytics />
            </body>
        </Layout>
    );
}
