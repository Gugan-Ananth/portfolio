---
name: portfolio-a11y-pass
description: >
  Run an accessibility audit and fix pass for a portfolio page or section
  (landmarks, keyboard, focus, alt, contrast, reduced motion). Use when the user
  asks for a11y, accessibility fixes, keyboard nav, or runs /portfolio-a11y-pass.
---

# Portfolio accessibility pass

Audit and fix accessibility issues for a target section or the home page. Prefer semantic HTML over ARIA when possible.

## When to use

- After UI sections land
- User reports keyboard/focus/contrast problems
- Pre-launch polish (design Slice 12 / a11y smoke)
- Slash: `/portfolio-a11y-pass`

## Inputs

- Target: section id (`#about`, `#projects`, …), component path, or full home page
- Optional: known issues from review

## Non-goals

- Full redesign or new features
- Adding animation libraries
- Inventing brand colors beyond white + light green tokens
- Expanding scope into unrelated refactors

## Steps

1. Read `AGENTS.md` a11y/anchor rules and this skill.
2. Inspect the target component tree (landmarks, headings, interactive elements, images).
3. Walk the checklist below; fix issues in the smallest sensible set of files.
4. Prefer:
   - Semantic elements (`main`, `nav`, `section`, `h1–h3`, `button`, `a`)
   - Visible focus styles (light green accent is OK for focus rings)
   - Real button/link labels (no “click here” only)
   - Meaningful image `alt` (empty alt only for pure decoration)
5. Verify shell contracts when present:
   - Skip link to main content
   - Sticky header + `scroll-margin-top: var(--header-height)` on `section[id]`
   - Mobile nav keyboard operable and closes after navigate
6. Respect `prefers-reduced-motion` for any motion.
7. Run quality gates.
8. Report residual risks (e.g. contrast needing design token tweak).

## Audit checklist

- [ ] One logical `h1` per page; heading levels don’t skip
- [ ] Landmarks: header/nav/main/footer as appropriate
- [ ] All interactive controls keyboard reachable
- [ ] Focus order matches visual order; focus rings visible
- [ ] Skip link works
- [ ] Section anchors not hidden under sticky header
- [ ] Images have appropriate `alt`
- [ ] Links/buttons have accessible names
- [ ] Color contrast roughly AA for text on white / dark system backgrounds
- [ ] No information by color alone
- [ ] Reduced motion respected
- [ ] No keyboard traps (especially mobile nav)

## Commands (exact)

```bash
npm run lint
npm run typecheck   # if script exists
npm run build
```

## Definition of Done

- [ ] Checklist reviewed for the target
- [ ] Fixes limited to a11y-related changes
- [ ] Gates pass
- [ ] Residual risks documented if any remain

## Failure behavior

- Fix would break composition ownership → keep section-local; don’t restructure `page.tsx` unless required.
- Contrast needs token change → adjust semantic tokens carefully within white + light green system; don’t invent a new palette.
- Cannot verify in a browser → still fix obvious code-level issues and list what needs manual browser check.

## Example invocation

> Use portfolio-a11y-pass on the projects section and sticky header navigation
