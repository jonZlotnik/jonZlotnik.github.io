# Media publishing

Practical separation between working files and anything you actually ship on the internet.

## Storage model

| Layer | Role | Typical tools |
|--------|-------|----------------|
| **Syncthing (private)** | Working library: RAWs, Insta360 files, timelines, unstabilized reels, Lightroom/Darktable sidecars—never expose this tree publicly. |
| **Cloudflare R2 (published)** | Public bucket or CDN-fronted prefixes for resized JPEG/WebP derivatives, stabilized clips, thumbnails. Paths referenced from frontmatter or site config—not secrets here. |

**Rule of thumb:** Syncthing mirrors effort; R2 mirrors output.

Related content fields:

- Projects collection entry `media-publish-pipeline` is the living scratchpad summary.
- `photoSets[].publishBase` / future video URL fields carry **sanitized URL prefixes**, not credentials.

### Next step — homepage tiles

[`src/pages/index.astro`](../src/pages/index.astro) still renders decorative tiles for visuals. Replacing those with thumbnails means:

1. Produce stable public URLs after upload.
2. Extend schemas (e.g. `coverSrc`, aspect hints) conservatively.
3. Render [`OptimizedImage`](../src/components/OptimizedImage.astro) or plain `<img>` when remote patterns are allowed.

Document any new env keys (names only) in **README**.

## Photography — Darktable

High-level repeatable flow:

1. Import into the Syncthing-backed library folder.
2. Use Darktable modules for exposure/color; prefer non-destructive edits.
3. Export web-sized derivatives (`~1600–2400px long edge JPEG or WebP`) into a **`publish/` staging directory** audited before sync to R2.
4. Optionally generate square social crops as separate filenames.

Maintain a checklist file (even plain text) naming export presets so you repeat the same output each time.

## Video — Insta360 / drones

Suggested pipeline:

| Step | Detail |
|------|-------|
| Ingest | Copy off cards into dated Syncthing folders; keep originals until exports verify. |
| Desktop software | Stitch / reframe Insta360 in vendor app or workflow you trust; export `H.264/H.265` mezzanine + proxy if needed for web. |
| Drone clips | Normalize color once; stabilize only when it improves readability. |
| Captions/metadata | Minimal frontmatter (`gear`, `location`, ISO duration string) beats marketing blurbs. |
| Publish | Upload finished objects to R2 via `wrangler` or your scripted bridge; retain CLI profile names—not secret contents—in docs only. |

## Environment variables / secrets — names only

| Name space | Typical meaning |
|-----------|----------------|
| Cloudflare account / bucket API tokens | Stored in CI or local shell profile; referenced by ingest scripts—not committed. |
| `SITE_URL` | Astro canonical base (already used in [`src/env.ts`](../src/env.ts)). |

## Runbooks & maintenance

| Cadence | Action |
|---------|-------|
| After photo trip | Dedupe ingest folder, tag Darktable rejects, backlog exports. |
| Before deploy | Confirm no Syncthing paths leak into Markdown; rerun `pnpm build`. |
| Bucket ACL review | Quarterly check R2/object policies vs personal comfort. |

## Troubleshooting

| Symptom | Check |
|---------|-------|
| Large repo size | Exclude RAW/Insv from git; Syncthing only. |
| Wrong colors web vs editor | Embed export profile assumptions in Darktable presets. |
| CORS previews broken | CDN/R2 CORS entries for preview origin—not code secrets. |

## Release checklist additions (media-heavy weeks)

1. Derivatives regenerated with known presets?
2. R2 uploads idempotent script (overwrite vs versioning)?
3. Homepage preview copy matches live URLs?

Pair with **README** general checklist when shipping site changes.
