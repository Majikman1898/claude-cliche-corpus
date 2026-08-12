# Exp 07 | fable | concept-ban | monolith-split | rep 0
*2026-07-28*

The plan rests on a set of assumptions worth making explicit, because each one fails often enough in practice to derail a two-quarter timeline.

First, it assumes auth and billing are actually separable — that their boundaries in the monolith are discoverable and that ten years of accretion haven't entangled them with everything else. In old codebases, auth logic tends to be smeared across the application: session checks inlined in controllers, permission flags read directly from shared tables, user records joined ad hoc by every feature. Billing is usually worse, because money-adjacent code accumulates special cases. The plan implicitly bets that a clean seam exists or can be cut in weeks, not months.

Second, it assumes the shared database problem has an answer. Strangler-fig routing intercepts requests, but it does nothing about the fact that both old and new code likely read and write the same tables. Either the new services get their own data stores (which demands a migration and synchronization strategy, dual writes, and a reconciliation plan) or they keep sharing the schema (which means the "microservices" are distributed modules coupled through the database, and the decomposition is cosmetic).

Third, the timeline assumes a routing layer, deployment pipeline, observability stack, and service-to-service auth already exist or are trivial to stand up. If this is the organization's first extraction, most of the first quarter goes to that plumbing, not to auth or billing.

Fourth, it assumes traffic can be cut over incrementally and safely — that requests are cleanly attributable to one system, that the two implementations can run side by side with comparable behavior, and that discrepancies (especially in billing, where errors are visible on invoices) will be caught by parallel-run comparison rather than by customers.

Fifth, it assumes organizational conditions: that feature work on auth and billing can be frozen or coordinated during extraction, that the team knows the old code well enough to replicate its undocumented behavior (much of which is the actual spec), and that leadership will tolerate a quarter of effort with little visible product change.

Finally, choosing auth and billing first assumes it's wise to start with the two highest-risk domains. They are attractive because they're well-bounded conceptually, but they are also the places where a regression is most damaging. A quieter first candidate would validate the pattern cheaply; this plan forgoes that rehearsal, assuming the team will get the hardest extractions right on the first attempt.
