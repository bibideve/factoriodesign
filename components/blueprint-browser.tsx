"use client";

import { useMemo, useState } from "react";

import type { Blueprint } from "@/data/site";
import { BlueprintCard } from "@/components/blueprint-card";

const allDifficulties = ["All", "Starter", "Intermediate", "Mega base"];

type BlueprintBrowserProps = {
  blueprints: Blueprint[];
};

export function BlueprintBrowser({ blueprints }: BlueprintBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const allCategories = useMemo(
    () => ["All", ...new Set(blueprints.map((item) => item.category))],
    [blueprints],
  );

  const visibleBlueprints = useMemo(() => {
    return blueprints.filter((item) => {
      const matchesQuery =
        query.length === 0 ||
        `${item.title} ${item.description} ${item.tags.join(" ")} ${item.author}`
          .toLowerCase()
          .includes(query.toLowerCase());

      const matchesCategory = category === "All" || item.category === category;
      const matchesDifficulty =
        difficulty === "All" || item.difficulty === difficulty;

      return matchesQuery && matchesCategory && matchesDifficulty;
    });
  }, [blueprints, query, category, difficulty]);

  return (
    <div style={{ display: "grid", gap: "1.25rem" }}>
      <div className="card" style={{ padding: "1.25rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "0.9rem",
          }}
        >
          <label style={{ display: "grid", gap: "0.5rem" }}>
            <span className="muted" style={{ fontSize: "0.92rem" }}>
              Search blueprints
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rail hub, smelting, starter mall..."
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "0.5rem" }}>
            <span className="muted" style={{ fontSize: "0.92rem" }}>
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

          <label style={{ display: "grid", gap: "0.5rem" }}>
            <span className="muted" style={{ fontSize: "0.92rem" }}>
              Difficulty
            </span>
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              style={inputStyle}
            >
              {allDifficulties.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <p className="muted" style={{ margin: 0 }}>
            {visibleBlueprints.length} blueprints matched your filters.
          </p>
          <button
            type="button"
            className="button-secondary"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setDifficulty("All");
            }}
            style={{ border: "none", cursor: "pointer" }}
          >
            Reset filters
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

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "0.95rem",
  border: "1px solid rgba(148, 163, 184, 0.16)",
  background: "rgba(15, 23, 42, 0.7)",
  color: "var(--text)",
  padding: "0.95rem 1rem",
};
