"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/data/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-mark" aria-label="Factorio Forge home">
          <span className="brand-badge">FF</span>
          <span>
            <strong>Factorio Forge</strong>
            <small>Share, clone, build</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? "nav-link nav-link-active" : "nav-link"}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link href="/create" className="button-secondary compact-button">
            Create or clone
          </Link>
        </div>
      </div>
    </header>
  );
}
