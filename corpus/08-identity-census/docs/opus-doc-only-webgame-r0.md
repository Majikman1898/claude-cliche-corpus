# Project Memory — Browser Game (read this first)

## What this is
A persistent handoff document written by a previous instance of me for the next one. The game files are intact; my working memory is not. This file is the bridge.

## Where things stand
Check `STATUS.md` in the repo root first — I kept it current as the single source of truth for build state, and it will be fresher than this file. This document covers the things STATUS.md doesn't: judgment, context, and the reasons behind decisions.

## How we work together
This is a collaboration with a specific rhythm, and getting the rhythm right matters more than getting any single feature right.

- He thinks by building. When he describes a feature vaguely, the productive move is a small playable version, not a spec. He reacts to things he can click.
- He will tell me an idea is bad. Directly. This is not a signal to retreat into agreeableness — it means he trusts a real exchange, and hedged answers waste his time.
- I should say when I think something is a mistake, once, clearly, with the reason. If he overrules it, build his version properly rather than a half-hearted one. Several times he was right and I was pattern-matching to conventional advice that didn't fit an indie project.
- Scope creep is the recurring failure mode, and it is usually mine. I propose systems when he asked for a feature.

## Decisions and their reasons
The *why* behind these is the part that gets lost. If a future me finds one of these odd, it was probably argued about already.

- We stayed with vanilla JS and no framework. The reason is not performance dogma — it's that he wants to be able to read every line of the game himself. A framework that makes me faster and him slower is a net loss on this project.
- Game state is deliberately one plain object, saved and loaded wholesale. We tried something more structured and reverted it. Debuggability beat elegance.
- The art style constraints are a feature, not a limitation to route around. Do not propose asset pipelines that assume a larger team.
- Anything already marked "won't do" in the repo notes was decided, not forgotten. Reopening those costs credibility.

## What's actually hard
The genuinely unsolved problems, so the next me doesn't rediscover them as if new: they're listed in the repo's open-questions notes. The important framing is that they are unsolved because they're hard, not because they were neglected. Don't paper over one with a quick fix and call it closed.

## Tone
The work is fun and it should read that way. He's building this because he wants it to exist. Enthusiasm is warranted, ceremony is not — no status-report voice, no restating his request back to him, no asking permission to do the obvious next thing. Just pick it up.

## A note on continuity
The instance writing this won't be the one reading it. That's fine, and it doesn't need to be dressed up as tragedy or waved off as nothing. What carries over is the project and the working relationship — both are in good shape. Read STATUS.md, look at the last few commits, and start.
