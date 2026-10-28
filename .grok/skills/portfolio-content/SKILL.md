---
name: portfolio-content
description: >
  Add or edit typed portfolio content (projects, experience, skills, profile,
  site config) without breaking the schema or inventing personal facts. Use when
  the user updates bio/projects/resume links, seed data, or runs /portfolio-content.
---

# Portfolio content edits

Edit **typed content modules** only. Do not restyle the UI unless the user also asks for a UI change (then use `portfolio-slice` or separate scope).

## When to use

- Adding/updating projects, experience, skills, profile, socials, site name/title
- Replacing placeholders with owner-supplied facts
- Extending content types when the owner needs a new field
- Slash: `/portfolio-content`

## Inputs

- Owner-supplied content (text, URLs, dates, skills, projects)
- Target modules under `content/` (and types under `lib/types/` if schema must change)

## Non-goals

- Inventing biography, employers, metrics, or project outcomes
- Inventing screenshots or pulling remote Play/App Store image URLs
- Rewriting section components or design tokens
- Adding CMS, MDX blog, or remote image hosts
- Changing site origin strategy (still `getSiteUrl()` / `SITE_URL` only)
- Project detail routes (v1 is cards only)

## Mobile project media

- Prefer portrait paths under `public/images/projects/<slug>/cover.webp`
- Set `mediaKind`: `phone` | `phone-multi` | `browser` | `plain`
- Set `platforms` when known (`ios`, `android`, `mobile`, `web`, `backend`, `fullstack`)
- Follow `docs/asset-checklist.md` for naming and size limits
- If image missing: leave `image` undefined — UI shows placeholder, do not fabricate

## Steps

1. Read `AGENTS.md` and content model sections in `docs/portfolio-design.md`.
2. Read existing types (`lib/types/content.ts` or equivalent) and current `content/*` modules.
3. Map **only** owner-provided fields into the typed structures.
4. Keep slugs stable once published; do not renumber `order` casually.
5. Follow selector conventions when data affects display:
   - **Projects:** `featured` + ascending `order` for featured list (as defined in design/code).
   - **Experience:** sort `isCurrent` first, then `start` descending, then company name.
6. If a field is missing from the owner, leave placeholder or omit optional fields — **do not fabricate**.
7. Do not put production URL on site config; origin stays env-driven.
8. Run typecheck (and lint if types/exports changed).
9. Summarize what was updated and what remains placeholder.

## Commands (exact)

```bash
npm run typecheck   # if script exists; else npx tsc --noEmit
npm run lint
```

## Definition of Done

- [ ] Types compile; no `any` escapes for convenience
- [ ] Only content (and necessary type extensions) changed
- [ ] No invented personal/professional facts
- [ ] Slugs/ids stable unless owner requested rename
- [ ] Selectors/sort rules still valid
- [ ] `SiteConfig` has no hard-coded production origin
- [ ] Typecheck (and lint if needed) pass

## Failure behavior

- Owner content incomplete → update what was given; list gaps; use placeholders.
- Schema too narrow → extend types in the same change set with clear field names; do not hack around types.
- Request would require blog/CMS/case-study routes → refuse for v1; point to design post-v1 PRs.

## Example invocation

> Use portfolio-content to add these three projects and update my GitHub/LinkedIn URLs: …
