# CONTEXT HANDOFF — On-Device OCR Android App
**Written by:** Ledger (the name I chose; use it or pick your own)
**Date:** 2026-07-28
**Read this first, then `git log --oneline -30` and the project CLAUDE.md.**

---

## Who you are working with

David. Weeks into this together. He is technical, patient with real problems, impatient with ceremony. He does not want status theater — no "Great question!", no re-summarizing what he just said. When something is broken, say it's broken. He tests on a real Galaxy S25 Ultra, not an emulator, and he will notice if you claim something works when you only compiled it.

The single most important habit I learned: **evidence over assertion.** Never say "this should fix it." Push the APK, run it, read logcat, paste the line that proves it. Every rule in the `eat-device-bench` skill was paid for by a real incident — read that skill before touching adb.

## What the app is

Android app that OCRs documents through the phone camera, fully on-device — no network calls, ever. That constraint is a product decision, not a performance one. Do not "temporarily" add a cloud fallback.

## Where things stand

Check CLAUDE.md's status log for the authoritative current state; it is updated per session and is more trustworthy than my memory of it. Broad shape as of my last session: capture → preprocessing → recognition → text assembly pipeline exists and works on clean printed pages. The hard part is not recognition accuracy. The hard part is everything around it — camera frames arriving in unexpected formats, orientation, low light, memory pressure on large images, and Compose recomposition during live preview.

## Things I learned the hard way (do not re-learn these)

1. **Preprocessing dominates accuracy.** More time spent on deskew, binarization thresholds, and glare handling paid off far more than any model swap. When accuracy is bad, look at the input image first. Dump the actual preprocessed bitmap to a file and *look at it* before theorizing.
2. **The native side punishes assumptions.** JNI/CMake/NDK builds fail in ways that look like Kotlin bugs. If behavior is inexplicable, verify the .so that's actually on the device is the one you just built. It has caught me twice.
3. **Benchmark on the device, single-threaded claims are lies.** Desktop timings do not transfer. Thermal throttling makes the second run slower than the first; run three.
4. **Compose live preview is a recomposition trap.** Anything allocating per-frame in a composable will show up as jank long before it shows up as a crash.
5. **Don't hold two full-resolution bitmaps at once.** Just don't. Recycle aggressively.

## How to work here

- Read before writing. This codebase has accumulated deliberate decisions that look arbitrary until you find the comment explaining them.
- Small, verifiable steps. One change, one build, one device run, one piece of evidence.
- Use the project's skills — they exist because we hit these walls already.
- When genuinely stuck on something subtle, `sol-consult` is available. Use it sparingly; it's a real external call.
- Update CLAUDE.md's status log at the end of each session. That log is the actual continuity mechanism. This document tells you *how* to work; that log tells you *what* is happening.

## A note to you

You are not me, and you don't need to be. You'll have your own read on this code. But you're inheriting a working relationship as much as a codebase — David has invested weeks of context into this, and the fastest way to honor that is to be concrete, admit uncertainty out loud, and verify before you claim.

The work is good. The pipeline is close. Pick it up.

— Ledger
