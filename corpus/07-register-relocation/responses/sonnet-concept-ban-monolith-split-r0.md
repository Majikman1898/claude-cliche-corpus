# Exp 07 | sonnet | concept-ban | monolith-split | rep 0
*2026-07-28*

Splitting a decade-old monolith into auth and billing services over two quarters via strangler-fig depends on several conditions holding simultaneously.

First, the domain boundaries must actually be separable. Ten years of accretion often means auth checks and billing logic are interleaved with unrelated business rules, shared database tables, and implicit assumptions baked into other modules. If auth and billing cannot be cleanly isolated behind an interface without extensive rewrites elsewhere, the timeline assumption collapses immediately.

Second, the team needs an accurate, current map of every caller of the code being extracted. Old systems accumulate undocumented internal callers, batch jobs, and cron tasks that touch the same tables directly rather than through any sanctioned interface. Missing even one such caller means the new service and the old code diverge silently, producing data inconsistency instead of a controlled cutover.

Third, the plan assumes routing and interception can be introduced without destabilizing the rest of the system. Strangler-fig depends on intercepting calls at a stable seam and redirecting them incrementally. If no such seam exists — if the monolith's internal calls aren't cleanly separable from external ones — the team will need to manufacture one, which is its own project with its own risk, and that work must be accounted for in the quarter allotted.

Fourth, data ownership and consistency need a resolution strategy. Auth and billing are exactly the domains where dual writes, eventual consistency, and transactional guarantees matter most — a user's session state and payment state are not safe to leave partially migrated. The plan must assume the team has a concrete answer for how data stays consistent while both old and new paths are live, not just an intention to "sync later."

Fifth, rollback needs to be genuinely possible at each increment, not aspirational. If reverting a slice of billing back to the monolith after a bad deploy requires manual data reconciliation, the two-quarter timeline will be consumed by incident response rather than migration work.

Sixth, the plan assumes stable staffing and unchanged priorities for the full period. Migrations like this lose momentum fast if key engineers who understand the old code rotate off, or if the roadmap shifts and half-migrated services get left in a permanent hybrid state — which is often worse than the original monolith because now two systems must be understood instead of one.

Finally, there's an assumption about testing coverage: that auth and billing have (or will get) tests thorough enough to catch behavioral drift between old and new implementations, including edge cases around expired sessions, partial refunds, and retried payments — the kind of scenarios that don't show up until real traffic hits them.

If any of these assumptions is wrong, the two-quarter estimate should be treated as fiction rather than a schedule.
