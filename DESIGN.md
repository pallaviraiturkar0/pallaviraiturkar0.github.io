---
name: Pallavi Raiturkar
description: A luminous engineering portfolio with evidence-rich work, hand-drawn signals, and a separate studio track.
colors:
  night: "oklch(0.115 0.026 278)"
  deep-surface: "oklch(0.15 0.035 273)"
  raised-surface: "oklch(0.24 0.06 274)"
  signal-mint: "oklch(0.78 0.14 184)"
  signal-blue: "oklch(0.67 0.20 250)"
  signal-violet: "oklch(0.66 0.23 286)"
  signal-iris: "oklch(0.77 0.18 313)"
  signal-coral: "oklch(0.76 0.17 25)"
  studio-paper: "oklch(0.94 0.024 250)"
  light-ink: "oklch(0.965 0.012 255)"
  light-ink-soft: "oklch(0.78 0.025 260)"
  dark-ink: "oklch(0.18 0.035 273)"
  dark-ink-soft: "oklch(0.41 0.036 262)"
  dark-line: "oklch(0.36 0.045 275 / 0.55)"
typography:
  display:
    fontFamily: "Geologica, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(3.25rem, 8vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 88"
  headline:
    fontFamily: "Geologica, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(2.4rem, 5.8vw, 5rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  section-title:
    fontFamily: "Geologica, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 4.7rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  work-title:
    fontFamily: "Geologica, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.028em"
  subhead:
    fontFamily: "Geologica, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(1.45rem, 3vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.15
  lead:
    fontFamily: "Geologica, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(1rem, 1.5vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Geologica, Avenir Next, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
  micro-label:
    fontFamily: "DM Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.02em"
rounded:
  precise: "0.5rem"
  media: "1rem"
  panel: "1.35rem"
  orbit: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "clamp(6rem, 11vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.mineral}"
    textColor: "{colors.dark-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.orbit}"
    padding: "0.9rem 1.25rem"
  button-secondary:
    backgroundColor: "{colors.raised-surface}"
    textColor: "{colors.light-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.orbit}"
    padding: "0.9rem 1.25rem"
  publication-link:
    backgroundColor: "{colors.deep-surface}"
    textColor: "{colors.light-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.precise}"
    padding: "1.25rem 0"
---

# Design System: Pallavi Raiturkar

## Overview

**Creative North Star: "The Luminous Field"**

The portfolio feels like a precise technical instrument illuminated by a living signal. A deep-ink workspace keeps the engineering content serious, while mint, blue, violet, iris, and coral light move through the page like a gaze path becoming an AI system. The visual system is expressive without obscuring the proof: outcomes, publication links, and clearly named responsibilities remain primary.

Hand-drawn paths, eyes, nodes, stars, and stacked layers give the site a personal visual language. They reference eye tracking, perception, system architecture, and making; they are annotations with meaning, not generic decoration. The studio track changes the material without changing the standards, using a pale violet-blue surface and image studies as a distinct room for art.

**Key Characteristics:**
- Deep ink foundation with luminous signal gradients rather than flat orange-and-white startup styling.
- Concrete work narratives with measurable outcomes and readable technical scope.
- Dense publication index using rules and typography, not cards.
- Geologica for direct product language and DM Mono for technical metadata.
- Hand-drawn signal iconography and morphing perception fields.
- A separate light, image-led studio section with vibrant original studies.

## Colors

The palette combines a violet-tinted near-black workspace with a five-stop signal spectrum: mint, blue, violet, iris, and coral. The spectrum appears as light crossing a surface, not as gradient text. A cool pale studio surface keeps the hobby track distinct.

### Primary
- **Signal Mint:** Entry point for actions, active navigation, and evidence markers.
- **Signal Blue / Violet:** Motion fields, depth, and system transitions.

### Secondary
- **Signal Iris:** Research emphasis and hand-drawn annotations.
- **Signal Coral:** Small terminal points and moments of warmth, never large background fields.

### Neutral
- **Night:** Main page background, violet-tinted rather than green-tinted.
- **Deep Surface:** Work bands, navigation backing, and list hover states.
- **Raised Surface:** Secondary controls and compact metadata surfaces.
- **Studio Paper:** The art section's distinct room; cool blue-violet, never cream.
- **Light Ink / Soft Light Ink:** Primary and secondary text on dark surfaces.
- **Dark Ink / Soft Dark Ink:** Text on studio paper and mineral fills.
- **Dark Line:** Rules and boundaries on the dark workspace.

### Named Rules

**The Track Separation Rule.** Signal mint identifies engineering evidence; iris identifies research; studio paper identifies personal making.

**The No Orange Rule.** Orange and warm startup neutrals are prohibited.

**The Illuminated Surface Rule.** Gradients describe a moving signal, depth, or light crossing a surface. They belong in fields, borders, buttons, and original artwork. Gradient text remains prohibited.

**The Doodle Has Meaning Rule.** Every hand-drawn mark maps to perception, attention, connection, layers, or making. No generic squiggles are added only to fill space.

**The Alpha Overlay Rule.** Glows, aurora fields, hover washes, and hairlines are expressed as alpha derivations of the named palette hues rather than as new opaque colors. A derived value must keep its parent's hue family: mint near 184, blue near 250, violet near 286, iris near 313, coral near 25, and the violet-tinted neutrals near 255-280. Chroma and lightness may shift to describe light passing through a surface; inventing a hue outside these families is drift, not composition.

## Typography

**Display Font:** Geologica (with Avenir Next, Segoe UI, and sans-serif fallbacks)  
**Body Font:** Geologica (with Avenir Next, Segoe UI, and sans-serif fallbacks)  
**Technical Label Font:** DM Mono (with SFMono-Regular, Consolas, and monospace fallbacks)

**Character:** Geologica keeps the product language direct and human. DM Mono creates a deliberate contrast for dates, venues, role metadata, and system labels without turning the site into a terminal aesthetic.

### Hierarchy
- **Display** (500, `clamp(3.25rem, 8vw, 6rem)`, 0.94): Direct hero statement.
- **Headline** (500, `clamp(2.4rem, 5.8vw, 5rem)`, 1): Section shifts and selected work titles.
- **Title** (500-600, `clamp(1.35rem, 3vw, 2.5rem)`, 1.1): Roles, projects, and publication emphasis.
- **Body** (400, 1rem minimum, 1.65): Work detail and research context, capped near 70 characters.
- **Label** (600, 0.8125rem, 0.01em): Dates, organizations, paper types, and navigation.

### Named Rules

**The Direct Headline Rule.** Headlines state the work or point plainly. They do not ask the visitor to decode a metaphor.

**The Two-Voice Rule.** Geologica speaks in complete ideas. DM Mono annotates the system. Do not swap their roles.

## Elevation

The workspace is layered through tonal surfaces, moving light fields, crisp rules, and selective depth. The hero role brief and studio imagery may cast substantial soft shadows because they behave like physical objects inside the field. Work rows gain depth only on interaction.

### Named Rules

**The Signal Depth Rule.** Dark surfaces get lighter as they rise; luminous color appears to pass behind or through them. Shadows must follow a transformation or physical layer, never decorate every container.

## Components

Engineering components are exact, compact, and text-forward. Studio components are image-led and spacious.

### Buttons
- **Shape:** Fully rounded orbit (`999px`) with at least a 3rem touch height.
- **Primary:** Animated signal-spectrum fill with dark ink.
- **Secondary:** Raised-surface fill with light ink and a full hairline border.
- **Hover / Focus:** Small vertical lift and a 3px mint focus ring with 4px offset.

### Cards / Containers
- **Corner Style:** Work is not placed in generic cards.
- **Background:** Full-width bands and aligned columns create grouping.
- **Shadow Strategy:** Only transformed rows, the hero brief, and studio images receive shadows.
- **Border:** One-pixel full rules only; no side-stripe accents.
- **Internal Padding:** Fluid section spacing and the shared 0.5rem-to-2rem scale.

### Navigation
- **Style:** Compact sticky dark navigation with direct anchors for Work, Research, Studio, and Contact.
- **States:** Mineral active/hover treatment and a visible keyboard focus ring.
- **Mobile:** Horizontal links reduce to the most important destinations; Contact remains persistent.

### Work Entry

Each selected work entry pairs role context with a direct project statement, a short description of technical scope, and outcome evidence. Metrics appear inside the case study that gives them meaning, never as decorative hero counters.

### Publication Index

Publications are an ordered reading list with year, venue, title, and an external-link action. Rows use typography and rules rather than rounded containers.

### Studio Figure

Studio figures use original SVG studies in varied aspect ratios. Captions name the kind of exploration rather than claiming a specific physical medium. The grid feels like work pinned to a wall, not a product gallery.

## Do's and Don'ts

### Do:
- **Do** lead with current role, selected engineering work, outcomes, and publications.
- **Do** explain that HCI research taught Pallavi to use behavior as evidence and that this still shapes development.
- **Do** keep Work, Research, and Studio as distinct but adjacent tracks.
- **Do** use publication links from authoritative DOI, ACM, journal, or university sources.
- **Do** let original studio imagery carry the expressive visual burden.
- **Do** recompose layouts for mobile, tablet, and desktop rather than shrinking one composition.

### Don't:
- **Don't** use abstract storytelling that makes the visitor decode Pallavi's career.
- **Don't** use an orange-and-white startup landing-page look.
- **Don't** use generic portfolio templates and repeated card grids.
- **Don't** use neon or cyberpunk developer aesthetics.
- **Don't** turn the page into a stiff, document-like resume.
- **Don't** create art-first ambiguity that obscures the engineering work.
- **Don't** use generic AI-generated landing-page tropes, gradient text, glassmorphism, repeated section eyebrows, numbered section scaffolding, or cream and beige backgrounds.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe.
