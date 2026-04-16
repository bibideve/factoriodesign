import { PublishPlanner } from "@/components/publish-planner";
import { SectionHeading } from "@/components/section-heading";
import { workflow } from "@/data/site";

export default function CreatePage() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "2rem" }}>
        <SectionHeading
          eyebrow="Create, edit, or clone"
          title="A blueprint flow that feels closer to the in-game toolbox"
          description="Start from a blueprint string or a blueprint book, clean up the notes, add the practical details, and save your own version without turning the whole page into product-speak."
        />
        <div className="grid-auto">
          {workflow.map((item) => (
            <article
              className="card"
              key={item.step}
              style={{ padding: "1.5rem", display: "grid", gap: "0.8rem" }}
            >
              <span
                className="eyebrow"
                style={{ width: "fit-content", color: "#fde68a", borderColor: "rgba(245, 158, 11, 0.22)" }}
              >
                Step {item.step}
              </span>
              <h3 style={{ margin: 0, fontSize: "1.2rem" }}>{item.title}</h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7 }}>
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
