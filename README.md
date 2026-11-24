# Flux DS

The Flux design system (TCL SunPower) in code: tokens, text styles, icons and React components, generated from the **Flux DS** Figma file. Use it to build prototypes that look like the real apps, fast.

Docs site: **https://cubillowork.github.io/flux-ds/** — Foundations · Icons · Components

## Use it in a prototype

```bash
npm install github:cubillowork/flux-ds#v0.3.0
```

```tsx
// main.tsx — once
import 'flux-ds/flux.css';

// any screen
import { Button, Icon } from 'flux-ds';

<Button icon="Add">New installation</Button>
<Icon name="Search" color="var(--color-interactive-primary)" />
```

Works with Vite + React (the package ships TypeScript source; Vite compiles it). Pin a version tag (`#v0.3.0`) so a change in the DS never breaks a prototype you already showed; update the tag when you want the new version.

## What's inside

| | Source in Figma | In code |
|---|---|---|
| Tokens | Variables: 01-Core, 02-Semantic, 03–12 components (282) | CSS variables: `color/text/primary` → `var(--color-text-primary)` |
| Text styles | heading/h0–h7, paragraph/p1–p6 | classes: `.h3`, `.p4-regular`, `.p2-semibold` |
| Elevation | elevation/card | `var(--shadow-elevation-card)` |
| Icons | Icon Clickable (36/36), Icon General (38/69) | `<Icon name="…" />` |
| Button | Button: Type × Size × State × With icon | `<Button variant size icon fullWidth />` |
| Button icon | Button icon: Type × State | `<IconButton icon label variant />` |
| Tag | Tag: Category × Status | `<Tag status="online" />` |
| Chip | chip | `<Chip selected />`, `<ChipGroup options value onChange />` |
| Tabs | tabs menu + item | `<Tabs tabs value onChange />` |
| Info box | Info box | `<InfoBox type="warning" />` |
| Alert | alert mobile | `<AlertItem level title meta status />` |
| Card | system card, Graph Header | `<Card>`, `<CardHeader>`, `<CardBody>`, `<KeyValue>`, `<SectionHeader>` |
| Header mobile | Header mobile | `<HeaderMobile title onBack actions />` |
| Bottom navigation | Navigation Bar Installers / HO | `<BottomNav items value onChange />` |
| Link | Link → Label | `<Link>` (button) or `<Link href>` |
| Text field | Input + Field | `<TextField label hint error icon unit size />`, `<SearchField />` |
| Bottom sheet | Dropdown - Bottom sheet + Overlay | `<BottomSheet open onClose title description from />` |
| Nav item | Horizontal navigation item | `<NavItem icon title description selected />` |
| Progress circle | Progress circle | `<ProgressCircle value size label />` |

### Proposals (not in Flux Figma yet)

Built with Flux tokens for the Installer prototype. Marked **PROPOSAL** on the docs site — validate them, add them to Figma, then remove the mark.

| Component | What for |
|---|---|
| `<AppHeader title onTitleClick actions />` | Root screens; title opens the view switcher |
| `<ProgressBar value />` | Training and partner tier progress |
| `<ListItem icon title description trailing />` | Pending warranties, benefits, settings lists |
| `<StatusDot tone />` | "● Normal", "● In stock" |
| `<Badge tone />` | HOT, NEW, Premier |
| `<Stepper value onChange />` | Quantities in Buy products |
| `<Rail>` | Horizontal scroll of news and event cards |

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
- [x] Tag, Chip, Tabs, Info box, Alert, Card, Header mobile, Bottom navigation
- [x] Link, Text field, Bottom sheet, Nav item, Progress circle
- [x] Proposals: AppHeader, ProgressBar, ListItem, StatusDot, Badge, Stepper, Rail
- [ ] Select, Checkbox, Selection card
- [ ] Dialog, Toast, Spinner
