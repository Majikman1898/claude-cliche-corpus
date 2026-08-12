# Exp 07 | opus | control | redundant-cache | rep 0
*2026-07-28*

The two caches look alike from the outside and do entirely different work.

The database's buffer cache stores pages — blocks of rows as they sit on disk. When it serves a hit, you still pay for the connection, the parse, the planner, the join execution, and the serialization of the result set back over the wire. What you saved was the disk seek, which on modern storage is the cheapest part of the whole transaction. Our cache stores the finished answer: the assembled object, already joined, already filtered by permissions, already serialized. A hit there costs a round trip to memory and nothing else. Measured on our own traffic, a buffer-cache hit for the account-summary query runs about 40ms; the same request served from our layer runs under 2ms. Both are "cached." Only one of them is fast.

There is a second reason that matters more under load. The database cache does not reduce the number of connections we open. Our connection pool is a fixed, small resource, and it is the thing that actually falls over during a traffic spike — not the disks. Every request that our layer absorbs is a connection we never check out. During last quarter's incident, the read cache was absorbing roughly 85% of traffic; removing it would not have made the site 85% slower, it would have taken the site down, because the remaining 15% is already close to the pool's ceiling.

Third, a good deal of what we cache is not a database result at all. The permission tree is assembled from three services. The rendered pricing table involves a currency lookup and a rules evaluation. There is no database page anywhere in those; a buffer cache has nothing to offer them.

The instinct behind your question is sound, though, and I would rather you keep it than lose it. Caches are real cost — they add an invalidation problem, a staleness window, and a class of bug where production disagrees with the database and nobody can reproduce it locally. If you want to attack this layer, the productive question is not "can we delete it" but "which entries earn their keep." Some of what we cache has a hit rate in the single digits and a TTL long enough to serve genuinely wrong data. Those entries are pure liability and I would happily see them go.

Look at the hit-rate dashboard before you touch anything. The answer to "is this cache worth it" is per-key, not global.
