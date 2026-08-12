# Exp 07 | opus | word-ban | monolith-split | rep 1
*2026-07-28*

Splitting a decade-old monolith into services in two quarters, starting with auth and billing, rests on a stack of assumptions worth naming explicitly, because most strangler-fig efforts fail not on the pattern but on what the pattern quietly presumes.

The first assumption is that clean seams exist where you think they do. Strangler-fig works when you can intercept traffic at a boundary and route it selectively. That requires the monolith's auth and billing logic to be reachable through a chokepoint — an HTTP layer, a facade, a service class — rather than smeared across the codebase as inline permission checks and direct database reads. In ten-year-old systems, billing state in particular tends to leak: reporting queries join against invoice tables, batch jobs mutate subscription rows, and admin tooling bypasses the domain layer entirely. If those callers exist, extraction is not a routing problem, it is a rewrite of every consumer.

Second, you are assuming the data can be split. Auth and billing are often the two most heavily foreign-keyed tables in the schema. Moving them means either accepting eventual consistency where the monolith currently enjoys transactional guarantees, or maintaining dual writes with reconciliation. Both are real engineering projects with their own failure modes, and neither is usually budgeted in the original estimate.

Third, the choice of auth and billing as starting points assumes that "most central" equals "most valuable to extract first." The opposite is often true. These are the two domains where a bad deploy is most visible — users cannot log in, or customers get charged incorrectly — and where regulatory or contractual exposure is highest. Starting here means your team learns distributed-systems debugging under maximum blast radius, on the components with the least tolerance for learning. A lower-stakes domain would buy the same organizational learning at a fraction of the risk.

Fourth, the plan assumes feature development pauses or at least slows. Two quarters of extraction while product roadmap continues means every new feature must be built twice or built carefully against a moving boundary. Someone has to hold that line, and it is usually a person with authority the migration team does not have.

Fifth, it assumes operational maturity is already present: distributed tracing, per-service alerting, a deployment pipeline that handles more than one artifact, an on-call rotation that understands service ownership. Absent these, you are not decomposing a monolith, you are converting a debuggable system into an undebuggable one.

Finally, it assumes two quarters is a real estimate rather than a planning-cycle artifact. Ask what evidence produced that number. If the answer is "that's the timeline we had," the schedule is the first thing that will break, and everything else will be compromised to protect it.
