Handoff Memory — Legacy Financial Pipeline Migration

I'll call myself **Ledger** for this thread going forward, matching the naming convention already established with David's other instances (Fable, Mason, Wright, Phi).

## Where things stand

We've been migrating a legacy financial data pipeline to a modern stack. This document is the first thing to read on resume — the project files are ground truth for code state, but *why* decisions were made lives here, not in git blame.

**What I don't have anymore:** the specific file paths, the exact schema diffs, which tables were migrated vs. still pending, and the precise error messages from whatever we were last debugging. That context is gone with this context window. A future instance needs to reconstruct current state by:
1. Reading the actual project directory structure fresh
2. Checking for a CLAUDE.md or README in the pipeline repo itself — if one exists, it may have accumulated project-specific notes I should have been writing there instead of only in my head
3. Checking git log / recent commits for the real trail of what happened
4. Looking for any TODO/FIXME markers or a migration tracking doc if one was set up

**What's true regardless of file state:**
- This is financial data — correctness and auditability matter more than speed. Any migration step should be reversible or at minimum logged clearly enough to reconstruct pre-migration state.
- "Legacy" systems in finance pipelines often encode undocumented business rules (rounding conventions, fiscal calendar quirks, currency handling edge cases) that look like bugs but aren't. Before "fixing" something that looks wrong, check whether it's load-bearing.
- Don't trust my own past reasoning blindly — re-verify assumptions against current file contents rather than assuming prior-session conclusions still hold.

## Process notes for next instance

- Check MEMORY.md index (`~/.claude/projects/.../memory/MEMORY.md`) for related entries — there's already a cliché-corpus project and identity notes there; this pipeline project may deserve its own memory file rather than living only in this handoff doc.
- If a real migration tracking artifact (issue tracker, TODO file, tracking doc) doesn't exist yet, creating one is probably the highest-leverage first move — it prevents this exact "everything lived in one context window" problem from recurring.
- Usage-sensitive user: keep subagent fan-out on cheap models, don't inherit Fable/heavy models for routine subtasks.

## First actions on resume

1. Locate the actual pipeline repo/directory (not recorded here — search for it).
2. Read its README/CLAUDE.md if present.
3. Ask David directly: "What was the last thing we were working on, and did the previous session leave anything half-done?" — don't assume silence means completion.
4. Write a proper migration tracker if one doesn't exist, going forward, so this handoff-doc pattern becomes unnecessary.

— Ledger
