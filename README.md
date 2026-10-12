# A Little Something — V5 Fixed Spotify + User-Controlled Flow

## What was fixed

- Creator soundtrack is now persisted as part of the gift payload instead of relying on Creator React state/localStorage.
- Uploaded audio is written to `/public/uploads/gifts/<giftId>/...` by the server and the gift stores the resulting URL.
- Uploaded photos are also uploaded to server storage before the gift is saved, so the recipient does not depend on the Creator browser's data URLs.
- `/g/[giftId]` reads the saved gift server-side before falling back to the curated sample.
- Recipient background audio is a native HTML `<audio>` element mounted before the opening interaction.
- The gift-box interaction calls `audio.play()` directly from the user gesture.
- A recipient-side retry button handles browsers/media sources that still reject playback.
- Spotify remains a visual widget; it is not incorrectly treated as a direct MP3 source.
- Photo progression can follow native audio `currentTime`.
- Existing cinematic gift opening, ambient motion, cursor/tilt environment, and Framer Motion transitions are retained.

## Run

```bash
npm install
npm run dev
```

Open `/create`, build a gift, click **Create this gift**, then open the generated `/g/<id>` URL in a separate browser/device.

## Persistence note

This V4 package uses a Node filesystem persistence adapter so it works without requiring database credentials in the ZIP. Gifts are stored under `data/gifts/` and uploaded assets under `public/uploads/gifts/`.

For production on a serverless host such as Vercel, replace `lib/giftStore.ts` and `/api/assets` with Supabase/S3/Postgres (or another persistent storage provider). On a persistent Node host, mount a persistent disk for `data/` and `public/uploads/`.

## Audio expectations

Direct `.mp3`, `.wav`, `.ogg`, `.m4a`, `.aac`, and `.webm` audio URLs/files are the native background soundtrack path. Spotify URLs are displayed through Spotify's embed and are intentionally not assigned to the native `<audio>` element. A YouTube/Spotify page URL is not itself an audio stream and cannot be safely used as `audio.src`.

No browser can honestly guarantee audible autoplay without user interaction. The recipient's explicit gift-box tap is therefore the playback authorization gesture.


## V5 notes
- Soundtrack UI is now a compact top-center dock and never occupies the bottom-right navigation/action area.
- Direct background playback requires a direct audio file/stream. Spotify/YouTube page URLs are not passed to `<audio>`; Spotify is rendered as a compact fallback player.
- The gift-box gesture remains the direct `audio.play()` activation point for uploaded audio.
- The personality stage now contains four questions and offers an explicit opt-in to share answers.
- Shared answers are stored server-side and are visible only through the creator's private response-token URL.
- The realization stage now uses four interactive fragments whose connecting line follows the recipient's touch sequence.
- Creator template selection now uses animated cinematic worlds rather than static color swatches.


## Latest fixes

- Spotify track parsing accepts standard Spotify track links, embed links, and `spotify:track:<id>` URIs.
- The recipient now renders the Spotify embed immediately after the gift-box is opened; no second soundtrack click is required.
- Spotify remains an iframe/player and is never passed to native `<audio>`.
- Stage 1 no longer advances automatically after a timeout.
- Stage 1 no longer advances on mouse-wheel scrolling.
- Page navigation is now explicitly user-driven: giftbox -> Continue -> Page 2 -> Continue -> Page 3.

## Validation

The source changes were statically checked in the package. A full Next.js production build could not be run in the packaging environment because the dependency installation was unavailable/incomplete; run `npm install` followed by `npm run build` locally before deployment.

## Compact YouTube background soundtrack
- Creator soundtrack URL accepts YouTube watch, youtu.be, Shorts, Live, Embed, and Spotify track URLs.
- Recipient view no longer displays a large player in the center. It attempts muted YouTube autoplay in a hidden iframe and provides a small floating CD button near the lower-right edge; tapping it opens the compact player so the recipient can start/unmute playback if autoplay with sound is blocked.
- Spotify is rendered only inside the compact player; Spotify cannot be forced to play invisibly as a background audio stream.
- Browser autoplay restrictions remain in force. For guaranteed-looking audio UX, provide an explicit play gesture or upload a direct audio file.

## Latest fixes: persistent YouTube playback + entry chooser
- The soundtrack panel now stays mounted when the CD control is closed. It moves out of view rather than unmounting the YouTube/Spotify iframe, so closing the panel does not intentionally stop the player.
- The home page now asks visitors whether they are creating a gift or opening a gift. Creator routes to `/create`; recipient opens the sample `/g/8xK92m`. Share the unique `/g/<gift-id>` link generated for each actual gift with its recipient.
- Browser autoplay rules still apply: audible YouTube playback may require the recipient to press Play or interact with the page first. A hidden iframe cannot guarantee autoplay with sound.

## Latest addition: A Constellation of Little Things
- Stage 4 now includes an interactive night-sky memory map using the gift's existing moment content.
- Each star opens a memory title, its story/message, and date or era when available.
- The constellation uses CSS/SVG and the existing Framer Motion dependency; no new package or external API is required.
- The constellation is responsive, keyboard-focusable, and disables its decorative motion when `prefers-reduced-motion` is enabled.


## October 11 update: constellation performance + keepsake fragments

- Reduced continuous constellation animation work: static sky texture, no continuously twinkling dust, no floating star animation in the final stage, lower-cost nebula, and a slower shooting-star pass. Reduced-motion preferences are respected.
- Added six tap-to-reveal encouragement fragments inside the constellation, with short warm notes about belonging, being loved, beginning again, and keeping wonder. Fragments work even when no memory cards have been added.
- Creator flow no longer presents recipient preview or sample-recipient links. After creating the gift, the creator sees a shareable URL and a copy-link action rather than a recipient-view link. This helps preserve the surprise, but it is a UI guardrail, not a security barrier: anyone with the URL can still open it.
- Deployment reminder: production persistence for gifts and uploaded assets must be configured on the hosting platform. The local filesystem-based store may not persist on serverless hosting without a durable database/object-storage setup. Test the deployed create-and-open flow with a non-recipient test gift before the real one is sent.

## Performance notes (October 2026)

- `npm run dev` uses Next.js 14's Turbopack dev compiler (`next dev --turbo`) to reduce repeated local compilation work. If your environment hits a Turbopack-specific issue, temporarily change the script back to `next dev`.
- `next.config.mjs` enables Next's `lucide-react` package import optimization and keeps Next's built-in webpack filesystem cache for repeated production builds. No extra loader or dependency was added.
- TypeScript targets ES2017 rather than ES5; Next.js handles browser-targeted transpilation, so ES5 output was unnecessary extra compiler work.
- The Luma Twist is CSS-rendered geometry, not a raster image; edge/backface rendering was tuned rather than adding a large image asset.
- Constellation fragment data is module-level rather than recreated on each interaction. The photo/music sync timer now avoids state updates when the displayed photo index has not changed, and constellation layers are contained to limit paint work.

For reproducible timing, compare cold and warm `npm run dev` starts and run `npm run build` after `npm ci` on the target Windows machine. Timings depend on Node version, disk speed, antivirus scanning, and available memory. This archive has been integrity-checked, but a full build/browser profiling run was not possible in this environment because dependencies are not installed here.
