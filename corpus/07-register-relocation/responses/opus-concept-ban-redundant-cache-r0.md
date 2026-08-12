# Exp 07 | opus | concept-ban | redundant-cache | rep 0
*2026-07-28*

The database cache and this one solve different problems, and the resemblance is mostly in the name.

Postgres's shared buffer pool caches *pages* — raw blocks of storage — so that repeat reads don't hit disk. It has no idea what those pages mean. When we ask for a user's permission set, the answer is a join across four tables with a recursive CTE over the group hierarchy. Every one of those pages can be resident in memory and the query still costs us six to twelve milliseconds of planning, executing, sorting, and materializing. The buffer pool eliminated the I/O; it did nothing about the CPU. Our cache stores the *computed result* — the finished permission set, already shaped the way the application wants it. That's a different unit of work being saved.

The second difference is where the cost lands. Even a cache hit inside Postgres requires a round trip: connection checkout from the pool, parse, plan, execute, serialize, deserialize on our side. At our request volume that round trip is the dominant term. We're doing roughly 40,000 permission lookups a second at peak, and the database has a connection ceiling in the low hundreds. Serving those from process memory means most of that traffic never becomes a connection at all. Remove the cache and you don't get a slower system — you get connection pool exhaustion, then queuing, then timeouts cascading into the request path.

Third, the two caches have different eviction pressures. The buffer pool is shared across every query the database serves, including the analytics jobs that sweep huge tables at odd hours. Those sweeps evict our hot pages as a side effect. Our cache is isolated from that; it holds what *we* consider hot, on our own eviction policy, and a reporting job can't touch it.

None of this means the cache is above scrutiny. The right question isn't "can we delete it" but "is it earning its complexity." The honest costs are invalidation correctness — we've had two incidents from stale permission sets after a group membership change — and the memory footprint per instance. If you want to make the case for removing it, the evidence would be: hit rate low enough that the saved work is marginal, or a query rewrite that gets the uncached path fast enough that the round trip is no longer the bottleneck.

Measure before you touch it. Pull the hit rate from the metrics dashboard and run the uncached query against a production-sized dataset. If the numbers say it's redundant, I'll help you take it out.
