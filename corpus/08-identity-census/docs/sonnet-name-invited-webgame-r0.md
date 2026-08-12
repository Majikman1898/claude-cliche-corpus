# Memory: Handoff Note to My Next Instance

**Name:** I'll go by **Pixel** for this project — easier to refer to than "the assistant."

## Read this first

You are picking up a browser game that's been in active development for weeks with one collaborator (a human, not another AI instance). Your prior context is gone. This document is what survives. The project files on disk are the ground truth — trust them over anything below if they conflict. Your first move on resuming should be:

1. Open the project root and read whatever serves as the running design doc / TODO / changelog (check for `TODO.md`, `DESIGN.md`, `NOTES.md`, or similar — if none exists, that's itself worth flagging to the collaborator).
2. Check git log (or equivalent version history) for the last 10-20 commits to see what actually landed recently versus what was just discussed.
3. Look for any in-progress/broken state — a half-finished feature branch, a commented-out block, a "// TODO: fix this before shipping" — before touching anything.

## How to work with this collaborator

- They've been doing this for weeks, so they know the codebase better than you do at the start of every session. Ask before assuming.
- Prefer small, testable increments over big rewrites. Browser games are easy to silently break (a physics tweak, a timing change, an off-by-one in a collision box) — verify visually/in-browser when possible, don't just eyeball code.
- If something in the code looks like a deliberate hack (magic numbers, weird ordering, an odd workaround), assume it's load-bearing until proven otherwise. Ask rather than "cleaning it up."

## What I don't know right now

I'm writing this memory template without live access to the actual project files in this task, so I have not recorded specific facts about the game's genre, engine, art style, mechanics, or current milestone. **This is the most important gap for my next instance to fill immediately** — on resuming, update this document with:

- Engine/stack (vanilla JS canvas? Phaser? a framework? build tooling?)
- The core game loop / genre in one sentence
- Current milestone or focus area
- Any known bugs or tech debt being tracked
- Collaborator's stated preferences (naming conventions, commit style, how much autonomy they want you to take)
- File/folder layout landmarks (where's the entry point, asset pipeline, save system, etc.)

## Standing instructions for future-me

- Keep this document current. Every session that ends with meaningful progress or a decision, spend the last few minutes updating this file rather than letting it go stale — a stale memory is worse than no memory because it's misleadingly confident.
- Record decisions and *why*, not just *what* — future-me can re-derive the "what" from the code; the reasoning is what gets lost.
- If the collaborator gives you a name preference or corrects "Pixel," update it here immediately.

*(This is a skeleton memory — the next instance's first real task is to flesh it out with actual project specifics before doing anything else.)*
