"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import type { Blueprint } from "@/data/site";
import { BlueprintPreview } from "@/components/blueprint-preview";
import { CopyButton } from "@/components/copy-button";
import {
  decodeBlueprintStringClient,
  getEntityCounts,
  getBlueprintBounds,
  getEntityColor,
  getEntityIcon,
  getEntityLabel,
} from "@/data/blueprint-decode";

type BlueprintDetailProps = {
  blueprint: Blueprint;
};

type Tab = "preview" | "entities" | "string";

export function BlueprintDetail({ blueprint }: BlueprintDetailProps) {
  const [activeTab, setActiveTab] = useState<Tab>("preview");

  const decoded = useMemo(
    () => decodeBlueprintStringClient(blueprint.blueprintString),
    [blueprint.blueprintString],
  );

  const entities = decoded?.blueprint?.entities ?? [];
  const counts = useMemo(() => getEntityCounts(entities), [entities]);
  const bounds = useMemo(() => getBlueprintBounds(entities), [entities]);

  const width = bounds.maxX - bounds.minX + 1;
  const height = bounds.maxY - bounds.minY + 1;

  const tabs: { key: Tab; label: string }[] = [
    { key: "preview", label: "Preview" },
    { key: "entities", label: "Entities" },
    { key: "string", label: "Blueprint string" },
  ];

  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      <Link
        href="/blueprints"
        className="blueprint-detail__back"
      >
        &larr; Back to blueprints
      </Link>

      {/* Header */}
      <div className="card" style={{ padding: "1.25rem" }}>
        <div className="blueprint-detail__header">
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="blueprint-card__category">{blueprint.category}</p>
            <h1 className="blueprint-detail__title">{blueprint.title}</h1>
            <p className="muted" style={{ margin: "0.5rem 0 0", lineHeight: 1.7, fontSize: "0.9rem", maxWidth: "52rem" }}>
              {blueprint.description}
            </p>
          </div>
          <div className="blueprint-detail__rating-block">
            <div className="blueprint-card__rating" style={{ width: "3.5rem", height: "3.5rem", fontSize: "1.25rem" }}>
              {blueprint.rating.toFixed(1)}
            </div>
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
              {blueprint.favorites} favorites
            </span>
          </div>
        </div>
      </div>

      {/* Metadata chips */}
      <div className="blueprint-detail__chips">
        <span className="blueprint-chip">
          Author <strong>{blueprint.author}</strong>
        </span>
        <span className="blueprint-chip">
          Entities <strong>{blueprint.entityCount}</strong>
        </span>
        <span className="blueprint-chip">
          Footprint <strong>{blueprint.footprint}</strong>
        </span>
        <span className="blueprint-chip">
          Belt tier <strong>{blueprint.beltTier}</strong>
        </span>
        <span className="blueprint-chip">
          Throughput <strong>{blueprint.throughput}</strong>
        </span>
        <span className="blueprint-chip">
          Grid <strong>{width}&times;{height}</strong>
        </span>
      </div>

      {/* Metrics row */}
      <div className="blueprint-summary-grid">
        <div>
          <span>Game version</span>
          <strong style={{ color: blueprint.gameVersion === "2.0" ? "var(--blue)" : "var(--accent)" }}>
            Factorio {blueprint.gameVersion}
          </strong>
        </div>
        <div>
          <span>Game phase</span>
          <strong>{blueprint.gamePhase}</strong>
        </div>
        <div>
          <span>Belt tier</span>
          <strong>{blueprint.beltTier}</strong>
        </div>
        <div>
          <span>Beacons</span>
          <strong style={{ color: blueprint.usesBeacons ? "var(--green)" : "var(--text-dim)" }}>
            {blueprint.usesBeacons ? "Yes" : "No"}
          </strong>
        </div>
        <div>
          <span>Modules</span>
          <strong style={{ color: blueprint.usesModules ? "#b482ff" : "var(--text-dim)" }}>
            {blueprint.usesModules ? "Yes" : "No"}
          </strong>
        </div>
        <div>
          <span>Throughput</span>
          <strong>{blueprint.throughput}</strong>
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", alignItems: "center" }}>
        <span
          style={{
            padding: "0.25rem 0.55rem",
            borderRadius: "3px",
            background: blueprint.gameVersion === "2.0" ? "rgba(74, 158, 255, 0.15)" : "var(--accent-dim)",
            border: `1px solid ${blueprint.gameVersion === "2.0" ? "rgba(74, 158, 255, 0.3)" : "rgba(240, 160, 48, 0.3)"}`,
            color: blueprint.gameVersion === "2.0" ? "var(--blue)" : "var(--accent)",
            fontSize: "0.75rem",
            fontWeight: 700,
            fontFamily: "'SFMono-Regular', Consolas, monospace",
          }}
        >
          v{blueprint.gameVersion}
        </span>
        {blueprint.usesBeacons && (
          <span
            style={{
              padding: "0.25rem 0.55rem",
              borderRadius: "3px",
              background: "rgba(80, 176, 80, 0.12)",
              border: "1px solid rgba(80, 176, 80, 0.25)",
              color: "var(--green)",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            Beacons
          </span>
        )}
        {blueprint.usesModules && (
          <span
            style={{
              padding: "0.25rem 0.55rem",
              borderRadius: "3px",
              background: "rgba(180, 130, 255, 0.12)",
              border: "1px solid rgba(180, 130, 255, 0.25)",
              color: "#b482ff",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            Modules
          </span>
        )}
        {blueprint.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "0.25rem 0.55rem",
              borderRadius: "3px",
              background: "var(--bg-inset)",
              border: "1px solid var(--border-subtle)",
              color: "var(--text-secondary)",
              fontSize: "0.75rem",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Tab navigation */}
      <div className="card" style={{ padding: 0 }}>
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
                padding: "0.65rem 1.1rem",
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

        <div style={{ padding: "1.25rem" }}>
          {/* Preview tab */}
          {activeTab === "preview" && (
            <div style={{ display: "grid", gap: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ margin: 0, fontSize: "1rem" }}>In-game layout preview</h2>
                <span className="blueprint-chip">
                  <span className="status-dot" />
                  Decoded
                </span>
              </div>
              <BlueprintPreview blueprintString={blueprint.blueprintString} height={400} />
              <div className="blueprint-detail__legend">
                {counts.map((item) => (
                  <span key={item.name} className="blueprint-detail__legend-item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getEntityIcon(item.name)}
                      alt={getEntityLabel(item.name)}
                      width={16}
                      height={16}
                    />
                    {getEntityLabel(item.name)}
                    <span className="muted">&times;{item.count}</span>
                  </span>
                ))}
              </div>
              {decoded?.blueprint?.label && (
                <div className="schema-item">
                  <div className="schema-item__path">blueprint.label</div>
                  <div className="schema-item__value">{decoded.blueprint.label}</div>
                </div>
              )}
              {decoded?.blueprint?.description && (
                <div className="schema-item">
                  <div className="schema-item__path">blueprint.description</div>
                  <div className="schema-item__value">{decoded.blueprint.description}</div>
                </div>
              )}
            </div>
          )}

          {/* Entities tab */}
          {activeTab === "entities" && (
            <div style={{ display: "grid", gap: "1rem" }}>
              <div>
                <h2 style={{ margin: "0 0 0.25rem", fontSize: "1rem" }}>Entity breakdown</h2>
                <p className="muted" style={{ margin: 0, fontSize: "0.85rem" }}>
                  {counts.length} unique entity type{counts.length !== 1 ? "s" : ""}, {entities.length} total placed
                </p>
              </div>
              <div className="blueprint-detail__entity-grid">
                {counts.map((item) => (
                  <div key={item.name} className="blueprint-detail__entity-item">
                    <div
                      className="blueprint-detail__entity-icon-wrap"
                      style={{ borderColor: getEntityColor(item.name) }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getEntityIcon(item.name)}
                        alt={getEntityLabel(item.name)}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 600, fontSize: "0.875rem" }}>
                        {getEntityLabel(item.name)}
                      </div>
                      <div className="muted" style={{ fontSize: "0.78rem", fontFamily: "'SFMono-Regular', Consolas, monospace" }}>
                        {item.name}
                      </div>
                    </div>
                    <div style={{
                      marginLeft: "auto",
                      color: "var(--accent)",
                      fontWeight: 700,
                      fontFamily: "'SFMono-Regular', Consolas, monospace",
                    }}>
                      &times;{item.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* String tab */}
          {activeTab === "string" && (
            <div className="blueprint-string-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: "0.5rem", flexWrap: "wrap" }}>
                <div>
                  <h2 style={{ margin: 0, fontSize: "1rem" }}>Import-ready blueprint string</h2>
                  <p className="muted" style={{ margin: "0.25rem 0 0", fontSize: "0.85rem" }}>
                    Copy this string and paste it in Factorio with Ctrl+V.
                  </p>
                </div>
                <CopyButton text={blueprint.blueprintString} label="Copy to clipboard" />
              </div>
              <div className="blueprint-string-card__frame" style={{ maxHeight: "400px" }}>
                <pre>{blueprint.blueprintString}</pre>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Copy action */}
      <div className="card" style={{ padding: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: "1rem" }}>Ready to build?</h3>
          <p className="muted" style={{ margin: "0.25rem 0 0", fontSize: "0.85rem" }}>
            Copy the blueprint string and paste it directly in Factorio with Ctrl+V.
          </p>
        </div>
        <CopyButton text={blueprint.blueprintString} label="Copy blueprint string" />
      </div>
    </div>
  );
}
