import { PublishPlanner } from "@/components/publish-planner";
import { SectionHeading } from "@/components/section-heading";
import { workflow } from "@/data/site";

export default function CreatePage() {
  return (
    <section className="section">
      <div className="container" style={{ display: "grid", gap: "2rem" }}>
        <SectionHeading
          eyebrow="Publish with structure"
          title="A creator workflow built around blueprint quality"
          description="The old create flow feels like a dump form. This redesign turns publishing into a guided checklist that improves metadata, readability, and trust."
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
