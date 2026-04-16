"use client";

import { useMemo } from "react";
import {
  decodeBlueprintStringClient,
  getBlueprintBounds,
  getEntityColor,
} from "@/data/blueprint-decode";

type BlueprintPreviewProps = {
  blueprintString: string;
  height?: number;
};

export function BlueprintPreview({
  blueprintString,
  height = 120,
}: BlueprintPreviewProps) {
  const grid = useMemo(() => {
    const decoded = decodeBlueprintStringClient(blueprintString);
    if (!decoded?.blueprint?.entities?.length) return null;

    const entities = decoded.blueprint.entities;
    const bounds = getBlueprintBounds(entities);
    const w = bounds.maxX - bounds.minX + 1;
    const h = bounds.maxY - bounds.minY + 1;

    const entityMap = new Map<string, string>();
    for (const e of entities) {
      const key = `${Math.floor(e.position.x)},${Math.floor(e.position.y)}`;
      entityMap.set(key, e.name);
    }

    return { bounds, w, h, entityMap };
  }, [blueprintString]);

  if (!grid) {
    return (
      <div
        style={{
          height,
          borderRadius: "4px",
          background: "var(--bg-inset)",
          border: "1px solid var(--border-subtle)",
          display: "grid",
          placeItems: "center",
          color: "var(--text-dim)",
          fontSize: "0.75rem",
        }}
      >
        No preview available
      </div>
    );
  }

  const { bounds, w, h, entityMap } = grid;
  const padding = 4;
  const viewW = w + padding * 2;
  const viewH = h + padding * 2;

  return (
    <div
      style={{
        height,
        borderRadius: "4px",
        background: "#141414",
        border: "1px solid var(--border-subtle)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <svg
        viewBox={`0 0 ${viewW} ${viewH}`}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block" }}
      >
        {/* Grid lines */}
        {Array.from({ length: viewW + 1 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={i}
            y1={0}
            x2={i}
            y2={viewH}
            stroke="#2a2a2a"
            strokeWidth={0.05}
          />
        ))}
        {Array.from({ length: viewH + 1 }, (_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i}
            x2={viewW}
            y2={i}
            stroke="#2a2a2a"
            strokeWidth={0.05}
          />
        ))}
        {/* Entities */}
        {Array.from(entityMap.entries()).map(([key, name]) => {
          const [xStr, yStr] = key.split(",");
          const x = Number(xStr) - bounds.minX + padding;
          const y = Number(yStr) - bounds.minY + padding;
          const color = getEntityColor(name);
          return (
            <rect
              key={key}
              x={x}
              y={y}
              width={0.9}
              height={0.9}
              rx={0.1}
              fill={color}
              opacity={0.85}
            />
          );
        })}
      </svg>
    </div>
  );
}
