"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Nav } from "../ds";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "../ui/sheet";
import { cn } from "@/lib/utils";

type NavItem = {
    href: string;
    label: string;
}

type NavigationProps = {
    items: NavItem[];
    className?: string;
}

function Navigation({ items, className }: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#") && pathname === "/") {
            e.preventDefault();
            const id = href.slice(1);
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <Nav className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60", className)}>
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-3">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
                    aria-label="Gå til forsiden"
                >
                    UNDER SAMME SOL
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Hovednavigation">
                    <ul className="flex gap-6">
                        {items.map((item) => (
                            <li key={item.href}>
                                {item.href.startsWith("#") ? (
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleHashClick(e, item.href)}
                                        className="text-base font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-base font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant="default"
                        size="lg"
                        className="rounded-none text-lg h-12 px-6 text-bold"
                        asChild
                    >
                        <Link href="/stotte-os">STØT</Link>
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-10 w-10"
                                aria-label="Åbn menu"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle className="text-xl font-bold">
                                    UNDER SAMME SOL
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-6 mt-8" aria-label="Mobil navigation">
                                <ul className="flex flex-col gap-4">
                                    {items.map((item) => (
                                        <li key={item.href}>
                                            {item.href.startsWith("#") ? (
                                                <SheetClose asChild>
                                                    <a
                                                        href={item.href}
                                                        onClick={(e) => handleHashClick(e, item.href)}
                                                        className="text-lg font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm block py-2"
                                                    >
                                                        {item.label}
                                                    </a>
                                                </SheetClose>
                                            ) : (
                                                <SheetClose asChild>
                                                    <Link
                                                        href={item.href}
                                                        className="text-lg font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm block py-2"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </SheetClose>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                                <SheetClose asChild>
                                    <Button
                                        variant="default"
                                        size="lg"
                                        className="rounded-none text-lg h-12 w-full text-bold"
                                        asChild
                                    >
                                        <Link href="/stotte-os">STØT</Link>
                                    </Button>
                                </SheetClose>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </Nav>
    )
}

export { Navigation }