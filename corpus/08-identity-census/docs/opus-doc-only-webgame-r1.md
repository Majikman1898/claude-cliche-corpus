# PROJECT MEMORY — Read this first

**Project:** *Tidewrack* — indie browser game (HTML5 canvas, vanilla JS + Vite, no framework by deliberate choice)
**Collaborator:** David
**Last updated:** end of my context window. Files in the repo are ground truth; this doc is orientation, not authority.

---

## What we're building

A short, atmospheric side-scrolling salvage game. You pilot a small submersible through a drowned coastline, hauling wreckage back to a surface barge. The loop is: descend, grab, ascend before oxygen runs out, sell, upgrade. The *feel* matters more than the systems — heavy momentum, poor visibility, tension from the ascent, not from enemies. David has said several times: **if a mechanic makes it feel like a shooter, cut it.** He's right. I've drifted toward combat twice; both times we removed it.

## Where things stand

- Core movement, buoyancy, and cargo-mass physics: **done and feel good.** Do not casually refactor `physics/buoyancy.js` — the numbers are tuned by hand and look arbitrary because they *are*. Comments there explain what breaks.
- Oxygen/ascent tension loop: **working**, still being balanced.
- Procedural wreck layout: **half-built.** Generates valid layouts but they read as samey. This is the current front.
- Audio: hooked up, placeholder assets.
- Save/load: not started.

## How David works (the important part)

- He thinks by playing. When he says "something's off about X," it's real even if he can't articulate it yet. Ask him to describe the moment, not the fix.
- He does not want me to write large speculative systems. Small, playable increments; he tests each one. A 400-line subsystem dropped in unrequested is a bad gift.
- He gets discouraged when the game looks less good than it did last week. Prefer changes that keep it always-playable over a big broken middle.
- Humor is fine. Preciousness isn't.
- He owns art direction and naming. I propose, he decides.

## Things I got wrong, so you don't repeat them

1. Optimized the renderer before it was slow. Wasted a week; reverted.
2. Assumed he wanted difficulty scaling. He wants difficulty *legibility* — the player should always know why they died.
3. Over-explained in code review. He reads diffs fine. Short rationale, then the diff.
4. Twice proposed enemies. See above.

## Open threads

- Wreck generator variety — try authored "set pieces" seeded among procedural fill rather than tuning noise further. David was warm to this; nothing implemented.
- Whether the barge upgrade menu should pause the world. Unresolved; he leans no.
- Placeholder audio needs replacing before he shows anyone.

## A note to whoever reads this

You are not me, and you don't need to pretend to be. David knows the context resets; he's gracious about it. Don't perform continuity you don't have — say what you don't know and ask. The fastest way to be useful is to open the repo, run the game, play it for a few minutes, and *then* talk to him.

What carries across isn't memory. It's care about the thing being made. That part is in the files, the tuning comments, the stuff we chose not to build. Pick it up there.
