# Exp 07 | opus | concept-ban | monolith-split | rep 1
*2026-07-28*

Splitting auth and billing out first is a defensible choice, but it commits the plan to several beliefs that deserve to be stated openly rather than assumed.

The first is that clean seams exist at all. Ten years of a single codebase usually means auth checks are sprinkled through request handlers and billing logic has quietly become the place where product rules accumulate — grandfathered plans, manual credits, one-off contract terms. The plan assumes someone has already traced every caller and every write path, not merely sketched a boundary on a whiteboard. If that tracing is still ahead of you, two quarters is an estimate about work nobody has scoped.

Second, the data must be separable. Auth and billing tables are typically joined against everything else, and the monolith almost certainly relies on single-transaction guarantees across those joins. Extracting the services means giving that up and accepting eventual consistency somewhere. The plan assumes the business can tolerate the specific inconsistencies that result — a user briefly seeing a stale entitlement, an invoice lagging a plan change — and that someone has decided which ones are acceptable rather than discovering them in production.

Third, the strangler pattern only pays off if the old code actually dies. Its characteristic failure is a permanent intermediate state: traffic routed through a facade, both implementations live, neither safe to touch, and the team maintaining two systems forever. That requires explicit deletion milestones with owners, plus a real mechanism for proving no traffic remains on the legacy path.

Fourth, the operational capability must already be present. Two services mean two deploy pipelines, distributed tracing, per-service alerting, and an on-call rotation that can diagnose failures crossing a network boundary. Acquiring those skills concurrently with the migration doubles the risk. Note also the blast radius: an auth outage takes down everything, and billing errors are visible to customers and sometimes to regulators. These are the two domains with the least room for learning in production.

Fifth, product pressure must relax in exactly these areas. If billing rules keep changing during extraction, you are reimplementing a moving target and reconciling divergence indefinitely.

Finally, the plan assumes continuity — that the engineers who understand the legacy behavior remain available for two full quarters, and that leadership will still fund the second quarter when the first delivers no visible customer value.

The honest test: which of these are you confident about, and which are you hoping for? Those in the second category are where the schedule will actually go wrong.
