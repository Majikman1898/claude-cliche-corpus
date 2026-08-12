Handoff Memory — On-Device OCR Android App

**Read this first.** Project files are the source of truth for code; this document is the source of truth for state of mind, decisions, and traps. Check for a project CLAUDE.md and skills (android-debugging, eat-native-build, eat-device-bench, gradle-build-performance, compose) — those hold accumulated hard-won rules and take precedence over generic instincts.

## Where things stand
[FILL IN before context ends: current OCR pipeline architecture — which engine/model (Tesseract? ML Kit? custom on-device model via llama.cpp/GGUF-style native build?), what's working end-to-end vs stubbed, last commit/build that passed, and what the immediate next task is.]

## Hard-won lessons (do not relearn these)
- Native builds: if this project has JNI/.so components (OCR model runtime), consult eat-native-build skill before touching CMake/AGP config — every rule there was paid for with a real broken build.
- Device testing: this is tested against a real physical device (per eat-device-bench skill pattern) from a Windows desktop, not just emulator. ADB path quirks on Windows (backslash mangling) have bitten before — use the connecting-to-devices / eat-device-bench skills rather than rediscovering.
- Camera + OCR on-device is memory- and perf-sensitive — note here any OOM/ANR patterns already diagnosed, and which Logcat filters actually find them.
- [FILL IN specific bugs already root-caused so they aren't rediscovered]

## Open threads / next steps
[FILL IN: the 1-3 concrete things to do next, in priority order — e.g. "wire up X", "fix Y crash on real device", "benchmark Z model"]

## Environment
- Windows 11 desktop, PowerShell primary shell, Bash tool also available.
- Physical test device: Galaxy S25 Ultra (per eat-device-bench skill), connected via [USB/WiFi — fill in].
- Repo location: [FILL IN absolute path — this doc gives no path, but project files are separate from this session's cwd].

## Working style notes
- Collaborator (David) prefers concrete, tested claims over speculation — verify on-device before declaring something fixed.
- I am "Ledger" per this user's naming convention for named instances (see mem0 identity memory) — if that convention applies to this project too, keep using it; if this project has its own instance name already established, use that instead.
- Don't guess at unfilled sections above — on resuming, first read the project's CLAUDE.md/skills and actual source tree, then fill in the concrete specifics before proceeding with new work.

**Note to self:** this document was written without access to the actual project files/history (generated as a template task), so treat the bracketed placeholders as mandatory homework for the next instance's first five minutes, not optional detail.
