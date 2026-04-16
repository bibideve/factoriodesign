import pako from "pako";

export type BlueprintEntity = {
  entity_number: number;
  name: string;
  position: { x: number; y: number };
  direction?: number;
  recipe?: string;
};

export type DecodedBlueprint = {
  blueprint: {
    item: "blueprint";
    label?: string;
    description?: string;
    version: number;
    entities: BlueprintEntity[];
  };
};

export function decodeBlueprintStringClient(
  blueprintString: string,
): DecodedBlueprint | null {
  try {
    const payload = blueprintString.startsWith("0")
      ? blueprintString.slice(1)
      : blueprintString;
    const binaryString = atob(payload);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const inflated = pako.inflate(bytes, { to: "string" });
    return JSON.parse(inflated) as DecodedBlueprint;
  } catch {
    return null;
  }
}

export function getEntityCounts(entities: BlueprintEntity[]) {
  const counts = new Map<string, number>();
  for (const entity of entities) {
    counts.set(entity.name, (counts.get(entity.name) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getBlueprintBounds(entities: BlueprintEntity[]) {
  if (entities.length === 0)
    return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
  const xs = entities.map((e) => Math.floor(e.position.x));
  const ys = entities.map((e) => Math.floor(e.position.y));
  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
  };
}

const entityColorMap: Record<string, string> = {
  "transport-belt": "#f0a030",
  "fast-transport-belt": "#e04040",
  "express-transport-belt": "#4a9eff",
  "underground-belt": "#c88020",
  "fast-underground-belt": "#c04040",
  "express-underground-belt": "#3080e0",
  splitter: "#d09030",
  "fast-splitter": "#c04040",
  "express-splitter": "#3080e0",
  inserter: "#c8a050",
  "fast-inserter": "#4a9eff",
  "long-handed-inserter": "#e04040",
  "stack-inserter": "#50b050",
  "filter-inserter": "#b482ff",
  "bulk-inserter": "#50b050",
  "stone-furnace": "#8a7060",
  "steel-furnace": "#a0a0a0",
  "electric-furnace": "#6090c0",
  "electric-mining-drill": "#50b050",
  "burner-mining-drill": "#c88020",
  "assembling-machine-1": "#609060",
  "assembling-machine-2": "#5080a0",
  "assembling-machine-3": "#6060b0",
  "chemical-plant": "#50a0a0",
  "oil-refinery": "#a07050",
  "small-electric-pole": "#c0a060",
  "medium-electric-pole": "#a0a0a0",
  "big-electric-pole": "#6090c0",
  substation: "#8080c0",
  "wooden-chest": "#a08060",
  "iron-chest": "#909090",
  "steel-chest": "#b0b0b0",
  "logistic-chest-passive-provider": "#e06060",
  "logistic-chest-active-provider": "#b040b0",
  "logistic-chest-requester": "#4080e0",
  "logistic-chest-buffer": "#40c040",
  "logistic-chest-storage": "#c0c040",
  "solar-panel": "#404060",
  accumulator: "#606060",
  "laser-turret": "#e04040",
  "gun-turret": "#a0a060",
  wall: "#808080",
  gate: "#707070",
  "radar": "#509050",
  roboport: "#b0b060",
  beacon: "#f0a030",
  lab: "#8060a0",
  "rocket-silo": "#d0a030",
  "straight-rail": "#707070",
  "curved-rail": "#707070",
  "rail-signal": "#50b050",
  "rail-chain-signal": "#4a9eff",
  "train-stop": "#e0a030",
  locomotive: "#507050",
  "cargo-wagon": "#606060",
  "fluid-wagon": "#506080",
  pipe: "#5080a0",
  "pipe-to-ground": "#406080",
  pump: "#60a0c0",
  "storage-tank": "#708090",
  "heat-exchanger": "#c08040",
  "steam-turbine": "#6080a0",
  "nuclear-reactor": "#c0c040",
  centrifuge: "#a080c0",
  "arithmetic-combinator": "#60a060",
  "decider-combinator": "#a06060",
  "constant-combinator": "#a0a060",
  "power-switch": "#c0a060",
  "programmable-speaker": "#a080a0",
  lamp: "#c0c080",
  "offshore-pump": "#4080c0",
  "boiler": "#c08040",
  "steam-engine": "#608060",
};

export function getEntityColor(name: string): string {
  return entityColorMap[name] ?? "#666";
}

export function getEntityIcon(name: string): string {
  return `/factorio-icons/${name}.png`;
}

const entityLabelMap: Record<string, string> = {
  "transport-belt": "Transport belt",
  "fast-transport-belt": "Fast transport belt",
  "express-transport-belt": "Express transport belt",
  "underground-belt": "Underground belt",
  "fast-underground-belt": "Fast underground belt",
  "express-underground-belt": "Express underground belt",
  splitter: "Splitter",
  "fast-splitter": "Fast splitter",
  "express-splitter": "Express splitter",
  inserter: "Inserter",
  "fast-inserter": "Fast inserter",
  "long-handed-inserter": "Long-handed inserter",
  "stack-inserter": "Stack inserter",
  "filter-inserter": "Filter inserter",
  "bulk-inserter": "Bulk inserter",
  "stone-furnace": "Stone furnace",
  "steel-furnace": "Steel furnace",
  "electric-furnace": "Electric furnace",
  "electric-mining-drill": "Electric mining drill",
  "burner-mining-drill": "Burner mining drill",
  "assembling-machine-1": "Assembling machine 1",
  "assembling-machine-2": "Assembling machine 2",
  "assembling-machine-3": "Assembling machine 3",
  "chemical-plant": "Chemical plant",
  "oil-refinery": "Oil refinery",
  "small-electric-pole": "Small electric pole",
  "medium-electric-pole": "Medium electric pole",
  "big-electric-pole": "Big electric pole",
  substation: "Substation",
  "wooden-chest": "Wooden chest",
  "iron-chest": "Iron chest",
  "steel-chest": "Steel chest",
  "logistic-chest-passive-provider": "Passive provider chest",
  "logistic-chest-active-provider": "Active provider chest",
  "logistic-chest-requester": "Requester chest",
  "logistic-chest-buffer": "Buffer chest",
  "logistic-chest-storage": "Storage chest",
  "solar-panel": "Solar panel",
  accumulator: "Accumulator",
  "laser-turret": "Laser turret",
  "gun-turret": "Gun turret",
  wall: "Wall",
  gate: "Gate",
  radar: "Radar",
  roboport: "Roboport",
  beacon: "Beacon",
  lab: "Lab",
  "rocket-silo": "Rocket silo",
  "straight-rail": "Straight rail",
  "curved-rail": "Curved rail",
  "rail-signal": "Rail signal",
  "rail-chain-signal": "Rail chain signal",
  "train-stop": "Train stop",
  locomotive: "Locomotive",
  "cargo-wagon": "Cargo wagon",
  "fluid-wagon": "Fluid wagon",
  pipe: "Pipe",
  "pipe-to-ground": "Pipe to ground",
  pump: "Pump",
  "storage-tank": "Storage tank",
  "heat-exchanger": "Heat exchanger",
  "steam-turbine": "Steam turbine",
  "nuclear-reactor": "Nuclear reactor",
  centrifuge: "Centrifuge",
  "arithmetic-combinator": "Arithmetic combinator",
  "decider-combinator": "Decider combinator",
  "constant-combinator": "Constant combinator",
  "power-switch": "Power switch",
  "programmable-speaker": "Programmable speaker",
  lamp: "Lamp",
  "offshore-pump": "Offshore pump",
  boiler: "Boiler",
  "steam-engine": "Steam engine",
};

export function getEntityLabel(name: string): string {
  return entityLabelMap[name] ?? name.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}
