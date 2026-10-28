<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio project rules

This is a **personal portfolio** on Next.js App Router (`portfolio-app`). Full plan: `docs/portfolio-design.md`. Prefer small, owned slices over broad refactors.

## Stack (do not reinvent)

| Item | Value |
| --- | --- |
| Framework | Next.js **16.2.12** App Router |
| UI | React **19**, Tailwind CSS **v4** |
| Package manager | **npm** only (`package-lock.json`) |
| Deploy target | Vercel |
| Path alias | `@/*` → project root (no `src/`) |

## Before any Next.js API

1. Open the matching guide under `node_modules/next/dist/docs/`.
2. Prefer: project structure, server/client components, metadata/OG, images, static exports, production checklist.
3. Never invent App Router APIs from training memory.

## Product scope (v1)

**Owner positioning:** **Flutter / mobile-first** engineer; also backend + frontend web. Hero and skills reflect that order. Projects UI prioritizes **portrait mobile screenshots in phone device frames**.

**In scope:** static-first portfolio — hero, about, projects (cards + phone frames), experience, skills, contact (`mailto:` + socials), SEO, a11y, Vercel.

**Out of scope unless the owner explicitly expands the plan:**

- Headless CMS, database, auth
- Blog / MDX (planned later, not v1)
- Project detail routes `/projects/[slug]` (cards only in v1)
- Contact form backends
- Heavy UI kits (Material, Chakra, etc.)
- Remote `next/image` hosts (local `public/` only) — **no Play/App Store CDN screenshots**
- i18n (English-only v1)
- Inventing personal bio, employment, app names, store metrics, or project facts

**Assets:** Owner-supplied only. Specs in `docs/asset-checklist.md`. Missing images → placeholder panels, never fake UI.

## Brand & visual system

- **Theme:** white surfaces + **light green** accent (links, CTAs, focus rings, highlights).
- Do **not** invent alternate brand palettes or random accent colors.
- Dark mode v1: system `prefers-color-scheme` only (no theme toggle unless requested).
- Design tokens live in `app/globals.css` (semantic CSS variables + Tailwind `@theme`).
- Header height and section anchors must stay coupled: `var(--header-height)` + `section[id] { scroll-margin-top: var(--header-height); }`.

## Architecture

- **RSC by default.** Client components only for real interactivity (e.g. mobile nav). Prefer client at leaf components.
- **Content ≠ presentation.** Typed modules under `content/`; UI imports via `lib/content` selectors — no hard-coded copy in components when content modules exist.
- **Site origin:** only `getSiteUrl()` / `SITE_URL`. Never put production URL on `SiteConfig` or hardcode a fake domain.
- **Images:** local under `public/` only in v1. Prefer compressed WebP/AVIF; always set meaningful `alt`.
- **Project media:** default **phone bezel** for Flutter/mobile; `browser` / `plain` for web/backend. Paths: `public/images/projects/<slug>/`.

### File ownership (merge thrash prevention)

| File / area | Owner rule |
| --- | --- |
| `content/site.ts` | Created/owned by content-model work only; layout **imports**, does not invent |
| `app/page.tsx` | Home composition contract: structure + section stubs owned by hero/composition slice; section PRs fill `components/sections/*` only |
| Section bodies | One section file per feature PR when possible |

## Quality gates (Definition of Done)

Every change set must satisfy:

1. Scope limited to the stated slice/PR (no drive-by refactors).
2. `npm run lint` passes (add `typecheck` when the script exists: `npm run typecheck`).
3. `npm run build` passes when UI or config changed.
4. No secrets committed; do not weaken `.gitignore` for `.env*`, `.next/`, etc.
5. UI smoke: loads, usable ~320px and desktop.
6. A11y smoke for UI: keyboard, headings, alt text, skip link (after shell exists).
7. Content honesty: placeholders only when owner data is missing — never fabricate biography.
8. New dependencies require written justification in the PR/summary.
9. File ownership rules respected.

Exact commands (when available):

```bash
npm run lint
npm run typecheck   # once package.json script exists
npm run build
```

## Agent / skill workflow

Project skills live at `.grok/skills/<name>/SKILL.md`. Load the matching skill when the task matches:

| Skill | Use for |
| --- | --- |
| `portfolio-slice` | Implement one numbered slice/PR end-to-end |
| `portfolio-content` | Edit typed content without breaking schema |
| `portfolio-a11y-pass` | Accessibility audit + fixes |
| `portfolio-review` | Review a PR/diff against these rules |
| `portfolio-visual-polish` | Spacing, type, light-green token consistency (no new features) |

Rules for agents:

- One slice at a time; stop when that slice’s DoD is met.
- If Next API is uncertain → read in-package docs and cite the path.
- Prefer editing existing patterns over new abstractions.
- No `clsx` / `tailwind-merge` / `cn` helper until a third real call site needs class merging.

## Anchor & shell UX (when shell exists)

- Sticky header height bound to `--header-height`.
- In-page nav uses section `id`s (`#about`, `#projects`, etc.).
- Skip link to main content.
- Smooth scroll via CSS; respect `prefers-reduced-motion`.
- Mobile nav closes after navigation.

## Secrets & env

- Document public config in `.env.example` (e.g. `SITE_URL`).
- Never commit `.env.local` or real secrets.
- Absolute URLs (OG, sitemap, `metadataBase`) must derive from `getSiteUrl()` / `SITE_URL` only.

## Design authority

When in doubt, follow `docs/portfolio-design.md` (Key Decisions + PR Plan). Do not expand v1 scope without an explicit owner decision.
