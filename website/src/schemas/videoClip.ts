import { z } from "astro:content";

export const VideoClipMetadata = z.object({
  title: z.string(),
  summary: z.string(),
  draft: z.boolean().default(false),
  pubDate: z.coerce.date().optional(),
  /** ISO duration string or human note, optional. */
  duration: z.string().optional(),
  /** Where it was captured (optional). */
  location: z.string().optional(),
  /** gear note: drone, Insta360, etc. — free text */
  gear: z.string().optional(),
});

export type VideoClipMeta = z.infer<typeof VideoClipMetadata>;
