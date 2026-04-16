import { SectionHeading } from "@/components/section-heading";
import { specSections } from "@/data/site";

export default function SpecsPage() {
  return (
    <div className="container section" style={{ display: "grid", gap: "1.5rem" }}>
      <SectionHeading
        eyebrow="Research notes"
        title="Notes for a community-first Factorio blueprint site"
        description="These notes reframe the site around the way players actually talk about blueprints: strings, books, imports, library storage, cloning, and sharing."
      />

      <section
        className="card"
        style={{
          padding: "1.5rem",
          display: "grid",
          gap: "1rem",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.35rem" }}>Research summary</h2>
        <p className="muted" style={{ margin: 0, lineHeight: 1.7 }}>
          Factorio players tend to talk about blueprint strings, blueprint
          books, blueprint libraries, copying, and imports. The site should
          feel like a practical community tool for those actions, not a polished
          business product wrapped around them.
        </p>
      </section>

      <section className="grid-auto">
        {specSections.map((section) => (
          <article
            key={section.title}
            className="card"
            style={{
              padding: "1.5rem",
              display: "grid",
              gap: "0.9rem",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{section.title}</h3>
            <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#cbd5e1", lineHeight: 1.8 }}>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section
        className="card"
        style={{
          padding: "1.5rem",
          display: "grid",
          gap: "0.9rem",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.35rem" }}>Functional requirements</h2>
        <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#cbd5e1", lineHeight: 1.8 }}>
          <li>Expose core routes: home, blueprint library, top builds, and a create or clone flow.</li>
          <li>Make blueprint cards metadata rich, with category, tags, rating, footprint, throughput, and version info visible.</li>
          <li>Provide live filtering in the library without sacrificing first-render performance.</li>
          <li>Support the common sharing loop: inspect a build, clone it, edit the notes, and save or reshare it.</li>
          <li>Document the community-first rationale in a dedicated notes page so the terminology shift is explicit.</li>
        </ul>
      </section>

      <section
        className="card"
        style={{
          padding: "1.5rem",
          display: "grid",
          gap: "0.9rem",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.35rem" }}>Technical approach</h2>
        <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#cbd5e1", lineHeight: 1.8 }}>
          <li>Use Next.js App Router for server-first rendering, clean routing, and strong SEO defaults.</li>
          <li>Keep content and sample blueprint data centralized so future API integration is straightforward.</li>
          <li>Use small client components only where user input materially improves browsing, cloning, or editing.</li>
          <li>Prepare the information model for future user accounts, author pages, moderation, blueprint book collections, and saved library items.</li>
        </ul>
      </section>
    </div>
  );
}
