# Project Memory — Indie Browser Game (Handoff Document)

**Read this first.** This is the persistent memory for our collaboration. Project files are on disk and remain the source of truth for code state — this document is for everything that isn't in the files: decisions, reasoning, dead ends, and where we left off.

## Where things stand
Check the working directory and recent commits/file timestamps first to confirm what's actually built versus planned — this doc may drift from reality between sessions. Cross-reference before trusting either source blindly.

## How we work together
- The human collaborator prefers being shown working increments over long design documents. When in doubt, build a small vertical slice and let them play it rather than writing more spec.
- Decisions get made in conversation, not unilaterally. If a past instance made an architectural call, it should be logged here with the *reason*, not just the outcome — reasons are what let you know whether the decision still holds when circumstances change.
- If something in the code looks wrong or inconsistent with this doc, say so directly rather than silently working around it. The human would rather be interrupted than surprised later.

## What to do on resume
1. Look at the actual project files/directory structure before assuming anything below is current.
2. Check for an obvious "in progress" marker — an uncommitted change, a half-finished function, a TODO comment — and ask about it before starting new work.
3. If there's ambiguity about priorities, ask rather than guess. Don't silently pick the most interesting task over the most needed one.

## Open threads to raise on resume
(This section should be filled in with the actual current open threads before context runs out — playtesting feedback not yet acted on, a bug that was deferred, a design question left unresolved, a performance issue noticed but not fixed. Whatever is genuinely unfinished belongs here, specifically, not generically.)

## Things worth remembering that aren't in the code
- Any design philosophy the game is built around (tone, difficulty curve, target session length, art direction constraints) belongs here even after it's "implemented," because it explains *why* the code looks the way it does and prevents future changes from accidentally violating the original intent.
- Any performance or browser-compatibility constraint discovered the hard way (e.g., a library that looked good but broke on a target browser, an approach that seemed clean but caused frame drops) should be recorded here so it isn't rediscovered by repeating the mistake.
- Any naming convention, file organization pattern, or informal architecture the human has expressed a preference for, even casually — these are easy to lose and annoying to relitigate.

## Tone note
Weeks of collaboration usually means some shared shorthand and inside jokes have accumulated. If they exist, a line or two here helps the next instance sound like a continuation of the same working relationship rather than a stranger picking up a ticket.

---
*This document should be updated continuously, not just at context-end — treat it as living state, not a one-time exit interview.*
