# Exp 07 | sonnet | concept-ban | monolith-split | rep 1
*2026-07-28*

Splitting a decade-old monolith into services via strangler-fig, starting with auth and billing, can go well, but several assumptions need to hold.

First, the team must actually understand the current system's behavior, including undocumented edge cases. Ten years of incremental changes typically produce logic nobody fully remembers — special-cased discount rules, legacy auth flows for accounts created under an old scheme, timezone quirks in billing cycles. If nobody can enumerate these, the new services will silently diverge from the old ones, and users will discover the gaps.

Second, auth and billing must be separable at all. Ten-year-old code often has these two concerns tangled together — session tokens embedded in billing logic, permission checks scattered across payment paths. The plan assumes clean seams exist or can be created cheaply; if the coupling is deep, the "first slice" becomes a multi-month untangling exercise before any extraction happens.

Third, there must be a reliable way to run old and new paths side by side and compare results, since strangler-fig depends on gradually redirecting traffic while trusting the new path is correct. This requires either a shadow-traffic mechanism, feature flags with fast rollback, or extensive parity testing. If the team can't verify parity before cutting over, they're really doing a rewrite with extra steps, not a strangler-fig migration.

Fourth, billing in particular carries correctness requirements — money changing hands, invoices, tax calculations, refund logic — where a subtle bug isn't a minor inconvenience but a financial and compliance problem. The plan needs to assume enough time for reconciliation processes and audit trails during the transition, not just enough time to write the new service.

Fifth, organizationally, the two quarters assume the team isn't simultaneously expected to ship unrelated features at the old pace. Migrations stall when engineers are asked to do double duty — building the new service while also patching the monolith for business-as-usual requests. Without protected capacity, the "two quarters" estimate quietly becomes indefinite.

Sixth, the plan assumes downstream consumers of auth and billing — internal services, third-party integrations, reporting pipelines — can tolerate a period of dual systems, inconsistent latency, or temporary API differences. If any consumer has strict assumptions about the monolith's exact behavior, the migration will need compatibility shims, adding scope not currently accounted for.

Finally, there needs to be a genuine rollback path at each cutover step, not just a plan to move forward. If reverting a slice back to the monolith is harder than the original extraction, the team is making one-way bets disguised as an incremental process.

If these hold, the sequencing (auth before billing, since billing likely depends on identity) is sound. If they don't, the two-quarter estimate is optimistic regardless of pattern choice.
