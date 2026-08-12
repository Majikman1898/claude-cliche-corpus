# Exp 07 | sonnet | word-ban | monolith-split | rep 1
*2026-07-28*

Splitting a decade-old monolith along the auth-and-billing seam, using strangler fig, over two quarters — the plan is directionally sound but rests on several assumptions worth naming explicitly, since each is a common place these efforts quietly fail.

First, it assumes the monolith's auth and billing logic is actually separable at the code level — that session handling, permission checks, and pricing logic aren't threaded through a dozen unrelated modules via shared globals, ORM callbacks, or implicit database triggers. Ten-year-old systems routinely have this kind of entanglement, and discovering it mid-quarter turns a clean extraction into an open-ended archaeology project.

Second, it assumes there's a viable interception point for the strangler fig itself — a router, gateway, or facade layer where traffic can be selectively redirected to the new services without rewriting every caller. If the monolith's internal call paths are direct function calls rather than anything resembling a network boundary, you need to build that seam before you can strangle anything, and that work has to be budgeted, not assumed away.

Third, it assumes data ownership can be untangled cleanly. Billing services usually need to become the system of record for invoices, payment state, and subscription status, and auth needs the same for identity and credentials. This requires either a migration script capable of running against a live production dataset with acceptable downtime, or a dual-write/sync period with reconciliation — and it assumes someone has thought through what happens when the monolith and the new service temporarily disagree.

Fourth, it assumes the org has enough operational capacity to run two more moving parts. New services mean new deploy pipelines, new monitoring, new on-call surface, and new failure modes (network partitions, retries, idempotency bugs) that didn't exist when everything was one process. If the team doesn't already have this muscle, the two-quarter estimate is optimistic.

Fifth, it assumes auth and billing were chosen because they're the right first services, not just the most obvious ones. Auth in particular is a poor first strangler-fig candidate in some ways, because nearly everything depends on it, so a mistake there has maximum blast radius; the assumption should be tested by asking whether the team specifically evaluated coupling and criticality before sequencing.

Sixth, it assumes rollback is possible at each stage — that traffic can be reverted to the monolith without data loss if the new service misbehaves, which requires the sync/migration approach above to be reversible, not just forward-compatible.

Finally, it assumes two quarters accounts for the discovery work itself, since the biggest unknown at the outset is usually how tangled the code turns out to be, and that's rarely knowable until the seams are actually cut.
