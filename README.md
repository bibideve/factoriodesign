# Factorio Forge

Factorio Forge is a ground-up reimagining of the experience currently represented by
[factorioprints.com](https://factorioprints.com/). Instead of behaving like a thin archive
with dated presentation, this version leans into what Factorio players actually do with
blueprints: share strings, organize blueprint books, clone builds, and edit them for their own saves.

## Rewritten site notes

### Goal

Build a clear, community-first Factorio blueprint site that helps players:

- discover strong builds quickly,
- understand blueprint quality before importing,
- clone or edit shared designs with better notes,
- navigate trending builds and blueprint books without friction.

### Positioning

- **Not** just a searchable dump of blueprint strings.
- **Yes** to a community tool with trust signals, strong metadata, and easy create or clone flows.
- Optimize for readability, speed, and “I know this blueprint is worth trying” confidence.

### Core user jobs

1. Browse blueprint categories such as smelting, logistics, manufacturing, defense, and refining.
2. Filter by difficulty, tags, and game version compatibility.
3. Evaluate builds through visible metadata: footprint, throughput, saves, author, rating.
4. Explore trending builds and popular blueprint books without searching from scratch.
5. Clone a blueprint or blueprint book, edit the notes, and share it back with context.

### Information architecture

- **Home**: community value proposition, featured blueprints, create or clone flow, and top content.
- **Blueprints**: interactive discovery page with search and quick filters.
- **Top builds**: trending highlights, remixable creators, and blueprint book collections.
- **Create**: multi-step experience for importing, editing, and saving a blueprint with strong metadata.
- **Notes**: transparent explanation of the community-first language, system design, and UX principles.

### UX principles

- Show meaningful stats on every blueprint card before click-through.
- Favor server-rendered pages for speed and SEO.
- Use client-side interactivity only for high-value tasks like filtering, cloning, and editing.
- Replace generic Bootstrap styling with a custom, high-contrast sci-fi interface.
- Keep the design dense enough for power users while still feeling like a practical builder tool.

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

- A community-first landing page
- Interactive blueprint browser
- Top builds route
- Create or clone planner
- Public-facing research notes page
- Cohesive design system across all routes

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.