# Exp 07 | fable | concept-ban | redundant-cache | rep 0
*2026-07-28*

The database's cache and this caching layer solve different problems, and the overlap between them is smaller than it looks.

The database's buffer cache saves it from re-reading pages off disk. That helps, but a cache hit inside the database still costs you almost everything else in the request path: the client acquires a connection from the pool, the query travels over the network, the database parses and plans it, executes it against cached pages, serializes the result set, and sends it back. On our workload that round trip runs a few milliseconds even when the data never touches disk. A hit in the application-side cache is a local or near-local memory lookup — tens of microseconds. The database cache makes queries cheaper; the application cache makes them not happen. Those are different orders of magnitude.

Second, connection capacity is the scarcer resource. The database can only service a bounded number of concurrent queries before latency degrades for everyone, including the writes that have nowhere else to go. Right now the cache absorbs the large majority of read traffic before it ever reaches the database. If you remove it, every one of those reads becomes a query. The database's internal cache does nothing to reduce query volume — it only makes each query somewhat faster. We'd be trading a cheap tier for saturation of an expensive one.

Third, the cache doesn't store what the database stores. The database caches pages of raw table data. We cache assembled results — objects that took five or six queries plus application-side computation to produce. A single cache hit replaces that entire sequence. The database cannot cache "the rendered profile for user 4123" because it has no concept of that object; it only exists after our code joins, filters, and transforms the query results.

Finally, there's a resilience aspect. When the database has a bad moment — a failover, a slow vacuum, a lock pileup — the cache keeps serving recent reads, which turns a full outage into degraded freshness. Without it, database trouble is immediately user-visible trouble.

None of this means the layer is free. It buys us invalidation bugs, stale reads, and operational overhead — you'll spend real time on those. But the honest comparison isn't "cache versus database cache"; it's "current database provisioning versus a database sized for the full read load with the latency budget met on every request." Price that out and the caching layer stops looking redundant. If you want to test the intuition safely, look at the hit-rate metrics and estimate what the miss traffic alone already costs us.
