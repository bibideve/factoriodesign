import { inflateSync } from "node:zlib";

export const demoBlueprintString =
  "0eNqV1s2OmzAQB/BXQXM2UfgMcN1H6LFaVQ6ZTS2ZMbKd3UYR716RtFnU7YB9NNL8GMajv7jBUV9wtIo8dDdQHgfoFs8EaHlEDR1889J6tImyhhI3oPaKzomWhCDghK63avTKEHTwYoZR9j45WaV16k36drEke0zcH0MrwuTN2ASl1df0LAd8uKOWHt0OBKjekIPu+w2cOpPUc3f+OiJ0jyYFkBzmE2rsvVV9OihSdE7vL4VJgKIT/oIum8Sm4bwh/NvlojYPqPVWkhuN9ekRtV8UFwHFihzOE1mUldOrgHe07j7Lqs7bsm2rss2butwLQPLKK3yM5n64/qDLcEQLXbYxFAGjcepxSTeYZ7OrBFyhq3bVNHf7j5dzH/kFKtahIhgq16EyGKrWoSoYqtehOhg6rEOHYKhZh5pgqF2H2mAo269L2f7rxrNXXzJGFmDUG0YeYDQbRhFgPAfCISWTPexUCgaqQqF6A6pDoWYDOoRCzyFxUhOxNTljtBFbwxj5PmJrOCOL2RoOyaNzNGOkIjpIOamMTlJOqqKjlJPq6CzlpEN0mHJSE5+mHPW50x/GnJDS/ie6/0HZOlR8LrYbpNbp87dhNBr5VagZLovj2iX3Ok2/AZUJdq4=";

export type FactorioAsset = {
  label: string;
  src: string;
  group: "machine" | "belt" | "power" | "storage";
};

export const factorioAssetMap: Record<string, FactorioAsset> = {
  "electric-mining-drill": {
    label: "Electric mining drill",
    src: "/factorio-icons/electric-mining-drill.png",
    group: "machine",
  },
  inserter: {
    label: "Inserter",
    src: "/factorio-icons/inserter.png",
    group: "machine",
  },
  "small-electric-pole": {
    label: "Small electric pole",
    src: "/factorio-icons/small-electric-pole.png",
    group: "power",
  },
  "stone-furnace": {
    label: "Stone furnace",
    src: "/factorio-icons/stone-furnace.png",
    group: "machine",
  },
  "transport-belt": {
    label: "Transport belt",
    src: "/factorio-icons/transport-belt.png",
    group: "belt",
  },
  "wooden-chest": {
    label: "Wooden chest",
    src: "/factorio-icons/wooden-chest.png",
    group: "storage",
  },
};

export type DemoEntityName =
  | "electric-mining-drill"
  | "transport-belt"
  | "inserter"
  | "stone-furnace"
  | "wooden-chest"
  | "small-electric-pole";

export type DemoEntity = {
  entity_number: number;
  name: DemoEntityName;
  position: {
    x: number;
    y: number;
  };
};

export type DecodedBlueprint = {
  blueprint: {
    item: "blueprint";
    label: string;
    description: string;
    version: number;
    entities: DemoEntity[];
  };
};

export type BlueprintDemo = {
  label: string;
  description: string;
  blueprintString: string;
};

export const starterSmeltingBlueprint: BlueprintDemo = {
  label: "Starter iron smelting lane",
  description:
    "Decode the string, inspect the layout, and see the exact placeables needed for a simple drill-to-furnace starter line.",
  blueprintString: demoBlueprintString,
};

export const demoBlueprint = starterSmeltingBlueprint;

export const itemIconMap: Record<DemoEntityName, string> = {
  "electric-mining-drill": factorioAssetMap["electric-mining-drill"].src,
  "transport-belt": factorioAssetMap["transport-belt"].src,
  inserter: factorioAssetMap.inserter.src,
  "stone-furnace": factorioAssetMap["stone-furnace"].src,
  "wooden-chest": factorioAssetMap["wooden-chest"].src,
  "small-electric-pole": factorioAssetMap["small-electric-pole"].src,
};

export function decodeBlueprintString(blueprintString: string): DecodedBlueprint {
  const encodedPayload = blueprintString.startsWith("0")
    ? blueprintString.slice(1)
    : blueprintString;
  const compressedBuffer = Buffer.from(encodedPayload, "base64");
  const json = inflateSync(compressedBuffer).toString("utf8");

  return JSON.parse(json) as DecodedBlueprint;
}

export function getEntityCounts(entities: DemoEntity[]) {
  const counts = new Map<DemoEntityName, number>();

  for (const entity of entities) {
    counts.set(entity.name, (counts.get(entity.name) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name));
}

export function getBlueprintBounds(entities: DemoEntity[]) {
  const xs = entities.map((entity) => entity.position.x);
  const ys = entities.map((entity) => entity.position.y);

  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
  };
}
