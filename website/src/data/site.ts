/**
 * Personal homepage copy and links — keep tone modest; edit here (see docs/content.md).
 */

export interface ContactLink {
  label: string;
  /** mailto:, https:, or site-relative paths */
  href: string;
  /**
   * When `false`, the link is omitted from the hero and footer (for placeholders).
   * Omit or set `true` once `href` is a real destination.
   */
  visible?: boolean;
}

export const SITE_HERO_NAME = "Jon Zlotnik";

export const SITE_HERO = {
  eyebrow: "Personal field notes",
  name: SITE_HERO_NAME,
  intro:
    "I build software, take photographs, write occasionally, and dive when I can.",
  sayHelloHeading: "Say hello",
};

/**
 * Featured contact row in the hero and footer — update hrefs here.
 * Entries with `visible: false` stay in source for WhatsApp/Telegram until real URLs exist.
 */
export const CONTACT_LINKS: ContactLink[] = [
  { label: "Email", href: "mailto:jon@jzlot.ca" },
  { label: "GitHub", href: "https://github.com/jonZlotnik" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jon-zlotnik" },
  // Replace REPLACE_WITH_NUMBER with E.164 digits only (no +), then set visible: true (or remove visible).
  {
    label: "WhatsApp",
    href: "https://wa.me/REPLACE_WITH_NUMBER",
    visible: false,
  },
  // Replace REPLACE_WITH_USERNAME with your Telegram handle (no @), then set visible: true (or remove visible).
  {
    label: "Telegram",
    href: "https://t.me/REPLACE_WITH_USERNAME",
    visible: false,
  },
];

export const THEME = {
  storageKey: "site-theme-preference",
  modes: ["system", "light", "dark"] as const,
  /** Button/label hints for footer control */
  label: "Appearance",
};

export type ThemeMode = (typeof THEME.modes)[number];

export const ABOUT = {
  sectionLabel: "About",
  headline: "I like building useful systems and keeping a life around them.",
  body: "Most days I’m somewhere between software, security, system architecture, and tools for making work feel lighter. Away from the keyboard, I’m usually collecting frames, writing notes, or looking for the next dive.",
  portraitAlt: `${SITE_HERO_NAME} — portrait`,
};

/** Short list for badges or indexes (understated, not positioning copy). */
export const CAPABILITY_TAGS = [
  "software",
  "security",
  "photography",
  "writing",
] as const;

export const HOME_HERO_ASIDE = {
  panelSummary:
    "Software, photographs, dive notes, and things I keep learning from.",
  currentLabel: "Current",
  panelTitle: "Notes from the edges",
};

export const HOME_SECTIONS = {
  explore: {
    label: "Explore",
    headline: "A few reasons to stay past hello.",
  },
  projectsCard: {
    href: "/creations",
    kicker: "Projects",
    title: "Current builds and experiments",
    description:
      "Personal software, tools, and small systems with just enough context to understand what they do.",
    linkText: "View projects →",
  },
  writingCard: {
    href: "/blogs",
    kicker: "Writing",
    title: "Notes, essays, and field reports",
    description:
      "Occasional writing about software, learning, travel, and anything that keeps returning.",
    linkText: "Read notes →",
  },
  media: {
    label: "Photography and scuba",
    headline: "A quiet gallery for land, water, and motion.",
    body: "The visual side can stay curated: a few strong frames, short dive clips, locations, and notes rather than a heavy archive.",
    /** Fallback when collections are empty — see docs/media-publishing.md */
    placeholdersNote:
      "Previews hook up once media is synced to the site bucket.",
  },
  latestWriting: {
    sectionLabel: "Latest",
    headline: "Recent writing",
    allLinkHref: "/blogs",
    allLinkText: "All writing →",
  },
};
