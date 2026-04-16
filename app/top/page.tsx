import Link from "next/link";

import { BlueprintCard } from "@/components/blueprint-card";
import { SectionHeading } from "@/components/section-heading";
import { blueprints, topBuilds } from "@/data/site";

export default function TopBuildsPage() {
  const featured = blueprints.slice(0, 3);

  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1rem" }}>
        <SectionHeading
          eyebrow="Top builds"
          title="Trending blueprints, books, and builders."
          description="Strong imports, reusable book sets, and creators whose work gets copied into real factories."
        />

        <div className="grid-auto">
          {topBuilds.map((item) => (
            <article
              className="card"
              key={item.title}
              style={{ padding: "1rem", display: "grid", gap: "0.5rem" }}
            >
              <span className="eyebrow" style={{ width: "fit-content" }}>
                {item.title}
              </span>
              <h2 style={{ margin: 0, fontSize: "1.15rem" }}>{item.emphasis}</h2>
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
                Community shortlist
              </span>
              <h2 style={{ margin: "0.25rem 0 0", fontSize: "1.25rem" }}>
                Blueprints worth importing now
              </h2>
            </div>
            <Link className="button-secondary compact-button" href="/blueprints">
              Full library
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
