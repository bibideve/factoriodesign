# Factorio Forge

Factorio Forge is a ground-up reimagining of the experience currently represented by
[factorioprints.com](https://factorioprints.com/). Instead of behaving like a thin archive
with dated presentation, this version treats blueprint discovery and publishing as a product.

## Rewritten product specs

### Goal

Build a premium, high-clarity Factorio blueprint platform that helps players:

- discover strong builds quickly,
- understand blueprint quality before importing,
- publish their own designs with better metadata,
- navigate trending and curated content without friction.

### Product positioning

- **Not** just a searchable dump of blueprint strings.
- **Yes** to a modern discovery platform with trust signals, curation, and guided publishing.
- Optimize for readability, speed, and “I know this blueprint is worth trying” confidence.

### Core user jobs

1. Browse blueprint categories such as smelting, logistics, manufacturing, defense, and refining.
2. Filter by difficulty, tags, and game version compatibility.
3. Evaluate builds through visible metadata: footprint, throughput, saves, author, rating.
4. Explore trending and top-performing builds without searching from scratch.
5. Publish a blueprint through a structured workflow that improves listing quality.

### Information architecture

- **Home**: value proposition, featured blueprints, product benefits, workflow, and top content.
- **Blueprints**: interactive discovery page with search and quick filters.
- **Top builds**: trending highlights, community winners, and curated collections.
- **Publish**: guided multi-step experience for submitting a blueprint with strong metadata.
- **Specs**: transparent explanation of the new strategy, system design, and UX principles.

### UX principles

- Show meaningful stats on every blueprint card before click-through.
- Favor server-rendered pages for speed and SEO.
- Use client-side interactivity only for high-value workflows like filtering and planning.
- Replace generic Bootstrap styling with a custom, high-contrast sci-fi interface.
- Keep the design dense enough for power users but polished enough to feel premium.

### Visual direction

- Dark industrial sci-fi palette aligned with Factorio themes.
- Strong gradient accents, glass panels, and data-forward cards.
- Large typography for hierarchy, compact metadata for scanning, and clear calls to action.

### Technical approach

- **Framework**: Next.js App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 imported through global CSS, plus custom semantic utility classes
- **Architecture**: mostly server-rendered pages with small client islands for interaction
- **Content model**: central typed data structures for blueprint records, workflows, and spec sections

## What was built

- A polished marketing + product shell
- Interactive blueprint browser
- Top builds route
- Guided publishing planner
- Public-facing specs page
- Cohesive design system across all routes

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.