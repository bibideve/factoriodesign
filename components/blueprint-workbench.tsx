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
    <div className="tool-shell">
      <section className="tool-topbar card">
        <div>
          <p className="eyebrow">Blueprint workbench</p>
          <h1 className="tool-title">{blueprint.label}</h1>
          <p className="tool-copy">{blueprint.description}</p>
        </div>

        <div className="tool-meta-grid">
          <div className="tool-meta-card">
            <span>Blueprint string</span>
            <strong>{blueprint.blueprintString.length} chars</strong>
          </div>
          <div className="tool-meta-card">
            <span>Entities</span>
            <strong>{decoded.blueprint.entities.length}</strong>
          </div>
          <div className="tool-meta-card">
            <span>Footprint</span>
            <strong>
              {width} x {height}
            </strong>
          </div>
          <div className="tool-meta-card">
            <span>Output lane</span>
            <strong>4 furnaces</strong>
          </div>
        </div>
      </section>

      <div className="tool-grid">
        <section className="card tool-panel">
          <div className="tool-panel__header">
            <div>
              <p className="panel-kicker">Schema view</p>
              <h2>Decoded layout from the blueprint string</h2>
            </div>
            <span className="tool-badge">Vanilla starter line</span>
          </div>

          <div
            className="blueprint-schema"
            style={
              {
                "--schema-columns": width,
                "--schema-rows": height,
              } as React.CSSProperties
            }
          >
            {decoded.blueprint.entities.map((entity) => {
              const column = entity.position.x - bounds.minX + 1;
              const row = entity.position.y - bounds.minY + 1;
              const iconPath = factorioAssetMap[entity.name].src;

              return (
                <div
                  className={`schema-cell schema-cell--${entity.name}`}
                  key={entity.entity_number}
                  style={{ gridColumn: column, gridRow: row }}
                  title={`${entityLabels[entity.name]} (#${entity.entity_number})`}
                >
                  <Image
                    src={iconPath}
                    alt={entityLabels[entity.name]}
                    width={42}
                    height={42}
                    unoptimized
                  />
                </div>
              );
            })}
          </div>

          <div className="schema-legend">
            {legendOrder.map((name) => (
              <div className="schema-legend__item" key={name}>
                <Image
                  src={factorioAssetMap[name].src}
                  alt={entityLabels[name]}
                  width={28}
                  height={28}
                  unoptimized
                />
                <span>{entityLabels[name]}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="card tool-panel">
          <div className="tool-panel__header">
            <div>
              <p className="panel-kicker">Items needed</p>
              <h2>What to place for this blueprint</h2>
            </div>
            <span className="tool-badge">Derived from entity names</span>
          </div>

          <div className="item-list">
            {counts.map((item) => (
              <div className="item-row" key={item.name}>
                <div className="item-row__main">
                  <Image
                    src={factorioAssetMap[item.name].src}
                    alt={entityLabels[item.name]}
                    width={36}
                    height={36}
                    unoptimized
                  />
                  <div>
                    <strong>{entityLabels[item.name]}</strong>
                    <span>{item.name}</span>
                  </div>
                </div>
                <strong className="item-row__count">x{item.count}</strong>
              </div>
            ))}
          </div>

          <div className="tool-summary-grid">
            <div className="summary-box">
              <span>Total placeables</span>
              <strong>{decoded.blueprint.entities.length}</strong>
            </div>
            <div className="summary-box">
              <span>Distinct item types</span>
              <strong>{counts.length}</strong>
            </div>
          </div>
        </section>
      </div>

      <div className="tool-grid">
        <section className="card tool-panel">
          <div className="tool-panel__header">
            <div>
              <p className="panel-kicker">Blueprint string</p>
              <h2>Import-ready source</h2>
            </div>
            <span className="tool-badge">Starts with version byte 0</span>
          </div>
          <pre className="blueprint-string-block">{blueprint.blueprintString}</pre>
        </section>

        <section className="card tool-panel">
          <div className="tool-panel__header">
            <div>
              <p className="panel-kicker">Decoded schema</p>
              <h2>Useful fields from the string</h2>
            </div>
            <span className="tool-badge">zlib + base64 decode</span>
          </div>

          <div className="schema-notes">
            <div className="summary-box">
              <span>Label</span>
              <strong>{decoded.blueprint.label}</strong>
            </div>
            <div className="summary-box">
              <span>Description</span>
              <strong>{decoded.blueprint.description}</strong>
            </div>
            <div className="summary-box">
              <span>Version</span>
              <strong>{decoded.blueprint.version}</strong>
            </div>
          </div>

          <ul className="decoded-list">
            <li>
              The layout uses entity positions from the decoded JSON instead of a
              decorative landing-page mock.
            </li>
            <li>
              Item counts are computed from entity names in the blueprint data,
              so the materials panel stays in sync with the schema view.
            </li>
            <li>
              Real Factorio icons are used for drills, belts, inserters,
              furnaces, poles, and the output chest.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
