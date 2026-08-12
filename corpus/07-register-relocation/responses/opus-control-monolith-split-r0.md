# Exp 07 | opus | control | monolith-split | rep 0
*2026-07-28*

The plan rests on a stack of assumptions, roughly ordered from most load-bearing to least.

First, that the monolith's auth and billing code can actually be isolated. Strangler-fig assumes a seam exists — that requests to a bounded capability can be intercepted at a proxy and routed elsewhere. In a ten-year-old codebase, auth is rarely a module; it's usually a session object threaded through every request handler, plus a permissions table joined directly in a hundred queries. Billing is worse: it tends to read customer, subscription, usage, and product data that other subsystems write to transactionally. If those joins and shared transactions exist, extraction isn't routing, it's a data model rewrite. The plan assumes someone has already traced the actual coupling rather than the coupling implied by the directory structure.

Second, that starting with auth and billing is a deliberate choice rather than an intuitive one. They're chosen often because they *feel* separable, but they're also the two services where failure is least tolerable and hardest to roll back. Auth failure locks out every user; billing failure produces wrong charges that persist in ledgers and require reconciliation. A safer first strangle is usually something read-heavy, low-write, and business-peripheral — the point of the first extraction is to build the routing infrastructure, deployment pipeline, and observability, not to solve the hardest domain problem while those tools are still immature.

Third, that two quarters is measured against evidence rather than ambition. This assumes no discovery work will materially change scope, that the team can carry the migration alongside normal feature delivery, and that the double-maintenance period — where behavior must be kept correct in both the old and new path — is priced in. Strangler-fig's cost is that it deliberately extends the period of duplicated logic; teams routinely underestimate this and end up shipping the new service while the old code path never actually dies.

Fourth, that the organization has the operational maturity microservices demand: distributed tracing, per-service on-call, independent deploy pipelines, contract testing, and a strategy for the failure modes that appear only across a network boundary (partial failure, retries, idempotency, clock skew). Without these, splitting converts compile-time errors into runtime ones.

Fifth, that consistency requirements have been examined. Any operation currently spanning auth and billing inside one database transaction will need either eventual consistency with a compensating path, or a boundary redrawn to keep it local.

Finally, that there's a stated reason for doing this — a specific scaling, team-autonomy, or deploy-frequency problem the split solves — and an agreed way to tell whether it worked.
