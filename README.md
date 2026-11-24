# Flux DS · Installer prototype

Flux design system in code, and a clickable prototype of the SunPower Installer App with the Partner Portal features (view switcher: Installs · Academy · Partner program · Buy products).

Live: https://cubillowork.github.io/flux-installer-prototype/

## How it is built

| Step | What | Status |
|---|---|---|
| 1 | Tokens from the Flux DS Figma variables | ✅ |
| 2 | Icons — all 36 Icon Clickable + 31 of 69 Icon General | ✅ (partial) |
| 3 | Base components (Button, Card, Status tag…) | ⏳ |
| 4 | App shell (header + view switcher, bottom bars) | ⏳ |
| 5 | Prototype screens | ⏳ |
| 6 | Publish on GitHub Pages | ✅ (on every push to `main`) |

## Tokens

- `tokens/figma-export.json` — export of the Flux DS Figma file (variables, text styles, effect styles).
- `npm run tokens` — regenerates `src/styles/tokens.css`, `src/styles/typography.css` and `src/tokens.generated.ts`.
- Naming: the Figma name with `/` → `-`, e.g. `color/text/primary` → `var(--color-text-primary)`.
- Aliases stay aliases: `--color-text-primary: var(--color-neutral-900)`.
- Rule: components only use tokens — no hex values or pixel values by hand.

## Run locally

```bash
npm install
npm run dev
```
