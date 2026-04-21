# Factorio Forge

Single Next.js application — a Factorio blueprint discovery and publishing platform. No backend services, databases, or external API dependencies. All content data is static TypeScript in `data/site.ts`.

## Cursor Cloud specific instructions

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Dev server | `npm run dev` | 3000 | Only service needed; hot-reloads on file changes |

### Common commands

See `package.json` scripts:

- **Lint:** `npm run lint` (ESLint 9 with next/core-web-vitals + typescript configs)
- **Build:** `npm run build` (Next.js production build with Turbopack; also runs TypeScript type-checking)
- **Dev:** `npm run dev` (starts Next.js dev server on port 3000)

### Routes

`/` (home), `/blueprints` (browser with filters), `/top` (trending builds), `/create` (publish planner), `/specs` (product strategy)

### Tech stack notes

- Next.js 16 App Router with React 19 and TypeScript 6
- Tailwind CSS v4 via `@tailwindcss/postcss` (PostCSS plugin, not standalone CLI)
- No `.env` files or secrets required
- `package-lock.json` is the lockfile — use `npm` (not pnpm/yarn)
