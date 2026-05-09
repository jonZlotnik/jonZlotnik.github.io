# Content guide

Everything here is authored locally in the repo unless you deliberately wire a CMS.

## Contact links & hero copy

Edit [`src/data/site.ts`](../src/data/site.ts):

- `CONTACT_LINKS` — `{ label, href, visible? }` rows for mail and socials. WhatsApp and Telegram placeholders live here with `visible: false` until you set real `wa.me` / `t.me` URLs; enable them by updating `href` and setting `visible: true` or removing `visible`.
- `SITE_HERO` — eyebrow, intro line, and “Say hello” heading label.
- `HOME_HERO_ASIDE` — small visual card copy beside the hero (no portrait).

The homepage pulls these strings instead of scattering copy in Astro files.

## About & homepage sections

Still in [`src/data/site.ts`](../src/data/site.ts):

- `ABOUT` — section label, headline, body, and portrait `alt` text.
- `HOME_SECTIONS` — labels for Explore, project/writing cards, media blurb, and latest-writing heading.

Portrait file: place under `src/assets/images/` (e.g. `profilepic-meh-2.jpg`) and reference paths that [`OptimizedImage`](../src/components/OptimizedImage.astro) can resolve (`/src/assets/images/…`).

## Projects

Collection: **`projects`**

Path: [`src/content/projects/`](../src/content/projects/). One Markdown file per entry; frontmatter uses [`ProjectMetadata`](../src/schemas/project.ts).

| Field | Notes |
|--------|--------|
| `title`, `summary` | Short grounded text for lists and previews. |
| `draft` | `true` hides from non-draft queries (homepage featured list skips drafts). |
| `tags`, `repo`, `link`, `status` | Optional URLs and taxonomy. |

`/creations` still reads [`src/assets/creations.json`](../src/assets/creations.json); project **collection** feeds the homepage “From projects” block and can seed richer project pages later.

## Writing (`blogs`)

Unchanged Astro collection:

- Paths: [`src/content/blogs/YYYY-MM/slug.md`](../src/content/blogs/).
- Homepage “Recent writing” uses `blogs` excluding drafts.

## Photography (`photoSets`)

Paths: [`src/content/photo-sets/`](../src/content/photo-sets/). Schema: [`PhotoSetMetadata`](../src/schemas/photoSet.ts).

Use `publishBase` as a documented public URL prefix only after assets exist in your published bucket—not for secrets.

## Video clips (`videoClips`)

Paths: [`src/content/video-clips/`](../src/content/video-clips/). Schema: [`VideoClipMetadata`](../src/schemas/videoClip.ts).

`gear` can note Insta360, drone platform, housing, etc.

## Homepage media tiles

Published photo sets / clips automatically fill the textual preview panel on the homepage. The four colored tiles beside it stay as layout placeholders until you wire real thumbnails (see **`docs/media-publishing.md`**).

## Capability tags

`CAPABILITY_TAGS` in [`site.ts`](../src/data/site.ts) exists for understated lists or badges; keep it factual.

## Troubleshooting authoring

| Issue | Likely fix |
|--------|-----------|
| Homepage doesn’t list a project | `draft: false` and valid frontmatter dates if you rely on sorting. |
| Portrait missing | Confirm file sits under `src/assets/images/` and path matches resolver. |
| Collection not found error | Filename must be `.md`/`.mdx`; check [`src/content.config.ts`](../src/content.config.ts) glob bases. |

## Release checklist

- Run `pnpm build` (or `npx astro build`).
- Smoke-test homepage in light vs dark footer theme (system / override).
- Confirm `SITE_URL` for production feeds and canonical URLs.

See **media-publishing.md** for full maintenance / pipeline notes.
