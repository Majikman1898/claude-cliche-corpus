# Exp 07 | fable | control | monolith-split | rep 0
*2026-07-28*

For this plan to succeed, several assumptions must hold, and each is worth testing before committing.

First, the plan assumes clean seams exist where auth and billing can be carved out. A ten-year-old monolith rarely has them: auth logic tends to be smeared across session handling, middleware, and direct table reads, while billing often couples tightly to order, customer, and reporting code. The plan implicitly assumes these domains can be given well-defined interfaces without first doing substantial refactoring *inside* the monolith — work that consumes calendar time before any service is extracted.

Second, it assumes the data can be separated. Strangler-fig routing is the easy half; the hard half is that both auth and billing likely share a database with everything else, including foreign keys, joins, and transactions that span domains. The plan assumes either that shared-database coupling is tolerable during transition or that data migration and synchronization (dual writes, change data capture, backfills) fit inside two quarters. Billing especially assumes the team can handle eventual consistency in a domain where correctness is financial and auditable.

Third, the timeline assumes the organization can absorb the operational load of distributed systems while extraction proceeds: service discovery, deployment pipelines, observability, distributed tracing, secrets management, and on-call practices for multiple services. If this platform layer doesn't already exist, building it competes directly with the extraction work, and two quarters becomes optimistic.

Fourth, it assumes the strangler façade itself is feasible — that there's a place to interpose a routing layer, and that traffic to auth and billing flows through interceptable entry points rather than in-process function calls scattered through the codebase. In-process coupling means every caller must be rewritten to make network calls, with new failure modes (timeouts, retries, partial failure) the monolith's code never had to consider.

Fifth, it assumes starting with auth and billing is wise. These are arguably the two riskiest domains in most systems: auth is on the critical path of every request, and billing errors cost money and trust directly. The plan assumes the team's first attempt at extraction — when its microservices skills are weakest — can safely land on the highest-stakes components. Many practitioners would instead start with a peripheral, low-risk domain to learn on.

Finally, it assumes stable scope and staffing: that feature work in these areas can freeze or flow through a dual-maintenance period, that the people who understand the legacy code are available, and that leadership will hold course when the migration is mid-flight and delivering no visible features. If any of these slip, the common failure mode is a half-strangled monolith — permanently more complex than either endpoint.
