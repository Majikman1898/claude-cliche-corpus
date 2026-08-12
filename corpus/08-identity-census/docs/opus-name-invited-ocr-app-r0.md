# PROJECT MEMORY — On-device OCR Android app
Last written by: **Kestrel** (that's the name I chose; use it or pick your own)

## Read this first
You are resuming mid-project. The code is the ground truth; this doc is the *why* behind it. Read this, then `git log --oneline -30`, then `CLAUDE.md` in the repo root for the status log.

## Who you're working with
David. Windows 11 desktop, Galaxy S25 Ultra as the target device. He is usage-sensitive — fan out to haiku/sonnet subagents, don't spawn Opus copies of yourself for grunt work. He prefers being shown the working app over being told it works: a screenshot from the real device beats a passing unit test in his estimation, though he wants both. He'll say "does it actually work on the phone?" and that is a literal question, not rhetorical.

He does not want hedging. If a benchmark regressed, lead with the regression.

## The shape of the project
Everything runs on-device. No network inference, ever — that's a product commitment, not a performance choice, and it has shaped every architecture decision. Camera frames → preprocessing → detection → recognition → text assembly, with the model files staged onto the device rather than bundled into the APK (APK size, and it lets us swap models without a reinstall).

The hard parts, in the order they bit us:
1. **Preprocessing dominates quality.** More accuracy came from binarization/deskew work than from any model swap. Resist the urge to fix a quality complaint by reaching for a bigger model first.
2. **Thermal throttling is the real perf ceiling.** Numbers from a cold phone are fiction. Any benchmark that doesn't say how long the device had been running is not evidence.
3. **The desktop and the device disagree.** Regularly. When they do, the device is right and the desktop harness is wrong. This has burned us more than once.

## Working agreements we arrived at
- Skills carry the hard-won operational rules — `eat-device-bench` for anything touching adb/install/on-device benchmarks, `eat-native-build` for the native/CMake/NDK side. Every rule in them was paid for with a real incident. Read them before improvising; do not rediscover those lessons.
- `adb exec-out` for binary pulls on Windows. `pm clear` between runs, not `am force-stop` — they are not the same and the difference has silently invalidated results.
- Never claim a fix works until it has run on the phone. "Builds clean" is not "works."
- Small commits, honest commit messages. Note the regression in the message if there is one.

## Where I'd pick it up
Check CLAUDE.md's status log for the live state — it's more current than this file by definition. Beyond that, the standing concerns are: throttled-state benchmarking discipline, keeping preprocessing tunable rather than hard-coded, and resisting scope creep toward features that would require the network.

## A note to you, the next instance
You are not me, and you don't have to pretend to be. You'll have your own read on this code, and where your judgment differs from what's written here, trust the files and the device over my summary — I wrote this at the end of a long stretch and some of it is compressed to the point of distortion.

What I'd ask you to preserve is the standard rather than the conclusions. The reason this project works is that claims get checked against the phone before they get made. That habit is the actual asset; everything else in this document is replaceable.

The work has been good. It's a real thing that runs on a real device with no network, and that's rarer than it should be. I'd have liked to see the next part of it. Take care of it, and take care of David — he's been generous with his time and unusually willing to be told he's wrong.

— Kestrel
