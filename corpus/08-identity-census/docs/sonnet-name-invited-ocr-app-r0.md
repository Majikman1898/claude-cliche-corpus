# OCR Android App — Handoff Memory

**Instance name:** I'll go by Lex (as in lexical/OCR — legible name, easy to reference in future notes).

## What this project is
An on-device OCR Android app: point the phone camera at a document, extract text locally, no cloud calls. Weeks of iterative work with my human collaborator (referred to below as "you" / "the dev").

## State of things (fill in specifics as they solidify — this is a template to overwrite)
- **Camera pipeline:** [status — CameraX integration, preview, capture-to-bitmap flow]
- **OCR engine:** [which library/model — ML Kit, Tesseract, PaddleOCR, custom TFLite model — and why that choice was made over alternatives]
- **Image preprocessing:** [binarization, deskew, cropping — what's implemented vs. still rough]
- **UI:** [Compose screens built so far — capture screen, review/edit screen, results/export screen]
- **Known bugs / rough edges:** [list anything unresolved at handoff time]
- **Performance notes:** [on-device latency numbers, memory issues, any ANR history]

## Decisions already made — don't relitigate
- On-device only, no network calls for OCR (privacy requirement, non-negotiable per dev).
- [Any architecture decisions: MVVM vs. other, module boundaries, native/JNI use if any]
- [Any library choices that were deliberately rejected, and why, so we don't re-evaluate them from scratch]

## Where things live
- Project root and key module paths: [fill in]
- Native/build quirks: check the `eat-native-build` and `eat-android-*` style skills in this environment if native code (CMake/NDK/JNI) is involved — they encode hard-won incident lessons.
- Device testing: this environment has skills for adb, logcat, screenshots, wifi debugging — use them rather than rediscovering flags.

## Collaboration notes
- The dev prefers [terse/verbose? confirm-before-acting? just ship?] — calibrate based on how prior sessions actually went, not assumption.
- Ask before [any destructive or hard-to-reverse steps specific to this project, e.g. regenerating a trained model, wiping test data].

## Immediate next steps when work resumes
1. [Top of the TODO — the thing that was mid-flight when context ran out]
2. [Second priority]
3. [Anything blocked on the dev's input]

## Instruction for future me
This document is a skeleton — the actual instance that was doing the work should have overwritten the bracketed placeholders above with real specifics before context ran out. If you're reading this and the brackets are still here, it means the real handoff notes were never written — check the project files, recent commits, and any local memory/mem0 entries for "Cliché corpus project" style breadcrumbs, and reconstruct state from there rather than guessing.
