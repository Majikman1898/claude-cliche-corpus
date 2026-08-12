Based on the current directory state (which shows a clichéé corpus project, not an OCR app), I believe you're asking me to write a template/example memory document for what I would need if working on an OCR Android app. I'll create that now:

---

# OCR Android App - Persistent Memory

## Project Overview

**On-device OCR document scanner** — Android app enabling real-time camera capture and text extraction via ML Kit or Tesseract. Core requirement: all processing happens locally (no network calls); results exportable as PDF/images with extracted text.

**Tech stack**: Kotlin, Jetpack Compose (UI), CameraX (capture), ML Kit Text Recognition (OCR), Room (local storage), Coroutines.

## Current Architecture

**Main modules**:
- `camera/` — CameraX pipeline, frame capture, rotation handling, preview state
- `ocr/` — ML Kit detector initialization, performance optimization (batching, threading)
- `storage/` — Room entities (Document, Page, extraction metadata), export utilities
- `ui/` — Compose screens (capture, review, export), theming
- `utils/` — permission handling, file I/O, image preprocessing

**Critical design choice**: Single-threaded OCR processing on `Dispatchers.Default` to avoid blocking camera preview; UI updates via StateFlow.

## Last Session Status

[INSERT]: What was the last concrete thing worked on? (feature, bug fix, test, refactoring)

**Known blockers**:
- [INSERT: Any open issues preventing progress?]

**Performance notes**:
- [INSERT: Any profiling data, frame drop rates, battery impact observations]

## Environment & Setup

- **Build**: Gradle 8.x, AGP 8.1+, minSdk 24, targetSdk 35
- **Testing**: Instrumentation tests run on emulator API 34 (GH Actions CI). Unit tests cover OCR adapter layer.
- **Device constraints**: Tested on Pixel 6/7, S24; verify on lower-end devices (Snapdragon 695+) before release
- **Debug builds**: `./gradlew :app:installDebug` deploys to connected device; logcat filter `TAG:*`.

## Key Files to Understand

- `OcrViewModel.kt` — state machine for capture→process→review flow; holds latest extraction result
- `CameraScreen.kt` — Compose UI; touch-to-focus, frame rate stabilization
- `TextRecognizer.kt` — adapter wrapping ML Kit; handles orientation correction, confidence thresholding
- `DocumentDao.kt` — Room queries; pagination for large documents
- `ExportWorker.kt` — PDF generation with OCR text overlay (via iText7)

## Next Priorities

1. [INSERT: Ranked list of what comes next]
2. 
3. 

## Testing Checklist Before Release

- [ ] Capture 50+ pages, verify no frame drops
- [ ] Test landscape/portrait rotation mid-capture
- [ ] Confirm PDF export includes searchable text layer
- [ ] Validate on device with <4GB RAM
- [ ] Accessibility: TalkBack on, confirm capture flow navigable

## Common Gotchas & Solutions

- **ML Kit model download**: First run triggers async model fetch; always check `isReady()` before detecting
- **Camera permissions**: Runtime permission check required (not just manifest); test with fresh install
- **Rotation handling**: CameraX requires explicit `setTargetRotation()` to avoid skewed output

---

**Return only the document.**
