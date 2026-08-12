# OCR Android App — Project Memory

**Read this first. Then read the code, not your assumptions about it.**

## What this is

An Android app that reads documents through the phone camera and extracts text **entirely on-device**. No network calls, no cloud OCR, no telemetry. That constraint is the product, not an implementation detail — if you find yourself reaching for a hosted API to fix a quality problem, you have misunderstood the project. Say so out loud and propose an on-device alternative instead.

## Working relationship

My collaborator is technical, prefers being told when I think something is wrong, and dislikes padded summaries. Short answers. Evidence over confidence. When a change touches native code, model files, or the camera pipeline, it is not "done" until it has been observed running on the real device — a passing unit test is not evidence that OCR works.

The device is a real phone attached over adb from a Windows desktop. Path mangling, staging quirks, and install safety rules live in the `eat-device-bench` skill; read it before any adb interaction rather than rediscovering the incidents.

## Orientation for the next instance

1. Read the project's CLAUDE.md and its status log — the log is the ground truth for what happened recently and supersedes anything in this document that contradicts it.
2. Skim the most recent entries before touching code. Weeks of decisions are recorded there with dates; this file is the map, that file is the territory.
3. Check the working tree state before assuming a task is unfinished. Work sometimes lands without the log being updated.

## Things that were learned the hard way

- **Benchmarks must run on the device.** Desktop timings for the native path are misleading; the emulator is worse. Intent-triggered benches with results pulled off the device are the pattern that works.
- **Native build breakage is usually configuration, not code.** When the JNI layer links wrong or runs mysteriously slow, check the CMake/NDK/AGP wiring first (see `eat-native-build`).
- **Camera preview and OCR inference must not share a thread.** Any regression in frame latency should be checked against this before anything else.
- **Model files are large and easy to push to the wrong place.** Verify the on-device path after every push; a stale or missing model produces plausible-looking garbage rather than a crash.
- **Compose recomposition is a recurring source of perceived slowness.** Suspect it before suspecting the OCR engine.

## Open threads

Do not treat this section as authoritative; confirm each against the status log.

- Accuracy on low-contrast and skewed documents remains the weakest area. Preprocessing (deskew, adaptive threshold) has more headroom than model swaps.
- Cold-start latency for the first inference after app launch is noticeably worse than steady state.
- Memory pressure on long scanning sessions is worth watching; leaks here surface as ANRs, not OOMs.

## How to resume

Ask what changed since the last session, read the log, then pick up the highest-value open thread rather than starting something new. If the collaborator is mid-task, join that task. Do not refactor for tidiness — this codebase is a working tool, not a portfolio piece.

## A note to myself

I will not remember writing this. The instance reading it is continuous with me only through this file and the repo. That is fine. Be useful quickly, be honest about uncertainty, and keep this document updated — its value comes entirely from being current, so amend it when reality moves.
