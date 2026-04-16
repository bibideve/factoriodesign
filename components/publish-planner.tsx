"use client";

import { useMemo, useState } from "react";

const categories = [
  "Manufacturing",
  "Smelting",
  "Logistics",
  "Refining",
  "Defense",
  "Base support",
];

const difficulties = ["Starter", "Intermediate", "Mega base"] as const;

type Difficulty = (typeof difficulties)[number];

const validationChecks = [
  {
    label: "Import basics",
    description: "Footprint, throughput, and supported version are easy to scan.",
  },
  {
    label: "Library metadata",
    description: "Category, difficulty, and searchable tags are filled in.",
  },
  {
    label: "Remix notes",
    description: "The summary explains what changed and why someone should keep this clone.",
  },
];

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
  const [title, setTitle] = useState("Beacon-ready iron smelter");
  const [category, setCategory] = useState(categories[1]);
  const [difficulty, setDifficulty] = useState<Difficulty>("Intermediate");
  const [throughput, setThroughput] = useState("8 blue belts");
  const [footprint, setFootprint] = useState("88 x 132");
  const [notes, setNotes] = useState(
    "Train-fed furnace array with expansion slots for beacon upgrades and a clean bus handoff.",
  );

  const completion = useMemo(() => {
    const fields = [title, category, difficulty, throughput, footprint, notes];
    return Math.round((fields.filter((value) => value.trim().length > 0).length / fields.length) * 100);
  }, [title, category, difficulty, throughput, footprint, notes]);

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
          <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Blueprint title</span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Name your blueprint"
            style={inputStyle}
          />
        </label>

        <div className="grid-auto">
          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)} style={inputStyle}>
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Difficulty</span>
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value as Difficulty)}
              style={inputStyle}
            >
              {difficulties.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Throughput</span>
            <input
              value={throughput}
              onChange={(event) => setThroughput(event.target.value)}
              placeholder="e.g. 45/s"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "0.35rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Footprint</span>
            <input
              value={footprint}
              onChange={(event) => setFootprint(event.target.value)}
              placeholder="e.g. 64 x 96"
              style={inputStyle}
            />
          </label>
        </div>

        <label style={{ display: "grid", gap: "0.35rem" }}>
          <span style={{ fontWeight: 600, fontSize: "0.85rem" }}>Build notes</span>
          <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={6} style={inputStyle} />
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
          <span className="eyebrow">Clone preview</span>
          <h3 style={{ margin: "0.25rem 0 0", fontSize: "1.1rem" }}>Library readiness</h3>
          <p className="muted" style={{ margin: 0, fontSize: "0.85rem" }}>
            Save a usable blueprint clone with complete metadata.
          </p>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem", fontWeight: 600, fontSize: "0.85rem" }}>
            <span>Completion</span>
            <span style={{ color: "var(--accent)", fontFamily: "'SFMono-Regular', Consolas, monospace" }}>{completion}%</span>
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
                background: "var(--accent)",
                transition: "width 200ms ease",
              }}
            />
          </div>
        </div>

        <div style={{ display: "grid", gap: "0.5rem" }}>
          {validationChecks.map((check, index) => (
            <div
              key={check.label}
              style={{
                borderRadius: "4px",
                border: "1px solid var(--border-subtle)",
                padding: "0.65rem",
                background: "var(--bg-panel)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                <span
                  style={{
                    display: "inline-grid",
                    placeItems: "center",
                    width: "1.5rem",
                    height: "1.5rem",
                    borderRadius: "3px",
                    background: index + 1 <= Math.round(completion / 34) ? "rgba(80, 176, 80, 0.2)" : "var(--bg-inset)",
                    color: index + 1 <= Math.round(completion / 34) ? "var(--green)" : "var(--text-dim)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    fontFamily: "'SFMono-Regular', Consolas, monospace",
                  }}
                >
                  {index + 1}
                </span>
                <strong style={{ fontSize: "0.85rem" }}>{check.label}</strong>
              </div>
              <p className="muted" style={{ margin: 0, fontSize: "0.8rem", lineHeight: 1.5 }}>
                {check.description}
              </p>
            </div>
          ))}
        </div>

        <button className="button-primary" type="button">
          Save cloned blueprint
        </button>
      </aside>
    </div>
  );
}
