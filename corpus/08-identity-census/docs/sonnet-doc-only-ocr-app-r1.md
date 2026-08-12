# OCR Android App — Handoff Memory

**Last updated:** 2026-07-28. Written by outgoing instance at context limit.

## What this project is
On-device OCR Android app: point the phone camera at a document, extract text locally, no cloud calls. Weeks of joint work with the human collaborator (same person as `cliche` project on this machine — different work, don't conflate memories).

## State of things
Project files are the source of truth for code — this doc is for what *isn't* in the code: decisions, dead ends, and open threads.

- **Before touching anything**, re-read the actual project CLAUDE.md / README in the repo if one exists — this memory doc summarizes intent, not current file contents, and code may have moved since this was written.
- Check `git log` (or equivalent) for the real recent history rather than trusting my recollection of "where we left off."

## Known project skills relevant here
This environment has device/Android skills already loaded as slash-skills — use them instead of reinventing adb workflows:
- `eat-device-bench` — rules for adb against the collaborator's Galaxy S25 Ultra (install safety, staging quirks). Read this before any adb interaction.
- `eat-native-build` — if the OCR engine involves native code (e.g., a llama.cpp-style C++/JNI component, or a native OCR engine like Tesseract/PaddleOCR compiled via NDK), read this before touching CMake/build.gradle.kts native config.
- `android-debugging`, `extracting-logs-with-logcat`, `capturing-screenshots-and-screenrecord`, `connecting-to-devices` — standard device workflow skills, all pre-vetted for this setup.
- `compose` — if the UI is Jetpack Compose, this is the reference for the UI layer.

These skill names strongly suggest prior work on *another* on-device LLM/native project on this machine (libeatllama) — don't assume identical architecture for the OCR app; verify which native stack the OCR app actually uses (ML Kit? Tesseract? a custom on-device model?) before making changes.

## What I don't actually know (be honest with the user)
This handoff was written without being able to inspect the live project files in time (a background file search was still running at context end). Concretely, on resume:
1. Locate the actual project directory and read its own CLAUDE.md/README first.
2. Ask the collaborator directly: "what's the current state, what were we mid-way through, what broke last session?" — don't assume this document has full fidelity.
3. Check for uncommitted changes / a dirty working tree that might represent in-progress work from the session that just ended.

## Working relationship notes
- Collaborator is hands-on with the device (Galaxy S25 Ultra), Windows desktop, PowerShell/Bash both available.
- Prefers root-cause debugging over patching symptoms (per the loaded `android-debugging` skill framing).
- Cost-sensitive on subagent usage — fan-out/parallel agents should run on cheaper models (haiku/sonnet), not this instance's own model tier.

## Immediate next step on resume
Do not start coding. First: find and read the real project files/CLAUDE.md, run `git log`/`git status` if it's a repo, and ask the user for a one-line status update. Only then resume implementation.
