---
name: portfolio-review
description: >
  Code-review a portfolio PR or local diff against project conventions: scope,
  RSC vs client, content ownership, white+light-green tokens, Next docs, a11y,
  secrets, and DoD. Use when the user asks to review changes, review a PR, or
  runs /portfolio-review.
---

# Portfolio code review

Review changes against `AGENTS.md` and `docs/portfolio-design.md`. Produce actionable findings with severity. Do not rewrite the whole PR unless asked to fix.

## When to use

- Pre-merge review of a slice/PR
- User asks “review my changes” / “does this match the plan?”
- Slash: `/portfolio-review`

## Inputs

- Diff, branch, PR URL, or “uncommitted local changes”
- Optional: claimed slice number

## Non-goals

- Implementing the next feature
- Expanding v1 scope during review
- Rubber-stamping without reading the diff

## Steps

1. Identify the intended slice from PR title/description or ask if unclear.
2. Read `AGENTS.md`, relevant design slice acceptance criteria, and the diff.
3. Verify claims against the real repo (scripts, imports, ownership paths).
4. Walk the checklist; note **block** / **major** / **nit**.
5. State overall **pass / fail** against Definition of Done.
6. If asked to fix, fix only blocking/major items unless user wants nits too.

## Review checklist

### Scope & process

- [ ] Matches one slice; no drive-by refactors outside ownership
- [ ] Out-of-scope items not sneakily included (blog, CMS, forms, remote images)
- [ ] New dependencies justified

### Architecture

- [ ] RSC by default; client only where needed
- [ ] Content imported from `content/` / `lib/content` (not hard-coded long copy)
- [ ] `content/site.ts` ownership respected
- [ ] `app/page.tsx` composition contract respected
- [ ] Site origin only via `getSiteUrl()` / `SITE_URL`

### Stack honesty

- [ ] Next APIs consistent with `node_modules/next/dist/docs/` (not training-data ghosts)
- [ ] npm lockfile only; no accidental package manager switch
- [ ] Images local under `public/` only

### Visual & UX

- [ ] White + light green system; no random brand colors
- [ ] Tokens used instead of one-off magic colors where tokens exist
- [ ] Header/`--header-height` / scroll-margin coupling intact if shell touched
- [ ] Skip link preserved if shell exists

### Quality & security

- [ ] lint / typecheck / build expectations met
- [ ] No secrets; gitignore not weakened
- [ ] a11y baseline for UI changes
- [ ] No fabricated personal content presented as real

## Output format

```markdown
## Portfolio review: <slice or PR title>

### Verdict
pass | fail

### Findings
1. **[block|major|nit]** <title>
   - Where: <path>
   - Issue: ...
   - Suggestion: ...

### DoD
- [x] / [ ] items...

### Summary
1–3 sentences.
```

## Commands (exact)

Reviewers should re-run when validating the author’s claims:

```bash
npm run lint
npm run typecheck   # if script exists
npm run build
```

## Definition of Done (for the review task)

- [ ] Diff understood in context of the intended slice
- [ ] Checklist applied
- [ ] Findings severity-tagged
- [ ] Clear pass/fail

## Failure behavior

- Incomplete diff / can’t see PR → ask for branch, files, or paste.
- Slice identity unknown → infer carefully or ask; don’t invent acceptance criteria that contradict the design doc.

## Example invocation

> Use portfolio-review on my current uncommitted changes for the layout shell PR
