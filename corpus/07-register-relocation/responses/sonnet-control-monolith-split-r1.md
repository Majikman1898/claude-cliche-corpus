# Exp 07 | sonnet | control | monolith-split | rep 1
*2026-07-28*

Assumptions Underlying a Two-Quarter Strangler-Fig Migration (Auth and Billing First)

For this plan to succeed, several load-bearing assumptions need to hold, and most of them are riskier than the timeline implies.

First, the monolith's auth and billing logic must be separable without deep, tangled coupling to other modules. Ten-year-old systems typically accrete implicit dependencies — shared session state, ORM entanglement, cross-cutting authorization checks sprinkled through unrelated code paths. The plan assumes these boundaries are clean enough to extract in one quarter each; if they aren't, discovery work alone could consume the runway.

Second, it assumes the team has (or can quickly build) reliable request-routing infrastructure — a proxy or facade capable of incrementally redirecting traffic between old and new implementations without downtime or data divergence. Strangler-fig only works if traffic can be split safely; retrofitting that capability onto a legacy system is nontrivial and often underestimated.

Third, and most critical for these two domains specifically: auth and billing are both stateful and consistency-sensitive. The plan assumes a workable strategy exists for keeping session/credential state and financial records synchronized across old and new systems during the cutover window — including how to handle in-flight transactions, idempotency, and rollback if the new service misbehaves. Billing in particular carries compliance and reconciliation risk (PCI scope, ledger integrity) that a generic microservices playbook doesn't automatically cover.

Fourth, it assumes sufficient observability already exists — or will be built early — to detect behavioral drift between the legacy and new implementations before it reaches customers. Without comparative testing (shadow traffic, dual-write verification) the team is flying blind on the highest-stakes services.

Fifth, the plan assumes organizational bandwidth: that the team can run this migration alongside ongoing feature work and production support, not instead of it. Two quarters is optimistic even under focus; most such efforts get squeezed by competing priorities and stretch quietly to three or four.

Sixth, it assumes the choice of auth and billing as the starting point reflects an accurate read of risk versus value — these are reasonable strangler-fig starting points because they're often well-bounded and high-leverage, but that's only true if the specific codebase actually isolates them cleanly, which circles back to the first assumption.

Finally, the plan assumes leadership and stakeholders understand that "starting with the two riskiest, most sensitive domains" is a deliberate choice trading early risk-retirement for lower near-term velocity — and won't treat quarter-one slippage as a signal to abandon the pattern rather than adjust the timeline. Without that shared expectation, early friction likely kills the initiative before the approach proves out.
