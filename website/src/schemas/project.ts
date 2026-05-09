import { z } from "astro:content";

export const ProjectMetadata = z.object({
  title: z.string(),
  /** One or two grounded sentences shown in previews. */
  summary: z.string(),
  draft: z.boolean().default(false),
  pubDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  link: z.string().url().optional(),
  repo: z.string().url().optional(),
  status: z.enum(["idea", "experiment", "active", "paused", "done"]).optional(),
});

export type ProjectMeta = z.infer<typeof ProjectMetadata>;
