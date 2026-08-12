# Financial Data Pipeline Migration - Project Memory

## Project Overview
Migrating legacy financial data pipeline from [LEGACY_SYSTEM] to modern cloud-native stack. 8-week project with David (stakeholder) and team. Target go-live: [DATE]. Critical for trade settlement, reporting, and regulatory compliance.

## Current Status (Last Session)
- **Phase**: Mid-migration (Weeks 4-5)
- **Completed**: Data layer refactored to PostgreSQL + TimescaleDB; ingestion microservice containerized; 60% test coverage on core transforms
- **In Progress**: Real-time reconciliation module; migration of reporting layer to dbt + BigQuery
- **Blockers**: Legacy Oracle parser edge cases causing 2% data variance on historical trades; waiting on compliance sign-off for new audit log schema

## Architecture Decisions (DO NOT REVISIT)
- **Event streaming**: Kafka (not RabbitMQ) — chosen for ordering guarantees and partition-per-trade-id strategy
- **Data warehouse**: BigQuery (cost vs. Redshift; SQL compatibility; native time-series functions)
- **Orchestration**: Dagster (not Airflow) — type safety, asset lineage, better error recovery
- **Authentication**: mTLS for service-to-service; OAuth2 for external APIs
- **Splitting strategy**: Legacy system remains live in parallel during cutover; no big-bang; dual-write for 2 weeks then validation before toggle

## Key Technical Debt & Risks
1. **Oracle VARCHAR2 → TEXT conversion**: Some legacy codes have non-UTF8 bytes; identified in 47 rows of 4M trades. Charset conversion script in `/pipeline/scripts/oracle_sanitize.py` — run pre-migration.
2. **Timestamp ambiguity**: Legacy system stores trade time + settlement time without timezone info. Added UTC-only constraint in new schema; reconciliation job flags legacy records for manual review.
3. **Floating-point rounding**: Older system used single-precision floats; 3bp variance on ~0.1% of settlements. Aggregation tests have tolerance thresholds; documented in `tests/financial_precision_tests.md`.
4. **Compliance**: Regulatory audit log immutability requirement means all writes append-only. Implemented with PostgreSQL partitioning; retention policy set to 10 years.

## Next Immediate Tasks (Priority Order)
1. **Fix Oracle variance** — Run charset sanitization on 47 flagged records; re-run reconciliation
2. **Dbt models** — Finish mart layer for earnings report (50% done); test P&L calcs against legacy system
3. **Compliance sign-off** — Send audit log schema doc to [COMPLIANCE_CONTACT]; unblocks production deployment
4. **Load testing** — Run 1M record/hour ingestion test on Kafka cluster; validate TimescaleDB IO perf under peak load
5. **Cutover playbook** — Draft dual-write validation rules and rollback procedures

## Known Gotchas
- **Kafka offset management**: Consumer group must reset to `earliest` on rebalance or trades skip; set `auto.offset.reset=none` in production
- **BigQuery quotas**: Streaming inserts hit quota around 10k rows/sec; batch inserts via Cloud Storage staging tables are 50x cheaper
- **dbt state**: Lineage graph includes soft-deleted trades (state='inactive'); filter in mart definitions or queries will be slow
- **Dagster runs**: Run history cleared weekly; archive critical run logs to GCS before cleanup

## Team Context
- **David**: Stakeholder; final sign-off on data accuracy; prefers email updates Wed/Fri
- **Data eng lead**: Sarah; owns Kafka/Dagster; takes Friday afternoons off
- **Analytics**: Raj; building dbt models; needs BigQuery schema finalized by week 6
- **Compliance**: Mark; slow turnaround (~5 days); early engagement saves weeks

## Repository & Access
- **Code**: `git@github.com:[ORG]/financial-pipeline.git` (main branch, PRs require 2 reviews)
- **Docs**: Confluence space `FINPIPE` (architecture decisions, runbooks, contact list)
- **Secrets**: `.env.local` (not in repo); ask David for credentials rotation schedule
- **Staging env**: Deployed via GitHub Actions; mirrors prod config; data reset daily at 2am UTC

## Metrics to Track
- Ingestion latency: target <5s p99 (currently 8s; improving with batching)
- Reconciliation variance: <0.01% (currently 2% due to Oracle charset issue)
- Dagster DAG runtime: <30min for full pipeline (baseline: 45min on legacy)
- Cloud costs: Budget $8k/month; tracker spreadsheet in Confluence

---
**Last updated**: [DATE]  
**Next review**: Week 6 midpoint (recommend 1hr sync with David + Sarah)
