import Link from "next/link";

import { BlueprintCard } from "@/components/blueprint-card";
import { SectionHeading } from "@/components/section-heading";
import {
  blueprints,
  features,
  heroStats,
  topBuilds,
  workflow,
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Rebuilt from the ground up</div>
              <h1 className="hero-title">
                Blueprint discovery that feels like a product, not an archive.
              </h1>
              <p className="hero-copy">
                Factorio Forge rethinks the experience behind Factorio Prints:
                clearer trust signals, richer blueprint metadata, guided
                publishing, and a UI that respects the density of technical
                information without looking dated.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "0.9rem",
                  flexWrap: "wrap",
                  marginTop: "2rem",
                }}
              >
                <Link className="button-primary" href="/blueprints">
                  Explore blueprints
                </Link>
                <Link className="button-secondary" href="/specs">
                  Read rewritten specs
                </Link>
              </div>
              <div className="stat-grid" style={{ marginTop: "2.25rem" }}>
                {heroStats.map((stat) => (
                  <div className="card stat-card" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card hero-preview">
              <div className="preview-badge">Live product concept</div>
              <div className="preview-header">
                <div>
                  <p className="preview-label">Featured blueprint</p>
                  <h2>Beacon-ready smelter array</h2>
                </div>
                <span className="preview-score">5.0</span>
              </div>
              <div className="preview-visual">
                <div className="preview-grid" />
                <div className="preview-node preview-node-a" />
                <div className="preview-node preview-node-b" />
                <div className="preview-node preview-node-c" />
                <div className="preview-rail preview-rail-a" />
                <div className="preview-rail preview-rail-b" />
              </div>
              <div className="preview-metrics">
                <div>
                  <span>Throughput</span>
                  <strong>16 blue belts</strong>
                </div>
                <div>
                  <span>Footprint</span>
                  <strong>120 x 84</strong>
                </div>
                <div>
                  <span>Compatibility</span>
                  <strong>Factorio 2.0</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why this approach is stronger"
            title="A better product model than the legacy site"
            description="The rebuild focuses on scannable technical detail, modern visual hierarchy, and a community workflow that encourages better submissions."
          />
          <div className="grid-auto">
            {features.map((feature) => (
              <article className="card feature-card" key={feature.title}>
                <p className="feature-metric">{feature.metric}</p>
                <h3>{feature.title}</h3>
                <p className="muted">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Blueprint feed"
            title="Featured designs with real decision-making context"
            description="Each card surfaces size, version support, throughput, rating, and difficulty so players can decide before opening a details page."
          />
          <div className="grid-auto">
            {blueprints.slice(0, 3).map((blueprint) => (
              <BlueprintCard key={blueprint.id} blueprint={blueprint} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Publisher workflow"
            title="A guided create flow built for metadata quality"
            description="The old-style giant form is replaced with a simple, confidence-building sequence that improves discoverability and curation."
          />
          <div className="workflow-grid">
            {workflow.map((item) => (
              <article className="card workflow-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Top surfaces"
            title="Trending and curated discovery, not just infinite lists"
            description="Community traction and editorial curation help good blueprints rise without overwhelming players with low-signal results."
          />
          <div className="grid-auto">
            {topBuilds.map((build) => (
              <article className="card insight-card" key={build.title}>
                <p className="insight-title">{build.title}</p>
                <h3>{build.emphasis}</h3>
                <p className="muted">{build.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card cta-card">
            <div>
              <p className="eyebrow">Ready to launch</p>
              <h2>Built as a cleaner foundation for a real Factorio community product.</h2>
              <p className="muted">
                The current implementation is static and demo-ready, but the
                architecture already points toward search indexing, auth,
                moderation, author profiles, comments, and API-backed storage.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button-primary" href="/create">
                Try publish flow
              </Link>
              <Link className="button-secondary" href="/top">
                See top builds
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
