# Exp 07 | sonnet | concept-ban | redundant-cache | rep 0
*2026-07-28*

Here's the explanation:

Removing this layer would trade a predictable cost for an unpredictable one, and that's the core reason it stays.

The database's internal cache and this application-level cache solve different problems, even though they're both called "cache." The database cache saves you from disk I/O — it keeps hot pages in memory so a query doesn't have to hit the storage layer. But every request still has to reach the database process, get scheduled, parse or match a query plan, acquire locks, and serialize a response. That's real latency and real CPU, even when every byte involved is already sitting in RAM. Our cache skips that entire round trip. When we hit it, we never open a connection, never touch the query planner, never wait behind another transaction. Those are two different bottlenecks, and eliminating the layer that addresses the second one doesn't get compensated for by the layer that only addresses the first.

There's also a scaling argument. A single database has a ceiling on connections and query throughput no matter how much RAM it has for caching. Under real traffic, a large share of our requests ask for the same handful of records — a popular product page, a user's own profile, a config value read on every call. If each of those goes to the database, we multiply load linearly with traffic. Our cache absorbs that repetition before it ever becomes a query, so the database only sees the requests that actually need it: writes, cache misses, and genuinely unique reads. Take the cache away and you haven't removed that traffic, you've just redirected all of it at the one component every part of the system depends on.

Cost matters too, though it's secondary. Serving from memory in the application tier is cheaper per request than a round trip through a full database engine, and at our request volume that difference shows up directly in the infrastructure bill.

None of this means the cache is free of problems — it's the reason we have to think carefully about invalidation, staleness windows, and what happens on a cold start after a deploy. Those are real costs, and they're worth revisiting if the cache is misconfigured or protecting data that doesn't actually get requested repeatedly. If you can show a specific key pattern where the hit rate is low or the staleness risk outweighs the benefit, that's a legitimate case for trimming it there. But "the database already caches things" isn't that argument, because it answers a different question than the one this layer is answering.
