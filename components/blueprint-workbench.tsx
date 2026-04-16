"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CopyButton } from "@/components/copy-button";

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

type Tab = "layout" | "inventory" | "schema" | "string";

export function BlueprintWorkbench({
  blueprint = starterSmeltingBlueprint,
}: BlueprintWorkbenchProps) {
  const [activeTab, setActiveTab] = useState<Tab>("layout");

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

  const tabs: { key: Tab; label: string }[] = [
    { key: "layout", label: "Layout" },
    { key: "inventory", label: "Items" },
    { key: "schema", label: "Schema" },
    { key: "string", label: "String" },
  ];

  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      {/* Header bar */}
      <div className="card" style={{ padding: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <span className="eyebrow">Blueprint workbench</span>
            <h1 style={{ margin: "0.5rem 0 0", fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              {blueprint.label}
            </h1>
            <p className="muted" style={{ margin: "0.5rem 0 0", maxWidth: "44rem", lineHeight: 1.6, fontSize: "0.9rem" }}>
              {blueprint.description}
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
            <span className="blueprint-chip">
              Chars <strong>{blueprint.blueprintString.length}</strong>
            </span>
            <span className="blueprint-chip">
              Entities <strong>{decoded.blueprint.entities.length}</strong>
            </span>
            <span className="blueprint-chip">
              Grid <strong>{width}&times;{height}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="blueprint-summary-grid">
        <div>
          <span>Mode</span>
          <strong>Decode &amp; inspect</strong>
        </div>
        <div>
          <span>Build type</span>
          <strong>Starter smelting lane</strong>
        </div>
        <div>
          <span>Output</span>
          <strong>4 furnaces</strong>
        </div>
        <div>
          <span>Unique items</span>
          <strong>{counts.length}</strong>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="card" style={{ padding: "0" }}>
        <div style={{
          display: "flex",
          borderBottom: "1px solid var(--border)",
          overflow: "auto",
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: "0.6rem 1rem",
                background: activeTab === tab.key ? "var(--bg-inset)" : "transparent",
                border: "none",
                borderBottom: activeTab === tab.key ? "2px solid var(--accent)" : "2px solid transparent",
                color: activeTab === tab.key ? "var(--accent)" : "var(--text-secondary)",
                fontWeight: activeTab === tab.key ? 600 : 400,
                fontSize: "0.85rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{ padding: "1rem" }}>
          {activeTab === "layout" && (
            <div className="blueprint-canvas">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <h2 style={{ margin: 0, fontSize: "1rem" }}>Entity grid &mdash; decoded from blueprint string</h2>
                <span className="blueprint-chip">
                  <span className="status-dot" />
                  Live
                </span>
              </div>
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
                          width={28}
                          height={28}
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
                      width={16}
                      height={16}
                      unoptimized
                    />
                    {entityLabels[name]}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "inventory" && (
            <div>
              <h2 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>Items needed to build this blueprint</h2>
              <p className="muted" style={{ margin: "0 0 0.75rem", fontSize: "0.85rem" }}>Counts derived from entity names in blueprint data.</p>
              <div className="inventory-list">
                {counts.map((item) => (
                  <div className="inventory-item" key={item.name}>
                    <Image
                      src={factorioAssetMap[item.name].src}
                      alt={entityLabels[item.name]}
                      width={28}
                      height={28}
                      unoptimized
                    />
                    <div>
                      <div className="inventory-item__name">{entityLabels[item.name]}</div>
                      <div className="muted" style={{ fontSize: "0.78rem" }}>{item.name}</div>
                    </div>
                    <div className="inventory-item__count">&times;{item.count}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "schema" && (
            <div>
              <h2 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>Decoded schema fields</h2>
              <p className="muted" style={{ margin: "0 0 0.75rem", fontSize: "0.85rem" }}>Practical fields a builder cares about.</p>
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
            </div>
          )}

          {activeTab === "string" && (
            <div className="blueprint-string-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: "0.5rem", flexWrap: "wrap" }}>
                <div>
                  <h2 style={{ margin: 0, fontSize: "1rem" }}>Import-ready blueprint string</h2>
                  <p className="muted" style={{ margin: "0.25rem 0 0", fontSize: "0.85rem" }}>Copy this string and paste it in Factorio with Ctrl+V.</p>
                </div>
                <CopyButton text={blueprint.blueprintString} label="Copy to clipboard" />
              </div>
              <div className="blueprint-string-card__frame">
                <pre>{blueprint.blueprintString}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
