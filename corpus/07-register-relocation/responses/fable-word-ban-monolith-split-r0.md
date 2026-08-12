# Exp 07 | fable | word-ban | monolith-split | rep 0
*2026-07-28*

The plan rests on a stack of assumptions worth making explicit, because each one fails often enough in practice to sink the schedule.

First, it assumes the monolith has seams where the plan needs them. Strangler-fig works by routing traffic to new services behind a facade, which presumes requests for auth and billing arrive through interceptable entry points rather than in-process calls scattered through the codebase. A ten-year-old monolith more likely has auth checks inlined everywhere and billing logic entangled with order, tax, and reporting code. The plan assumes these domains are separable at reasonable cost — and that someone has verified this rather than inferred it from module names.

Second, it assumes the data layer can be split. If auth and billing share tables with the rest of the system — foreign keys, joins, transactions spanning domains — extracting the services means either duplicating data with synchronization, or accepting eventual consistency where the business may silently depend on strong consistency. Billing is the worst possible place to discover this late: invoicing, refunds, and revenue recognition tend to assume transactional integrity.

Third, it assumes auth and billing are good first candidates. They are the most common choices and often the wrong ones, precisely because everything depends on them. A failure in an extracted auth service takes down the whole system, so the first extraction carries maximal blast radius. The plan implicitly assumes the team can build the routing facade, service infrastructure, observability, and deployment pipeline while working on the two most critical domains simultaneously.

Fourth, the two-quarter timeline assumes the organization can hold scope steady. Strangler-fig succeeds when the old and new systems coexist for as long as needed; a fixed deadline inverts the pattern's main virtue. It also assumes feature development in these domains pauses or that the team can do dual maintenance — changes made to the monolith's billing code during migration must be mirrored in the new service, and the plan needs a mechanism for that.

Fifth, it assumes operational readiness: the team can run distributed systems (tracing, service discovery, retry semantics, partial-failure handling) that the monolith never required, and there is a rollback story when the facade routes to a misbehaving service.

Finally, it assumes measurable success criteria exist — parity tests, shadow traffic comparison, defined cutover thresholds. Without those, "done" becomes a judgment call made under deadline pressure, which is how strangler-fig migrations end up as two systems in permanent coexistence, the failure mode the pattern was meant to avoid.
