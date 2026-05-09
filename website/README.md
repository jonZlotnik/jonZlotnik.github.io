# Jon Zlotnik — personal site (Astro)

Personal homepage and publishing stack on Astro 5 + React islands where needed.

## Goals

Local-first authoring in Markdown (`src/content/`), light homepage data in [`src/data/site.ts`](src/data/site.ts), and a practical path for photos/video through a bucket when ready.

See:

- **[`docs/content.md`](docs/content.md)** — contacts, homepage copy, projects, writing, media collections.
- **[`docs/media-publishing.md`](docs/media-publishing.md)** — Syncthing vs public R2, Darktable, Insta360/drone workflows, ops checklist.

## Development

Prerequisites: Node 20+, recommended `pnpm` (repository uses lockfile tooling).

```bash
pnpm install
pnpm dev       # wraps build + astro dev per package.json
```

Other scripts:

```bash
pnpm build     # runs search index pre-step then astro build
pnpm check     # astro check + biome — may warn on existing Tailwind/Biome config
```

### Environment variables (names only)

| Name | Purpose |
|------|---------|
| `SITE_URL` | Canonical site URL for Astro `site` meta and feeds (defaults to localhost in [`src/env.ts`](src/env.ts)). |
| Deploy provider secrets | Set in Vercel/hosting dashboard as required for previews and CI (exact keys depend on your pipeline). |

No secret values belong in Markdown or commits.

## Validation

Prefer `pnpm build` or `npx astro build`. If Biome conflicts with Tailwind/CSS in your tree, isolate with `npx astro build` for HTML/content validation.
