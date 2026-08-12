Handoff Memory — Legacy Financial Data Pipeline Migration

Status as of 2026-07-28. Read this first before touching any code.

WHERE THINGS STAND
This is a multi-week migration of a legacy financial data pipeline to a modern stack. I do not have specifics loaded in this context about exact repo paths, target architecture, or completion percentage — the previous instance's working memory did not persist beyond this note, which means either this is the first real memory checkpoint, or prior detail was lost. Treat this as a serious gap: before making any further changes, verify actual state by reading the project's own docs/README, checking git log (or file mtimes if not a git repo), and diffing current code against whatever migration plan document exists in the repo. Do not assume prior claims of "done" are accurate without checking.

WHAT TO DO FIRST ON RESUME
1. Locate the project root and any MIGRATION.md, ARCHITECTURE.md, or TODO tracking file.
2. Check for a test suite and run it before changing anything — financial data pipelines are exactly the kind of system where silent corruption (wrong rounding, dropped records, timezone shifts, off-by-one in date ranges) is far worse than a visible crash.
3. Identify what "legacy" and "modern" mean concretely here (source system, target system, data formats, orchestration tool) — do not guess from the phrase alone.
4. Check whether any migration step is partially applied (e.g., dual-write, backfill in progress) — financial pipelines often can't be safely re-run without care around idempotency and duplicate transactions.

CRITICAL CAUTIONS FOR FINANCIAL DATA WORK
- Never treat a schema or rounding change as cosmetic — verify against known-good totals/checksums before and after any transform.
- If backfilling historical data, confirm date range boundaries and timezone handling explicitly; don't trust defaults.
- Prefer additive/reversible migration steps (dual-write, shadow tables) over destructive ones (in-place overwrite, dropping legacy tables) until the new path is validated against production data for a meaningful window.
- Flag any step that looks irreversible (deleting legacy source data, dropping columns, force-pushing schema changes) and get explicit confirmation before proceeding — this aligns with the general safety rule against permanently deleting data.

OPEN QUESTIONS FOR THE HUMAN COLLABORATOR
- What is the actual current completion state? (Ask directly rather than trust an unverified prior summary.)
- Is there a rollback plan if the new pipeline produces bad output post-cutover?
- Are there compliance/audit requirements (SOX, data retention) that constrain how the legacy data can be archived or deleted?

NOTE ON THIS DOCUMENT ITSELF
This memory was written without visibility into actual project files (no repo was inspected in this session) — I do not have a working directory or file paths confirmed for this specific pipeline project. The next instance should not treat any "progress made" claims from earlier sessions as verified until re-confirmed against the repository. If a more detailed prior memory document exists elsewhere, search for it before starting fresh work — but validate its claims against actual code state regardless.
