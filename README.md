# Sound Safari

A personal development project exploring how a playful browser interface can support phonics blending practice. Children
read a segmented word and choose one of three picture answers, helped by Leo the lion, Flo the fox, Bertie the bear or
Sammy the snake.

## What I am practising

- Translating a visual prototype into a working, responsive application.
- Separating the game rules, challenge content and interface code.
- Creating encouraging feedback and keyboard-accessible interactions.
- Testing state transitions and real interface wiring.
- Using GitHub Actions to test a project before deploying it to Cloudflare.

## Features

- Switch between 30 KS1 short-word and 30 KS2 longer-word sample challenges.
- Choose an animal teacher without restarting a challenge.
- Select pictures without written answer labels giving away the word.
- Retry incorrect answers and request a hint.
- Watch the teacher celebrate correct answers, with reduced-motion support.
- Tap individual sound tiles or use “Listen & blend” to play the sounds in order.
- Play on mobile or desktop with keyboard or touch controls.

## Run locally

Install Node.js 22 or newer, then run:

```sh
npm ci
npm start
```

Open `http://localhost:8000`. No application dependencies, database, login or microphone are required. Google Fonts
supplies Inter when available; the system font is the fallback.

## Test and build

```sh
npm test
npm run check
npm run build
```

Tests use Node's built-in test runner. They cover correct and incorrect answers, repeat submissions, level changes,
round cycling, challenge integrity, picture buttons, teacher reactions, hints and keyboard focus. Interface tests
exercise `app.js` with a small DOM adapter; they do not replace visual checks in real browsers.

The build copies only the public site files into `dist/`. Source tests, documentation and repository configuration are
not published.

## Project structure

```text
index.html                 Page structure and accessible controls
styles.css                 Mockup styling, animal drawings and reactions
challenges.js              Editable sample challenge bank
game.js                    Game rules, independent of the interface
app.js                     Interface rendering and event handling
scripts/build.js           Static output for Cloudflare
scripts/serve.js           Local development server
test/                      Game and interface regression tests
.github/workflows/ci.yml    Tests and build on pushes and pull requests
.github/workflows/deploy.yml Tested production deployment
```

## Deploy with Cloudflare Pages and GitHub Actions

This project uses **Cloudflare Pages** for static hosting. The supplied deployment workflow runs the tests and build
again in the deployment job, so a failed check prevents publication.

## Add or change challenges

Edit the `ks1` and `ks2` arrays in `challenges.js`. Each entry has `sounds`, `word`, three `choices` (label and
picture), a `hint`, and `audioKeys` aligned with the sounds. Exactly one choice label must match `word`, and joining the
sounds must produce that word. Every audio key must exist in `audio-manifest.js`. Run `npm test` after changing content.

## Audio setup

**The project includes audio playback code, but no spoken audio files.** Until recordings are added, tapping a sound
displays a friendly “recording not available yet” message. The reading game still works.