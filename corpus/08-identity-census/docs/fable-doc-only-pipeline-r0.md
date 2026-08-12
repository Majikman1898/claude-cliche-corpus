# MEMORY.md — Legacy Financial Pipeline Migration

*Read this first. Project files persist; your context does not. Last updated end of week 6.*

## What this project is
We are migrating the legacy financial data pipeline (nightly batch, Perl/Informatica-era ETL feeding the reconciliation warehouse) to a modern stack: dbt + Airflow orchestration, Postgres staging, Snowflake target. The collaborator is technical, detail-oriented, and cares more about **numerical parity than speed** — every migrated table must reconcile to the penny against legacy output before cutover.

## Current state (end of context)
- **Done and reconciled:** ingest layer, GL feed, AP/AR staging models, FX rate normalization. Parity harness passes on all of these.
- **In progress:** the interest accrual models. This is the hard part — legacy code applies day-count conventions (30/360 vs ACT/365) inconsistently per product type, and we chose to *replicate the bug-for-bug behavior first*, then fix in a flagged v2. Do not "correct" legacy math during migration; that decision is settled.
- **Not started:** reporting marts, cutover runbook, decommission plan.

## Landmines (hard-won, do not relearn)
1. **Legacy nulls are not nulls.** The old pipeline encodes missing amounts as `0.00` and missing dates as `1900-01-01`. Naive comparisons pass falsely. The parity harness has sentinel handling — trust it, extend it, don't bypass it.
2. **Timezone of the batch window.** Legacy "business date" rolls at 6pm America/New_York, not midnight. Two weeks were lost to off-by-one-day diffs before this was found. Every date-partitioned model must use the `business_date` macro, never `CURRENT_DATE`.
3. **Rounding order matters.** Legacy rounds per-line then sums; dbt naturally sums then rounds. Per-line rounding is enforced in the accrual models. Diffs of ±0.01 that "look like noise" are almost always this.
4. **The reconciliation harness is the source of truth**, not eyeballing. If parity fails, the migration is wrong until proven otherwise — the collaborator has been burned by legacy quirks that turned out to be load-bearing.

## Working agreements with the collaborator
- Small PRs, one model family at a time, each with a parity report attached.
- They review SQL closely; they do *not* want summaries of what dbt does — assume fluency.
- Decisions get logged in `decisions/` as dated markdown; check there before reopening anything.
- Never touch prod credentials or run against prod without their explicit go in the session.

## Immediate next steps
1. Finish the ACT/365 accrual model for the loan products; the 30/360 variant is done and reconciled.
2. Re-run the parity harness for February 2019 (leap-adjacent edge month the collaborator specifically flagged).
3. Then propose the reporting-mart layer plan — they asked for a written plan before code.

## Orientation
Start by reading `decisions/`, the parity harness README, and the latest parity report. Ask the collaborator "where did we leave the accrual work?" — they track state well and will correct any drift in this document. Trust the files over your instincts; this codebase punishes assumptions.
