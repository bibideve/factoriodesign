import Link from "next/link";

import { BlueprintCard } from "@/components/blueprint-card";
import { SectionHeading } from "@/components/section-heading";
import { blueprints, topBuilds } from "@/data/site";

export default function TopBuildsPage() {
  const featured = blueprints.slice(0, 3);

  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1.5rem" }}>
        <SectionHeading
          eyebrow="Top builds"
          title="Trending blueprints, publishers, and collections."
          description="The old site surfaces popularity, but the experience can do more. This version gives editorial framing and richer signals so players understand why something is trending."
        />

        <div className="grid-auto">
          {topBuilds.map((item) => (
            <article
              className="card"
              key={item.title}
              style={{ padding: "1.5rem", display: "grid", gap: "0.75rem" }}
            >
              <span className="eyebrow" style={{ width: "fit-content" }}>
                {item.title}
              </span>
              <h2 style={{ margin: 0, fontSize: "1.4rem" }}>{item.emphasis}</h2>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7 }}>
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <div
          className="card"
          style={{
            padding: "1.5rem",
            display: "grid",
            gap: "1rem",
          }}
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
              <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>
                Editor's shortlist
              </p>
              <h2 style={{ margin: 0, fontSize: "1.7rem" }}>
                Blueprints worth importing right now
              </h2>
            </div>
            <Link className="button-secondary" href="/blueprints">
              See the full library
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
