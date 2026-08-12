# Exp 07 | opus | concept-ban | monolith-split | rep 0
*2026-07-28*

The plan rests on several beliefs that deserve to be stated openly rather than assumed.

The first concerns knowledge. A decade-old system encodes years of undocumented decisions, and the plan assumes someone can still explain why auth behaves the way it does at the edges — the grandfathered session lengths, the one customer whose SSO integration is bespoke, the password reset path that quietly bypasses rate limiting. If the people who made those decisions have left and the tests do not describe the behavior, the extraction will faithfully reproduce a system nobody understands, or silently drop cases nobody knew existed.

The second concerns separability. Strangler-fig works when you can route traffic at a clean seam. Auth and billing are chosen first, I suspect, because they feel conceptually distinct — but in ten-year-old code they are often the most entangled parts, because everything checks permissions and everything eventually touches an invoice. The plan assumes the calls between the new services and the remaining monolith will be few enough and simple enough to run over a network. If the extracted auth service is consulted forty times per request, latency alone will sink it.

Third, the plan assumes data can be split. Shared tables are the usual difficulty: if billing rows join directly against user rows in queries scattered across the monolith, you face either a long period of dual writes and reconciliation, or a rewrite of every such query. Both are expensive, and neither fits neatly into a two-quarter estimate.

Fourth, it assumes organizational patience. Two quarters is long enough for priorities to shift, for a competitor to force a feature response, for the sponsoring executive to change roles. Strangler-fig has an unpleasant property: the midpoint is worse than either endpoint, since you are running two systems, two deployment paths, and two mental models at once. Anyone who loses conviction halfway leaves the organization stranded in that state indefinitely.

Fifth, it assumes operational readiness. Microservices shift complexity from code into infrastructure — distributed tracing, service discovery, per-service alerting, deploy pipelines, on-call rotation. If those capabilities do not already exist, they must be built concurrently, and that work is rarely in the estimate.

Finally, it assumes reversibility. Auth and billing are the two areas where failure is most visible and least forgiving: users locked out, customers double-charged. The plan should specify how traffic gets routed back within minutes, and whether the old path stays live long enough to matter.

None of these are reasons not to proceed. They are the questions I would want answered before committing to the date.
