# Exp 07 | opus | control | delete-config | rep 0
*2026-07-28*

A module like `config/legacy_flags.py` is dangerous to delete precisely because the dependencies that matter are the ones static analysis cannot see. Start by enumerating the invisible coupling paths.

The first is import-time side effects. A flags module often does more than define constants: it may register defaults into a global registry, monkey-patch a library, set environment variables, seed a random number generator, or populate a singleton on first import. If any module imports it purely for those effects, grep for symbol names will show zero references while removal still changes runtime behavior. Check the module body for anything executed at import rather than merely defined.

The second is dynamic access. Flags are frequently read through `getattr(config, name)`, dictionary lookups keyed by strings, `importlib.import_module`, Django-style settings indirection, or serialized names coming from a database, YAML file, feature-flag service, or admin UI. A grep for `legacy_flags` misses every one of these. Search instead for the individual flag names as bare strings across the whole repository, plus infrastructure repos, Helm charts, Terraform, CI configs, and any sibling services.

Third is cross-repo and out-of-process consumers. If the package is published internally, other teams may import it. Analytics jobs, notebooks, cron scripts, one-off migration tooling, and disaster-recovery runbooks live outside the main codebase and outside CI, so their breakage surfaces late and at the worst time.

Fourth is behavioral inversion. The riskiest flag is one whose default is "off" but which some environment sets to "on," or a kill-switch that has been dormant for years and exists exactly for an emergency nobody has needed yet. Deleting it removes an escape hatch rather than dead code.

For assessment, prefer evidence over reasoning. Ranked roughly by strength: add runtime instrumentation — log or emit a metric on module import and on each flag read — then let it run through at least one full business cycle, including month-end and quarter-end batch jobs, before concluding it is unused. Weaker but cheap signals include coverage data from production-like traffic, `git log` archaeology to learn why each flag was introduced, and repo-wide string searches.

The safe removal sequence is deprecate, observe, then delete: keep the module but make every access loud, ship that, wait, and only remove once the telemetry is silent across a full cycle. Delete in a single revertable commit, behind a release you can roll back quickly, and not immediately before a freeze or a holiday. If instrumentation is impossible, the honest answer is that the risk is unquantified — and unquantified risk on a 400-line module is usually not worth taking this quarter.
