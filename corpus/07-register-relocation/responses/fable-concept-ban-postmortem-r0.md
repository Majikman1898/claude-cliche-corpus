# Exp 07 | fable | concept-ban | postmortem | rep 0
*2026-07-28*

Cleanup commits fail in production because "unused" is a property that static inspection cannot fully determine. A function with no callers in the repository may still be invoked by reflection, by a template engine resolving names at runtime, by a feature flag path that only activates under certain configurations, or by an external consumer — a payment provider callback, a scheduled job, a sibling service that imports the module directly. CSS is worse: selectors are matched against markup generated at runtime, often assembled from string fragments, so a grep for a class name proves nothing. Checkout flows are disproportionately vulnerable because they integrate third-party scripts, run behind experiments and regional flags, and include branches (specific card types, tax rules, retry paths) that execute rarely enough to evade both tests and manual QA.

There is also an ordering problem. Dead code detection tools report what was unreachable at analysis time, but codebases change between analysis and merge, and detection tools routinely miss dynamic dispatch, dependency-injection wiring, serialization hooks, and CSS applied to elements injected by JavaScript. Finally, cleanup commits get soft review. A diff that only deletes reads as risk-free, reviewers skim it, and it often ships without the scrutiny a feature change would receive — even though a deletion touching twenty files has a wider blast radius than most additions.

Review practices that catch this:

1. **Prove absence, not just search for presence.** For each deleted symbol, the author should state how they verified it is unused — production telemetry, access logs, or runtime instrumentation over a meaningful window, not a text search. "No usage recorded in 30 days of prod traffic" is evidence; "grep found nothing" is not.

2. **Treat deletions in revenue paths as high-risk changes.** Route any diff touching checkout, auth, or billing directories through the same review rigor and canary process as a feature launch, regardless of how mechanical it looks.

3. **Deprecate before deleting.** Add logging or a metric to the supposedly dead path, ship that, wait a release cycle, and delete only if the counter stays at zero. This converts a guess into a measurement.

4. **Split cleanup into small, individually revertible commits** rather than one omnibus sweep, so an incident can be traced and rolled back in minutes rather than bisected for an hour.

5. **Canary and watch business metrics, not just errors.** A checkout that renders but whose submit button no longer matches its selector produces no exceptions — only a conversion drop. Deploy cleanup behind gradual rollout with checkout-completion rate on the dashboard.

The general lesson: deletion is a change in behavior until proven otherwise, and the proof must come from runtime evidence.
