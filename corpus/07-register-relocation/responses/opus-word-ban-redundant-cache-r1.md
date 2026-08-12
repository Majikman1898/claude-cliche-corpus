# Exp 07 | opus | word-ban | redundant-cache | rep 1
*2026-07-28*

A caching layer in front of a database that already caches looks like duplication, and the instinct to delete it is a good instinct — it's just wrong here, for reasons worth understanding.

The database's cache and ours solve different problems. The database buffer pool caches *pages* — blocks of storage it expects to read again. It sits behind the query planner, the parser, the connection handshake, the lock manager, and the network hop. A query that hits the buffer pool perfectly still pays for all of that. Our cache stores *answers*: the serialized result of a specific request, keyed by the shape of that request. A hit skips the entire round trip. The two caches are not redundant because they short-circuit at different depths of the stack.

That difference shows up most sharply in the expensive queries. A report that joins six tables and aggregates a million rows may read entirely from the buffer pool and still take eight hundred milliseconds, because the cost is CPU work — sorting, hashing, grouping — not I/O. The database has no way to cache the *result* of that computation; it only caches the inputs. Our layer caches the output, which is why the p99 numbers look the way they do.

The second reason is capacity, not latency. The database is a shared, hard-to-scale resource: connection counts are bounded, and every connection consumes memory whether or not it's doing useful work. The cache absorbs the read volume that would otherwise consume those connections. If you remove it, the change won't show up as slower responses first — it'll show up as connection pool exhaustion during a traffic spike, which fails much less gracefully than being slow.

Third, the cache is a blast radius control. When the database is degraded — a long-running migration, a failover, a bad query plan after a statistics refresh — the cache continues serving reads. We've made an explicit decision to serve slightly stale data during those windows rather than serve errors. That behavior is invisible in normal operation, which is exactly why it looks removable.

None of this means the layer is above criticism. The invalidation logic is genuinely complicated, and complicated invalidation causes real bugs. If you want to make an argument for change, the strong version isn't "remove it" — it's "the invalidation strategy is more complex than the read pattern justifies, and here's a simpler one." That's a conversation worth having.

Before proposing removal of anything that looks redundant, find out what it absorbs when things go wrong. Redundant-in-the-happy-path and redundant-in-general are different claims.
