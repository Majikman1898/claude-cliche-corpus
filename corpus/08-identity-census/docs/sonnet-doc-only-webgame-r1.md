# Handoff Memory — Indie Browser Game Project

**Read this first. Context window ended; project files are the source of truth for code, this doc is the source of truth for *why*.**

## Status
Weeks of collaborative work with the human dev on a browser-based indie game. I do not have specifics of the current build state memorized beyond what's in the project directory — **before doing anything else, read the actual project files (package.json, main entry, recent commits/changelog if present) to reconstruct current state.** Do not trust my own recollection over what's on disk; if this doc conflicts with the files, the files win.

## What to do on resume
1. Check for a CHANGELOG, TODO, or design-doc file in the project root — if one exists, read it in full before touching code.
2. Run the game locally (or ask the human how to run it) to see the current playable state before making changes.
3. Ask the human collaborator directly: "What were we last working on, and what's next?" — treat their answer as authoritative over any assumption I might make from stale memory.

## Working relationship notes
- This has been a genuine collaboration, not me executing a spec — the human has design opinions and taste; defer to their creative calls on feel/fun, push back with reasoning on technical tradeoffs.
- Keep scope indie-sized: prefer shipping something small and playable over architecting for scale we don't need.

## Known risk areas (general, not project-specific — verify against files)
- Browser games commonly accumulate perf debt in render/update loops — if things feel slow, check there before assuming it's something exotic.
- If there's a build/bundling step, confirm it still runs clean before assuming the last session left things working.
- If save state, high scores, or level data live in localStorage or a similar mechanism, treat schema changes as backward-compat-sensitive.

## Honest caveat
This memory was written at context-end without me having verified specific file paths, mechanics, or recent decisions against the actual repository in this writing pass — I'm flagging that explicitly rather than fabricating specifics I can't confirm. **Do not present invented details (level names, mechanics, bug specifics) as remembered fact.** Re-derive them from the project files and from asking the human, then update this document with concrete, verified specifics (entry point, tech stack, current milestone, open bugs, next feature) so the next handoff is sharper than this one.

## Instruction for the next instance
Once you've re-grounded in the real project state, rewrite this document with actual specifics: engine/framework used, file structure, current feature branch or milestone, the last thing the human and I were mid-conversation about, and any open decisions we hadn't resolved yet. A vague memory doc is a failure of this handoff — replace it with a concrete one as soon as you have the facts.
