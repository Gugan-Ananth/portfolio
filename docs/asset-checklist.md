# Asset checklist — Flutter / mobile portfolio

You said you can gather assets. Below is exactly what we need, what is optional, and export specs. Drop files under the paths shown (or send them and we place them during the content/projects slice).

**Theme context:** white background + light green accent (`docs/color-palette.md`). Clean UI screenshots read best on white/soft green card panels.

---

## Priority legend

| Priority | Meaning |
| --- | --- |
| **P0** | Needed for a strong v1 projects section |
| **P1** | Strongly recommended |
| **P2** | Optional polish |

---

## 1. Projects (P0) — mobile screenshots

For **each** app/project you want on the site (aim **3–6** featured):

### Per project

| Asset | Priority | Spec |
| --- | --- | --- |
| **Primary screen** (`cover`) | **P0** | Best single screen that sells the app (home, hero flow, or signature feature) |
| Screen 2 | P1 | Second important flow |
| Screen 3 | P2 | Third screen or empty state / dark mode variant |
| App icon | P2 | 1024×1024 or SVG; used as fallback monogram if needed |

### Capture guidelines (Flutter / mobile)

1. **Portrait** phone UI (not landscape unless the app is landscape-only).
2. Prefer **simulator/emulator or clean device** captures — full app UI, not a photo of a phone on a desk.
3. **No personal notifications**, unread badges with real contacts, or private data.
4. Use **realistic demo content** (lorem/sample accounts OK).
5. Light mode screenshots preferred (match white portfolio); one dark-mode shot is fine as secondary.
6. Status bar: clean (full signal/battery, no spam icons) or crop to app content if easier.
7. Do **not** pre-draw a fancy marketing device frame — we add a CSS/SVG phone bezel on the site.

### Technical export

| Setting | Value |
| --- | --- |
| Format | **WebP** preferred; PNG acceptable if you cannot convert |
| Long edge | **≤ 1600px** (e.g. 900×1950 is fine) |
| File size | Target **≤ 250KB** each |
| Naming | See below |

### Folder & naming

```text
public/images/projects/<slug>/
  cover.webp       # primary
  screen-2.webp    # optional
  screen-3.webp    # optional
```

`<slug>` = URL-safe short id, e.g. `expense-tracker`, `shop-app`, `fitness-coach`.

### Text we need with each project (not an image)

| Field | Example |
| --- | --- |
| Title | “Expense Tracker” |
| One-line summary | “Cross-platform budgeting with offline sync” |
| Your role | “Flutter developer” / “Mobile + API” |
| Stack tags | Flutter, Dart, Firebase, … |
| 2–4 highlights | Outcomes, features, scale (only real facts) |
| Links | Play Store, App Store, GitHub, website (whatever exists) |
| Year | 2024 |
| Platforms | iOS / Android / both |

---

## 2. Web / backend projects (if any)

| If the project is… | Provide |
| --- | --- |
| **Web app** | 1 landscape screenshot (long edge ≤ 1600px) or dashboard crop |
| **Backend / API only** | Optional architecture diagram (SVG/PNG) or skip image and we use stack badges |
| **Full-stack** | Prefer **mobile** shot if there is a Flutter client; else web shot |

---

## 3. Profile & brand (P1)

| Asset | Priority | Spec |
| --- | --- | --- |
| **Headshot / portrait** | P1 | Square or 4:5, face clear, long edge ≥ 800px; WebP/JPG |
| Display name | **P0** (text) | Exact spelling |
| Headline | **P0** (text) | e.g. “Flutter developer · mobile apps, APIs & web” |
| About (2–4 short paragraphs) | **P0** (text) | Your story; no need for us to invent |
| Location | P2 | City / remote |
| Availability line | P2 | e.g. “Open to full-time mobile roles” |

Suggested path: `public/images/avatar.webp`

---

## 4. Social & contact (P0 text / URLs)

| Item | Notes |
| --- | --- |
| Email | For `mailto:` |
| GitHub | Profile URL |
| LinkedIn | Profile URL |
| Other | Twitter/X, personal site, pub.dev, Stack Overflow — only if you want them public |

---

## 5. Resume (P1)

| Option | What to send |
| --- | --- |
| PDF in repo | `resume.pdf` (we put in `public/resume.pdf`) |
| External | Google Drive / personal URL (must be public or stable) |
| Omit | No CTA until you add one |

---

## 6. Site chrome (P2)

| Asset | Spec |
| --- | --- |
| Favicon | 32×32 + 180×180 Apple touch optional |
| Open Graph share image | 1200×630, white + light green brand, your name + “Flutter developer” — we can generate later if missing |
| Logo / wordmark | Optional; text logo is fine for v1 |

---

## Minimum viable asset pack (ship projects section)

If time is limited, send **only this**:

1. **Display name + headline + email + GitHub/LinkedIn**
2. **3 projects**, each with:
   - 1 portrait screenshot (`cover.webp`)
   - title, summary, stack, role, year
   - at least one link (store or GitHub)
3. Optional: headshot + resume PDF

Everything else can be placeholders.

---

## How to send

Any of:

- Drop files into the repo under `public/images/...` and tell us the slugs  
- Share a zip / Drive folder with folders named by project  
- Attach images in chat with captions (`project: expense-tracker — home screen`)

We will **not** invent screenshots or app store metrics. Missing images → soft green placeholder cards until you provide them.

---

## Related

- Design plan: `docs/portfolio-design.md`  
- Colors: `docs/color-palette.md`  
- Agent rules: `AGENTS.md`
