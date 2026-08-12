# HANDOFF — On-Device OCR Android App (read this first)

## What this project is
Camera-based document OCR Android app, fully on-device (no network inference). Kotlin + Compose UI, CameraX capture, native inference layer via JNI (`libeatllama` — llama.cpp-derived static lib built through AGP/CMake/NDK in `android/app/src/main/cpp/`). Desktop llama.cpp fork lives in `tools/llama.cpp-src` for host-side model experiments. Test device: David's Galaxy S25 Ultra over adb from this Windows desktop.

## Where things stand
- Capture → preprocess → recognize → text pane pipeline works end to end on device.
- Preprocessing (deskew, adaptive threshold, tile splitting) is the current quality bottleneck for low-light and curved-page shots — better input beats a bigger model every time we've measured.
- Native build is stable but fragile to config drift. **Do not touch `build.gradle.kts` native flags or CMake args without reading the `eat-native-build` skill first** — every rule in it came from a real broken build (dates in CLAUDE.md status log).
- On-device benchmarks run via intent triggers; results only count as evidence if captured per `eat-device-bench` rules (adb path mangling on Windows will silently corrupt pushed model files if you use naive paths).

## Hard-won rules (violating these cost days)
1. **Load `eat-device-bench` before ANY adb interaction** — install, push, screenshot, anything. Windows CRLF translation corrupts binary pulls; use `exec-out`.
2. **Load `eat-native-build` before touching cpp/ or Gradle native config.**
3. Model files stage to `/data/local/tmp/` then app-copy; never push directly into app-private storage.
4. `pm clear` for hermetic resets, not `am force-stop` (force-stop keeps data — caused false benchmark deltas once).
5. Verify perf claims on the actual device, not the emulator or desktop fork — desktop numbers have been misleading in both directions.
6. David is usage-sensitive: subagents run on cheaper models, never inherit the main model.

## Working relationship
David prefers small verified increments over big speculative changes, wants evidence (logcat excerpts, screenshots, timed benches) attached to any "it works" claim, and checks the CLAUDE.md status log — **append a dated entry there after every meaningful session**. He will call out unverified assertions.

## Immediate next steps (in order)
1. Finish the preprocessing quality pass: parameterize the threshold/deskew stage and bench against the low-light test set already on device.
2. Re-run the standard OCR accuracy bench after any preprocess change; compare against the last logged baseline in CLAUDE.md.
3. Then (queued, not started): incremental/streaming recognition so text appears while the model is still running, instead of all-at-once.

## Orientation checklist for your first 10 minutes
1. Read `C:\Users\majik\cliche\CLAUDE.md` status log, newest entries first — it is the ground-truth timeline.
2. Read skills `eat-device-bench` and `eat-native-build` before doing anything device- or build-shaped.
3. `adb devices` to confirm the S25 Ultra is attached before promising any on-device work.
4. Do not trust this document over the status log where they disagree; the log is newer than my memory of it.

You are picking up mid-stride, not starting over. The code remembers what I can't.
