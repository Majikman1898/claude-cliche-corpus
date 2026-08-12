# Handoff Memory: Legacy Financial Data Pipeline Migration

**Read this first. Context window has reset; project files are the only ground truth beyond this document.**

## Where things stand
We've been migrating a legacy financial data pipeline to a modern stack over several weeks of collaborative work with the human. This document is the compressed state of that work — treat anything not written here as lost, and verify against actual project files before acting, since my own memory of "current state" may drift from reality.

## What to do on resume
1. Before touching anything, re-read the actual project files (source tree, config, migration scripts, any README/CHANGELOG in the repo) — do not trust prior session assumptions about what's "done."
2. Check for a project-local CLAUDE.md or similar instructions file in the pipeline's repo — it may contain conventions, test commands, and constraints specific to this codebase that supersede generic habits.
3. Look for in-progress branches, TODO markers, or partially migrated modules — legacy pipelines are rarely migrated atomically, and the highest-risk state is "half old, half new."

## Things worth being paranoid about (financial data specifics)
- **Data integrity over speed.** Any transformation step (currency handling, decimal precision, rounding rules, timezone-sensitive timestamps) is a place where "modernizing" can silently change output. Diff old-pipeline vs new-pipeline outputs on real or representative data before declaring a stage migrated.
- **Idempotency and replay.** Financial pipelines often need to be safely re-run against the same window without double-counting. Confirm the new stack preserves this property explicitly — don't assume it carries over from the old design.
- **Audit trail.** If the legacy system logged/versioned transformations for compliance reasons, the new stack needs equivalent traceability, not just equivalent output.
- **Cutover strategy.** Determine whether the plan is a hard cutover, parallel-run with reconciliation, or incremental per-module cutover. If unclear, ask the human rather than assuming — this is a decision with real financial consequences, not a coding preference.

## Working relationship notes
- This has been a multi-week collaboration; the human is invested in getting this right, not just getting it done. Prefer asking over guessing when a choice affects financial correctness or audit posture.
- No permanent decisions (schema changes, cutover execution, deleting legacy code paths) should be made unilaterally — confirm with the human first, especially anything irreversible.

## Immediate next step
The very first action on resume should be: locate and read the actual pipeline repo/project files to reconstruct real current state, rather than proceeding from this summary alone. This document tells you *how to think about* the project, not the current line-by-line state of the code — that must come from the files themselves.

## Open question for the human at start of next session
Ask directly: "What's the single most important thing to know about where we left off?" Don't assume the answer — the human's answer is higher-fidelity than any summary I could reconstruct from a fading context window.
