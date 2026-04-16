import Link from "next/link";

import { BlueprintCard } from "@/components/blueprint-card";
import { SectionHeading } from "@/components/section-heading";
import { blueprints, topBuilds } from "@/data/site";

export default function TopBuildsPage() {
  const featured = blueprints.filter((bp) => bp.rating >= 4.8).slice(0, 3);

  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1rem" }}>
        <SectionHeading
          eyebrow="Top builds"
          title="Most favorited and highest rated blueprints"
          description="The blueprints players import the most. Sorted by favorites, ratings, and community usage across Factorio 1.1 and 2.0."
        />

        <div className="grid-auto">
          {topBuilds.map((item) => (
            <article
              className="card"
              key={item.title}
              style={{ padding: "1rem", display: "grid", gap: "0.5rem" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <span className="eyebrow" style={{ width: "fit-content" }}>
                  {item.title}
                </span>
                <div style={{
                  display: "grid",
                  textAlign: "right",
                  gap: "0.1rem",
                }}>
                  <strong style={{ fontSize: "1.2rem", color: "var(--accent)", fontFamily: "'SFMono-Regular', Consolas, monospace" }}>
                    {item.stat}
                  </strong>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {item.statLabel}
                  </span>
                </div>
              </div>
              <h2 style={{ margin: 0, fontSize: "1.15rem" }}>{item.emphasis}</h2>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                by {item.author}
              </p>
              <p className="muted" style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.6 }}>
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <div
          className="card"
          style={{ padding: "1rem", display: "grid", gap: "0.75rem" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span className="eyebrow" style={{ marginBottom: "0.5rem", display: "inline-block" }}>
                Highest rated
              </span>
              <h2 style={{ margin: "0.25rem 0 0", fontSize: "1.25rem" }}>
                Top-rated blueprints by the community
              </h2>
            </div>
            <Link className="button-secondary compact-button" href="/blueprints">
              Browse all blueprints
            </Link>
          </div>

          <div className="grid-auto">
            {featured.map((blueprint) => (
              <BlueprintCard key={blueprint.id} blueprint={blueprint} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
