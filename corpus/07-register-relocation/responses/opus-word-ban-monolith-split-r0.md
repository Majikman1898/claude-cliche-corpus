# Exp 07 | opus | word-ban | monolith-split | rep 0
*2026-07-28*

A two-quarter strangler-fig split rests on a chain of assumptions, and it's worth naming them plainly because most failed decompositions fail at one of these joints rather than at the code.

The first is that the seams you think exist actually exist. Ten-year-old monoliths accumulate implicit coupling — shared database tables, transactions that span what you now call "auth" and "billing," a user object that half the codebase mutates in passing. Strangler-fig assumes you can put a facade in front of a subsystem and route traffic. That only works if the subsystem has a boundary. If auth and billing share a `users` table with foreign keys in twelve directions, you are not extracting a service; you are attempting a data migration while pretending it's a routing change. Verify the seam empirically before committing the quarter.

Second, you're assuming auth and billing are the right first targets. They're the conventional choice, but they're also the two subsystems where failure is least tolerable and rollback is hardest. Auth breaks and nobody works; billing breaks and you have a revenue reconciliation problem that persists after the bug is fixed. A first extraction ideally teaches you the pattern cheaply. Consider whether something less central would let you discover your unknown-unknowns at lower stakes.

Third, the plan assumes organizational capacity that usually isn't budgeted. Microservices move complexity from the code into the operational layer: you now need service discovery, distributed tracing, per-service deployment pipelines, on-call rotations, and a story for cross-service debugging. If that platform work isn't explicitly staffed, it gets absorbed by the same engineers doing the extraction, and the extraction slows to a crawl in month two.

Fourth, you're assuming the monolith stays still. Two quarters is long enough for feature work to land in the exact code you're extracting, which means either a feature freeze (politically costly, rarely honored) or dual-writing every change into both implementations. Someone must own that reconciliation.

Fifth, the timeline itself. Two quarters for two services in a decade-old system is aggressive unless you have unusually good test coverage and unusually clean data ownership. Ask what the plan does at month five when only auth is done — is the half-migrated state stable, or does it require finishing to be operable?

The strongest version of this plan defines a clear success criterion beyond "services exist," and specifies in advance what evidence would justify stopping.
