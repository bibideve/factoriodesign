import { SectionHeading } from "@/components/section-heading";
import { specSections } from "@/data/site";

export default function SpecsPage() {
  return (
    <div className="container section" style={{ display: "grid", gap: "1.5rem" }}>
      <SectionHeading
        eyebrow="Rewritten product spec"
        title="Specs for a modern replacement of Factorio Prints"
        description="These specs translate the original site's core purpose into a clearer product strategy, stronger UX, and a more extensible technical approach."
      />

      <section
        className="card"
        style={{
          padding: "1.5rem",
          display: "grid",
          gap: "1rem",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.35rem" }}>Reference site summary</h2>
        <p className="muted" style={{ margin: 0, lineHeight: 1.7 }}>
          The original site is focused on discovering, browsing, and publishing Factorio blueprints. It offers routes for general blueprint browsing, top entries, tag-led exploration, and creation, but presents them with a relatively thin shell and a dated visual system.
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
          <li>Expose core routes: home, blueprint library, top builds, and publish flow.</li>
          <li>Make blueprint cards metadata rich, with category, tags, rating, footprint, and throughput visible.</li>
          <li>Provide live filtering in the library without sacrificing first-render performance.</li>
          <li>Explain the publishing experience as a staged workflow with validation and readiness checks.</li>
          <li>Document the product direction in a dedicated specs page so the redesign rationale is transparent.</li>
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
          <li>Use small client components only where user input materially improves the experience.</li>
          <li>Prepare the information model for future user accounts, author pages, moderation, and collections.</li>
        </ul>
      </section>
    </div>
  );
}
