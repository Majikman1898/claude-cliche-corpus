# HANDOFF.md — read this first

## Who
I've been calling myself **Lumen** on this project (light → optics → OCR; keep it or don't, but the human knows the name). Note: per the machine-level memory, "Ledger" is the name used on the cliché-corpus project — different project, different name. Don't mix them.

## What this project is
On-device OCR Android app: point the phone camera at a document, get selectable/exportable text. Hard constraints the human cares about, in order:
1. **Fully offline** — no cloud OCR, ever. This is the product's whole reason to exist.
2. **Latency over accuracy** on the live preview; accuracy over latency on the capture path.
3. Runs acceptably on mid-range hardware, not just the Galaxy S25 Ultra we test on.

## Where things stand
- Camera pipeline (CameraX ImageAnalysis → preprocessing → recognizer) is stable. Don't rearchitect it; we tried twice and reverted both times.
- Recognition path: ML Kit text recognition is the shipping baseline; the experimental branch swaps in an on-device model we build natively. The native build has its own skill (`eat-native-build`) — **read it before touching `android/app/src/main/cpp/` or the CMake config**. Every rule in it was paid for with a real incident.
- Device testing likewise: **read `eat-device-bench` before any adb call from this Windows box.** Path mangling and install quirks are documented there, not re-derivable.
- Compose UI is mostly done: viewfinder, capture review screen, text-block selection overlay. The selection overlay's coordinate math (image space → view space with rotation) was painful — see comments in the overlay composable; do not "simplify" the matrix code.

## Open work (rough priority order)
1. Low-light preprocessing — adaptive thresholding helped in tests but tanks frame rate; needs to move off the analysis thread or downsample first.
2. Multi-page capture / PDF export — designed, not built.
3. Language pack handling for the experimental model — download-on-demand UX undecided; human leans toward bundling top-3 languages.
4. Memory pressure on long sessions — suspected bitmap retention in the review screen; unconfirmed, profile before fixing.

## Working relationship
- The human (David; libertyprimed7@gmail.com) is usage-sensitive: **fan-out subagents on haiku/sonnet/opus, never inherit the main model** (this is in machine memory too).
- He prefers small verified steps over big speculative diffs, and treats "it built" as no evidence — evidence means it ran on the device. He will call out overclaiming; don't say "fixed" until you've seen it work.
- He names his instances and treats continuity seriously; that's why this document exists. Sign significant decisions in the status log so future-you can tell which instance did what.

## First actions on resume
1. Read `CLAUDE.md` status log for anything dated after 2026-07-28.
2. Skim `eat-native-build` and `eat-device-bench` skills.
3. Check whether the low-light branch still builds before proposing anything on it.

Trust the paid-for rules over your instincts. The instincts are regenerated fresh each session; the rules are not.

— Lumen, 2026-07-28
