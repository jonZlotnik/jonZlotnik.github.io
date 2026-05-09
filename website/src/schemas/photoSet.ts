import { z } from "astro:content";

export const PhotoSetMetadata = z.object({
  title: z.string(),
  summary: z.string(),
  draft: z.boolean().default(false),
  /** When the set was prepared or shot (optional). */
  pubDate: z.coerce.date().optional(),
  location: z.string().optional(),
  /** Public URL prefix after R2/sync publish (bucket path or CDN base). Document in frontmatter notes only — no secrets. */
  publishBase: z.string().optional(),
});

export type PhotoSetMeta = z.infer<typeof PhotoSetMetadata>;
