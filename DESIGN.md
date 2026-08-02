---
name: AgentHarnessWhiteMinimal
colors:
  primary: "#FCFBF9"
  surface: "#FFFFFF"
  card: "#FFFFFF"
  accent-gold: "#B48346"
  accent-emerald: "#059669"
  accent-red: "#DC2626"
  text-primary: "#0F172A"
  text-secondary: "#475569"
  text-muted: "#94A3B8"
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

# DESIGN.md — White Minimalist Premium Architectural Specification

## Brand & Style
An ultra-premium, white minimalist design system tailored for high-end B2B revenue and automation engineering. Inspired by Apple, Stripe, and Aesop design aesthetics. Combines crisp white space, deep ink typography, subtle glass hairline borders, and warm champagne gold accents.

## Colors
* **Substrate / Light (`primary`)**: `#FCFBF9` (Pristine Warm Alabaster White)
* **Surface (`surface`)**: `#FFFFFF` (Pure White)
* **Clean Card Substrate (`card`)**: `#FFFFFF` with `border: 1px solid rgba(0, 0, 0, 0.06)` & `box-shadow: 0 4px 25px rgba(0, 0, 0, 0.03)`
* **Champagne Gold (`accent-gold`)**: `#B48346` (Warm Metallic Gold)
* **Clean Emerald (`accent-emerald`)**: `#059669` (Deep Verified Emerald)
* **Alert Red (`accent-red`)**: `#DC2626` (Clean Alert Red)
* **Primary Text (`text-primary`)**: `#0F172A` (Deep Ink Charcoal)
* **Secondary Text (`text-secondary`)**: `#475569` (Muted Slate)

## Typography
* **Primary Sans**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`
* **Editorial Serif**: `Newsreader`, `Georgia`, `serif`
* **Technical Mono**: `Fira Code`, `monospace`
* **Heading Scale**: `h1` = 3.5rem (tracking -0.035em), `h2` = 2.25rem, `h3` = 1.5rem.

## Layout & Spacing
* **Editorial Container Width**: `840px`.
* **Wide Bento Grid Width**: `1200px`.
* **Architectural Whitespace**: `7.5rem` vertical section padding.
* **Component Grid Gap**: `2.25rem`.

## Elevation & Depth
* **Minimalist White Cards**: `background: #FFFFFF`, `border: 1px solid rgba(0,0,0,0.06)`, `box-shadow: 0 4px 20px rgba(0,0,0,0.03)`.
* **Hover State**: `border-color: rgba(180, 131, 70, 0.4)`, `box-shadow: 0 12px 35px -5px rgba(180, 131, 70, 0.12)`.

## Shapes
* **Border Radius**: `8px` (small controls), `14px` (cards/containers), `9999px` (pills/badges).

## Do's and Don'ts
* **DO**: Maintain 7.5rem vertical section margins to let components breathe against clean white space.
* **DO**: Use dark ink charcoal text (`#0F172A`) for crisp, high-contrast readability.
* **DON'T**: Use dark/black background fills or heavy neon glow effects.
* **DON'T**: Use generic cluttered elements. Keep every section pristine, minimalist, and clean.
