# Practice Studio

Independent practice for 13 HireVue-style game formats. Original content and transparent practice metrics; no official scoring predictions or external benchmarks.

## Run

Requires Node 22 or later. No dependency installation needed.

```
npm start
npm test
npm run build
```

Open http://127.0.0.1:4173. Browser assets live in `dist/` and are directly deployable to static hosting. Build verifies JavaScript syntax, all game exports, and entry assets.

## Data

Results stay in localStorage in the current browser and origin. Export them from My progress or a result screen before clearing browser data. No analytics, accounts, server database, or peer comparisons. Browser storage errors are shown without interrupting play. The local preview and deployed app have separate histories because their origins differ.

Comparisons use the same game, mode, difficulty, and scoring version. Accuracy is correct responses divided by answered trials. Correct/minute includes all session time, including feedback reading in learning mode. Pulse includes both correct target reactions and correct holds in accuracy; reaction milliseconds only use hits. Work-style exercises have no accuracy or speed score. E-Motions uses simplified authored illustrations and their intended labels.

## Practice formats

Numerosity, Digitspan, Flashback, Pathfinder, Disconumbers, Puzzle, Shapedance, Singularity, Pulse, Portrait, PortraitXT, Teamchat, and E-Motions. Learning sessions run eight scored rounds (twenty trials for Pulse) or the fixed work-style prompt set; you can also finish learning early. Timed sessions use the catalog duration and do not pause. Work-style sessions finish when their prompts are complete.

Inspiration: https://www.gameassessmentprep.com/hirevue. This project is not affiliated with HireVue or Game Assessment Prep. The puzzles, prompts, artwork, and practice scoring are original; mechanics are independently implemented approximations.
