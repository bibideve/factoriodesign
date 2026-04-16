import Link from "next/link";

import { navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer style={{ padding: "1.5rem 0 2rem" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            padding: "1rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <span className="brand-badge" style={{ width: "1.5rem", height: "1.5rem", fontSize: "0.6rem" }}>FF</span>
              <strong style={{ fontSize: "0.9rem" }}>Factorio Forge</strong>
            </div>
            <p className="muted" style={{ margin: 0, fontSize: "0.8rem", lineHeight: 1.6 }}>
              Decode, inspect, and share Factorio blueprint strings.
            </p>
          </div>

          <div>
            <h4 style={{ margin: "0 0 0.5rem", fontSize: "0.8rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Navigation</h4>
            <div style={{ display: "grid", gap: "0.35rem" }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="muted" style={{ fontSize: "0.85rem" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ margin: "0 0 0.5rem", fontSize: "0.8rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Workbench</h4>
            <ul
              className="muted"
              style={{ margin: 0, paddingLeft: "1rem", display: "grid", gap: "0.25rem", fontSize: "0.85rem" }}
            >
              <li>Decode blueprint strings</li>
              <li>Render entity layout grids</li>
              <li>Count required items</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
