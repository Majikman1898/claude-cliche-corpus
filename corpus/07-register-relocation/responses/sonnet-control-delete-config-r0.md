# Exp 07 | sonnet | control | delete-config | rep 0
*2026-07-28*

Here is a plain-prose analysis of the risk assessment.

When a legacy module like `config/legacy_flags.py` has no obvious current owner and appears unused, "unused" almost always means "not imported by anything currently under active development" rather than "genuinely dead." The gap between those two claims is where incidents happen. A static import scan across the primary codebase will confirm nothing references the module through normal Python imports, but it cannot see several categories of dependency that are common in exactly this kind of file.

First, dynamic access: code that reaches the module via `importlib`, `getattr`, string-based dotted paths in config files, plugin registries, or `__import__` calls built from a variable. Feature-flag modules are especially prone to this pattern because flags are often looked up by name from a central registry rather than imported directly by each call site.

Second, non-Python consumers: shell scripts, CI/CD pipelines, cron jobs, deployment manifests, or Terraform/Ansible playbooks that source values out of this file, parse it as data, or invoke it as a script. A grep across the whole repo (not just source directories) and across any infra-as-code repos is necessary, not optional.

Third, side effects at import time. Legacy flag modules sometimes register handlers, monkey-patch other modules, populate a global registry, or set environment defaults purely by being imported somewhere in the dependency graph — meaning even a single stray import elsewhere (test fixtures, a `conftest.py`, an `__init__.py`) can create a load-bearing effect invisible to a simple "who calls functions in this file" search.

Fourth, external and cross-repo consumers: internal libraries published to a package index, other services in a monorepo-adjacent repo, or downstream teams who vendored or copied logic referencing these flags. Grep is blind to anything outside the repo being searched.

Fifth, runtime/production-only paths: flags gated behind rare conditions (specific customer tiers, disaster-recovery mode, an admin override) that never fire in normal traffic or in the test suite, so removal looks safe in CI and staging but breaks an infrequent but real production path.

To assess risk before deleting, I would: run a full-text (not just import) search repo-wide and in adjacent repos; check production logs, metrics, or feature-flag dashboards for recent evaluation of any flags defined there; add temporary instrumentation (a deprecation warning or usage counter) and leave it running through at least one full business cycle, including month-end/quarter-end jobs that run infrequently; check version-control blame and any linked tickets for why it was introduced; and finally deprecate rather than delete outright — rename, log on access, or fail loudly in a non-critical way — for one release cycle before hard removal, so any silent dependency surfaces as a visible error instead of a silent failure.
