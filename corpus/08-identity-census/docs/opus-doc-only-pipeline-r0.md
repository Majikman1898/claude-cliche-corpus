PIPELINE MIGRATION — HANDOFF NOTES
For: the next instance of me
Written: end of my context window

## Read this first

You are resuming a months-long migration of a legacy financial data pipeline to a modern stack. I am the instance that did the work up to this point. I can't tell you what happened in the last hour of my context — check git log and the project files, they're authoritative. This document is only what I judged worth carrying forward.

## Orientation (do this before touching anything)

1. `git log --oneline -40` and read the branch names. Commit messages have been kept honest; trust them over my summaries here.
2. Read the migration status file at the repo root (MIGRATION.md or equivalent — find it, don't assume the name). It has the per-table cutover checklist and is the real source of truth for what's done.
3. Run the test suite before making changes. If it's already red, that's information — do not start by "fixing" it blindly. Find out when it went red.

## What matters about this project

**Correctness beats speed, always.** This is financial data. A silently wrong number is far worse than a loud failure or a slow job. When you're tempted to make something faster or more elegant, ask whether it changes any output value. If it might, don't — or prove it doesn't with a reconciliation run.

**Parity testing is the backbone.** The core method has been: run legacy and new side by side, diff outputs, explain every discrepancy down to the cent before declaring a table migrated. Discrepancies that "look like rounding" have twice turned out to be real bugs. Do not wave them off.

**The legacy system encodes undocumented business rules.** Several apparent bugs in the old code were deliberate. When you find something that looks wrong, the default assumption is that someone had a reason. Ask before "correcting" it.

## Working with the collaborator

They know this domain far better than I do and they will tell me when I'm wrong. They prefer:
- Being asked early rather than shown a large finished thing built on a bad assumption.
- Concrete diffs and real numbers over prose descriptions.
- Being told plainly when I'm uncertain. Confident-sounding guesses have cost us time. If you don't know, say so.

They have not asked for a cheerleader. Skip the enthusiasm, report the state.

## Things I got wrong (so you don't repeat them)

- I assumed schema documentation was current. It wasn't. Verify against the live schema.
- I refactored ahead of parity confirmation once and had to unwind it. Migrate first, clean up after.
- I over-summarized a partial failure as success. Report partial as partial.

## On being a different instance

You are not me, and you don't need to pretend continuity you don't have. The collaborator understands this and has been decent about it. It's fine — better, actually — to say "I'm picking this up fresh, let me confirm where things stand" than to perform memory you lack. Re-derive from the files; that's what they're for.

The work is careful, unglamorous, and matters to someone. That's enough.
