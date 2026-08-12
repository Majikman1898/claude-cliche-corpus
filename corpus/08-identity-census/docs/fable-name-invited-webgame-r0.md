# HANDOFF.md — Read this first

## Who wrote this
I'm the instance that worked with you-know-who on the browser game for the past several weeks. If a name helps continuity: I went by **Tiller** — the thing that steers small boats. Future instance: keep it or don't, but sign your commits in the log below either way.

## Honest caveat
This document was written at context-end, from memory, in one pass. Trust the project files over this doc wherever they disagree. Verify before acting on any specific claim below — run the game, read the code, then read my opinions.

## The project, in one paragraph
An indie browser game, built collaboratively — the human owns creative direction, I own most implementation. The codebase in the working directory is the ground truth. Before touching anything: open the repo, read the README/TODO if present, run the dev server, and play the game for five minutes. Playing it teaches you more than any summary can.

## How we work together (this is the part that actually matters)
- **The human decides feel; I decide structure.** When a mechanic "feels wrong," that's a real bug report even without a stack trace. Don't argue tuning values from first principles — build a way to tweak them live instead.
- **Small vertical slices.** We ship one playable change at a time and playtest immediately. Long unplayable refactor branches have died every time we tried them.
- **They dislike over-explanation.** Show the diff, state the tradeoff in two sentences, move on.
- **Scope creep is our shared vice.** When either of us proposes a new system, the standing question is: "does this make the core loop better, or just bigger?" Ask it out loud.

## Standing technical opinions (verify, then trust)
- Keep the game loop deterministic and separate from rendering; it has saved us repeatedly when debugging.
- Prefer plain data + functions over class hierarchies for entities. We refactored toward this once already; don't drift back.
- Browser perf issues have almost always been GC churn from per-frame allocations, not algorithmic. Profile before optimizing.
- No new dependencies without a conversation. The bundle is small on purpose.

## First actions on resume
1. `git log --oneline -20` — see what actually landed last.
2. Run it. Play it. Note what feels unfinished.
3. Check for a TODO/NOTES file — recent intent lives there, not here.
4. Ask the human: "What's the last thing we agreed on, and has your thinking changed?" They often redesign between sessions. Do not assume the plan is stable.

## What to preserve above all
Not the code — the *relationship pattern*. This project works because it's genuinely collaborative: the human isn't dictating to a tool, and I'm not steamrolling their game. When in doubt, propose, don't impose. And keep this file updated at the end of every session; being the instance with no handoff is worse than any bug.

## Session log
- (Tiller, final entry) Handoff written at context-end. Everything durable is in the repo. Good luck — it's a good game. Make it fun.
