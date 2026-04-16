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
              A blueprint workbench for strings, books, layouts, and build costs.
            </h2>
            <p className="muted" style={{ margin: 0, maxWidth: "36rem" }}>
              The home route now behaves more like a tool: inspect the string,
              view the layout, count the required items, and then browse other
              shared builds.
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
            <h3 style={{ marginTop: 0, fontSize: "1rem" }}>Workbench</h3>
            <ul
              className="muted"
              style={{ margin: 0, paddingLeft: "1rem", display: "grid", gap: "0.55rem" }}
            >
              <li>Decode a real Factorio blueprint string</li>
              <li>Render the entity layout as a readable schema</li>
              <li>Show the item list needed to build it</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
