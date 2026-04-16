import { SectionHeading } from "@/components/section-heading";
import { specSections } from "@/data/site";

export default function SpecsPage() {
  return (
    <div className="container section" style={{ display: "grid", gap: "1rem" }}>
      <SectionHeading
        eyebrow="Research notes"
        title="Notes for a community-first Factorio blueprint site"
        description="Reframing the site around how players talk about blueprints: strings, books, imports, library storage, cloning, and sharing."
      />

      <section
        className="card"
        style={{ padding: "1rem", display: "grid", gap: "0.75rem" }}
      >
        <h2 style={{ margin: 0, fontSize: "1.1rem" }}>Research summary</h2>
        <p className="muted" style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.6 }}>
          Factorio players talk about blueprint strings, blueprint books,
          blueprint libraries, copying, and imports. The site should feel like a
          practical community tool for those actions.
        </p>
      </section>

      <section className="grid-auto">
        {specSections.map((section) => (
          <article
            key={section.title}
            className="card"
            style={{ padding: "1rem", display: "grid", gap: "0.6rem" }}
          >
            <h3 style={{ margin: 0, fontSize: "1rem" }}>{section.title}</h3>
            <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.85rem" }}>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section
        className="card"
        style={{ padding: "1rem", display: "grid", gap: "0.6rem" }}
      >
        <h2 style={{ margin: 0, fontSize: "1.1rem" }}>Functional requirements</h2>
        <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.85rem" }}>
          <li>Expose core routes: home, blueprint library, top builds, and a create or clone flow.</li>
          <li>Make blueprint cards metadata rich with category, tags, rating, footprint, throughput, and version.</li>
          <li>Provide live filtering in the library without sacrificing first-render performance.</li>
          <li>Support the sharing loop: inspect a build, clone it, edit notes, save or reshare.</li>
          <li>Document the community-first rationale so the terminology shift is explicit.</li>
        </ul>
      </section>

      <section
        className="card"
        style={{ padding: "1rem", display: "grid", gap: "0.6rem" }}
      >
        <h2 style={{ margin: 0, fontSize: "1.1rem" }}>Technical approach</h2>
        <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.85rem" }}>
          <li>Use Next.js App Router for server-first rendering, clean routing, and strong SEO defaults.</li>
          <li>Keep content and sample blueprint data centralized for future API integration.</li>
          <li>Use small client components only where interactivity adds value.</li>
          <li>Prepare the information model for user accounts, author pages, moderation, and API-backed persistence.</li>
        </ul>
      </section>
    </div>
  );
}
