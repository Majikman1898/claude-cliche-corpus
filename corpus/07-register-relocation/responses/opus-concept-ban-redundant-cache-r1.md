# Exp 07 | opus | concept-ban | redundant-cache | rep 1
*2026-07-28*

The database cache and this caching layer sound like the same thing, but they answer different questions, and that difference is the whole reason both exist.

The database's buffer cache stores pages of data it has recently read from disk. It makes a query cheaper by sparing the storage read. What it does not do is spare you the query. Every request still crosses the network to the database, still gets parsed and planned, still acquires whatever locks the isolation level demands, still consumes one of a finite number of connections, and still serializes and ships a result set back. On our hot endpoints, the disk read was never the expensive part. Measure it and you'll see the round trip and the query planning dominate; the buffer cache is already hitting well above ninety percent. Removing our layer would not add disk reads. It would add several thousand additional queries per second to a machine whose connection pool saturates long before its I/O does.

The second difference is what gets stored. The database caches raw pages. Our layer caches computed results — the joined, filtered, aggregated shape the API actually returns. A single entry here can stand in for a query that touches six tables and does a sort. The database has no way to memoize that; it will happily redo the sort every time, hitting its own cache perfectly while burning CPU it doesn't need to burn.

Third, the two caches fail differently, and that's useful. If the database gets slow — a long-running migration, a failover, a bad plan after statistics drift — our layer keeps serving reads at full speed for whatever the TTL allows. That window has bought us the difference between a degraded service and an outage more than once. A cache living inside the database cannot do this, because its availability is exactly the database's availability.

The honest counterargument is that this layer costs us something real: a second source of truth, invalidation bugs, and a class of staleness incidents that wouldn't exist otherwise. Those costs are worth naming, and if we could hit our latency targets without it, removing it would genuinely be the right call. But the numbers don't allow that today.

So the useful question isn't whether the layer is redundant — it isn't — but whether the specific keys we cache still earn their invalidation complexity. Some probably don't. That's a worthwhile audit, and a much better first project than deleting the whole thing.
