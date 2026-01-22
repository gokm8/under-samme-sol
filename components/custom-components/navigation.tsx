import Link from "next/link";
import { Nav } from "../ds";
import { Button } from "../ui/button";

type NavItem = {
    href: string;
    label: string;
}

type NavigationProps = {
    items: NavItem[];
}

function Navigation({ items }: NavigationProps) {
    return (
        <Nav>
            <div className="flex justify-between items-center">
                <div>UNDER SAMME SOL</div>
                <ul className="flex gap-6">
                    {items.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="text-lg">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button variant="default" size="lg" className="rounded-none text-lg h-16" asChild>
                    <Link href="/stotte-os">STØT</Link>
                </Button>
            </div>
        </Nav>
    )
}

export { Navigation }