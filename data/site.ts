export type Blueprint = {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  tags: string[];
  rating: number;
  saves: string;
  footprint: string;
  gameVersion: string;
  difficulty: "Starter" | "Intermediate" | "Mega base";
  throughput: string;
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
  { href: "/", label: "Overview" },
  { href: "/blueprints", label: "Blueprints" },
  { href: "/top", label: "Top builds" },
  { href: "/create", label: "Create + clone" },
  { href: "/specs", label: "Notes" },
];

export const heroStats = [
  { label: "Blueprint strings shared", value: "1,200+" },
  { label: "Blueprint books tracked", value: "340" },
  { label: "Clone and edit steps", value: "4" },
  { label: "Library filters", value: "12" },
];

export const features: Feature[] = [
  {
    title: "Import with confidence",
    description:
      "Cards surface footprint, throughput, game version, and author notes before you paste anything into your save.",
    metric: "Faster yes or no",
  },
  {
    title: "Blueprint-book friendly",
    description:
      "The site talks the same way players do: blueprint strings, blueprint books, library imports, and reusable build sets.",
    metric: "Matches in-game tools",
  },
  {
    title: "Clone and remix flow",
    description:
      "Start from a shared string or book, tweak the details, and save your own version without losing the original reference.",
    metric: "Better community reuse",
  },
  {
    title: "Readable for builders",
    description:
      "The interface stays technical and dense, but it reads like a workshop for builders instead of a SaaS dashboard.",
    metric: "Tool feel, not business feel",
  },
];

export const workflow: WorkflowStep[] = [
  {
    step: "01",
    title: "Paste a blueprint string or book",
    description:
      "Start from a shared string, a saved draft, or a full blueprint book you want to browse, reuse, or break apart.",
  },
  {
    step: "02",
    title: "Inspect and edit the build",
    description:
      "Check footprint, throughput, version support, and setup notes before you keep it in your library or pass it on.",
  },
  {
    step: "03",
    title: "Clone it into your own variant",
    description:
      "Make a separate copy for your own base plan, update tags and notes, and keep the source build intact for reference.",
  },
  {
    step: "04",
    title: "Share it back with context",
    description:
      "Add the practical details another player needs, then post it back to the feed or drop it into a blueprint book collection.",
  },
];

export const blueprints: Blueprint[] = [
  {
    id: "bp-rail-hub",
    title: "Modular rail megahub",
    category: "Logistics",
    description:
      "A stacker-ready train interchange built for four-direction expansion and fast station duplication.",
    author: "AssemblerAda",
    tags: ["Rails", "Stations", "Scalable", "Late game"],
    rating: 4.9,
    saves: "12.4k",
    footprint: "160 x 192",
    gameVersion: "2.0",
    difficulty: "Mega base",
    throughput: "24 trains / min",
  },
  {
    id: "bp-green-circuits",
    title: "Green circuit compact line",
    category: "Manufacturing",
    description:
      "Starter-to-midgame circuit block with balanced belts, beacon upgrade space, and simple module routing.",
    author: "CopperCloud",
    tags: ["Circuits", "Main bus", "Compact"],
    rating: 4.7,
    saves: "8.1k",
    footprint: "48 x 72",
    gameVersion: "2.0",
    difficulty: "Intermediate",
    throughput: "45/s",
  },
  {
    id: "bp-oil-crack",
    title: "Balanced oil cracking campus",
    category: "Refining",
    description:
      "Light and heavy oil balancing with flare overflow, plastic priority, and clean pipe routing.",
    author: "PipeWizard",
    tags: ["Oil", "Cracking", "Petrochem"],
    rating: 4.8,
    saves: "9.7k",
    footprint: "96 x 128",
    gameVersion: "2.0",
    difficulty: "Intermediate",
    throughput: "3 refinery blocks",
  },
  {
    id: "bp-mall",
    title: "Universal builder mall",
    category: "Base support",
    description:
      "A mall designed around expansion phases with clear requester chest layout and roboport coverage.",
    author: "BotArchitect",
    tags: ["Mall", "Bots", "Starter"],
    rating: 4.6,
    saves: "14.8k",
    footprint: "72 x 90",
    gameVersion: "2.0",
    difficulty: "Starter",
    throughput: "84 recipes",
  },
  {
    id: "bp-smelter",
    title: "Beacon-ready smelter array",
    category: "Smelting",
    description:
      "High-throughput furnace block with clear bus handoff, train unload integration, and beacon lanes.",
    author: "IronTempo",
    tags: ["Smelting", "Steel", "Beaconed"],
    rating: 5,
    saves: "18.2k",
    footprint: "120 x 84",
    gameVersion: "2.0",
    difficulty: "Mega base",
    throughput: "16 blue belts",
  },
  {
    id: "bp-defense",
    title: "Perimeter defense spine",
    category: "Defense",
    description:
      "Laser, artillery, and repair logistics combined into a repeatable wall segment for harsh maps.",
    author: "WallSmith",
    tags: ["Defense", "Artillery", "Late game"],
    rating: 4.5,
    saves: "6.3k",
    footprint: "40 x 200",
    gameVersion: "2.0",
    difficulty: "Intermediate",
    throughput: "Segment-based",
  },
];

export const topBuilds = [
  {
    title: "Most imported this week",
    emphasis: "Beacon-ready smelter array",
    detail: "Saved 3.1k times in the last 7 days thanks to high throughput and clean train handoff.",
  },
  {
    title: "Most remixed author",
    emphasis: "CopperCloud",
    detail: "Players keep cloning these compact manufacturing builds into their own bus and mall layouts.",
  },
  {
    title: "Most copied blueprint book",
    emphasis: "Starter bus essentials",
    detail: "A six-blueprint starter book covering smelting, mall, circuits, power, and the first rail bootstrap.",
  },
];

export const specSections: SpecSection[] = [
  {
    title: "Community language",
    items: [
      "Talk like Factorio players talk: blueprint strings, blueprint books, imports, library storage, and build notes.",
      "Treat the site as a community tool for sharing, cloning, editing, and organizing builds instead of a premium product pitch.",
      "Keep clarity around what a blueprint does, how large it is, and whether it is worth importing into a real save.",
    ],
  },
  {
    title: "Information architecture",
    items: [
      "Home page should explain the sharing loop: discover, inspect, clone, edit, and share again.",
      "Blueprint library should filter by category, difficulty, tag, and version while keeping import-ready details visible.",
      "Top builds should highlight trending blueprints, popular blueprint books, and creators whose work gets remixed often.",
      "Create page should support starting from a string or book, then turning it into your own saved version with better notes.",
    ],
  },
  {
    title: "Experience principles",
    items: [
      "Use server-rendered pages for speed and SEO, with client components only where interactivity adds value.",
      "Keep every card scannable with footprint, throughput, compatibility, and remix context visible before click-through.",
      "Replace generic product language with a practical workshop tone aligned with Factorio communities.",
      "Design for future extensibility: author profiles, comments, blueprint book collections, moderation, and API-backed persistence.",
    ],
  },
];
