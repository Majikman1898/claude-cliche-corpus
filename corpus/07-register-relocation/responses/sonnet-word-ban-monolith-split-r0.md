# Exp 07 | sonnet | word-ban | monolith-split | rep 0
*2026-07-28*

Assumptions That Must Hold for the Strangler-Fig Migration

Splitting auth and billing out of a decade-old monolith over two quarters is achievable, but the timeline and pattern both rest on assumptions that rarely get stated explicitly. Surfacing them now is cheaper than discovering their absence in production.

First, the monolith's domain boundaries around auth and billing must already be reasonably clean at the code level — distinct modules, minimal circular dependencies, few places where billing logic silently depends on session state or vice versa. Strangler-fig works by intercepting traffic and routing it to a new service while the old path atrophies; if the two domains are tangled through shared database tables, ambient global state, or implicit coupling via ORM associations, the "thin seam" the pattern assumes doesn't exist, and the team will spend the first quarter just building one.

Second, the routing or proxy layer needed to redirect traffic incrementally must be feasible to introduce without a large upfront rewrite. This usually means an API gateway, feature flags, or reverse-proxy rules capable of splitting traffic per-endpoint or per-tenant. If the monolith's request handling is monolithic in the literal sense — one process, no clean ingress point — building that seam is itself a project, not a config change.

Third, data ownership must be resolvable. Auth and billing typically touch the most shared, most sensitive tables in any system (users, accounts, entitlements, invoices). The plan assumes a workable strategy for dual-writes, eventual consistency, or a temporary shared database during the transition — plus a rollback path if the new service produces incorrect data. Skipping this is the most common cause of migrations that quietly corrupt data rather than visibly failing.

Fourth, ten years of undocumented business logic — edge cases in trial periods, grandfathered pricing, auth exceptions for legacy integrations — must be discoverable before extraction, not after. The plan assumes either strong test coverage or domain experts who remember the exceptions; without one of these, the new services will faithfully reimplement the documented behavior and quietly drop the undocumented behavior that customers depend on.

Fifth, two quarters assumes stable staffing and that this isn't the team's only priority. Strangler-fig migrations are notorious for stalling indefinitely once the visible pain is relieved and the remaining legacy traffic becomes someone else's problem later.

Finally, the choice of auth and billing first assumes they're actually the highest-leverage or highest-risk components to extract, rather than simply the most obvious ones — that assumption is worth challenging explicitly before work starts, since auth and billing are also the domains where a rollback failure does the most damage.
