---
name: AgentHarnessMinimal
colors:
  primary: "#080A0F"
  surface: "#11141C"
  card: "rgba(17, 20, 28, 0.5)"
  accent-gold: "#D4AF37"
  accent-emerald: "#34D399"
  accent-red: "#F87171"
  text-primary: "#F8FAFC"
  text-secondary: "#94A3B8"
  text-muted: "#64748B"
typography:
  h1:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: 600
  h2:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: 600
  quote:
    fontFamily: Newsreader
    fontSize: 1.25rem
    fontStyle: italic
  body:
    fontFamily: Inter
    fontSize: 1.05rem
    fontWeight: 400
  mono:
    fontFamily: Fira Code
    fontSize: 0.875rem
rounded:
  sm: 8px
  md: 14px
  full: 9999px
spacing:
  sm: 1rem
  md: 2.25rem
  lg: 7.5rem
---

# DESIGN.md — Minimalist Cyber-Editorial Specification

## Brand & Style
An ultra-premium, minimalist design system tailored for high-end B2B revenue and automation engineering. Combines Swiss typographic rigor, dramatic macro-whitespace, deep matte obsidian surfaces, and authentic champagne gold accents.

## Colors
* **Substrate / Dark (`primary`)**: `#080A0F` (Pure Matte Obsidian)
* **Surface (`surface`)**: `#11141C` (Subtle Muted Charcoal)
* **Translucent Card (`card`)**: `rgba(17, 20, 28, 0.5)` with `backdrop-filter: blur(40px)`
* **Champagne Gold (`accent-gold`)**: `#D4AF37` (Primary Accent & Conversion Target)
* **Soft Emerald (`accent-emerald`)**: `#34D399` (Verified Status & Recovery Metrics)
* **Muted Alert (`accent-red`)**: `#F87171` (Disaster Warning Signals)
* **Primary Text (`text-primary`)**: `#F8FAFC` (Stark Clean White)
* **Secondary Text (`text-secondary`)**: `#94A3B8` (Muted Slate)

## Typography
* **Primary Sans**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
* **Editorial Serif**: `Newsreader`, `Georgia`, `serif`
* **Technical Mono**: `Fira Code`, `monospace`
* **Heading Scale**: `h1` = 3.5rem (tracking -0.035em), `h2` = 2.25rem, `h3` = 1.5rem.

## Layout & Spacing
* **Editorial Container Width**: `840px` (Optimized for 65-75 characters per line readability).
* **Wide Bento Grid Width**: `1200px`.
* **Architectural Whitespace**: `7.5rem` vertical section padding.
* **Component Grid Gap**: `2.25rem`.

## Elevation & Depth
* **Glassmorphic Cards**: `backdrop-filter: blur(40px)` + `border: 1px solid rgba(255, 255, 255, 0.05)`.
* **Top Hairline Highlight**: `inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`.
* **Ambient Glow**: Single radial gold gradient at top (`radial-gradient(circle at 50% -20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)`).

## Shapes
* **Border Radius**: `8px` (small controls), `14px` (cards/containers), `9999px` (pills/badges).

## Components
* **Header Button**: Solid Champagne Gold `#D4AF37`, text `#080A0F`, font-weight 700.
* **Bento Card**: Dark glass substrate, 2.5rem padding, subtle border hover transition.
* **Interactive Simulator**: Translucent chat bubbles with 1px hairline borders.
* **DSO Calculator**: Minimalist 3px range track with glowing gold thumb.

## Do's and Don'ts
* **DO**: Maintain 7.5rem vertical section margins to let components breathe.
* **DO**: Use italic *Newsreader* serif for editorial blockquotes and founder thoughts.
* **DON'T**: Add noisy background grid lines, rainbow gradients, or floating particles.
* **DON'T**: Use generic 3-column pricing boxes or generic marketing jargon.
