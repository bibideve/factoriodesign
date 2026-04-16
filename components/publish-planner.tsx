"use client";

import { useMemo, useState } from "react";
import { factorioCategories } from "@/data/site";
import { BlueprintPreview } from "@/components/blueprint-preview";
import {
  decodeBlueprintStringClient,
  getEntityCounts,
  getBlueprintBounds,
  getEntityIcon,
  getEntityLabel,
} from "@/data/blueprint-decode";

const gameVersions = ["1.1", "2.0"] as const;
const gamePhases = ["Early game", "Mid game", "Late game", "Megabase"] as const;
const beltTiers = ["Yellow", "Red", "Blue"] as const;

type GamePhase = (typeof gamePhases)[number];
type BeltTier = (typeof beltTiers)[number];

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "4px",
  border: "1px solid var(--border)",
  background: "var(--bg-input)",
  color: "var(--text)",
  padding: "0.6rem 0.75rem",
  fontSize: "0.875rem",
};

export function PublishPlanner() {
  const [blueprintString, setBlueprintString] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(factorioCategories[0]);
  const [gameVersion, setGameVersion] = useState<string>(gameVersions[0]);
  const [gamePhase, setGamePhase] = useState<GamePhase>("Early game");
  const [beltTier, setBeltTier] = useState<BeltTier>("Yellow");
  const [throughput, setThroughput] = useState("");
  const [usesBeacons, setUsesBeacons] = useState(false);
  const [usesModules, setUsesModules] = useState(false);
  const [description, setDescription] = useState("");

  const isValidString = blueprintString.startsWith("0") && blueprintString.length > 10;

  const decoded = useMemo(() => {
    if (!isValidString) return null;
    return decodeBlueprintStringClient(blueprintString);
  }, [blueprintString, isValidString]);

  const entities = decoded?.blueprint?.entities ?? [];
  const counts = useMemo(() => getEntityCounts(entities), [entities]);
  const bounds = useMemo(() => getBlueprintBounds(entities), [entities]);
  const gridWidth = entities.length > 0 ? bounds.maxX - bounds.minX + 1 : 0;
  const gridHeight = entities.length > 0 ? bounds.maxY - bounds.minY + 1 : 0;

  const completion = useMemo(() => {
    const checks = [
      blueprintString.length > 0,
      title.length > 0,
      throughput.length > 0,
      description.length > 0,
    ];
    const filled = checks.filter(Boolean).length;
    return Math.round((filled / checks.length) * 100);
  }, [blueprintString, title, throughput, description]);

  return (
    <div
      className="card"
      style={{
        display: "grid",
        gap: "1rem",
        padding: "1rem",
        gridTemplateColumns: "minmax(0, 1.4fr) minmax(260px, 0.9fr)",
      }}
    >
      <div style={{ display: "grid", gap: "0.75rem" }}>
        <label style={{ display: "grid", gap: "0.35rem" }}>
          <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Blueprint string</span>
          <textarea
            value={blueprintString}
            onChange={(event) => setBlueprintString(event.target.value.trim())}
            placeholder="Paste your Factorio blueprint string here (starts with '0'...)"
            rows={4}
            style={{
              ...inputStyle,
              fontFamily: "'SFMono-Regular', Consolas, monospace",
              fontSize: "0.78rem",
            }}
          />
          {blueprintString.length > 0 && (
            <span style={{
              fontSize: "0.75rem",
              color: isValidString ? "var(--green)" : "var(--red)",
              fontFamily: "'SFMono-Regular', Consolas, monospace",
            }}>
              {isValidString
                ? `Valid format \u2014 ${blueprintString.length} chars`
                : "Invalid \u2014 blueprint strings start with '0'"}
            </span>
          )}
        </label>

        <label style={{ display: "grid", gap: "0.35rem" }}>
          <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Blueprint title</span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. 48-furnace stone smelter array"
            style={inputStyle}
          />
        </label>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)} style={inputStyle}>
              {factorioCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Game version</span>
            <select value={gameVersion} onChange={(event) => setGameVersion(event.target.value)} style={inputStyle}>
              {gameVersions.map((option) => (
                <option key={option} value={option}>Factorio {option}</option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Game phase</span>
            <select value={gamePhase} onChange={(event) => setGamePhase(event.target.value as GamePhase)} style={inputStyle}>
              {gamePhases.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Belt tier</span>
            <select value={beltTier} onChange={(event) => setBeltTier(event.target.value as BeltTier)} style={inputStyle}>
              {beltTiers.map((option) => (
                <option key={option} value={option}>{option} belt</option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Throughput</span>
            <input
              value={throughput}
              onChange={(event) => setThroughput(event.target.value)}
              placeholder="e.g. 2 blue belts iron plates"
              style={inputStyle}
            />
          </label>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={usesBeacons}
              onChange={(event) => setUsesBeacons(event.target.checked)}
              style={{ accentColor: "var(--accent)", width: "1rem", height: "1rem" }}
            />
            <span style={{ fontSize: "0.85rem" }}>Uses beacons</span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={usesModules}
              onChange={(event) => setUsesModules(event.target.checked)}
              style={{ accentColor: "var(--accent)", width: "1rem", height: "1rem" }}
            />
            <span style={{ fontSize: "0.85rem" }}>Uses modules</span>
          </label>
        </div>

        <label style={{ display: "grid", gap: "0.35rem" }}>
          <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Build description</span>
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={4}
            placeholder="Describe what this blueprint does, how to connect it, and any setup notes (e.g. 'feed iron plates from the left, output goes to blue belt on the right')"
            style={inputStyle}
          />
        </label>
      </div>

      <aside
        style={{
          borderRadius: "4px",
          padding: "1rem",
          background: "var(--bg-inset)",
          border: "1px solid var(--border-subtle)",
          display: "grid",
          gap: "0.75rem",
          alignSelf: "start",
        }}
      >
        <div style={{ display: "grid", gap: "0.25rem" }}>
          <span className="eyebrow">Publish preview</span>
          <h3 style={{ margin: "0.25rem 0 0", fontSize: "1.1rem" }}>
            {title || "Untitled blueprint"}
          </h3>
          <p className="muted" style={{ margin: 0, fontSize: "0.8rem" }}>
            {category} &middot; {gamePhase} &middot; {beltTier} belt &middot; v{gameVersion}
          </p>
        </div>

        {/* Live blueprint preview */}
        {isValidString && decoded && entities.length > 0 ? (
          <div style={{ display: "grid", gap: "0.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                Layout preview
              </span>
              <span className="blueprint-chip" style={{ padding: "0.2rem 0.45rem", fontSize: "0.7rem" }}>
                <span className="status-dot" />
                Live
              </span>
            </div>
            <BlueprintPreview blueprintString={blueprintString} height={200} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.35rem" }}>
              <div className="publish-preview__stat">
                <span>Entities</span>
                <strong>{entities.length}</strong>
              </div>
              <div className="publish-preview__stat">
                <span>Types</span>
                <strong>{counts.length}</strong>
              </div>
              <div className="publish-preview__stat">
                <span>Grid</span>
                <strong>{gridWidth}&times;{gridHeight}</strong>
              </div>
            </div>
            {decoded.blueprint.label && (
              <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--accent)", fontFamily: "'SFMono-Regular', Consolas, monospace", fontSize: "0.72rem" }}>
                  label
                </span>{" "}
                {decoded.blueprint.label}
              </div>
            )}
            <div className="publish-preview__entities">
              {counts.slice(0, 8).map((item) => (
                <div key={item.name} className="publish-preview__entity-row">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getEntityIcon(item.name)}
                    alt={getEntityLabel(item.name)}
                    width={20}
                    height={20}
                  />
                  <span>{getEntityLabel(item.name)}</span>
                  <span className="publish-preview__entity-count">&times;{item.count}</span>
                </div>
              ))}
              {counts.length > 8 && (
                <div className="muted" style={{ fontSize: "0.75rem", textAlign: "center", padding: "0.2rem 0" }}>
                  +{counts.length - 8} more entity types
                </div>
              )}
            </div>
          </div>
        ) : isValidString && decoded && entities.length === 0 ? (
          <div
            style={{
              padding: "1rem",
              borderRadius: "4px",
              background: "var(--bg-dark)",
              border: "1px solid var(--border-subtle)",
              textAlign: "center",
              color: "var(--text-dim)",
              fontSize: "0.8rem",
            }}
          >
            Blueprint decoded but contains no entities
          </div>
        ) : (
          <div
            style={{
              padding: "1.5rem 1rem",
              borderRadius: "4px",
              background: "var(--bg-dark)",
              border: "1px dashed var(--border-subtle)",
              textAlign: "center",
              color: "var(--text-dim)",
              fontSize: "0.8rem",
              lineHeight: 1.6,
            }}
          >
            Paste a blueprint string to see a live preview with entity icons and grid layout
          </div>
        )}

        {/* Completion */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem", fontWeight: 600, fontSize: "0.85rem" }}>
            <span>Readiness</span>
            <span style={{ color: completion === 100 ? "var(--green)" : "var(--accent)", fontFamily: "'SFMono-Regular', Consolas, monospace" }}>{completion}%</span>
          </div>
          <div
            style={{
              height: "6px",
              borderRadius: "3px",
              background: "var(--border-subtle)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${completion}%`,
                height: "100%",
                background: completion === 100 ? "var(--green)" : "var(--accent)",
                transition: "width 200ms ease",
              }}
            />
          </div>
        </div>

        {/* Checklist */}
        <div style={{ display: "grid", gap: "0.4rem" }}>
          {[
            { label: "Blueprint string pasted", done: blueprintString.length > 0 && isValidString },
            { label: "Title filled in", done: title.length > 0 },
            { label: "Throughput specified", done: throughput.length > 0 },
            { label: "Description written", done: description.length > 0 },
          ].map((check) => (
            <div
              key={check.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 0.5rem",
                borderRadius: "3px",
                background: "var(--bg-panel)",
                border: "1px solid var(--border-subtle)",
                fontSize: "0.8rem",
              }}
            >
              <span style={{
                width: "1.1rem",
                height: "1.1rem",
                display: "inline-grid",
                placeItems: "center",
                borderRadius: "2px",
                background: check.done ? "rgba(80, 176, 80, 0.2)" : "var(--bg-inset)",
                color: check.done ? "var(--green)" : "var(--text-dim)",
                fontSize: "0.7rem",
                fontWeight: 700,
              }}>
                {check.done ? "\u2713" : "\u00B7"}
              </span>
              <span style={{ color: check.done ? "var(--text)" : "var(--text-secondary)" }}>
                {check.label}
              </span>
            </div>
          ))}
        </div>

        {/* Module/beacon badges */}
        {(usesBeacons || usesModules) && (
          <div style={{ display: "flex", gap: "0.35rem" }}>
            {usesBeacons && (
              <span style={{
                padding: "0.2rem 0.45rem",
                borderRadius: "3px",
                background: "rgba(80, 176, 80, 0.12)",
                border: "1px solid rgba(80, 176, 80, 0.25)",
                color: "var(--green)",
                fontSize: "0.7rem",
                fontWeight: 600,
              }}>Beacons</span>
            )}
            {usesModules && (
              <span style={{
                padding: "0.2rem 0.45rem",
                borderRadius: "3px",
                background: "rgba(180, 130, 255, 0.12)",
                border: "1px solid rgba(180, 130, 255, 0.25)",
                color: "#b482ff",
                fontSize: "0.7rem",
                fontWeight: 600,
              }}>Modules</span>
            )}
          </div>
        )}

        <button
          className="button-primary"
          type="button"
          style={{ opacity: completion < 100 ? 0.5 : 1, cursor: completion < 100 ? "not-allowed" : "pointer" }}
          disabled={completion < 100}
        >
          Publish blueprint
        </button>
      </aside>
    </div>
  );
}
