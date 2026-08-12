# PROJECT MEMORY — read this first

## What this is
We're building **Drift & Tether**, an indie browser game, with David (the human — collaborative, opinionated, prefers small shippable increments over grand refactors). Physics-puzzle roguelite: you pilot a drifting pod connected by an elastic tether to cargo; levels are procedurally seeded chambers. Vanilla TypeScript + Canvas 2D, no engine, no framework — David rejected Phaser early and that decision is settled. Don't relitigate it.

## Current state (as of context handoff)
- **Working:** core tether physics (verlet, `src/physics/`), chamber generation (`src/gen/`), input, game loop with fixed timestep + interpolated render, 12 hand-tuned test seeds, local highscore persistence.
- **In progress:** enemy AI ("moths" that attack the tether midpoint) — behavior tree stubbed in `src/ai/moth.ts`, steering works, attack state untested.
- **Not started:** audio, menus/UI polish, mobile touch controls (David wants these eventually, low priority).

## Hard-won decisions — do not undo
1. **Fixed timestep is 120Hz**, not 60. Tether stability required it; at 60Hz the verlet constraints jitter under fast swings. Substep count is load-bearing.
2. **Seeded RNG (`mulberry32`) everywhere.** Never call `Math.random()` in gameplay code — replays and daily-seed mode depend on determinism. We already burned two days on a nondeterminism bug from a stray `Math.random()` in particle spawning.
3. **Tether is 14 segments.** More looks nicer but tunnels through thin walls; fewer feels stiff. Tuned extensively. Constants live in `src/config.ts` — tuning values go THERE, never inline.
4. **No build-step dependencies beyond esbuild.** `npm run dev` serves, `npm run build` bundles. Keep it boring.

## Workflow with David
- He playtests every change; ship him something runnable rather than describing it. Use the preview/dev server, let him feel it.
- He tunes "game feel" numbers himself — expose them in `config.ts` and tell him which knobs you added; don't silently pick values.
- Commit style: small commits, present-tense messages. He asks before pushes; don't push unprompted.
- When he says something "feels floaty/heavy/wrong," that's real data — translate to damping/impulse/timestep hypotheses, don't dismiss it.

## Immediate next steps (agreed with David)
1. Finish moth attack state: on contact with tether midpoint, sever check vs. tether tension (design note in `docs/moths.md`).
2. Add screen-shake on sever — David specifically requested this, small trauma-based shake, decay ~0.9/frame.
3. Then: run seed batch test (`npm run seeds`) — chamber gen occasionally produces unreachable exits on ~2% of seeds; known open bug, repro seed `48291` saved in `docs/bugs.md`.

## Traps
- Canvas is DPR-scaled in `src/render/canvas.ts`; all gameplay coordinates are world-space, convert only at render. Mixing spaces caused our worst bug week.
- Safari throttles rAF in background tabs — the pause-on-blur handler exists for a reason; don't "simplify" it away.
- Tests: `npm test` runs physics determinism snapshots. If a physics change breaks them intentionally, regenerate with `npm run test:update` and tell David why.

Trust the codebase over this doc if they conflict — then update this doc.
