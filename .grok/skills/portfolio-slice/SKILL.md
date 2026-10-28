---
name: portfolio-slice
description: >
  Implement one portfolio development slice/PR end-to-end with file ownership,
  quality gates, and Definition of Done. Use when the user says implement a
  slice, work a PR from the plan, "start PR N", "implement Slice N", or runs
  /portfolio-slice.
---

# Portfolio slice implementation

Implement **exactly one** numbered slice/PR from `docs/portfolio-design.md`. Do not start the next slice.

## When to use

- User asks to implement a specific PR or slice from the design plan
- User says “foundations”, “layout shell”, “hero”, “projects section”, etc. and means one unit of work
- Slash: `/portfolio-slice`

## Inputs

- Slice/PR number and title (or design section reference)
- Acceptance criteria and out-of-scope from the design doc
- Any owner content overrides (optional)

## Non-goals

- Implementing multiple slices in one go
- Inventing personal bio/project/employment facts
- Adding CMS, auth, blog, form backends, or remote images unless that slice explicitly requires it
- Inventing brand colors outside the white + light green system
- Weakening `.gitignore`, TypeScript strictness, or ESLint

## Steps

1. **Read authority docs**
   - `AGENTS.md`
   - Relevant slice + Key Decisions in `docs/portfolio-design.md`
   - This skill

2. **Docs-first for Next APIs**
   - If the slice touches App Router, metadata, images, or config, open the matching guide under `node_modules/next/dist/docs/` **before** coding.
   - Never invent Next 16 APIs from training memory.

3. **Respect file ownership**
   - `content/site.ts`: content-model work only (layout imports it).
   - `app/page.tsx`: composition/hero slice owns structure + stubs; section slices edit `components/sections/*` only.
   - Site origin only via `getSiteUrl()` / `SITE_URL` — no `SiteConfig.url`.

4. **Implement the minimal change set**
   - Match acceptance criteria; stop at out-of-scope.
   - Prefer RSC; client components only when interactivity requires them.
   - Content comes from `content/` / `lib/content` when those modules exist.
   - Visual: white surfaces + light green accents from tokens; no alternate palettes.

5. **Dependencies**
   - Avoid new packages by default.
   - If unavoidable, justify in the PR summary and keep surface area small.
   - No heavy UI kits. No `clsx`/`tailwind-merge` until a third call site truly needs merging.

6. **Quality gates**
   - Run commands below; fix failures before claiming done.

7. **Hand off**
   - Summarize what changed, what was left out, and any follow-ups.
   - Draft a short PR description: scope, out-of-scope, dependency justification (if any).
   - **Stop** — do not begin the next slice unless the user asks.

## Commands (exact)

```bash
npm run lint
npm run typecheck   # if script exists in package.json
npm run build
```

If `typecheck` is missing and the slice is foundations/tooling, add `"typecheck": "tsc --noEmit"` only when that is in-scope for the slice.

## Definition of Done

- [ ] Only this slice’s goal implemented
- [ ] File ownership rules respected (`page.tsx` / `content/site.ts`)
- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes (when script exists)
- [ ] `npm run build` passes (when UI/config touched)
- [ ] No secrets committed; gitignore not weakened for env/build artifacts
- [ ] UI smoke OK at ~320px and desktop (if UI slice)
- [ ] A11y smoke for new UI (keyboard, headings, alt, skip link if shell exists)
- [ ] No invented personal facts; placeholders clearly temporary
- [ ] New deps justified (or none added)
- [ ] PR/summary notes scope and out-of-scope

## Failure behavior

- Lint/typecheck/build fail → fix before finishing; do not claim done.
- Next API uncertainty → read `node_modules/next/dist/docs/...` and cite path.
- Owner content missing → use placeholders; never invent biography or employers.
- Slice conflicts with design → follow `docs/portfolio-design.md`; ask user only if product decision is required.

## Example invocation

> Use portfolio-slice to implement PR 1: chore: fix gitignore, add typecheck script and CI
