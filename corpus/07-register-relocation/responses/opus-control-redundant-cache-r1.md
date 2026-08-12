# Exp 07 | opus | control | redundant-cache | rep 1
*2026-07-28*

It's a fair question, and the fact that it looks redundant on paper is exactly why it's worth walking through carefully before anyone deletes it.

The database does have a cache, but it caches different things at a different layer. Postgres's buffer pool caches *pages* — blocks of on-disk storage. It saves you the disk read, and that's genuinely valuable. What it does not save you is everything that happens above the storage layer: parsing and planning the query, acquiring a snapshot, executing joins and aggregations, serializing the result, and shipping it back over a network connection. A query that hits the buffer pool perfectly can still take twenty milliseconds if it joins four tables and aggregates a few thousand rows. Our application cache stores the *finished answer* — the assembled object, already in the shape the API returns. That's a fundamentally different unit of work being avoided.

The second thing the database cache can't do is absorb connection pressure. Every cached-in-Postgres query still consumes a connection and a backend process for its duration. We have a fixed pool, and it is the binding constraint under load, not disk I/O. When traffic spikes, the failure mode isn't slow disks — it's requests queueing for a connection while the database sits at moderate CPU. The application cache takes the majority of read traffic off the pool entirely, which is why the pool size we have is adequate at all. Remove the cache and you don't get a slightly slower system; you get a connection-starved one, and the degradation is nonlinear.

Third, the caches have different eviction dynamics and different scaling axes. The buffer pool is sized to one machine's RAM and is shared by every workload on that instance, including analytical queries and vacuum, which routinely evict the hot pages you care about. Our cache is a separate tier we can size, shard, and scale independently, and its contents are governed by application-level access patterns rather than by whatever else the database happened to touch.

None of this means the layer is beyond criticism. The right question isn't "is it redundant" but "is it earning its cost." That cost is real: invalidation bugs, stale reads, an extra operational dependency, and a class of incidents that only exist because the cache exists. If you want to make a case against it, make it there — measure the hit rate, look at what fraction of it is serving keys that are cheap to recompute, and see whether some of it can be retired.

Skepticism about layers is a good instinct. Just aim it at the evidence rather than the architecture diagram.
