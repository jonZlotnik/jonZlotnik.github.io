import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { BlogMetadata } from "./schemas/blog";
import { CardMetadata } from "./schemas/card";
import { DoodleMetadata } from "./schemas/doodle";
import { PhotoSetMetadata } from "./schemas/photoSet";
import { ProjectMetadata } from "./schemas/project";
import { SlideMetadata } from "./schemas/slide";
import { VideoClipMetadata } from "./schemas/videoClip";

const blogs = defineCollection({
  loader: glob({
    base: "./src/content/blogs",
    pattern: "**/[0-9][0-9][0-9][0-9]-[0-9][0-9]/*.{md,mdx}",
  }),
  schema: BlogMetadata,
});

const cards = defineCollection({
  loader: glob({ base: "./src/content/cards", pattern: "**/*.{md,mdx}" }),
  schema: CardMetadata,
});

const slides = defineCollection({
  loader: glob({ base: "./src/content/slides", pattern: "**/*.{md,mdx}" }),
  schema: SlideMetadata,
});

const doodles = defineCollection({
  loader: glob({ base: "./src/content/doodles", pattern: "**/*.{md,mdx}" }),
  schema: DoodleMetadata,
});

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: ProjectMetadata,
});

const photoSets = defineCollection({
  loader: glob({ base: "./src/content/photo-sets", pattern: "**/*.{md,mdx}" }),
  schema: PhotoSetMetadata,
});

const videoClips = defineCollection({
  loader: glob({ base: "./src/content/video-clips", pattern: "**/*.{md,mdx}" }),
  schema: VideoClipMetadata,
});

export const collections = {
  blogs,
  cards,
  slides,
  doodles,
  projects,
  photoSets,
  videoClips,
};
