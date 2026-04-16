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
    label: "Technical summary",
    description: "Footprint, throughput, and supported version are present.",
  },
  {
    label: "Discovery metadata",
    description: "Category, difficulty, and searchable tags are filled in.",
  },
  {
    label: "Player readability",
    description: "The blueprint pitch explains why someone should import it.",
  },
];

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
        gap: "1.5rem",
        padding: "1.5rem",
        gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.9fr)",
      }}
    >
      <div style={{ display: "grid", gap: "1rem" }}>
        <label style={{ display: "grid", gap: "0.5rem" }}>
          <span style={{ fontWeight: 700 }}>Blueprint title</span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Name your blueprint"
            style={inputStyle}
          />
        </label>

        <div className="grid-auto">
          <label style={{ display: "grid", gap: "0.5rem" }}>
            <span style={{ fontWeight: 700 }}>Category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)} style={inputStyle}>
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: "grid", gap: "0.5rem" }}>
            <span style={{ fontWeight: 700 }}>Difficulty</span>
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

          <label style={{ display: "grid", gap: "0.5rem" }}>
            <span style={{ fontWeight: 700 }}>Throughput</span>
            <input
              value={throughput}
              onChange={(event) => setThroughput(event.target.value)}
              placeholder="e.g. 45/s"
              style={inputStyle}
            />
          </label>

          <label style={{ display: "grid", gap: "0.5rem" }}>
            <span style={{ fontWeight: 700 }}>Footprint</span>
            <input
              value={footprint}
              onChange={(event) => setFootprint(event.target.value)}
              placeholder="e.g. 64 x 96"
              style={inputStyle}
            />
          </label>
        </div>

        <label style={{ display: "grid", gap: "0.5rem" }}>
          <span style={{ fontWeight: 700 }}>Blueprint pitch</span>
          <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={7} style={inputStyle} />
        </label>
      </div>

      <aside
        className="panel"
        style={{
          borderRadius: "1.35rem",
          padding: "1.25rem",
          display: "grid",
          gap: "1rem",
          alignSelf: "start",
        }}
      >
        <div style={{ display: "grid", gap: "0.35rem" }}>
          <span className="eyebrow">Validation preview</span>
          <h3 style={{ margin: 0, fontSize: "1.35rem" }}>Submission readiness</h3>
          <p className="muted" style={{ margin: 0 }}>
            Publishing is framed as a guided quality check, not just a raw textarea.
          </p>
        </div>

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem", fontWeight: 700 }}>
            <span>Completion</span>
            <span>{completion}%</span>
          </div>
          <div
            style={{
              height: "0.7rem",
              borderRadius: "999px",
              background: "rgba(148, 163, 184, 0.12)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${completion}%`,
                height: "100%",
                background: "linear-gradient(90deg, #38bdf8, #22c55e)",
              }}
            />
          </div>
        </div>

        <div style={{ display: "grid", gap: "0.75rem" }}>
          {validationChecks.map((check, index) => (
            <div
              key={check.label}
              style={{
                borderRadius: "1rem",
                border: "1px solid rgba(148, 163, 184, 0.12)",
                padding: "0.9rem",
                background: "rgba(15, 23, 42, 0.38)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
                <span
                  style={{
                    display: "inline-grid",
                    placeItems: "center",
                    width: "1.8rem",
                    height: "1.8rem",
                    borderRadius: "999px",
                    background: index + 1 <= Math.round(completion / 34) ? "rgba(34, 197, 94, 0.22)" : "rgba(148, 163, 184, 0.12)",
                    color: index + 1 <= Math.round(completion / 34) ? "#86efac" : "#cbd5e1",
                    fontWeight: 700,
                  }}
                >
                  {index + 1}
                </span>
                <strong>{check.label}</strong>
              </div>
              <p className="muted" style={{ margin: 0, lineHeight: 1.6 }}>
                {check.description}
              </p>
            </div>
          ))}
        </div>

        <button className="button-primary" type="button">
          Publish blueprint
        </button>
      </aside>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  borderRadius: "0.95rem",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  background: "rgba(15, 23, 42, 0.6)",
  color: "#e2e8f0",
  padding: "0.95rem 1rem",
} satisfies React.CSSProperties;
