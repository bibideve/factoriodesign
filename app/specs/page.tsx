import { SectionHeading } from "@/components/section-heading";
import { specSections } from "@/data/site";

export default function SpecsPage() {
  return (
    <div className="container section" style={{ display: "grid", gap: "1rem" }}>
      <SectionHeading
        eyebrow="About"
        title="How Factorio blueprints work"
        description="Reference for the blueprint string format, game version compatibility, and community sharing standards."
      />

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
        <h2 style={{ margin: 0, fontSize: "1.1rem" }}>Blueprint string format</h2>
        <div style={{ display: "grid", gap: "0.4rem", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
          <p style={{ margin: 0 }}>
            In Factorio, pressing <strong style={{ color: "var(--text)" }}>Ctrl+C</strong> on a selection or clicking{" "}
            <strong style={{ color: "var(--text)" }}>Export to string</strong> in the blueprint editor generates a string you can share.
          </p>
          <p style={{ margin: 0 }}>
            The format is: version byte <code style={{ color: "var(--accent)", fontFamily: "'SFMono-Regular', Consolas, monospace" }}>0</code>{" "}
            + base64-encoded zlib-compressed JSON. The JSON contains entity names, positions, direction, recipe, module inventory,
            wire connections, train schedules, and signal configurations.
          </p>
          <p style={{ margin: 0 }}>
            Blueprint books wrap multiple blueprints into a single string with an index array and labels for each entry.
            They can be nested (books inside books).
          </p>
        </div>
      </section>

      <section
        className="card"
        style={{ padding: "1rem", display: "grid", gap: "0.6rem" }}
      >
        <h2 style={{ margin: 0, fontSize: "1.1rem" }}>Entity types in blueprints</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem" }}>
          {[
            { name: "Assembling machines", desc: "Crafting recipes. Set by the recipe= field." },
            { name: "Inserters", desc: "Move items between entities. Direction and filter matter." },
            { name: "Transport belts", desc: "Yellow (15/s), red (30/s), blue (45/s) items per second." },
            { name: "Furnaces", desc: "Stone, steel, or electric. Smelt ores into plates." },
            { name: "Mining drills", desc: "Electric or burner. Extract raw resources from patches." },
            { name: "Power poles", desc: "Small, medium, big, substation. Define power and circuit networks." },
            { name: "Chests", desc: "Wooden, iron, steel, logistic (passive/active/requester/buffer/storage)." },
            { name: "Train entities", desc: "Locomotives, cargo wagons, fluid wagons, rail signals, stations." },
            { name: "Fluid handling", desc: "Pipes, underground pipes, pumps, storage tanks, refineries." },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                padding: "0.6rem",
                borderRadius: "4px",
                background: "var(--bg-inset)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <strong style={{ fontSize: "0.85rem", display: "block", marginBottom: "0.15rem" }}>{item.name}</strong>
              <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>{item.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
