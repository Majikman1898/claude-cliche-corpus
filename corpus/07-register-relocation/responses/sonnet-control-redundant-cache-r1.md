# Exp 07 | sonnet | control | redundant-cache | rep 1
*2026-07-28*

Caching layers and database caches solve different problems, and that's the crux of why removing the application-level cache usually causes regressions rather than simplification.

A database's internal cache (e.g., a buffer pool or query cache) sits close to disk and speeds up repeated *disk reads*. But every request that hits it still has to make a network round trip to the database, acquire connections, parse and plan the query, and consume database CPU and memory. Under load, all of that adds up. An application-level cache — Redis, Memcached, an in-process cache — avoids the round trip entirely for cache hits. The difference isn't marginal: a local or network cache lookup is typically sub-millisecond, while even a "fast" indexed database query is often 5-50x slower once you account for connection overhead and query execution. At scale, that gap is the difference between a database that keeps up and one that falls over.

There's also a capacity argument. Databases have a finite connection pool and finite CPU. Every query you can serve from a cache is a query the database doesn't have to plan, execute, or lock resources for. If you remove the caching layer, you're not just adding latency — you're shifting load back onto a component that's usually your hardest system to scale horizontally. Application servers and cache nodes scale out cheaply; databases, especially relational ones, do not.

Caches also let you store *derived* or *aggregated* data — the result of an expensive join, a computed recommendation, a rendered API response — that the database's cache can't help with at all, because the database cache only speads up re-reading the same rows, not re-doing the same computation.

That said, the instinct to question it is a good one, because caching layers are genuinely expensive in complexity: cache invalidation, staleness bugs, and "which layer is lying to us" debugging sessions are real costs. So the right question isn't "is this redundant" but "is this cache pulling its weight relative to that complexity." Worth checking:

- What's the actual cache hit rate? If it's low (say, under 60-70%), it may be misconfigured or caching the wrong things, and it's fair to ask whether it's earning its keep.
- What's the latency and load difference measured with it on vs. off, under realistic traffic?
- Is it caching expensive computed results, or just raw rows the DB cache already handles well? If the latter, there may be real overlap worth trimming.

If you want, pull up our monitoring dashboard for this service and I can walk through the hit-rate and latency numbers with you — that's a much stronger basis for a redundancy argument than architecture on paper.
