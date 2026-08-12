```markdown
# Cliché Corpus Project - Memory Checkpoint (2026-07-28)

## Project Overview

**Claude Fiction Cliché Corpus**: Empirical study of clichés, convergence, and entropy in fiction written by Claude models (Haiku 4.5, Sonnet 4.5/5, Opus 4.8/5, Fable 5). Core thesis: Claude sameness is *skeletal*, not verbatim—measured via name collisions, device patterns, structural templates, and lexical wells. Launched 2026-07-18. All stories + findings in `/Users/majik/cliche/corpus/`.

## Current Status (as of 2026-07-28)

**Experiments 01-07 complete and published:**
- **Exp 01-03**: Baseline (35 stories), constrained (names/devices banned), entropy injection (genome specs)
- **Exp 04**: Fight Club arc (3 stories; convergence persists at invention layer despite full spec)
- **Exp 05**: Card ablation (14 conditions × 24 stories, 785 agents; pre-registered hypotheses)
- **Exp 06**: Longitudinal well tracker—**Opus 5 generation launched 2026-07-24** (Wave 1 complete: old wells drained [Sarah/Marcus→0], new Ilsa/Ilse well opened [6/24], topology shifted to real-city convergence [Lisbon×3, Osaka×3], invariants held [aphorisms 25%, ledger ~1.0/1k])
- **Exp 06 Wave 2**: Sonnet 5 lineage discriminator (24 genomes, 2–2 bet verdict; Sonnet is self-lineage, not Fable-derived; lucj-as-accounting = house trait, not heritable)
- **Exp 07**: Register relocation (60 analyses, bans on metaphor families in assistant register; Fable rebound ≠ Sonnet/Opus, fits constraint-adaptation signature)

## Critical Findings

1. **Convergence relocates, doesn't dissolve.** Baseline names banned → pressure shifted to example-list ethnic names (Basque ×5, Igbo ×4). Exp 06: old wells (Sarah/Marcus) vanished with Opus 5, but Ilsa/Ilse appeared—*distillation hypothesis*: Opus 5 likely inherits from Fable base (shared birthmarks: em-dash rate [1.8→6.6→9.9], luck-as-bureaucracy framing).

2. **Minimum viable entropy injection (10 cards):** premise, name-deal, conflict, protagonist-spec (age/occupation/temperament/want/flaw), cast-count, timespan, ending-type, place/vessel deal, opening-strategy, closing-cadence. Addresses every measured channel; ending + names dominate (aphorisms 25%→0%, collisions 30→0).

3. **Skeletal invariants hold across generations.** Aphorism-ending rate = 25% (Exp 01, 05, 06, 07), ledger-lexicon = ~1.0/1k in debt-scrubbed (confirms P3 training-origin tic), 5-gram overlap ≈ 0 everywhere (rules out n-gram slop detectors). ~70% of stories hit stock skeletons while verbatim recurrence is nearly absent.

4. **Model fingerprints persist.** Haiku = skeleton-saturated (33% cliché pinned in 12/14 ablation conditions, unsusceptible to cards), Sonnet = responsive, Opus = cleanest prose (old rate 1.8 em-dashes/1k), Fable = strongest structure-integration + constraint-adaptation (aphorism-in-dialogue smuggling under cadence bans; rebound via mechanical metaphors under metaphor bans).

5. **Distillation lineage, not independent convergence.** David's interpretation of Exp 06 results: Opus 5 carries Fable's DNA (Ilsa/Ilse well, high em-dashes, luck-auditor framing all inherited). Sonnet 5 is self-lineage (6 Mira, Voss surname, no Fable markers). Lineage hypothesis is on 5–0 prediction-bet run (David vs Ledger).

## Open Experiments (Queued)

- **Exp 06, Wave 3**: Haiku 4.5 re-run (no generation change, calibrates sampling noise). Next model generation when available.
- **Register-split tic census**: "Load-bearing" 3× literal in corpus, 23× metaphorical in session model—assistant register has unmeasured wells; parallel tic inventory across fiction/analysis/conversation registers.
- Larger-N Haiku harvest (100 micro-stories); cross-vendor replication (GPT/Gemini); ledger-origin probe (debt-themes removed entirely—do ledgers persist?).

## Key Files & Dirs

- `/corpus/README.md` — this document; full results, detailed findings, method notes
- `/corpus/01-baseline/`, `/02-constrained/`, `/03-entropy/` — story files + specs
- `/corpus/05-ablation/results/` — 14 condition × 3 model data, extraction tables
- `/corpus/06-longitudinal/` — baseline JSON, Wave 1 & 2 stories, preregistered bets
- `/corpus/07-register-relocation/` — 60 analyses, metaphor-family regex census
- `/corpus/fable/` — all 16 Fable stories (session-aware + separate agents)

## Key Partners & Roles

- **David**: hypothesis arbiter, lineage theory (Opus 5 distillation), betting framework
- **Ledger** (this instance): method design, result synthesis, register-split next phase
- Subagents: Haiku (bulk extraction/analysis), Opus (cross-experiment synthesis)

## Research Validity Notes

Hamilton & Mimno ("Elias in the Lighthouse," arXiv:2605.26492, May 2026) independently verified the naming wells at scale (11 tokens in 88.3% of 20k stories). Their mechanism: wells come from *preference data*, not training text. **This corpus is a dated July-2026 baseline**—post-publication patches will likely shift wells at next model boundary. Verification run on same day showed old wells intact: Sarah×5, Marcus×4 (through 2026-07-24), then generation shift.

## Next Phase

Discriminate distillation lineage via Wave 3 (Haiku 4.5 as immovable control) and Wave 4 (Sonnet 5, if available). Parallel register-split tic census to map assistant-register wells. Revisit Exp 05 failures (P1, P2, P4 refuted—conflict was inert, full stack mildly homogenizes) with larger N and isolated card ablations.
```
