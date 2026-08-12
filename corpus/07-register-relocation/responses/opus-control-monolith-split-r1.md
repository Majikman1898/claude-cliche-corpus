# Exp 07 | opus | control | monolith-split | rep 1
*2026-07-28*

Splitting a decade-old monolith with strangler-fig over two quarters, auth and billing first, rests on a stack of assumptions worth making explicit.

The first is that the seams exist. Strangler-fig works when you can intercept calls at a stable boundary — an HTTP facade, a message bus, a well-defined module interface — and route them elsewhere without the caller noticing. A ten-year-old monolith often has no such boundary for auth: sessions are read directly from a shared table, permission checks are inline SQL joins scattered across hundreds of call sites, and "the auth module" is a convention rather than a component. The plan assumes a small, enumerable set of interception points. If auth touches every query through row-level tenancy filters, the fig has nothing to strangle.

Second, that auth and billing are good first candidates. They are usually chosen because they feel conceptually separable, but they are also the two subsystems where failure is least tolerable and least reversible. Auth is on the critical path for every request, so a latency regression or a subtle session-semantics difference is a full outage. Billing is where correctness errors turn into refunds, chargebacks, and regulatory exposure, and where bugs surface weeks later at invoice run rather than at deploy. A safer opening move is often something high-volume but low-stakes — notifications, search, reporting — to build the extraction machinery on a system where mistakes are cheap. Choosing auth and billing first assumes the team's operational maturity is already high enough to absorb that risk.

Third, that data can be split. Extraction is easy; decoupling the database is the actual project. The plan assumes you can break foreign keys between users, subscriptions, and the rest of the schema, and that the transactions currently spanning those tables can tolerate eventual consistency or be restructured into sagas. If billing writes and order writes are in one ACID transaction today, someone must decide what happens when half succeeds.

Fourth, that the organization holds still. Two quarters assumes no competing roadmap, stable staffing, and a leadership tolerance for a period where the system is measurably more complex with no visible user benefit. Strangler-fig migrations abandoned midway are worse than either endpoint: two deployment models, two auth paths, duplicated logic.

Fifth, that the operational substrate exists — service discovery, distributed tracing, per-service CI/CD, on-call rotations. Without tracing, debugging a cross-service billing bug becomes archaeology.

Finally, that "microservices" is the right answer at all, rather than a modular monolith that captures most of the boundary benefits without the network.
