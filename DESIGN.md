# Design System: Pallavi Raiturkar

## Overview

A quiet, white, single-page portfolio. Plain typography and generous space carry the engineering and research record; a handwritten script voice for the name and section titles, a pixel-art portrait, and a gallery of original artwork add personality. Everything lives in one self-contained `index.html` (inline CSS and JS, no build step).

## Colors

- **Ink** `#161616`: primary text.
- **Soft** `#5c5c5c`: secondary text, nav, descriptions.
- **Faint** `#9a9a9a`: metadata (dates, orgs, tech stack), footer.
- **Line** `#ececec`: 1px row rules.
- **Background** `#fff`. Gallery tiles sit on a warm placeholder `#f2efe9`; the lightbox backdrop is near-white `rgba(250,249,246,.97)`.

No accent color: the artwork provides the color.

## Typography

- **Hand** (Caveat 400): name (`clamp(3.25rem, 8vw, 4.75rem)`) and section titles (2.4rem). Used only for headings.
- **Body** (Schibsted Grotesk 400/500, system-ui fallback): everything else, 1.6 line height. Row titles 500 at 1.05rem; metadata 0.825-0.875rem.

## Layout

- Single column, max width 64rem, fluid side padding `clamp(1.5rem, 5vw, 4rem)`.
- Right-aligned top nav: Work, Research, Off-screen, Contact.
- Hero: pixel portrait beside the name and one-line role.
- Sections (Work, Research, Off-screen, Contact) are lists of rows separated by 1px rules: title + right-aligned meta, then description and stack.
- At >=860px each section becomes a two-column grid: 12rem heading column, content column.
- At <=600px the hero stacks, the portrait shrinks, and the gallery drops to two columns.

## Components

- **Pixel portrait:** a `<canvas>` that fills in `pallavi-pixel.png` as a 64x64 grid of randomly ordered cells over ~1.4s, then draws the full image. Reduced motion draws it immediately.
- **Publication rows:** title links to DOI/ACM with an arrow; year as meta.
- **Gallery (Off-screen):** 3-column grid (2 on mobile) of 4:5 WebP images in `art/`. The first 9 show; a "Show all 31" text button reveals the rest. Hover/focus reveals a caption (title + optional note) over a bottom gradient; captions are hidden on touch devices.
- **Lightbox:** native `<dialog>` with close/prev/next buttons, arrow-key navigation, and backdrop click to close. Caption shows "title — note".

## Accessibility

- Visible 2px ink focus outlines on links, gallery buttons, and "Show all".
- Gallery items are `<button>`s with descriptive image alt text; images lazy-load with explicit width/height.
- `prefers-reduced-motion` disables the portrait animation and hover transitions.

## Do / Don't

- **Do** keep it white, quiet, and text-first; let the art be the only color.
- **Do** keep the handwritten face to the name and section titles.
- **Don't** add cards, gradients, accent colors, or decorative illustrations.
- **Don't** split the page into separate CSS/JS files without a reason; the single file is intentional.
