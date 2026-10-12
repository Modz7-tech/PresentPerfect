# A Little Something — redesign

This archive contains the redesigned recipient experience.

## What changed
- Reworked the recipient shell into an editorial / digital-exhibition composition.
- Reworked all seven recipient stages with distinct visual rhythm.
- Added kinetic typography, layered paper artifacts, intentional asymmetry, motion continuity, and a dark cinematic finale.
- Reworked the moments section so memories behave like different artifacts instead of a standard card grid.
- Kept the existing content/presentation data model and `/g/[giftId]` recipient route.
- Kept creator/recipient separation architecture intact; creator tooling is still intentionally not implemented.
- Added reduced-motion support at the CSS level.

## Run
```bash
npm install
npm run dev
```
Then open:
`http://localhost:3000/g/8xK92m`

The current content in `data/mockGifts.ts` is still placeholder/sample content. Replace that later with the real gift content.
