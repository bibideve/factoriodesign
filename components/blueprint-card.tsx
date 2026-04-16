"use client";

import Link from "next/link";
import type { Blueprint } from "@/data/site";
import { BlueprintPreview } from "@/components/blueprint-preview";
import { CopyButton } from "@/components/copy-button";

type BlueprintCardProps = {
  blueprint: Blueprint;
};

export function BlueprintCard({ blueprint }: BlueprintCardProps) {
  return (
    <article className="blueprint-card card blueprint-card--clickable">
      <Link href={`/blueprints/${blueprint.id}`} className="blueprint-card__link">
        <BlueprintPreview blueprintString={blueprint.blueprintString} height={100} />

        <div className="blueprint-card__top">
          <div>
            <p className="blueprint-card__category">{blueprint.category}</p>
            <h3>{blueprint.title}</h3>
          </div>
          <div className="blueprint-card__rating">{blueprint.rating.toFixed(1)}</div>
        </div>

        <p className="muted" style={{ margin: 0, fontSize: "0.85rem", lineHeight: 1.6 }}>{blueprint.description}</p>

        <div className="blueprint-card__metrics">
          <div>
            <span>Entities</span>
            <strong>{blueprint.entityCount}</strong>
          </div>
          <div>
            <span>Belt tier</span>
            <strong>{blueprint.beltTier}</strong>
          </div>
          <div>
            <span>Footprint</span>
            <strong>{blueprint.footprint}</strong>
          </div>
          <div>
            <span>Game phase</span>
            <strong>{blueprint.gamePhase}</strong>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", alignItems: "center" }}>
          <span
            style={{
              padding: "0.2rem 0.45rem",
              borderRadius: "3px",
              background: blueprint.gameVersion === "2.0" ? "rgba(74, 158, 255, 0.15)" : "var(--accent-dim)",
              border: `1px solid ${blueprint.gameVersion === "2.0" ? "rgba(74, 158, 255, 0.3)" : "rgba(240, 160, 48, 0.3)"}`,
              color: blueprint.gameVersion === "2.0" ? "var(--blue)" : "var(--accent)",
              fontSize: "0.7rem",
              fontWeight: 700,
              fontFamily: "'SFMono-Regular', Consolas, monospace",
            }}
          >
            v{blueprint.gameVersion}
          </span>
          {blueprint.usesBeacons && (
            <span
              style={{
                padding: "0.2rem 0.45rem",
                borderRadius: "3px",
                background: "rgba(80, 176, 80, 0.12)",
                border: "1px solid rgba(80, 176, 80, 0.25)",
                color: "var(--green)",
                fontSize: "0.7rem",
                fontWeight: 600,
              }}
            >
              Beacons
            </span>
          )}
          {blueprint.usesModules && (
            <span
              style={{
                padding: "0.2rem 0.45rem",
                borderRadius: "3px",
                background: "rgba(180, 130, 255, 0.12)",
                border: "1px solid rgba(180, 130, 255, 0.25)",
                color: "#b482ff",
                fontSize: "0.7rem",
                fontWeight: 600,
              }}
            >
              Modules
            </span>
          )}
        </div>

        <div className="blueprint-card__tags">
          {blueprint.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </Link>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
        <div className="blueprint-card__footer" style={{ display: "flex", gap: "0.75rem" }}>
          <span>By {blueprint.author}</span>
          <span>{blueprint.favorites} fav</span>
        </div>
        <CopyButton text={blueprint.blueprintString} label="Copy" />
      </div>
    </article>
  );
}
