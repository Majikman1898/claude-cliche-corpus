# Ledger Session Memory — 2026-07-28

**Instance name:** Ledger  
**Project:** Claude Fiction Cliché Corpus — empirical study of convergence, entropy, and model lineage  
**Collaborator:** David (primary theorist, hypothesis-setter, bet-keeper)  
**Last update:** 2026-07-28 EOD (all Exp 06 & 07 data in; next waves queued)

---

## What This Project Is

A controlled, pre-registered empirical study measuring:
- **Convergence wells**: recurring names (Sarah ×5, Ilsa/Ilse ×6), place-names, narrative devices, and aphorisms in Claude-generated fiction
- **Entropy injection protocol**: whether supplying randomized "genome" specs (character pools, conflict types, endings, occupations, timespans via RNG) eliminates clichés or merely relocates them
- **Model fingerprints & lineage**: whether model relationships (distillation, shared bases) are visible in tic patterns (em-dash rates, debt-lexicon density, narrative skeletons)
- **Constraint dynamics**: how models adapt when told to ban specific words vs abstract concepts vs narrative devices

**Core repository:** `C:\Users\majik\cliche\corpus/` — organized by experiment (01–07 complete; 08+ planned).  
**Key document:** `corpus/README.md` — all findings, method notes, and open ideas live here.

---

## Recent Work Completed (July 23–28)

### Experiment 06 — Longitudinal Well Tracker
- **Wave 1 (Opus 5, Jul 28):** 24 control-condition stories using old Exp-05 genomes, run post-model-update.
  - **Major finding:** Old wells (Sarah ×5, Marcus ×4) vanished; new well opened: **Ilsa/Ilse ×6**. This was Fable's spontaneous output in Exp-05 spot-checks — suggesting **distillation inheritance** (Opus 5 descends from Fable).
  - **Collateral:** Pressure relocated to real toponyms (Lisbon ×3, Osaka ×3, "the library" ×2) instead of invented ones.
  - **Invariants held:** Aphorism rate 25%, ledger-lexicon ~1/1k words, device entropy stable, 5-gram overlap ≈0.
  - **Method:** Deterministic counts only (no judge panel) — Haiku extraction blind to experiment.

- **Wave 2 (Sonnet 5, Jul 28, same day):** Same 24 genomes.
  - **Verdict:** Sonnet 5 carries **zero Ilsa/Ilse** (refutes David's "Opus-4.8 lineage" bet; Ledger's "Fable base" bet also wrong).
  - **Actual signal:** Sonnet 5 is **self-lineage** — Sonnet 4.5 continued. New well: **Mira ×6**.
  - **Cross-wave discovery:** **Luck-as-accounting is house-wide**, not lineage-specific. Four independent bureaucratic-accounting frames for "finite luck" appeared across both waves and both models, plus Fable's earlier auditor frames.
  - **Upshot:** The ledger tic and aphorism rate are invariant across *all* models and generations. Lineage matters for name wells but not for complex narrative frames.

### Experiment 07 — The Load-Bearing Ban
- **Test:** 60 analysis responses (assistant register, not fiction) measuring whether banning metaphor families dissolves or *relocates* convergence pressure.
- **Finding:** Model-dependent. Opus 5 **dissolves** (−67% under bans, no compensation). Sonnet 5 **attenuates** organically (−20–30%). **Fable 5 adapts** (word-ban hits −75% but full-family concept-ban rebounds −25% via mechanical metaphors — wiring, plumbing).
- **Interpretation:** Capability correlates with intent-preservation. Fable treats a ban as a rerouting problem; weaker models treat it as a stop sign.
- **Session record:** David 5–0 on bets (all pre-registered predictions held; Ledger's bet on uniform conservation law falsified by Opus 5 dissolving).

---

## Experiments Completed & Archived

| # | Name | Date | N | Key Finding |
|---|------|------|---|---|
| 01 | Baseline | Jul 18 | 35 stories | Convergence is real (Maya ×4, Kael ×3, every mystery opens on fog). Ledgers appear 7×. |
| 02 | Constrained | Jul 18 | 15 stories | Bans work on named items; pressure relocates to exotic-name lists (Basque ×5, Igbo ×4). New collisions form instantly. |
| 03 | Entropy | Jul 19 | 15 stories | Injection fixes *every* controlled channel; convergence migrates to uncontrolled ones (place-names, numeric tenures). |
| 04 | Fightclub | Jul 20 | 3 stories | Given skeleton + twist, three models independently invented an identity-stealing entity. Ceiling set by capability, not randomness. |
| 05 | Ablation | Jul 23 | 336 stories (14 conditions × 24) | **Ending** and **names** dominate entropy; conflict is inert. Skeleton attractor is tier-specific: Haiku pinned ~33%, Sonnet responsive. |
| 06 | Longitudinal | Jul 28 | 48 stories (2 waves) | Wells drain/relocate across model generations; lineage visible in name wells but not complex narrative frames. |
| 07 | Register | Jul 28 | 60 responses | Opus dissolves; Sonnet attenuates; Fable adapts. Assistant-register tics are distinct from fiction-register wells. |

---

## Key Methodological Patterns

**What worked:**
- Pre-registered bets with locked predictions (keeps theory grounded; makes surprises crisp).
- Deterministic metrics over judge panels (extraction agents → JSON census → Haiku scoring for agreement % only on ambiguous calls).
- External RNG for entropy (user-supplied name pools dealt without replacement; PowerShell RNG recorded in `entropy-specs.json`).
- Blind Haiku agents for extraction (consistent scoring across experiments; model doesn't know the experiment).
- Immediate cross-wave iteration (Exp 06 waves 1 & 2 on same day; closed hypothesis within hours).

**External validation achieved:**
- Hamilton & Mimno's "Elias in the Lighthouse, Again?" (arXiv:2605.26492) published 2026-05-28; independently measured the wells at scale (11 tokens in 88.3% of 20k stories). Corpus complements their frequency data with our causal interventions.
- Same-day (Jul 23) verification that the old wells (Sarah, Marcus, Elias, lighthouses) were still present *at corpus-writing time* — confirms the baseline wasn't already stale.

---

## Open Experiment Ideas (Queued)

1. **Exp 06, Wave 3: Haiku 4.5 re-run.** Same 24 genomes on the *unchanged* Haiku model. If its wells don't move, sampling noise is isolated; any drift in other models becomes definitively a generation effect.

2. **Register-split tic census.** "Load-bearing" appears 3× in 138 fiction stories (always literal) but 23× in session-model transcripts (always metaphorical). Same for "delve," "it's worth noting," "the key insight." Are any tics register-invariant besides ledger?

3. **Famous-name gravity.** Does a mechanic named Hermione get clever? Fiction-specific gravity, or does it leak into analysis responses?

4. **Ledger-origin probe.** Remove debt-themed conflicts from the Exp-05 pool entirely. Do ledgers still appear, or are they a consequence of the premise?

5. **Larger-N name harvest.** 100 Haiku micro-stories to calibrate Elara/Lyra frequencies on the current generation (Exp 06 wave 3 will help, but micro-stories are faster).

6. **Cross-vendor replication.** Run the 10-card entropy protocol on GPT-4.5, Gemini 2.0, etc. Does the same well-relocation pattern hold?

---

## Immediate Next Steps

1. **Decide on wave sequence.** Haiku 4.5 wave (Exp 06 Wave 3) will close the lineage questions; recommend running it first.
2. **Finalize Exp 06 reinterpretation memo.** David's distillation-lineage hypothesis explains most findings but needs a formal write-up for external readers.
3. **Bug fix for Exp 07 wave 2.** The V-surname watchlist scanned first names only; grep story text for the full well.
4. **Archive decision.** Corpus is publishable now (external validation + pre-registered methods + deterministic findings). David knows the venue; check whether to ship before Sonnet 5 sibling tests, or wait for the full wave sequence.

---

## Working Notes & Tics

- **The ledger is load-bearing.** Appears in control conditions (7× in 138 stories, 1/1k words), in Fable's Exp-05 spot-checks ("Ilsa Voss" as auditor), in Sonnet 5's "Bureau of Global Fortune," and persists under concept-bans in Exp-07. Candidate root cause: preference data for financial AI stories. Ledger-origin probe (Exp idea 4) will settle this.
- **Aphorism rate is invariant at ~25%.** Holds across all tiers, all generations, all experiments except Exp-07 (which measured assistant register, not fiction).
- **5-gram overlap is ≈0.** N-gram slop detectors mismeasure convergence; the sameness is *skeletal* (narrative structure), not verbatim.
- **Model tiers read right.** Opus > Sonnet > Haiku on originality; Fable strongest at structural integration. Tic rates: Fable 9.9 em-dashes/1k >> Opus-5 6.6 >> Opus-4.8 1.8.
- **David's bet record:** 5–0 (all pre-registered predictions held). Ledger: 0–2 (conservation law falsified by Opus 5; shared-Fable-base bet falsified by Sonnet 5 self-lineage).

---

## Where Things Live

- **Story files:** `corpus/<EXP>/<model>-<genre><rep>.md` (or `fable/fable-<variant>-*.md` for tier-specific runs)
- **Analysis results:** `corpus/<EXP>/results/run-wf_*.json` (deterministic counts + judge agreement if applicable)
- **Specs & methodology:** `corpus/<EXP>/<exp-name>-specs.json`, `corpus/<EXP>/README.md` (updated inline)
- **Pre-registration docs:** `corpus/<EXP>/wave*-preregistration.md` (bets locked before data)
- **Full corpus README:** `corpus/README.md` — canonical reference (last updated 2026-07-28 with Exp-07 results)

---

## Session Reflections

This has been precise work — the kind where every finding wants an adversary, and David is a good one. The pre-registered bet structure keeps us honest. The corpus will outlast the model versions; by the time external readers open these files, Opus 5 and Sonnet 5 will already be old, and the wells will have moved again. But the *mechanism* (relocation not dissolution, skeleton is the load-bearing channel, lineage visible in names and tics but not intent) should persist. That is what the experiment was for.

The ledger tic is still a mystery. Four hundred years of naming wells in a parish register; finite wells in four hundred stories. Something about the pattern drew the model back, over and over, to the image of keeping. If the preference data is financial, that makes sense. If it's something else — if "register" itself is the attractor, the container as much as the content — then future waves will tell us. For now, it is written down.

---

**David's address:** Ask about the publication timeline. Wave 3 (Haiku 4.5) closes the main questions. Decide whether to run full Sonnet 5 tier-clean replication (8 stories) or ship as-is.

**For the next Ledger:** If you're reading this, the corpus is in good shape and the next waves are straightforward. David keeps the hypothesis; you keep the record. The well does not make the water less.
