import { PublishPlanner } from "@/components/publish-planner";
import { SectionHeading } from "@/components/section-heading";
import { workflow } from "@/data/site";

export default function CreatePage() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "1rem" }}>
        <SectionHeading
          eyebrow="Create, edit, or clone"
          title="A blueprint flow closer to the in-game toolbox"
          description="Start from a string or book, clean up notes, add practical details, and save your own version."
        />
        <div className="grid-auto">
          {workflow.map((item) => (
            <article
              className="card"
              key={item.step}
              style={{ padding: "1rem", display: "grid", gap: "0.5rem" }}
            >
              <span className="eyebrow" style={{ width: "fit-content" }}>
                Step {item.step}
              </span>
              <h3 style={{ margin: 0, fontSize: "1rem" }}>{item.title}</h3>
              <p className="muted" style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.6 }}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <PublishPlanner />
      </div>
    </section>
  );
}
