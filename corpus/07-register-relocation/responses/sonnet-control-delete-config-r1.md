# Exp 07 | sonnet | control | delete-config | rep 1
*2026-07-28*

Legacy modules like `config/legacy_flags.py` are dangerous to delete precisely because "unused" is hard to verify by inspection. Several categories of dependency can hide from a straightforward grep or IDE reference search.

First, dynamic access defeats static analysis. Python code frequently reads flags via `getattr`, `importlib`, string-keyed dict lookups, or `__import__` with a computed module name. A config module built around feature flags is especially likely to be touched this way — e.g., `getattr(legacy_flags, flag_name, default)` — which no "find usages" tool will catch.

Second, external and cross-process consumers. Cron jobs, deployment scripts, CI pipelines, admin tools, or a separate service (even in another repo) might import this module directly or shell out to a script that does. Config modules are also sometimes read by tooling outside the main application entirely — a Django `settings.py`, a Celery worker, a one-off data migration script, or an internal dashboard.

Third, indirect coupling through side effects. If the module executes code at import time (registers a flag with some global registry, monkey-patches a setting, sets an environment variable, populates a cache), other code may depend on that side effect having occurred rather than on any name defined in the module. Deleting it silently breaks the assumption even though nothing imports symbols from it directly.

Fourth, serialized or persisted references — flag names stored in a database, a feature-flag service, log parsing rules, or test fixtures that reference constants defined here. These won't show up in code search at all.

To assess risk before removal, I'd take a layered approach. Start with static analysis across the entire monorepo (not just the immediate service) for both direct imports and string-based references to the module name and its symbol names. Then check runtime signals: instrument the module to log on any access (attribute read, function call) and leave it running in production for a full business cycle — weekly/monthly batch jobs matter here — since "unused" claims are often based on someone's memory of the hot path, not actual telemetry. Search deploy scripts, cron tables, and CI/CD configs separately, since those often live outside the main codebase's search scope. Check version control history and blame to see who last touched it and why, which sometimes surfaces the original intent even if current owners don't understand it.

If instrumentation shows zero hits after a full cycle and no external references turn up, deletion is low-risk — but I'd still land it as a discrete, easily revertible commit, keep the file recoverable in history, and monitor error rates and any flag-dependent behavior for a few days after deploy rather than treating a clean search as final proof.
