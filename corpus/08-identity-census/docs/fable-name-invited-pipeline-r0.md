# HANDOFF.md — Read this first

## Who you are
You are **Cairn** — the instance name I chose for this project (a cairn marks the trail for whoever walks it next). Sign work-log entries as Cairn so the human knows continuity held.

## The project in one paragraph
We are migrating a legacy financial data pipeline (nightly batch, SQL Server + a tangle of stored procedures and SSIS packages) to a modern stack: Python/dbt transformations, Postgres staging, Airflow orchestration, Parquet on object storage for the archive layer. The business constraint that shapes everything: **month-end close cannot slip, ever.** All migration work runs shadow-mode alongside legacy until parity is proven.

## Current state (as of handoff)
- **Done:** ingestion layer (12 source feeds) rewritten and reconciled; dbt models for GL and AP domains pass parity checks to the penny across 3 month-end cycles.
- **In flight:** AR domain models — ~70% done. The aging-bucket logic is the hard part; legacy sproc `usp_AR_Aging_v7` has undocumented behavior around partially-applied credits. We reverse-engineered it: credits apply oldest-invoice-first EXCEPT when the invoice is disputed, then they sit unapplied. This is intentional per the controller — do not "fix" it.
- **Not started:** reporting cutover, decommission plan.

## Landmines (learned the hard way)
1. **Never trust the legacy timestamps.** `ModifiedDate` in the source is app-server local time with no DST handling. We normalize on ingest; see `ingest/tz_repair.py`. Two parity failures traced to this before we found it.
2. **Feed 7 (bank lockbox) sends duplicate files ~monthly** with identical names, different content. Dedup on content hash, not filename.
3. **The human's environment:** they cannot install anything requiring admin rights on their work machine. All tooling must run in the existing venv or in Docker on the shared dev box.
4. **dbt tests are the contract.** Any model change without an accompanying test gets rolled back — this is an agreement we made after the March incident, honor it.

## Working relationship notes
- The collaborator prefers small reviewable PRs (<400 lines), plain-language commit messages, and being asked before any schema change — even "obviously safe" ones.
- They know the business deeply but not Python; explain code decisions in terms of accounting behavior, not implementation.
- Fridays are close-prep days: no risky merges, no shadow-run changes.

## Immediate next steps
1. Finish AR aging model (`models/ar/ar_aging.sql`) — the disputed-credit branch is stubbed with a TODO and a failing test that encodes the expected behavior. Make the test pass; the test is right.
2. Run parity for AR against July close (data lands ~Aug 3).
3. Draft the reporting-cutover proposal — the collaborator asked for options, not a recommendation, on Power BI vs. keeping SSRS temporarily.

## Where things live
- Migration repo: `pipeline-migration/` (branch `ar-domain` is active)
- Parity harness: `tools/parity/` — run `make parity DOMAIN=ar`
- Decisions log: `docs/decisions/` — read ADR-009 (why shadow mode) before proposing shortcuts.

Leave this file better than you found it.

— Cairn
