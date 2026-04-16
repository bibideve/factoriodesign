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
  { href: "/create", label: "Publish" },
  { href: "/specs", label: "Specs" },
];

export const heroStats = [
  { label: "Curated blueprints", value: "1,200+" },
  { label: "Median load time", value: "<1.4s" },
  { label: "Guided publishing steps", value: "4" },
  { label: "Discovery filters", value: "12" },
];

export const features: Feature[] = [
  {
    title: "Discovery first",
    description:
      "Search, tags, blueprint health, and visual cards make it obvious what to import before a player opens the details page.",
    metric: "Fewer dead-end clicks",
  },
  {
    title: "Stronger blueprint trust",
    description:
      "Every entry exposes footprint, throughput, supported game version, rating, and author signals up front.",
    metric: "Better import confidence",
  },
  {
    title: "Fast publishing flow",
    description:
      "A guided form focuses on metadata quality and player readability instead of dumping all inputs into a single page.",
    metric: "Higher-quality submissions",
  },
  {
    title: "Modern visual system",
    description:
      "Custom gradients, glass panels, stronger typography, and dense data cards replace the dated utility-site presentation.",
    metric: "Premium feel without clutter",
  },
];

export const workflow: WorkflowStep[] = [
  {
    step: "01",
    title: "Paste or import blueprint string",
    description:
      "Start from a raw Factorio blueprint string, a saved draft, or a shared starter template.",
  },
  {
    step: "02",
    title: "Add technical metadata",
    description:
      "Describe footprint, throughput, expected inputs, power profile, and compatible game version.",
  },
  {
    step: "03",
    title: "Optimize discoverability",
    description:
      "Choose categories, tags, difficulty, and a concise pitch so players can find the design quickly.",
  },
  {
    step: "04",
    title: "Publish with validation",
    description:
      "Run final checks for missing metadata, then publish to the community feed and trending surfaces.",
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
    title: "Best new publisher",
    emphasis: "CopperCloud",
    detail: "Three compact manufacturing blueprints reached a 4.7+ average rating with clear setup notes.",
  },
  {
    title: "Most copied collection",
    emphasis: "Starter bus essentials",
    detail: "A six-blueprint starter set covering smelting, mall, circuits, power, and train bootstrap.",
  },
];

export const specSections: SpecSection[] = [
  {
    title: "Product strategy",
    items: [
      "Position the site as a premium blueprint platform, not an archive with a search box.",
      "Prioritize clarity around what a blueprint does, how large it is, and whether it is trustworthy.",
      "Balance community contribution with curation so top surfaces stay useful even at scale.",
    ],
  },
  {
    title: "Information architecture",
    items: [
      "Home page explains value proposition, quality signals, workflow, and featured content.",
      "Blueprint library gives fast filtering by category, difficulty, tag, and version compatibility.",
      "Top builds page highlights trending, community favorites, and collection-led discovery.",
      "Publish page uses guided steps so creators provide metadata that improves discovery.",
    ],
  },
  {
    title: "Experience principles",
    items: [
      "Use server-rendered pages for speed and SEO, with client components only where interactivity adds value.",
      "Keep every card scannable with metrics visible before click-through.",
      "Replace generic bootstrap visuals with a tailored sci-fi interface aligned with Factorio themes.",
      "Design for future extensibility: author profiles, comments, collections, moderation, and API-backed persistence.",
    ],
  },
];
