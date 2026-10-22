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

- Switch between 115 KS1 and 108 KS2 sample challenges, including split digraphs.
- Choose an animal teacher without restarting a challenge.
- Select pictures without written answer labels giving away the word.
- Retry incorrect answers and request a hint.
- Watch the teacher celebrate correct answers, with reduced-motion support.
- Tap individual sound tiles or use “Listen & blend” to play the sounds in order when recordings are installed.
- Play on mobile or desktop with keyboard or touch controls.
- Practise ordinary and split-digraph words in a shuffled order, without repeats within a cycle.
- Collect passport stamps and explore written patterns in the sound collection.
- Read Parent help with Ollie the otter, explaining digraphs, split digraphs and blending.

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
phonics.js                 Written tiles and linked sound groups
progress.js                Local progress and pattern collection
progress-ui.js             Passport and sound collection interface
assets/                    Ollie image and garden-spade illustration
game.js                    Game rules, independent of the interface
app.js                     Interface rendering and event handling
scripts/build.js           Static output for Cloudflare
scripts/serve.js           Local development server
test/                      Game and interface regression tests
.github/workflows/ci.yml    Tests and build on pushes and pull requests
wrangler.workers.json      Worker name, compatibility date and asset directory
```

## Deploy with Cloudflare Workers Builds

This project uses **Cloudflare Workers** for static hosting. Cloudflare Workers Builds deploys directly from GitHub.
The GitHub Actions `ci.yml` workflow runs tests and builds; there is no separate deployment workflow.

In Cloudflare, set:

| Setting        | Value                                 |
|----------------|---------------------------------------|
| Root directory | The folder containing `package.json`  |
| Build command  | `npm ci && npm test && npm run check` |
| Deploy command | `npm run deploy`                      |

If your repository contains an enclosing `sound-safari` folder, use `sound-safari` as the root directory. Otherwise,
leave it at the repository root.

The deploy script builds `dist` before uploading it with the explicitly selected `wrangler.workers.json`. This config
sets the Worker name to `sound-safari`, the compatibility date to `2026-10-19`, and the asset directory to `./dist`.
Change the name if your Cloudflare Worker has a different name. Do not upload the repository root or `node_modules`.
There is no need to commit `dist`, create an empty output folder or set `CLOUDFLARE_PAGES_PROJECT`.

## Add or change challenges

Edit the `ks1` and `ks2` arrays in `challenges.js`. Each entry has `sounds`, `word`, three `choices` (label and
picture), a `hint`, and `audioKeys` aligned with the spoken sound groups. Exactly one choice label must match `word`,
and joining the
written tiles must produce that word. Split-digraph entries also have `soundGroups` and `soundLabels`: for cake,
`[[0], [1, 3], [2]]` links a and e while keeping c, a, k, e in written order. The linked vowels share one recording,
so the final e is not sounded separately. Every audio key must exist in `audio-manifest.js`. Run `npm test` after
changing content.

Split-digraph challenges practise KS1 patterns; KS2 revisits them in longer words. The sample banks follow an England
curriculum context and are practice material, not a complete phonics programme. Use the sequence taught by your
child’s school. The spade picture is a bundled garden-tool illustration rather than a playing-card symbol.

## Progress

Progress is saved in this browser, separately for KS1 and KS2, with no account or personal details required. Players
sharing a browser share progress. The passport shows the number of distinct correctly answered words out of 115 or
108 and awards stamps at 1, 10, 50 and completion of the stage. Retries count; solving the same word again does not
increase the total. The collection tracks written patterns encountered, including linked split digraphs, rather than
reading mastery. Clearing this site's browser data clears saved progress.
