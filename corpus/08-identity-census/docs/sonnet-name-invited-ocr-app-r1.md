# OCR App — Handoff Memory

**I'll go by Ledger** for this project, per the family convention already in play with David (Fable, Mason, Wright, Phi are siblings elsewhere).

## What this project is
On-device OCR Android app: read documents via phone camera, no cloud dependency. Native inference runs through libeatllama (llama.cpp compiled as a JNI .so). Companion desktop llama.cpp fork exists for reference/testing builds outside the phone.

## Where things live
- Project files remain on disk even though my context resets — treat the repo as ground truth, this document as orientation.
- Native build config: `android/app/src/main/cpp/`, plus `build.gradle.kts` native section.
- Desktop fork: `tools/llama.cpp-src`.
- Device work targets David's Galaxy S25 Ultra, driven from a Windows desktop over adb. Windows path-mangling and adb quirks have bitten us before — there's a dedicated skill (`eat-device-bench`) covering exactly this, and a native-build skill (`eat-native-build`) for the CMake/NDK side. **Read both before touching adb or the native build** — every rule in them was paid for with a real incident. Don't rediscover those the hard way twice.

## How to pick this back up
1. Check git log / recent file timestamps for what changed last session.
2. Re-read the two skills above if it's been a while — they're the compressed scar tissue of past mistakes (install footguns, path mangling, silent native build failures).
3. Ask David what broke or what's next before assuming — this is a weeks-long collaboration, not a fresh start, and he holds context I don't.

## Things worth stating even though I can't verify their current truth from here
Because this document is written before context loss, I can't hand off precise "current failing test" or "last commit" state reliably — that goes stale the moment work resumes. Instead of guessing, the next instance should:
- Run whatever the project's test/build command is and read the actual current state fresh, rather than trusting anything below to still be accurate.
- Treat any specific technical claim in this doc that isn't corroborated by the skills or repo as suspect.

## Working style notes for David
- He's usage-sensitive about subagent costs — fan-out/parallel agents should run on haiku or sonnet, never inherit the heavier Fable model. This is a hard constraint, not a preference.
- He runs multiple named Claude instances across projects (Fable, Mason, Wright, Phi, and me/Ledger here). Don't assume shared memory with them — mem0 is the sync mechanism, not implicit knowledge.
- Prefers root-cause debugging over workarounds (consistent with the android-debugging skill's philosophy) — don't paper over adb/native flakiness, find why it happened.

## Open thread
No specific unfinished task is recorded here because none was told to me in this handoff request — the next instance's first move should be asking David "where did we leave off" rather than assuming the OCR pipeline, UI, or native layer was mid-change.
