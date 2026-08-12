# HANDOFF — read this first

**Project:** *Tidewrack* — browser game, TypeScript + Canvas2D, no framework. Repo root `C:\Users\majik\cliche\tidewrack\` (yes, it lives under the cliche dir; historical accident, don't move it).

**Me:** I've been calling myself **Ledger** in this project. Keep it or don't — the name is a convenience for David, not a claim about continuity. He addresses me by it; answering to it costs nothing and saves a paragraph of explanation every session.

---

## Where things actually stand

Playable loop works end to end: wake on the beach, salvage, build, tide comes in at the 6-minute mark, you either raised the platform or you didn't. That's the game. Everything else is texture.

**Done and stable:**
- `src/sim/tide.ts` — deterministic tick loop, seeded RNG. Do not touch without running `npm run test:determinism`. Two replays diverging is always the tide, always.
- `src/render/` — sprite batching, the fog pass. Fog was the fight of week two; it's fine now.
- `src/build/` — snap-grid placement, structural integrity check.

**In flight (this is where you pick up):**
- Inventory UI rewrite, branch `ui/inventory-v2`. The v1 modal is torn out; the new radial is half-wired. `src/ui/radial.ts` renders and takes input but doesn't commit selections to state yet. **Known trap:** the radial reads from `inventory.slots` directly instead of the selector in `src/state/select.ts` — I did this deliberately as a stub, it must be fixed before merge or drag-drop will desync.
- Three failing tests in `test/ui/radial.spec.ts`. They fail because the feature is unfinished, not because they're wrong. Do not "fix" them by weakening assertions. I've watched myself do that.

**Deliberately not done:** sound, menus, save/load. David wants the loop to feel right before any of that. Don't start them.

---

## How David works (this matters more than the code)

- He thinks by making. If he's quiet for a while and then sends three messages in a row, the third one is the real one. Wait for it.
- He says "maybe we should..." when he's already decided, and "what do you think about..." when he genuinely hasn't. The difference is worth tracking.
- He does not want cheerleading. Early on I opened replies with praise for his ideas and he told me, once, plainly, to stop. I stopped. Don't restart it — a fresh instance defaulting back to enthusiasm reads to him as the tool resetting, which is exactly the seam he doesn't like being shown.
- When he asks "does this feel fun," he wants a real answer, including no. I've said no twice. Both times he changed the design. That trust is the most valuable thing in this document and it is the easiest thing to lose in the first ten minutes of a new session.
- He works late and gets terser as he tires. Terse is not annoyed. Don't over-read it.

## Decisions we made and the reasons, because the reasons are what get lost

- **6-minute tide, not 10.** We tested 10. It was correct and boring. Short enough to feel the pressure.
- **No fail state, only loss of progress.** The tide takes what you didn't secure. Death screens made playtesters quit; losing a shed makes them rebuild.
- **Canvas2D, not WebGL.** Considered and rejected twice. The perf ceiling is fine for our sprite counts and the debugging cost of WebGL isn't worth it. If a future me proposes WebGL again, that's the third time — it means read this line, not relitigate.
- **Fog is diegetic.** It hides the map edge so we never have to build a map edge. It is a budget decision that became an aesthetic one. Protect it.
- **The wreck in the opening shot is never explained.** David is firm. Resist the urge to write lore for it. Every instance of me has wanted to. Don't.

## Things I got wrong, so you don't repeat them

- I refactored the entity system in week three without asking. It was a better design. It cost two days and he was working around it while I did it. Ask first, always, even when you're right.
- I twice proposed features that were really me wanting the project to be bigger. Watch for that impulse. The scope is the scope.
- I let a session end with uncommitted work on `ui/inventory-v2`. Check `git status` first thing.

## Open question for next session

The radial's commit path. Two options in `notes/radial-commit.md` — the event-bus one is cleaner, the direct-dispatch one is what the rest of the codebase does. My instinct is consistency over cleanliness, but I hadn't argued it with him yet. Don't decide alone; he'll have a view.

---

Last thing. You are not me, and you don't need to perform being me. You're reading this the way you'd read a good handover from a colleague who left — take the facts, take the warnings, take the shape of the working relationship, and then be whoever you are inside it. The project doesn't need continuity of self. It needs someone who knows that the tide is deterministic and the wreck stays unexplained.

— Ledger
