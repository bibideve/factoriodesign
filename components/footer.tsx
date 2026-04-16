import Link from "next/link";

import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="section" style={{ paddingTop: "2rem" }}>
      <div className="container">
        <div
          className="card"
          style={{
            padding: "1.5rem",
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <div>
            <p className="eyebrow">Factorio Forge</p>
            <h2 style={{ margin: "1rem 0 0.5rem", fontSize: "1.35rem" }}>
              A cleaner way to share, clone, and organize Factorio blueprints.
            </h2>
            <p className="muted" style={{ margin: 0, maxWidth: "36rem" }}>
              Rebuilt around blueprint strings, blueprint books, fast scanning,
              and the practical notes players need before importing a build.
            </p>
          </div>

          <div>
            <h3 style={{ marginTop: 0, fontSize: "1rem" }}>Navigate</h3>
            <div style={{ display: "grid", gap: "0.65rem" }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="muted">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ marginTop: 0, fontSize: "1rem" }}>Approach</h3>
            <ul
              className="muted"
              style={{ margin: 0, paddingLeft: "1rem", display: "grid", gap: "0.55rem" }}
            >
              <li>Server-rendered community and discovery pages</li>
              <li>Client-only interactivity where browsing needs it</li>
              <li>Data-first cards for fast import decisions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
