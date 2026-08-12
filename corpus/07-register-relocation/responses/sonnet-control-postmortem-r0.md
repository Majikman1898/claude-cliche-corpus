# Exp 07 | sonnet | control | postmortem | rep 0
*2026-07-28*

Cleanup commits fail differently from feature commits: there's no new behavior to test, so the review instinct that normally catches bugs — "does this do what it's supposed to?" — has nothing to grab onto. The actual risk in a cleanup diff isn't in what was added, it's in the assumption that everything removed was truly unreachable. That assumption breaks in a handful of predictable ways.

Dead code often isn't dead, it's dormant. A code path with no visible caller in the current codebase can still be invoked by a feature flag, an A/B test bucket, a scheduled job, a webhook handler, or a rare error-recovery branch that only fires under load or on retry. Static analysis and IDE "find usages" miss anything invoked through reflection, dependency injection, string-based routing, or dynamic imports. CSS is worse: a class that appears unused because no template references it directly may still be applied by JavaScript at runtime, by a third-party script, by an email template, or by a print stylesheet — and browsers fail silently when a rule is missing, so there's no error to surface the problem until a user hits a now-unstyled or now-nonfunctional element.

The checkout flow specifically is a common victim because it's disproportionately dependent on code paths that are rare in day-to-day testing: specific payment methods, specific currencies, guest checkout versus logged-in checkout, mobile web versus desktop, cart states with promo codes or gift cards. A cleanup pass that looks safe against the paths an engineer exercises manually can be silently removing something that only the 2% edge case touches — and checkout edge cases are exactly where revenue concentrates disproportionately, so the blast radius is bigger than the code size suggests.

The review practices that catch this share a common thread: they replace "does this look unused" with "can we prove it's unused." Concretely:

- Runtime usage data, not just static grep. Instrumenting suspected-dead code with logging or metrics for a full business cycle (covering weekly/monthly batch jobs, not just a few days) before deleting it turns "looks unused" into "confirmed unused."
- Feature-flag and config audits as a separate step from code search, since flag-gated code won't show up as "referenced" in the way reviewers expect.
- Treating checkout, payments, and auth as protected zones requiring elevated review and a full regression pass regardless of how trivial the diff looks — the risk classification should be based on the code's blast radius, not the size or apparent triviality of the change.
- Staged rollout (canary or percentage-based) for any change touching critical paths, even pure deletions, so a break shows up as a monitoring alert on a small slice of traffic instead of a full outage.
- A rollback plan defined before merge, not improvised during the incident.

The underlying discipline is to size review effort to consequence, not to diff size. A three-line CSS deletion in checkout deserves more scrutiny than a five-hundred-line refactor in an internal admin tool.
