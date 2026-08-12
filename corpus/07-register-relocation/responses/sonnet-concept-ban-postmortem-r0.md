# Exp 07 | sonnet | concept-ban | postmortem | rep 0
*2026-07-28*

Cleanup commits fail dangerously because "unused" is a claim about the code you can see, not about the system as a whole. A function looks dead if nothing in the repository calls it, but that check misses callers that live outside the searched scope: a build step that references a class by string name, a feature flag that re-enables a code path in certain regions, a background job that only runs on the first of the month, or a mobile client three versions behind still hitting an endpoint the server team assumed was retired. The person doing the cleanup reasons correctly from the evidence in front of them; the evidence is just incomplete, and nothing in a typical diff view flags that.

CSS has its own version of this problem. A selector with zero matches in the current templates can still be targeted by a class name injected at runtime — by a third-party script, an A/B test variant, an email template rendered from the same stylesheet, or JavaScript that constructs class strings dynamically (`"btn-" + variant`) so a text search never turns up the reference. Removing the rule produces no error, no failed build, no red test. It just leaves an element unstyled the next time that code path executes, which might not be until a specific checkout scenario fires hours or days later.

The common thread is that these changes are semantically risky while looking mechanically safe. They pass every check that treats "does the code compile and do the existing tests pass" as sufficient evidence of correctness, because the risk lives in a runtime path the tests don't exercise and the deletion doesn't touch anything the compiler understands as connected.

Review practices that catch this share one property: they substitute broader evidence for local confidence. Concretely:

- Require a dead-code claim to be justified with more than a repo-local grep — check feature-flag configs, string-based references, external callers, and analytics or logs showing whether the code path has fired recently in production.
- Route changes to shared assets (CSS, config, common utility modules) through the teams that own the pages or flows depending on them, rather than treating "no visible caller" as sufficient sign-off from a single reviewer.
- Keep cleanup changes small and separated from feature work, so if something breaks, the change under suspicion is obvious rather than buried in a large diff.
- Roll changes out gradually — behind a flag, to a percentage of traffic, or to a staging environment with realistic data — instead of merging straight to full production traffic, so a broken path shows up as a contained incident rather than an outage.
- Treat "safe because it's just cleanup" as a warning sign itself. Confidence tends to be highest exactly where scrutiny is lowest, since reviewers apply less attention to diffs labeled as low-risk.

None of this requires new tooling so much as recognizing that removing something requires proving a negative — that nothing depends on it — which is a harder claim than adding something new, and deserves review calibrated to that difficulty rather than to how the change reads at a glance.
