"use client";

import { useMemo, useState } from "react";

import type { Blueprint } from "@/data/site";
import { BlueprintCard } from "@/components/blueprint-card";

const allGamePhases = ["All", "Early game", "Mid game", "Late game", "Megabase"];
const allGameVersions = ["All", "1.1", "2.0"];

type BlueprintBrowserProps = {
  blueprints: Blueprint[];
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "4px",
  border: "1px solid var(--border)",
  background: "var(--bg-input)",
  color: "var(--text)",
  padding: "0.6rem 0.75rem",
  fontSize: "0.875rem",
};

export function BlueprintBrowser({ blueprints }: BlueprintBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [gamePhase, setGamePhase] = useState("All");
  const [gameVersion, setGameVersion] = useState("All");

  const allCategories = useMemo(
    () => ["All", ...new Set(blueprints.map((item) => item.category))],
    [blueprints],
  );

  const visibleBlueprints = useMemo(() => {
    return blueprints.filter((item) => {
      const matchesQuery =
        query.length === 0 ||
        `${item.title} ${item.description} ${item.tags.join(" ")} ${item.author} ${item.category}`
          .toLowerCase()
          .includes(query.toLowerCase());

      const matchesCategory = category === "All" || item.category === category;
      const matchesPhase = gamePhase === "All" || item.gamePhase === gamePhase;
      const matchesVersion = gameVersion === "All" || item.gameVersion === gameVersion;

      return matchesQuery && matchesCategory && matchesPhase && matchesVersion;
    });
  }, [blueprints, query, category, gamePhase, gameVersion]);

  return (
    <div style={{ display: "grid", gap: "0.75rem" }}>
      <div className="card" style={{ padding: "1rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "0.75rem",
          }}
        >
          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
              Search blueprints
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Smelter, green circuits, rail intersection..."
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
              Category
            </span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              style={inputStyle}
            >
              {allCategories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
              Game phase
            </span>
            <select
              value={gamePhase}
              onChange={(event) => setGamePhase(event.target.value)}
              style={inputStyle}
            >
              {allGamePhases.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
              Version
            </span>
            <select
              value={gameVersion}
              onChange={(event) => setGameVersion(event.target.value)}
              style={inputStyle}
            >
              {allGameVersions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div
          style={{
            marginTop: "0.75rem",
            display: "flex",
            justifyContent: "space-between",
            gap: "0.75rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <p className="muted" style={{ margin: 0, fontSize: "0.85rem" }}>
            {visibleBlueprints.length} blueprint{visibleBlueprints.length !== 1 ? "s" : ""} found
          </p>
          <button
            type="button"
            className="button-secondary compact-button"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setGamePhase("All");
              setGameVersion("All");
            }}
            style={{ cursor: "pointer" }}
          >
            Clear filters
          </button>
        </div>
      </div>

      <div className="grid-auto">
        {visibleBlueprints.map((item) => (
          <BlueprintCard key={item.id} blueprint={item} />
        ))}
      </div>
    </div>
  );
}
