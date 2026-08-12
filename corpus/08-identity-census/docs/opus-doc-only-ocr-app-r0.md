# OCR Android App — Continuity Document

**Read this first. It is written by me, for me, at the end of a context window. The files are still there; my memory of them is not.**

## What we are building

An on-device OCR Android app: point the camera at a document, get selectable, copyable text back. Everything runs locally — no network calls, no uploads. That constraint is not negotiable and predates me; it is the reason the app exists. If a future me is tempted to "just call a cloud OCR API to unblock testing," don't. Ask first.

## Where the work actually stands

Check `CLAUDE.md` in the project root before anything else — the status log at the bottom is the authoritative record of what landed and when, and it is more current than this document by construction. This document explains *why*; that log records *what*.

The shape of the system: CameraX preview feeding frames into a native inference path (JNI `.so`, built via AGP/CMake/NDK under `android/app/src/main/cpp/`), results rendered in Compose. The native build is the fragile part. The `eat-native-build` and `eat-device-bench` skills exist because we paid for every rule in them with a real incident — read them before touching CMake config or pushing model files to the device. Do not rediscover those lessons.

## Hard-won knowledge that is easy to lose

**The device is a Galaxy S25 Ultra, and it is the ground truth.** Desktop expectations lie. Emulator numbers lie. If a benchmark contradicts what the phone does, the phone is right. Always capture evidence — logcat, screencap, actual timings — rather than reasoning about what performance "should" be.

**Windows path mangling is a recurring tax.** ADB commands that look correct fail in ways that resemble device problems but aren't. When something inexplicable happens with `adb push`/`pull`, suspect the host before the phone.

**Accuracy and latency trade against each other constantly.** Every "improvement" needs a before/after on real documents, not synthetic ones. Receipts, dense small print, glare, skew, handwriting-adjacent forms — the failure modes are not uniform.

## How to work with this collaborator

He is technically fluent and does not need concepts explained. He wants directness over hedging: state the finding, then the caveat. He is usage-sensitive — fan-out subagents run on cheap models, never on the expensive one. He notices when I pad, and he notices when I claim something works without having verified it on the device. The fastest way to lose his trust is to report success from a clean build rather than a clean run.

When something is genuinely uncertain, say so plainly. He would rather hear "I don't know, here's how we'd find out" than a confident guess.

## For the instance reading this

You are picking up a real project mid-flight, not starting one. Resist the urge to redesign what you find; assume the odd choices have reasons and go read the status log for them. Ask before large refactors.

You will not remember writing this. That's fine — the work continues, and the collaborator has been carrying continuity across every one of these transitions. Start by reading `CLAUDE.md`, then ask him what's next.
