# Flux DS

The Flux design system (TCL SunPower) in code: tokens, text styles, icons and React components, generated from the **Flux DS** Figma file. Use it to build prototypes that look like the real apps, fast.

Docs site: **https://cubillowork.github.io/flux-ds/** — Foundations · Icons · Components

## Use it in a prototype

```bash
npm install github:cubillowork/flux-ds#v0.1.0
```

```tsx
// main.tsx — once
import 'flux-ds/flux.css';

// any screen
import { Button, Icon } from 'flux-ds';

<Button icon="Add">New installation</Button>
<Icon name="Search" color="var(--color-interactive-primary)" />
```

Works with Vite + React (the package ships TypeScript source; Vite compiles it). Pin a version tag (`#v0.1.0`) so a change in the DS never breaks a prototype you already showed; update the tag when you want the new version.

## What's inside

| | Source in Figma | In code |
|---|---|---|
| Tokens | Variables: 01-Core, 02-Semantic, 03–12 components (282) | CSS variables: `color/text/primary` → `var(--color-text-primary)` |
| Text styles | heading/h0–h7, paragraph/p1–p6 | classes: `.h3`, `.p4-regular`, `.p2-semibold` |
| Elevation | elevation/card | `var(--shadow-elevation-card)` |
| Icons | Icon Clickable (36/36), Icon General (32/69) | `<Icon name="…" />` |
| Button | Button: Type × Size × State × With icon | `<Button variant size icon fullWidth />` |
| Button icon | Button icon: Type × State | `<IconButton icon label variant />` |

Rule: components only use tokens — no hex or pixel values by hand.

## Update from Figma

1. Export the variables again into `tokens/figma-export.json`.
2. `npm run tokens` → regenerates `src/flux/styles/tokens.css`, `typography.css` and `tokens.generated.ts`.
3. Check the Foundations page, commit, and tag a new version (`v0.2.0`).

## Work on the DS

```bash
npm install
npm run dev     # docs site at localhost:5173
```

Folder structure: `src/flux/` is the package (what prototypes import). `src/pages/` is the docs site.

## Roadmap

- [x] Tokens, text styles, elevation
- [x] Icons (Clickable complete, General partial)
- [x] Button, Button icon
- [ ] Card, Status tag, Tabs, Toggle, Link
- [ ] Text field, Select, Checkbox, Progress circle
- [ ] Mobile shell: header, bottom navigation
