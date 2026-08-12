# Exp 07 | sonnet | control | monolith-split | rep 0
*2026-07-28*

Splitting a decade-old monolith into microservices via strangler-fig, starting with auth and billing over two quarters, is a sound strategy in principle, but its success depends on several assumptions that are easy to state and hard to verify.

First, the plan assumes the monolith's boundaries around auth and billing are actually separable — that these subsystems don't share database tables, transactions, or implicit invariants (like "billing writes always happen in the same transaction as an auth state change") that would make clean extraction impossible without a deeper untangling effort than scoped for. A decade of accreted code likely has undocumented coupling that won't surface until extraction is underway.

Second, it assumes the team has accurate, current knowledge of the system's behavior. Ten-year-old codebases often outlive the people who understand them; if institutional knowledge has eroded, the "strangler" routing layer will misroute edge cases nobody remembers exist.

Third, it assumes two quarters is enough time not just to write new services but to build the strangler facade, dual-write or dual-read reconciliation, observability for two systems running in parallel, and a rollback path — and that this estimate was built from actual investigation rather than optimism. Migrations chronically underestimate the "glue" work between the old and new systems.

Fourth, choosing auth and billing first assumes these are the right starting points. They're common strangler-fig starting choices because they're well-bounded conceptually, but they're also high-blast-radius: auth failures lock out all users, billing failures have financial and compliance consequences. The plan should assume this risk is acceptable and mitigated, not merely tolerated by default.

Fifth, it assumes data consistency during the transition is solvable — that the team has a concrete answer for how billing state stays correct while both old and new paths can write to it, including reconciliation and idempotency, not just "we'll route traffic gradually."

Sixth, it assumes organizational readiness: that on-call ownership, testing infrastructure, and deployment pipelines for independently-deployable services exist or will be built in parallel, and that engineers have (or will gain) the operational skills microservices demand — this is as much a people and process migration as a technical one.

Seventh, it assumes stakeholders (finance, compliance, customer support) are aligned on acceptable risk and downtime for billing and auth changes specifically, since these are the two subsystems where user-facing incidents are most costly and most visible.

Finally, the plan assumes success can be measured and course-corrected — that there are defined rollback triggers and that "two quarters" is a checkpoint, not a fixed deadline the team will feel pressured to hit even if extraction reveals it's unsafe.

If any of these — separability, institutional knowledge, time realism, blast-radius tolerance, data consistency strategy, org readiness, or stakeholder alignment — doesn't hold, the plan's soundness in principle won't translate into a safe execution in practice.
