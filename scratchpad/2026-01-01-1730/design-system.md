# Jon Zlotnik Personal Website — Design System

## Overview

A minimalist, dark-themed personal portfolio website designed to showcase projects, blog posts, and photography in a unified filterable feed. The design prioritizes readability, subtle elegance, and ease of contact.

---

## Design Principles

1. **Minimalism First** — Remove everything that doesn't serve a purpose
2. **Content Forward** — The work speaks; the UI gets out of the way
3. **Ambient Depth** — Subtle gradients and shadows create dimension without distraction
4. **Instant Connection** — Primary CTAs are always visible for contact

---

## Color Palette

### Core Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg-primary` | `#0a0a0a` | Main background |
| `--color-bg-secondary` | `#111111` | Card backgrounds, elevated surfaces |
| `--color-bg-tertiary` | `#1a1a1a` | Hover states, subtle highlights |
| `--color-text-primary` | `#ffffff` | Headlines, primary text |
| `--color-text-secondary` | `#a1a1a1` | Body text, descriptions |
| `--color-text-muted` | `#666666` | Metadata, timestamps, labels |
| `--color-border` | `#2a2a2a` | Card borders, dividers |
| `--color-border-subtle` | `#1f1f1f` | Subtle separations |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-accent-blue` | `#4a9eff` | Links, interactive elements |
| `--color-accent-green` | `#34d399` | Success states, active filters |
| `--color-accent-amber` | `#fbbf24` | Warnings, highlights |

### Gradient

```css
--gradient-bg: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(74, 158, 255, 0.08) 0%, transparent 60%);
```

---

## Typography

### Font Stack

```css
--font-display: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-hero` | 4.5rem (72px) | 400 | 1.1 | Hero name |
| `--text-h1` | 2.25rem (36px) | 600 | 1.2 | Section headers |
| `--text-h2` | 1.5rem (24px) | 600 | 1.3 | Card titles |
| `--text-h3` | 1.125rem (18px) | 500 | 1.4 | Subsections |
| `--text-body` | 1rem (16px) | 400 | 1.6 | Body copy |
| `--text-small` | 0.875rem (14px) | 400 | 1.5 | Metadata, tags |
| `--text-xs` | 0.75rem (12px) | 500 | 1.4 | Labels, badges |

### Hero Typography

The hero name uses `Playfair Display` for an elegant, editorial feel:
- Thin weight (400)
- Large tracking (-0.02em)
- Italicized for distinction

Subtitles use Inter with muted color variants for hierarchy.

---

## Spacing System

Based on 4px unit:

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |

---

## Layout

### Container

```css
--container-max: 720px;
--container-padding: 24px;
```

Single-column layout centered for optimal readability.

### Grid

Feed uses a single-column layout on all breakpoints to maintain focus and readability.

### Breakpoints

| Token | Value | Description |
|-------|-------|-------------|
| `--bp-sm` | 640px | Small devices |
| `--bp-md` | 768px | Tablets |
| `--bp-lg` | 1024px | Desktop |
| `--bp-xl` | 1280px | Large desktop |

---

## Components

### Hero Section

Full viewport height with centered content:
- Name in display font
- Role/subtitle in secondary color
- Tertiary subtitle in muted color
- Social icons row
- Primary CTA button ("See My Projects")
- Static scroll indicator

### Social Icons

Circular outlined buttons:
- Size: 48px × 48px
- Border: 1px solid `--color-border`
- Icon size: 20px
- Hover: background fills with `--color-bg-tertiary`

### Filter Pills

Horizontal scrollable row of filter options:
- Implemented as radio button inputs with styled labels
- Padding: 8px 16px
- Border-radius: 9999px (pill)
- Default: transparent with border
- Active: filled background with `--color-text-primary`
- Font: `--text-small`
- Filtering handled via CSS `:checked` pseudo-class (no JavaScript)

### Feed Cards

#### Photo Card (with image)
```
┌─────────────────────────────────┐
│                                 │
│         [Full-bleed Image]      │
│         aspect-ratio: 16/9      │
│                                 │
├─────────────────────────────────┤
│ 📷 Category   ⏱ Date            │
│                                 │
│ Title (h2)                      │
│                                 │
│ Description text that can       │
│ wrap to multiple lines...       │
│                                 │
│ [tag] [tag] [tag]              │
└─────────────────────────────────┘
```

#### Project/Blog Card (no image)
```
┌─────────────────────────────────┐
│ </> Category   ⏱ Date           │
│                                 │
│ Title (h2)                      │
│                                 │
│ Description text that can       │
│ wrap to multiple lines...       │
│                                 │
│ [tag] [tag] [tag]              │
└─────────────────────────────────┘
```

Card Styles:
- Background: `--color-bg-secondary`
- Border: 1px solid `--color-border-subtle`
- Border-radius: 12px
- Overflow: hidden (for images)
- Padding (content area): 24px

### Tags

- Background: transparent
- Border: 1px solid `--color-border`
- Border-radius: 9999px
- Padding: 4px 12px
- Font: `--text-small`
- Color: `--color-text-secondary`

### Buttons

#### Primary Button (CTA)
- Text: "See My Projects"
- Background: transparent
- Border: 1px solid `--color-border`
- Padding: 16px 32px
- Border-radius: 4px
- Text color: `--color-text-primary`
- Hover: background `--color-bg-tertiary`
- Links to main content section via anchor link

#### Icon Button
- Size: 48px × 48px
- Border-radius: 50%
- Border: 1px solid `--color-border`
- Hover: background `--color-bg-tertiary`

---

## Iconography

Using Lucide icons (or similar outlined icon set):
- Stroke width: 1.5px
- Size: 20px default
- Color: `--color-text-secondary`

Key icons:
- `send` — Telegram/Email
- `message-circle` — Chat/WhatsApp
- `github` — GitHub
- `linkedin` — LinkedIn
- `camera` — Photography
- `code` — Projects
- `file-text` — Blog posts
- `clock` — Date/time
- `arrow-down` — Scroll indicator

---

## Motion & Animation

### Transitions

```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
```

### Hover States

- Cards: slight lift with box-shadow
- Buttons: background color fill
- Links: color shift to accent

### Scroll Indicator

Static gradient line (no animation):
- Width: 1px
- Height: 48px
- Background: linear gradient from `--color-text-muted` to transparent
- Positioned at bottom of hero section
- Serves as visual indicator for scrollable content below

### Page Load

Staggered fade-in from bottom:
- Hero elements: 0ms, 100ms, 200ms, 300ms delays
- Feed cards: sequential 50ms delays

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for body text
- Focus states: 2px outline with accent color
- Reduced motion: respect `prefers-reduced-motion`
- Semantic HTML: proper heading hierarchy
- ARIA labels: on icon-only buttons
- Skip link: jump to main content

---

## Content Types

### Project
```yaml
type: project
title: string
description: string
date: date
tags: string[]
link?: url
github?: url
image?: url
```

### Blog Post
```yaml
type: post
title: string
description: string
date: date
tags: string[]
readTime?: string
```

### Photo Story
```yaml
type: photo
title: string
description: string
date: date
tags: string[]
image: url
images?: url[]  # for galleries
camera?: string
lens?: string
```

---

## Filter Logic

CSS-only filtering using radio button inputs and `:checked` pseudo-class:
- `all` — Show everything (default)
- `project` — type === 'project'
- `post` — type === 'post'  
- `photo` — type === 'photo'

Implementation:
- Hidden radio inputs control filter state
- Labels styled as filter pills
- CSS sibling selectors (`~`) show/hide cards based on selected filter
- No JavaScript required

Sort: reverse chronological (newest first)

---

## File Structure

```
/
├── index.html
├── styles.css
└── assets/
    └── images/
```

Note: No JavaScript files required — pure HTML/CSS implementation.

---

## Implementation Notes

1. **Pure HTML/CSS** — No JavaScript required; all functionality handled via CSS
2. **CSS Custom Properties** — All design tokens as CSS variables
3. **CSS-only Filtering** — Radio buttons with `:checked` pseudo-class and sibling selectors
4. **Responsive images** — Use `srcset` and `loading="lazy"`
5. **Smooth scrolling** — Native CSS `scroll-behavior: smooth`
6. **Print styles** — Clean printable version
7. **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation support

---

## Future Considerations

- Dark/light theme toggle
- RSS feed generation
- Search functionality
- Tag filtering within categories
- Reading progress indicator for blog posts
- Lightbox for photo galleries


