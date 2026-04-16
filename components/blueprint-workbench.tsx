"use client";

import Image from "next/image";
import { useMemo } from "react";

import {
  type BlueprintDemo,
  decodeBlueprintString,
  starterSmeltingBlueprint,
  getBlueprintBounds,
  getEntityCounts,
  type DemoEntityName,
  factorioAssetMap,
} from "@/data/blueprint-demo";

type BlueprintWorkbenchProps = {
  blueprint?: BlueprintDemo;
};

const entityLabels: Record<DemoEntityName, string> = {
  "electric-mining-drill": "Electric mining drill",
  "transport-belt": "Transport belt",
  inserter: "Inserter",
  "stone-furnace": "Stone furnace",
  "wooden-chest": "Wooden chest",
  "small-electric-pole": "Small electric pole",
};

const legendOrder: DemoEntityName[] = [
  "electric-mining-drill",
  "stone-furnace",
  "inserter",
  "transport-belt",
  "small-electric-pole",
  "wooden-chest",
];

export function BlueprintWorkbench({
  blueprint = starterSmeltingBlueprint,
}: BlueprintWorkbenchProps) {
  const decoded = useMemo(
    () => decodeBlueprintString(blueprint.blueprintString),
    [blueprint.blueprintString],
  );

  const counts = useMemo(
    () => getEntityCounts(decoded.blueprint.entities),
    [decoded.blueprint.entities],
  );

  const bounds = useMemo(
    () => getBlueprintBounds(decoded.blueprint.entities),
    [decoded.blueprint.entities],
  );

  const width = bounds.maxX - bounds.minX + 1;
  const height = bounds.maxY - bounds.minY + 1;

  return (
    <div className="workbench-grid">
      <div className="workbench-main">
        <section className="card tool-card blueprint-toolbar">
          <div className="blueprint-toolbar__header">
            <div>
              <p className="eyebrow">Blueprint workbench</p>
              <h1>{blueprint.label}</h1>
              <p className="muted" style={{ margin: "1rem 0 0", maxWidth: "46rem", lineHeight: 1.75 }}>
                {blueprint.description}
              </p>
            </div>
            <div className="blueprint-toolbar__meta">
              <span className="blueprint-chip">
                String <strong>{blueprint.blueprintString.length}</strong>
              </span>
              <span className="blueprint-chip">
                Entities <strong>{decoded.blueprint.entities.length}</strong>
              </span>
              <span className="blueprint-chip">
                Footprint <strong>{width}x{height}</strong>
              </span>
            </div>
          </div>

          <div className="blueprint-summary-grid">
            <div>
              <span>Workbench mode</span>
              <strong>Decode and inspect</strong>
            </div>
            <div>
              <span>Build type</span>
              <strong>Starter smelting lane</strong>
            </div>
            <div>
              <span>Output lane</span>
              <strong>4 furnaces</strong>
            </div>
            <div>
              <span>Item types</span>
              <strong>{counts.length}</strong>
            </div>
          </div>
        </section>

        <section className="card tool-card">
          <div className="blueprint-layout-card__header">
            <div>
              <p className="eyebrow">Schema view</p>
              <h2>Decoded layout from the blueprint string</h2>
              <p className="muted">Entity positions come straight from the decoded JSON payload.</p>
            </div>
            <span className="blueprint-chip">
              <span className="status-dot" />
              Live grid
            </span>
          </div>

          <div className="blueprint-canvas">
            <div
              className="blueprint-canvas__grid"
              style={{
                gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`,
              }}
            >
              {Array.from({ length: width * height }, (_, index) => {
                const x = (index % width) + bounds.minX;
                const y = Math.floor(index / width) + bounds.minY;
                const entity = decoded.blueprint.entities.find(
                  (entry) => entry.position.x === x && entry.position.y === y,
                );

                if (!entity) {
                  return <div className="blueprint-canvas__cell blueprint-canvas__empty" key={`${x}-${y}`} />;
                }

                const asset = factorioAssetMap[entity.name];
                const entityClass =
                  asset.group === "belt"
                    ? "entity-belt"
                    : asset.group === "power"
                      ? "entity-power"
                      : asset.group === "storage"
                        ? "entity-output"
                        : "entity-machine";

                return (
                  <div className="blueprint-canvas__cell" key={entity.entity_number}>
                    <div className={`blueprint-entity ${entityClass}`}>
                      <Image
                        src={asset.src}
                        alt={entityLabels[entity.name]}
                        width={32}
                        height={32}
                        unoptimized
                      />
                      <span>{entityLabels[entity.name]}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="blueprint-canvas__legend">
              {legendOrder.map((name) => (
                <span key={name}>
                  <Image
                    src={factorioAssetMap[name].src}
                    alt={entityLabels[name]}
                    width={18}
                    height={18}
                    unoptimized
                  />
                  {entityLabels[name]}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="workbench-side">
        <section className="card tool-card">
          <div className="inventory-card__header">
            <div>
              <p className="eyebrow">Items needed</p>
              <h2>What to place for this blueprint</h2>
              <p className="muted">Counts are derived from entity names inside the blueprint data.</p>
            </div>
          </div>

          <div className="inventory-list">
            {counts.map((item) => (
              <div className="inventory-item" key={item.name}>
                <Image
                  src={factorioAssetMap[item.name].src}
                  alt={entityLabels[item.name]}
                  width={32}
                  height={32}
                  unoptimized
                />
                <div>
                  <div className="inventory-item__name">{entityLabels[item.name]}</div>
                  <div className="muted">{item.name}</div>
                </div>
                <div className="inventory-item__count">x{item.count}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="card tool-card blueprint-string-card">
          <div className="toolbar-block__header">
            <div>
              <p className="eyebrow">Blueprint string</p>
              <h2>Import-ready source</h2>
              <p className="muted">Version byte 0 + base64 + zlib payload.</p>
            </div>
          </div>
          <div className="blueprint-string-card__frame">
            <pre>{blueprint.blueprintString}</pre>
          </div>
        </section>

        <section className="card tool-card">
          <div className="schema-card__header">
            <div>
              <p className="eyebrow">Decoded schema</p>
              <h2>Useful fields from the string</h2>
              <p className="muted">The viewer exposes the practical fields a builder cares about first.</p>
            </div>
          </div>

          <div className="schema-list">
            <div className="schema-item">
              <div className="schema-item__path">blueprint.label</div>
              <div className="schema-item__value">{decoded.blueprint.label}</div>
            </div>
            <div className="schema-item">
              <div className="schema-item__path">blueprint.description</div>
              <div className="schema-item__value">{decoded.blueprint.description}</div>
            </div>
            <div className="schema-item">
              <div className="schema-item__path">blueprint.version</div>
              <div className="schema-item__value">{decoded.blueprint.version}</div>
            </div>
            <div className="schema-item">
              <div className="schema-item__path">blueprint.entities.length</div>
              <div className="schema-item__value">{decoded.blueprint.entities.length}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
