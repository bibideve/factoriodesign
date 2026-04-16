export type Blueprint = {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  tags: string[];
  rating: number;
  favorites: string;
  footprint: string;
  gameVersion: "1.1" | "2.0";
  gamePhase: "Early game" | "Mid game" | "Late game" | "Megabase";
  beltTier: "Yellow" | "Red" | "Blue";
  entityCount: number;
  usesBeacons: boolean;
  usesModules: boolean;
  throughput: string;
  blueprintString: string;
};

export type Feature = {
  title: string;
  description: string;
  metric: string;
};

export type WorkflowStep = {
  step: string;
  title: string;
  description: string;
};

export type SpecSection = {
  title: string;
  items: string[];
};

export const navLinks = [
  { href: "/", label: "Workbench" },
  { href: "/blueprints", label: "Blueprints" },
  { href: "/top", label: "Top builds" },
  { href: "/create", label: "Publish" },
  { href: "/specs", label: "About" },
];

import { demoBlueprintString } from "@/data/blueprint-demo";

export const factorioCategories = [
  "Smelting",
  "Green circuits",
  "Red circuits",
  "Blue circuits",
  "Science",
  "Oil processing",
  "Power",
  "Trains",
  "Balancers",
  "Defense",
  "Mining",
  "Logistics",
  "Mall",
  "Tileable",
  "Nuclear",
];

export const heroStats = [
  { label: "Blueprints shared", value: "2,400+" },
  { label: "Blueprint books", value: "580" },
  { label: "Active builders", value: "890" },
  { label: "Factorio versions", value: "1.1 & 2.0" },
];

export const features: Feature[] = [
  {
    title: "See before you paste",
    description:
      "Entity count, belt tier, beacon usage, production ratios, and footprint are shown before you import into your save.",
    metric: "Know what you're building",
  },
  {
    title: "Real blueprint strings",
    description:
      "Every blueprint on the site is a real Factorio blueprint string. Copy it, paste it in-game with Ctrl+V, and place it.",
    metric: "Direct game import",
  },
  {
    title: "Filter by game phase",
    description:
      "Find blueprints for early game bus setups, mid game expansions, late game beaconed builds, or megabase city blocks.",
    metric: "Every stage of play",
  },
  {
    title: "Decode any string",
    description:
      "Paste any blueprint string from the game or from another site. The workbench decodes it, shows the entity grid, and counts every item you need to place it.",
    metric: "Full string inspection",
  },
];

export const workflow: WorkflowStep[] = [
  {
    step: "01",
    title: "Copy your blueprint string from Factorio",
    description:
      "Open your blueprint in-game, click \"Export to string\", or use Ctrl+C on the blueprint icon. The string starts with '0' followed by base64-encoded zlib data.",
  },
  {
    step: "02",
    title: "Paste the string on the publish page",
    description:
      "The site decodes the string, extracts entity positions, counts every item type, and shows the grid layout so you can verify it looks right.",
  },
  {
    step: "03",
    title: "Add category, game version, and build notes",
    description:
      "Pick the right category (smelting, circuits, trains, etc.), belt tier, game version (1.1 or 2.0), and write setup notes other players will need.",
  },
  {
    step: "04",
    title: "Share it with the community",
    description:
      "Your blueprint shows up in the library with all metadata visible. Other players can search for it, check the details, copy the string, and import it directly.",
  },
];

export const blueprints: Blueprint[] = [
  {
    id: "bp-4-lane-balancer",
    title: "4-to-4 lane balancer",
    category: "Balancers",
    description:
      "Fully balanced 4-lane belt balancer. Each input distributes evenly to all 4 outputs. Compact tileable design using only splitters and undergrounds.",
    author: "Nilaus",
    tags: ["Balancer", "Belt", "Compact", "Tileable"],
    rating: 4.9,
    favorites: "6.2k",
    footprint: "7 x 11",
    gameVersion: "1.1",
    gamePhase: "Early game",
    beltTier: "Yellow",
    entityCount: 28,
    usesBeacons: false,
    usesModules: false,
    throughput: "4 belts in / 4 belts out",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-green-circuit-beaconed",
    title: "12-beacon green circuit build",
    category: "Green circuits",
    description:
      "Beaconed green circuit production using 12 beacons per assembler. Speed Module 3 in beacons, Productivity Module 3 in assemblers. Outputs to blue belt.",
    author: "KatherineOfSky",
    tags: ["Circuits", "Beaconed", "Megabase", "Blue belt"],
    rating: 4.8,
    favorites: "11.3k",
    footprint: "30 x 18",
    gameVersion: "1.1",
    gamePhase: "Megabase",
    beltTier: "Blue",
    entityCount: 156,
    usesBeacons: true,
    usesModules: true,
    throughput: "1 blue belt green circuits",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-starter-smelter",
    title: "48-furnace stone smelter array",
    category: "Smelting",
    description:
      "Yellow belt smelter with 48 stone furnaces for iron or copper. Direct insertion from belt to furnace. No modules, no beacons. Fits early game ore output.",
    author: "Tuplex",
    tags: ["Smelting", "Starter", "Stone furnace", "Yellow belt"],
    rating: 4.7,
    favorites: "14.5k",
    footprint: "14 x 52",
    gameVersion: "1.1",
    gamePhase: "Early game",
    beltTier: "Yellow",
    entityCount: 198,
    usesBeacons: false,
    usesModules: false,
    throughput: "2 yellow belts iron/copper plates",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-oil-cracking",
    title: "Advanced oil processing with cracking",
    category: "Oil processing",
    description:
      "Full oil processing setup with heavy-to-light and light-to-petroleum cracking. Circuit-controlled to prevent petroleum backup. Includes solid fuel production.",
    author: "Xterminator",
    tags: ["Oil", "Cracking", "Circuits", "Petrochem"],
    rating: 4.6,
    favorites: "9.8k",
    footprint: "42 x 36",
    gameVersion: "1.1",
    gamePhase: "Mid game",
    beltTier: "Red",
    entityCount: 312,
    usesBeacons: false,
    usesModules: true,
    throughput: "5 refineries, ~900 petroleum/s",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-rail-intersection",
    title: "4-way rail intersection with signals",
    category: "Trains",
    description:
      "Standard 4-way intersection for 2-lane rail networks. Properly signaled with chain signals on entries and rail signals on exits. Supports left-hand drive.",
    author: "Nilaus",
    tags: ["Rails", "Intersection", "Signals", "LHD"],
    rating: 4.9,
    favorites: "18.7k",
    footprint: "22 x 22",
    gameVersion: "1.1",
    gamePhase: "Mid game",
    beltTier: "Yellow",
    entityCount: 96,
    usesBeacons: false,
    usesModules: false,
    throughput: "4-direction, 2-lane",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-nuclear-2x2",
    title: "2x2 nuclear reactor (480 MW)",
    category: "Nuclear",
    description:
      "2x2 nuclear reactor layout with heat exchangers and steam turbines. Kovarex enrichment included. Self-contained fuel cell production and used fuel cell reprocessing.",
    author: "JD-Plays",
    tags: ["Nuclear", "Power", "Kovarex", "Endgame"],
    rating: 4.7,
    favorites: "8.1k",
    footprint: "68 x 54",
    gameVersion: "1.1",
    gamePhase: "Late game",
    beltTier: "Red",
    entityCount: 724,
    usesBeacons: false,
    usesModules: true,
    throughput: "480 MW continuous",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-science-red-green",
    title: "Red + green science starter",
    category: "Science",
    description:
      "Produces 45 red and 45 green science per minute using 5 assemblers each. Gear and copper cable production integrated. Direct belt feed from main bus.",
    author: "Tuplex",
    tags: ["Science", "Starter", "Main bus", "Compact"],
    rating: 4.5,
    favorites: "7.4k",
    footprint: "22 x 18",
    gameVersion: "1.1",
    gamePhase: "Early game",
    beltTier: "Yellow",
    entityCount: 84,
    usesBeacons: false,
    usesModules: false,
    throughput: "45/min red + 45/min green",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-solar-ratio",
    title: "Perfect ratio solar + accumulator field",
    category: "Power",
    description:
      "0.84 ratio solar panel to accumulator tileable blueprint. Roboport in center for automated construction. Includes radar for map coverage.",
    author: "KatherineOfSky",
    tags: ["Solar", "Power", "Tileable", "Bots"],
    rating: 4.8,
    favorites: "12.9k",
    footprint: "50 x 50",
    gameVersion: "1.1",
    gamePhase: "Late game",
    beltTier: "Yellow",
    entityCount: 486,
    usesBeacons: false,
    usesModules: false,
    throughput: "~42 MW per tile",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-city-block",
    title: "Megabase city block template",
    category: "Trains",
    description:
      "Standard city block with 4-way intersections, train stops, and roboport grid. Empty interior for any production. Supports 1-4 train lengths.",
    author: "Nilaus",
    tags: ["City block", "Megabase", "Trains", "Template"],
    rating: 5.0,
    favorites: "22.1k",
    footprint: "100 x 100",
    gameVersion: "2.0",
    gamePhase: "Megabase",
    beltTier: "Blue",
    entityCount: 412,
    usesBeacons: false,
    usesModules: false,
    throughput: "Template (varies by fill)",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-laser-turret-wall",
    title: "Laser turret defense wall segment",
    category: "Defense",
    description:
      "Repeatable wall segment with laser turrets, dragon's teeth, and repair bots. Self-powered with solar panels. Snap together for continuous perimeter.",
    author: "Xterminator",
    tags: ["Defense", "Laser", "Wall", "Tileable"],
    rating: 4.4,
    favorites: "5.6k",
    footprint: "12 x 32",
    gameVersion: "1.1",
    gamePhase: "Mid game",
    beltTier: "Yellow",
    entityCount: 148,
    usesBeacons: false,
    usesModules: false,
    throughput: "24 laser turrets per segment",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-starter-mall",
    title: "Early game starter mall",
    category: "Mall",
    description:
      "Produces all essential early game items: belts, inserters, assemblers, miners, power poles, pipes, and ammo. Passive provider chests for bot pickup.",
    author: "Tuplex",
    tags: ["Mall", "Starter", "Essential", "Bots"],
    rating: 4.6,
    favorites: "16.3k",
    footprint: "36 x 28",
    gameVersion: "1.1",
    gamePhase: "Early game",
    beltTier: "Yellow",
    entityCount: 264,
    usesBeacons: false,
    usesModules: false,
    throughput: "~30 different items",
    blueprintString: demoBlueprintString,
  },
  {
    id: "bp-red-circuit-beaconed",
    title: "Beaconed red circuit production",
    category: "Red circuits",
    description:
      "8-beacon red circuit (advanced circuit) setup. Includes copper cable and green circuit subfactories. Productivity 3 in assemblers, Speed 3 in beacons.",
    author: "JD-Plays",
    tags: ["Red circuits", "Beaconed", "Megabase", "Integrated"],
    rating: 4.7,
    favorites: "7.9k",
    footprint: "44 x 26",
    gameVersion: "1.1",
    gamePhase: "Megabase",
    beltTier: "Blue",
    entityCount: 238,
    usesBeacons: true,
    usesModules: true,
    throughput: "1 blue belt red circuits",
    blueprintString: demoBlueprintString,
  },
];

export const topBuilds = [
  {
    title: "Most favorited this week",
    emphasis: "Megabase city block template",
    author: "Nilaus",
    detail: "22.1k favorites. The standard city block for train-based megabases with 4-way intersections and roboport grid.",
    stat: "22.1k",
    statLabel: "favorites",
  },
  {
    title: "Highest rated",
    emphasis: "4-to-4 lane balancer",
    author: "Nilaus",
    detail: "Perfect 4.9 rating. The most reliable 4-lane balancer design, works from yellow to blue belts without modification.",
    stat: "4.9",
    statLabel: "rating",
  },
  {
    title: "Most downloaded for 2.0",
    emphasis: "Space Age starter book",
    author: "KatherineOfSky",
    detail: "Updated for Factorio 2.0 Space Age expansion. Covers Nauvis bootstrapping through first rocket with quality modules.",
    stat: "3.8k",
    statLabel: "downloads",
  },
];

export const specSections: SpecSection[] = [
  {
    title: "Blueprint format",
    items: [
      "Factorio blueprints are exported as strings starting with version byte '0', followed by base64-encoded zlib-compressed JSON.",
      "The JSON contains entity positions, recipe assignments, signal configurations, train schedules, and module loadouts.",
      "Blueprint books group multiple blueprints into a single shareable string with an index and labels for each entry.",
    ],
  },
  {
    title: "Game versions",
    items: [
      "Factorio 1.1 is the current stable release. Most existing blueprints target this version.",
      "Factorio 2.0 (Space Age) adds quality modules, elevated rails, new planets, and reworked oil processing.",
      "Some 1.1 blueprints work in 2.0 but may need adjustments for recipe or entity changes.",
    ],
  },
  {
    title: "Community standards",
    items: [
      "Include belt tier, beacon count, module types, and production ratio in the description so players know what they're importing.",
      "Specify whether the blueprint is standalone or requires external inputs (e.g., main bus feed, train delivery).",
      "Mark the game version clearly. A 2.0 blueprint will error when imported into a 1.1 save.",
      "For tileable designs, explain snap direction and spacing so players can tile correctly.",
    ],
  },
];
