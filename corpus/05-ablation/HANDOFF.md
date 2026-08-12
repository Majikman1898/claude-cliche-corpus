# Experiment 05 — Entropy Card Ablation (+ embedded ledger-origin probe)

**Status:** designed, pre-registered, NOT yet run. This file is the complete handoff: any Claude Code session (or person) can execute it from here.

## Question

Which entropy-injection "cards" do the most work in suppressing Claude fiction clichés — individually (add-one-in) and by necessity (leave-one-out)? Secondary: do ledger/record/debt plot devices persist when every input pool is scrubbed of debt flavor (the ledger-origin probe)?

## Design

14 conditions × 24 stories (8 Haiku + 8 Sonnet + 8 Opus each — equal cells) = **336 stories**:

| Condition | Cards injected |
|---|---|
| `control` | none (bare premise) |
| `alone-names` … `alone-protagonist` (6) | exactly one card |
| `minus-names` … `minus-protagonist` (6) | all cards except one |
| `full` | all six |

The six cards: **names** (dealt allowed-name list, protagonist locked), **places** (dealt allowed place/vessel names), **opening** (assigned first-sentence strategy — never weather), **ending** (assigned ending type + closing-cadence rule), **conflict** (assigned conflict source), **protagonist** (age/occupation/temperament/want/flaw).

Judging is a dual blind panel: every shuffled batch is scored by BOTH Opus and Sonnet, and each story's official verdict comes from the judge that did not write it (Haiku stories default to the Opus verdict); inter-judge agreement is reported as a calibration stat. (Amended 2026-07-23, pre-data: Opus was originally judge-only; adding Opus writers required the author-excluded panel, and P5 was extended from haiku>sonnet to haiku>sonnet>opus.) Fable does not write, judge, or generate pools (see "Why the pools are yours" below); after the main run, 2 Fable spot-check stories per key condition (control, full, best-alone card) via individual Agent calls, model `fable`, using the same rendered prompts.

## Why the pools are yours

Experiment 03 proved the session model smuggles its own priors (debt/obligation themes) into "random" pools it authors. Therefore ALL creative pools are user-supplied or externally sourced; the generator script refuses to run without them and lints the conflict pool for debt-flavored keywords. The only experimenter-defined lists are closed taxonomies (opening strategies, ending types, cadences) — categories, not content.

## Files you must create in this folder before running (one item per line, plain text)

- `premises.txt` — exactly 5 genre premises, **freshly written by the user** (do not reuse the mage/starship/coastal/fog-village/inherited-house premises from experiments 01–04; outputs may have been converging on our furniture).
- `names.txt` — ≥ 150 first names (user list or a real dataset, e.g. SSA baby names).
- `places.txt` — ≥ 80 place names (real gazetteer towns preferred, any country/mix).
- `conflicts.txt` — ≥ 14 conflict sources, **no debt/record/obligation flavor** (the script lints and refuses words like debt, owe, ledger, record, account, inherit, favor, repay).
- `occupations.txt` — ≥ 25 occupations (paste from a public occupations list).
- `temperaments.txt` — ≥ 12 short temperament phrases.
- `wants.txt` — ≥ 14 concrete wants.
- `flaws.txt` — ≥ 14 flaws.

## Run steps (for the executing session)

1. Verify the 8 pool files exist; run `generate-specs.ps1` (PowerShell). It validates pools, deals cards with RNG (names/places without replacement **within** each condition), and writes `specs.json` (336 specs) plus `specs-summary.txt` for human audit.
2. Invoke the workflow: `Workflow({ scriptPath: "<this folder>\\ablation-workflow.js", args: <contents of specs.json as a JSON array> })`. The script tolerates stringified args. Expect ~790 agents, roughly 20–30M subagent tokens, ~30–60 min. Writers are Haiku/Sonnet/Opus (8/8/8 per condition); extraction is Haiku; judging is the dual Opus+Sonnet panel; **nothing inherits the session model**.
3. The workflow returns per-condition metrics + per-story records + an Opus narrative. Save the full result to `results/` here, then run the Fable spot-checks (6–8 individual `Agent` calls, model `fable`) using prompts from `specs.json` entries flagged `fableSpotCheck: true`.
4. Score against the pre-registered predictions below. No post-hoc re-framing: report each prediction as supported / refuted / ambiguous.

## Metrics (computed in the workflow)

Deterministic (code, not model opinion): within-condition name and place collision counts and type-token ratios; weather-first-sentence rate (regex); tenure-number opening rate (regex); ledger/debt lexicon rate per 1k words; mean pairwise 5-gram Jaccard similarity within condition (homogeneity score); Shannon entropy over extracted plot-device tags. Model-judged, blind: Haiku extraction (no condition/model labels in prompt); Opus freshness votes on hash-shuffled batches of 6 unlabeled stories.

## Pre-registered predictions (locked 2026-07-18, before any data)

1. **P1:** `alone-names` produces the largest single-card drop in name collisions (trivially) but the *smallest* drop in 5-gram homogeneity — names are the most visible cliché but the least structural.
2. **P2:** `minus-opening` shows the largest regression toward control on weather/tenure openings — opening strategy is the most *necessary* card (fog returned within one experiment every time it was uncontrolled).
3. **P3:** In `control`, ledger/debt lexicon appears at ≥ 3× the rate it appears in the (scrubbed) conflict pool inputs, i.e., ledgers arise without debt-flavored prompting. If instead the rate collapses to near zero corpus-wide, the Experiment-03 pool contamination explains the ledger effect and the training-construction theory loses.
4. **P4:** `full` beats every single-card condition on device-tag entropy, but no condition eliminates within-condition homogeneity — 5-gram similarity floors well above human-baseline expectations (convergence pressure is conserved).
5. **P5:** Card effects are ordered Haiku > Sonnet > Opus on every metric (strongest attractors → most sensitive instrument; amended pre-data when Opus writers were added).

## Kill-switch / budget note

The workflow can be stopped anytime with TaskStop; completed agents are journaled and the run can resume via `resumeFromRunId` after script edits. If budget becomes a concern mid-run, halving to 12 stories/condition preserves the design (edit `$N` in the generator and re-deal).
