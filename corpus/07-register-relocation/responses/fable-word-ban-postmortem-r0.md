# Exp 07 | fable | word-ban | postmortem | rep 0
*2026-07-28*

Cleanup commits are dangerous precisely because they look safe. The premise of a cleanup — "this code is unused" — is a claim about runtime behavior, but the evidence behind it is almost always static: nothing in the repository references the function, the CSS class doesn't appear in any template, the linter flags it dead. Static analysis systematically misses dynamic usage. Code can be reached through reflection, string-built identifiers, dependency injection, feature-flag branches, or plugin registration. CSS classes are frequently attached at runtime by JavaScript, injected by third-party scripts (payment widgets are notorious for this), or referenced by A/B testing tools and tag managers that live entirely outside the repo. A checkout flow is exactly the kind of surface where this happens: it integrates external payment providers, fraud checks, and analytics, all of which may depend on selectors and hooks that appear orphaned from inside the codebase.

A second failure mode is incidental coupling. "Dead" code sometimes isn't inert — its mere presence has effects: a module that registers a handler on import, a CSS rule whose removal changes specificity ordering so a different rule now wins, an unused export whose deletion changes bundler output or tree-shaking behavior for everything around it. Removing it changes the system even though nothing "called" it.

Third, cleanup changes get lighter scrutiny than feature changes. Reviewers pattern-match on deletions as low-risk, tests rarely cover code believed dead (that's often why it was flagged), and the diff is large and monotonous, which encourages skimming. The change ships with less verification than a two-line feature would receive.

Review practices that catch these failures:

- **Treat deletions as behavior changes, not hygiene.** Same test, staging, and canary requirements as any other change to a critical path.
- **Verify absence dynamically, not just statically.** Production usage telemetry, access logs, or runtime instrumentation should confirm a code path hasn't executed in N weeks before it's deleted. For CSS, tools that record applied selectors in real sessions beat grep.
- **Split cleanup into small, revertible commits**, one logical removal each, rather than a single sweep — this shrinks blast radius and makes bisecting and rollback fast.
- **Deprecate before deleting.** Add logging or a feature flag to the "dead" path first; ship that, observe, then remove.
- **End-to-end tests on money paths.** A synthetic checkout transaction running against every deploy would have turned a three-hour outage into a blocked release.
- **Grep beyond the repo** — templates, CMS content, third-party configs, and sibling services that consume your markup or APIs.

The underlying lesson: "unused" is a hypothesis, and hypotheses about production deserve production-grade evidence.
