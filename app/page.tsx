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
              <div className="eyebrow">Built for builders</div>
              <h1 className="hero-title">
                Share, clone, and edit Factorio blueprints and blueprint books.
              </h1>
              <p className="hero-copy">
                Factorio Forge is a community tool for blueprint strings and
                blueprint books: browse proven builds, inspect the details,
                clone someone else&apos;s layout into your own version, and keep
                everything organized like an extension of the in-game blueprint
                library.
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
                  Browse community builds
                </Link>
                <Link className="button-secondary" href="/specs">
                  Read research notes
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
              <div className="preview-badge">Community favorite</div>
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
            eyebrow="Why this fits the game better"
            title="A community workshop instead of a business dashboard"
            description="The rewrite leans into how players actually use Factorio blueprints: import strings, sort blueprint books, clone layouts, and share better notes with the next builder."
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
            title="Featured designs with enough detail to decide fast"
            description="Each card keeps size, version support, throughput, rating, and difficulty visible so players know whether to import, skip, or remix the build."
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
            eyebrow="Create, edit, clone"
            title="A build flow shaped around the way players already share"
            description="Instead of treating publishing like a funnel, the flow starts from a string or book, helps you edit what matters, and makes it easy to save a clean clone back to the community."
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
            title="Trending builds, popular books, and remixable sets"
            description="Players can jump straight into what others are importing and copying without wading through low-signal dumps."
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
              <p className="eyebrow">Ready to share</p>
              <h2>Built as a cleaner home for the blueprint-sharing side of Factorio.</h2>
              <p className="muted">
                The current implementation is static and demo-ready, but the
                structure already points toward accounts, comments, moderation,
                saved library items, blueprint book collections, and API-backed
                storage.
              </p>
            </div>
            <div className="cta-actions">
              <Link className="button-primary" href="/create">
                Create or clone
              </Link>
              <Link className="button-secondary" href="/top">
                See trending builds
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
