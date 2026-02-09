"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const footerLinks = [
  { href: "#vores-indsats", label: "Vores indsats" },
  { href: "#vores-mission", label: "Vores mission" },
  { href: "#kontakt-os", label: "Kontakt os" },
  { href: "#hero", label: "Støt os" },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
];

const companyInfo = {
  cvr: "45982718",
  kontoNr: "5487857",
  regNr: "8401",
};

export function Footer() {
  const pathname = usePathname();

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity block"
              aria-label="Gå til forsiden"
            >
              UNDER SAMME SOL
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Vi arbejder for at alle kan leve under samme sol – med håb og muligheder.
            </p>
          </div>

          {/* Menu */}
          <nav aria-label="Footer navigation" className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Menu
            </h3>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 sm:flex-col sm:gap-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleHashClick(e, item.href)}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontakt os */}
          <div id="kontakt-os" className="space-y-4 scroll-mt-20">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Kontakt os
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Har du spørgsmål eller vil du høre mere? Vi glæder os til at høre fra dig.
            </p>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                E-mail
              </p>
              <a
                href="mailto:kontakt@undersammesol.dk"
                className="text-sm font-medium hover:text-primary transition-colors block"
              >
                kontakt@undersammesol.dk
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Følg os
              </p>
              <div className="flex gap-4">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-between sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Under Samme Sol. Alle rettigheder forbeholdes.
          </p>
          <p className="text-xs text-muted-foreground">
            CVR: {companyInfo.cvr} · Konto nr.: {companyInfo.kontoNr} · Reg.nr.: {companyInfo.regNr}
          </p>
          <p className="text-xs text-muted-foreground">
            Udviklet og vedligeholdt af{" "}
            <a
              href="https://www.gokm8.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline underline-offset-2"
            >
              www.gokm8.xyz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
