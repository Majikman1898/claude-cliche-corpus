# Exp 07 | opus | word-ban | redundant-cache | rep 0
*2026-07-28*

The database cache and the application cache look like the same thing, but they are solving different problems, and the resemblance is mostly superficial.

What the database caches is pages and query plans. When you run a query twice, the second run avoids disk I/O because the relevant pages are already in the buffer pool. That is real and valuable, but notice what it does not eliminate: the query still has to be parsed, planned, executed, and have its result set serialized and shipped across the network to your process. On our hot paths, that residual cost is the dominant one. The disk was never the bottleneck we were fighting; the round trip and the per-query execution overhead were. A buffer pool hit still costs a millisecond or two under load. Our cache returns in microseconds because the answer is already in the shape the application wants — deserialized objects, not rows to be mapped.

The second difference is what gets cached. The database caches the raw materials. We cache the finished product. Several of our expensive reads are not single queries at all; they are five or six queries plus a merge step plus some computed fields. The database will happily serve all five from its buffer pool and still leave us doing the assembly every time. Caching the assembled result skips work that lives in our code and that the database has no visibility into.

Third, and this is the part that is easy to miss until an incident: the two caches fail differently. The database's cache is inside the thing we are trying to protect. When the database is struggling — connection pool exhausted, a bad plan, a replica falling behind — its cache is struggling with it, because serving from the buffer pool still consumes a connection and a worker. Our cache sits in front of that boundary and absorbs traffic the database never sees. During the incident in March, roughly eighty percent of read traffic was served without touching the database at all. Without that layer, the outage would have been considerably worse.

So it is redundant in the narrow sense that both layers can answer the same question, and not redundant in any sense that matters operationally. They cache different things, at different granularities, on different sides of a failure boundary.

The fair critique is not that the layer is unnecessary but that it is under-documented — invalidation rules live in three places and nobody has written down which keys are safe to evict. That is worth fixing. Removing the layer is not.
