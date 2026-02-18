import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blogs")).filter(
    (post) => !post.data.draft,
  );
  const cards = (await getCollection("cards")).filter(
    (card) => !card.data.draft,
  );
  const slides = (await getCollection("slides")).filter(
    (slide) => !slide.data.draft,
  );
  const doodles = (await getCollection("doodles")).filter(
    (doodle) => !doodle.data.draft,
  );
  const contents = [...posts, ...cards, ...slides, ...doodles];

  if (!context.site) {
    throw new Error("Expected 'context.site' when generating RSS feed.");
  }

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: contents.map((content) => ({
      ...content.data,
      link: `/${content.collection}/${content.id}`,
    })),
  });
}
