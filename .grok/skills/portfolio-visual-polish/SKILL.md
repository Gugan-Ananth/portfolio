---
name: portfolio-visual-polish
description: >
  Visual consistency pass for the portfolio: spacing, typography, white + light
  green tokens, reduced motion, and minor CWV-friendly tweaks without new
  features. Use when the user asks for polish, visual consistency, or runs
  /portfolio-visual-polish.
---

# Portfolio visual polish

Tighten visual consistency within the **white + light green** system. No new sections or product features.

## When to use

- Final polish before launch
- Spacing/type/token inconsistencies after sections land
- Slash: `/portfolio-visual-polish`

## Inputs

- Optional focus areas (hero, cards, spacing scale)
- Confirmation that brand is white + light green (already decided)

## Non-goals

- New features, routes, blog, forms
- Inventing a different brand palette
- Adding animation libraries by default
- Large refactors unrelated to visual consistency

## Steps

1. Read `AGENTS.md` brand rules and existing tokens in `app/globals.css`.
2. Audit for:
   - One-off colors that should use semantic tokens
   - Inconsistent vertical rhythm / container widths
   - Type hierarchy (hero vs section titles vs body)
   - Focus/hover states using light green accent
   - Motion that ignores `prefers-reduced-motion`
   - Oversized images harming LCP
3. Apply minimal token/class fixes; prefer globals tokens over scattered hex values.
4. Run gates and summarize before/after.

## Commands (exact)

```bash
npm run lint
npm run typecheck   # if script exists
npm run build
```

## Definition of Done

- [ ] Changes are visual/consistency only
- [ ] Stay within white + light green system
- [ ] Reduced motion respected
- [ ] Gates pass
- [ ] No new dependencies unless strongly justified

## Failure behavior

- User wants a new accent direction → update plan/tokens intentionally; don’t invent mid-flight.
- Polish reveals missing a11y → either fix small issues here or hand off to `portfolio-a11y-pass`.

## Example invocation

> Use portfolio-visual-polish to unify spacing and light-green CTA styles across sections
