import type { Blueprint } from "@/data/site";

type BlueprintCardProps = {
  blueprint: Blueprint;
};

export function BlueprintCard({ blueprint }: BlueprintCardProps) {
  return (
    <article className="blueprint-card card">
      <div className="blueprint-card__top">
        <div>
          <p className="blueprint-card__category">{blueprint.category}</p>
          <h3>{blueprint.title}</h3>
        </div>
        <div className="blueprint-card__rating">{blueprint.rating.toFixed(1)}</div>
      </div>

      <p className="muted">{blueprint.description}</p>

      <div className="blueprint-card__metrics">
        <div>
          <span>Throughput</span>
          <strong>{blueprint.throughput}</strong>
        </div>
        <div>
          <span>Footprint</span>
          <strong>{blueprint.footprint}</strong>
        </div>
        <div>
          <span>Version</span>
          <strong>{blueprint.gameVersion}</strong>
        </div>
        <div>
          <span>Difficulty</span>
          <strong>{blueprint.difficulty}</strong>
        </div>
      </div>

      <div className="blueprint-card__tags">
        {blueprint.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="blueprint-card__footer">
        <span>By {blueprint.author}</span>
        <span>{blueprint.saves} saves</span>
      </div>
    </article>
  );
}
