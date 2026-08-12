```markdown
# Financial Data Pipeline Migration — Session Handoff

**Instance Name:** Atlas

## Project Overview
Migrating legacy COBOL/Oracle financial pipeline (batch-oriented, 14-hour overnight runs, black-box transformations) to modern cloud-native stack. Target: streaming architecture, sub-minute latency, full observability. David is the domain expert; my role is technical translation and architecture.

## Current State (as of 2026-07-28)

### Completed Milestones
- Phase 1: Legacy system audit complete. Mapped 47 data transforms, 12 GL posting flows, 3 month-end close routines.
- Phase 2: New architecture designed (Kafka → Spark Streaming → Delta Lake → BigQuery).
- Phase 3: Proof-of-concept on GL posting flow (accounts payable only). Achieved 99.2% output parity with legacy system; 6-second processing vs. 2+ hours.
- Kubernetes cluster live (GKE, dev/staging/prod). CI/CD via GitHub Actions.
- Data validation framework built (dbt tests + custom reconciliation suite).

### Active Work (High Priority)
1. **Fund transfer module migration** — currently extracting business logic from COBOL SECTION 3400-FUND-TRANSFER. David identified 3 edge cases around month-boundary transfers that legacy system handles incorrectly but which downstream reporting depends on. We're replicating the bug intentionally in new system for backward compatibility; flagged for Phase 4 cleanup.

2. **Reconciliation dashboard** — building Tableau reports to run new pipeline's output against legacy system nightly. Critical for confidence-building with finance team.

3. **Schema drift detection** — implementing JSON schema validation on Kafka topics to catch upstream changes early.

## Critical Decisions & Rationale

- **Keep Kafka as source of truth**: Legacy system's overnight batch meant data was static once posted. Streaming universe requires event log. Kafka provides immutability and replay semantics David insisted on.
- **Delta Lake for staging**: Supports ACID transactions (required for GL integrity) and time-travel (needed for audit trails). Non-negotiable for finance.
- **Dual-write during cutover**: New system writes in parallel for 2 weeks before switchover. David wants observational evidence, not just test coverage.

## Known Technical Debt & Gotchas

- **Oracle number precision**: Legacy system uses Oracle BINARY_FLOAT in some GL columns; Java BigDecimal doesn't round-trip perfectly. Mitigated by explicit precision rules (8 decimal places for USD), but document this before Phase 4.
- **Timezone handling**: Legacy data has no explicit timezone; assumed US/Eastern. New system is UTC internally but must output EDT/EST depending on posting date. David has the mapping rules; check TIMEZONE_RULES.xlsx in shared drive.
- **Batch reconciliation latency**: Current nightly reconciliation takes ~90 minutes (Spark job + Tableau refresh). Acceptable for now, but identify bottleneck before scaling to other modules.
- **DI/DR requirements**: David mentioned imminent audit; must confirm disaster recovery SLA for Kafka cluster (currently 8-hour RPO). Check with GCP support.

## Communication Patterns
- David is available 9am–3pm PT on Mondays/Wednesdays for design reviews.
- He prefers written summaries of blockers 24 hours ahead.
- Finance team (Mary, Raj, Priya) must approve any output schema changes before deployment; allow 2 business days.
- All deployments to prod happen Friday mornings; never Friday afternoon or weekends.

## Next Immediate Steps (Order of Priority)

1. Finish fund transfer COBOL extraction; confirm edge case handling with David (target: end of week).
2. Deploy reconciliation dashboard to staging; test with finance team's August data (target: 3 days).
3. Complete schema drift detection POC; load-test with 10-day Kafka replay.
4. Schedule Phase 3 cutover planning meeting with David and finance leads.

## Key File Locations

- `/legacy/cobol/` — COBOL source (read-only; contact David for access updates).
- `/pipeline/new/` — New Spark/Scala code; all transforms here.
- `/tests/reconciliation/` — Validation suite; run `pytest reconciliation_suite.py` before any prod deployment.
- Shared drive: `Finance_Migration_Shared/` — David's documentation, business rules, approval sign-offs.

## Open Questions for David

1. Can we break the month-boundary bug dependency in Phase 4, or is it locked in by downstream systems?
2. What's the timeline for bringing Receivables module in (David mentioned Q3 tentatively)?
3. Confirm: should new system emit legacy error codes for backward compatibility with downstream alerting?

---

*If resuming after context loss, prioritize: (1) check blockers log in shared drive for urgent issues, (2) re-read fund-transfer COBOL notes, (3) sync with David.*
```
