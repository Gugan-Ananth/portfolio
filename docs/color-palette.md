# Color palette — white + light green

Canonical tokens live in `app/globals.css`. Use semantic names in UI (`bg-background`, `text-accent`, …), not raw hex in components.

## Brand direction

- **Primary surfaces:** pure white / soft green-tinted neutrals  
- **Accent:** light green for links, CTAs, focus rings, highlights  
- **Text:** near-black with a cool green undertone (cohesive, not pure `#000`)  
- **Dark mode:** system `prefers-color-scheme` only — darker greens on deep charcoal-green

---

## Light mode (default)

| Role | Token | Hex | Usage |
| --- | --- | --- | --- |
| Page background | `--background` | `#FFFFFF` | Body, main canvas |
| Elevated surface | `--background-elevated` | `#F7FBF8` | Cards, alt bands, header |
| Muted surface | `--background-muted` | `#EEF6F1` | Chips, code blocks, hover fills |
| Primary text | `--foreground` | `#122018` | Headings, body |
| Secondary text | `--foreground-muted` | `#5A6B61` | Subtitles, meta |
| Subtle text | `--foreground-subtle` | `#7A8C82` | Captions, placeholders |
| Border | `--border` | `#D8E8DE` | Dividers, card edges |
| Strong border | `--border-strong` | `#B7D0C2` | Emphasized outlines |
| **Accent** | `--accent` | `#3FA36B` | Primary buttons, links |
| Accent hover | `--accent-hover` | `#348A5A` | Hover / press affordance |
| Accent active | `--accent-active` | `#2C754C` | Active state |
| On-accent text | `--accent-foreground` | `#FFFFFF` | Label on solid green buttons |
| Soft accent | `--accent-soft` | `#E6F6ED` | Soft badges, selected rows |
| Soft accent hover | `--accent-soft-hover` | `#D4EFDF` | Soft control hover |
| Focus ring | `--accent-ring` / `--ring` | `#6BC491` | `:focus-visible` |

### Swatch strip (light)

```
████ #FFFFFF  background
████ #F7FBF8  elevated
████ #EEF6F1  muted surface
████ #E6F6ED  accent-soft
████ #6BC491  ring
████ #3FA36B  accent ★
████ #348A5A  accent-hover
████ #122018  foreground
████ #5A6B61  muted text
████ #D8E8DE  border
```

---

## Dark mode (`prefers-color-scheme: dark`)

| Role | Token | Hex |
| --- | --- | --- |
| Page background | `--background` | `#0C1210` |
| Elevated surface | `--background-elevated` | `#141C18` |
| Muted surface | `--background-muted` | `#1A2620` |
| Primary text | `--foreground` | `#ECF5EF` |
| Secondary text | `--foreground-muted` | `#A3B5AB` |
| Subtle text | `--foreground-subtle` | `#7D9186` |
| Border | `--border` | `#2A3A32` |
| Strong border | `--border-strong` | `#3D5348` |
| **Accent** | `--accent` | `#6BC491` |
| Accent hover | `--accent-hover` | `#82D4A4` |
| Accent active | `--accent-active` | `#5AB380` |
| On-accent text | `--accent-foreground` | `#0C1210` |
| Soft accent | `--accent-soft` | `#1A2E24` |
| Soft accent hover | `--accent-soft-hover` | `#223A2E` |
| Focus ring | `--accent-ring` | `#6BC491` |

---

## Semantic extras

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--success` | `#3FA36B` | `#6BC491` | Positive status |
| `--warning` | `#C9A227` | `#E0C35A` | Caution (sparingly) |
| `--destructive` | `#C44B4B` | `#E07070` | Errors only |

---

## Tailwind v4 usage

Mapped via `@theme inline` in `globals.css`:

```tsx
// Surfaces
className="bg-background text-foreground"
className="bg-background-elevated border border-border"

// Accent CTA
className="bg-accent text-accent-foreground hover:bg-accent-hover"

// Soft chip / tag
className="bg-accent-soft text-accent hover:bg-accent-soft-hover"

// Link
className="text-accent hover:text-accent-hover"

// Muted copy
className="text-foreground-muted"
```

Raw hex in components is **discouraged** — extend tokens here if something is missing.

---

## Contrast notes (AA targets)

| Pair | Intent |
| --- | --- |
| `#122018` on `#FFFFFF` | Body text — strong |
| `#5A6B61` on `#FFFFFF` | Secondary text — OK for supporting copy |
| `#FFFFFF` on `#3FA36B` | Button label — solid fills only (not thin text on soft green) |
| `#3FA36B` on `#FFFFFF` | Links / icons — use medium weight; avoid tiny light-green text |
| Soft green `#E6F6ED` | Backgrounds only; put dark text on top, not white text |

---

## Do / don’t

**Do**

- Use white / elevated / muted surfaces for structure  
- Use solid `--accent` for primary CTAs and key links  
- Use `--accent-soft` for subtle highlights (skills tags, active nav)  
- Keep focus rings on `--accent-ring`

**Don’t**

- Invent purple, neon, or multi-hue brand colors  
- Put white text on `--accent-soft` (too light)  
- Use pure `#00FF00` / neon green  
- Hardcode hex outside this palette without updating tokens first

---

## Related

- Design plan: `docs/portfolio-design.md`  
- Agent rules: `AGENTS.md`  
- Tokens implementation: `app/globals.css`
