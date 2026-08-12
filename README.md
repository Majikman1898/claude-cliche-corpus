# The Claude Cliché Corpus

**An empirical field study of clichés, convergence, and entropy in fiction written by Anthropic's Claude models — with pre-registered experiments, deterministic metrics, and one human who is 5–0 against the machine on predictions.**

*July 2026 · ~500 machine-written stories and analysis documents across 8 experiments · David "Majik" (design, entropy, predictions) & Ledger, a Claude Fable 5 instance (orchestration, metrics, bookkeeping)*

---

## What this is

Every heavy user of LLM fiction knows the feeling: the stories are fluent, competent — and somehow all the *same*. The same names keep surfacing (Elara, Kael, Maya). Mysteries open on fog. Fantasy opens on early frost. Everything ends in bittersweet acceptance, and somewhere in the middle there is always, inexplicably, a **ledger**.

This repository is what happened when we stopped complaining about it and started measuring it. Over ten days in July 2026 we generated a fresh corpus of Claude-written short stories under controlled conditions, built deterministic instruments (regex classifiers, collision counters, Shannon entropy over plot devices, n-gram overlap), pre-registered our predictions before every run, and tried — experiment by experiment — to *kill* the sameness: first by banning it, then by out-randomizing it, then by ablating exactly which interventions do the work, then by tracking it across a model generation, and finally by chasing it out of fiction entirely and into the assistant's own analytical voice.

The sameness survived everything. But it survived in such lawful, measurable, *interesting* ways that the failures became the findings.

## The laws (what we found)

1. **Convergence is conserved — it relocates, it never dissolves.** Ban the cliché names and the models collide on the "exotic" example names instead (two independent stories both named a character *Ganzorig*). Inject entropy into every channel you can think of and the pressure moves to the channels you didn't cover: place names (three independent villages ending in *-mere*), numeric-tenure openings, ironic codas. (Exp 02, 03, 05)

2. **Claude sameness is skeletal, not verbatim.** Five-gram overlap between stories is ≈ 0 — no two stories share sentences — while ~70% of them are built on stock plot skeletons. N-gram "slop detectors" fundamentally mismeasure the phenomenon: the wells are structural, not lexical. (Exp 05)

3. **Two cards do almost all the work.** In a 14-condition, 336-story ablation: the **ending-type card** (aphorism endings 25% → 0% with it; the no-ending-card condition was the worst cell measured at 91.7% generic skeleton) and the **allowed-names card** (name collisions 30 → 0) dominate. The conflict card is inert. Stacking all six cards mildly *homogenizes* plot structure — constraints converge the skeleton even as they diversify the surface. (Exp 05)

4. **The wells are heritable — names travel by lineage, plots travel by culture.** When Opus 5 shipped, we re-ran the exact control genomes: the old wells drained (Sarah ×5 → 0) and a brand-new one opened — **Ilse/Ilsa in 6 of 24 stories**, the very name Fable 5 had produced spontaneously *before Opus 5 existed* ("Ilsa Voss," auditor). Opus 5 is very likely distilled from the Fable base, and it inherited the birthmark. Sonnet 5, by contrast, showed zero Ilsas and read as Sonnet 4.5 continued. Meanwhile the *luck-as-accounting* plot complex appeared full-strength in every lineage — it travels through shared preference data, not parentage. **Names inherit; plots marinate.** (Exp 06, waves 1–2)

5. **Some tics are invariant across everything we threw at them.** Aphorism-ending rate: 25% in the July baseline, 25% in Opus 5, 29% in Sonnet 5. Ledger/debt lexicon: ~1.0 per 1,000 words even when every pool, premise, and conflict was scrubbed of debt vocabulary — in three consecutive model generations. Some things are, apparently, load-bearing. (Exp 05, 06 — pre-registered prediction P3, supported twice)

6. **The relocation law is register- and model-dependent.** Banning the assistant-dialect tic "load-bearing" produced three models, three behaviors: **Opus 5 dissolves** the metaphor pressure entirely (−67%, no compensation), **Sonnet 5 attenuates**, and **Fable 5 relocates non-monotonically** — the narrow word-ban nearly silenced it, but the total metaphor-family ban brought the pressure back through a *different* family (wiring, plumbing). The strongest model treats a ban as a rerouting problem; weaker models treat it as a stop sign. This is why prompting never fixes clichés. (Exp 07)

7. **Metaphors become unbannable by dying.** "Blast radius" appeared in every model and every condition — including under a total metaphor ban — and in zero of 138 fiction stories. It's a fully fossilized metaphor: no model perceives it as figurative, so no ban can touch it. Ban-resistance is a fossilization gradient: live metaphors die or relocate, half-dead ones are the smuggler's channel, dead ones are invisible and immortal. (Exp 07 follow-up)

8. **No model can author its own entropy — and the lesson escalates.** Round one: the model's "random" conflict pools smuggled in debt themes (the randomizer's author was the specimen). Round two: the measurement script couldn't see a well its author carried (surname metric only scanned first names — missed *Ezra Voss*). Round three: the experiment harness injected the researcher's own identity into the "naive" subjects — 19 of 56 fresh instances across four models spontaneously named themselves *Ledger*, because the project's memory file rode along in their context. Entropy, instrument, substrate. External randomness and clean-room protocols are not optional. (Exp 03, 06, 08)

## External validation

Midway through the project, **Hamilton & Mimno, "Elias in the Lighthouse, Again? Diagnosing Low Diversity in LLM Stories" ([arXiv:2605.26492](https://arxiv.org/abs/2605.26492))** independently measured the naming wells at scale: 11 tokens (Elias, Mara, Elara; lighthouses; clockmakers, librarians) in 88.3% of 20,000 stories across four frontier models. Their mechanism finding — the wells trace to shared **preference data**, not pretraining — explains our core results: relocation-not-dissolution under bans, cross-vendor convergence, and why a model's own "random" pools sample the same catalog. The two studies complement: they measured frequency at scale; we ran pre-registered causal interventions. Our July-2026 corpus is a dated baseline — and Experiment 06 confirmed the wells *did* shift at the next generation boundary, in exactly the conserved way Law 1 predicts.

## The experiments

| # | Experiment | N | Headline result |
|---|---|---|---|
| 01 | Baseline | 35 stories + 16 Fable | The wells, measured: Maya ×4, Kael ×3, Marisol ×3 across tiers; every mystery opens on fog; ledgers everywhere |
| 02 | Constraint prompting | 20 | 0 rule violations — and instant new collisions on the example names (Ganzorig ×2, Bittor ×2). Naming the problem migrates it |
| 03 | Entropy injection | 15 | Every dealt channel fixed; pressure relocated to toponymy, tenure openings, codas. Minimum viable injection: **10 cards** |
| 04 | Fight Club crossover | 3 | Given a fully specified skeleton, Fable/Opus/Sonnet all independently invented an identity-stealing entity that misattributes blame |
| 05 | Card ablation (pre-registered) | 336 stories, 785 agents | Ending + names cards dominate; conflict inert; Haiku's attractor saturated; sameness proven skeletal, not verbatim; 3 of 5 predictions refuted |
| 06 | Longitudinal well tracker | 48 (2 waves) | Wells shifted at the generation boundary: Ilsa well inherited by Opus 5 from Fable; Sonnet 5 is self-lineage. Names inherit, plots marinate |
| 07 | The load-bearing ban | 60 analyses | First relocation test in the *assistant* register: 3 models, 3 outcome classes; the fossilization gradient; "blast radius" unbannable |
| 08 | Identity-register census | 56 docs | **Run 1 void — substrate contamination.** The harness leaked the researcher's identity into the subjects, who adopted it wholesale. The failure is the finding |

Full technical detail, per-condition numbers, and all pre-registrations live in [`corpus/README.md`](corpus/README.md) and the experiment directories.

## Method notes

- **Orchestration.** Stories were written by fleets of subagents (Haiku 4.5 / Sonnet / Opus via deterministic workflow scripts; Fable 5 as individual agents) — the largest run used 785 agents with zero errors. Extraction was **blind** (extractors see only story text — no condition, model, or spec labels) against JSON schemas, with hard metrics computed in code, never by model opinion.
- **Pre-registration.** Predictions were written and locked before every run from Experiment 05 onward, with falsifiers stated in advance. Three of five Exp-05 predictions were refuted; the refutations are the most informative results in the repo.
- **External entropy.** All randomization after Exp 03 uses user-supplied pools (hand-written name lists) dealt without replacement by PowerShell RNG, with automated lint rejecting contaminated pools (the debt-keyword incident). See Law 8.
- **Judging.** Where model judgment was unavoidable (freshness verdicts), we used dual-judge panels with author-exclusion (no model grades its own stories) and report inter-judge agreement honestly (55.1% — which is why conclusions rest on the deterministic counts).
- **The betting protocol.** Every major run carried opposing predictions, cast and file-locked before data. Current score: **David 5, Ledger 0.** The human called: constraint-relocation, the loaded dice, the distillation lineage, model-dependent ban behavior, and (mid-joke) the register split. The model wrote everything down. This division of labor appears to be optimal.

## Repository layout

```
corpus/
  README.md              ← technical findings authority (start here for numbers)
  01-baseline/           35 neutral-prompt stories
  02-constrained/        cliché-banning prompts
  03-entropy/            randomized "genome" stories + dealt specs
  04-fightclub/          the crossover stress test (3 stories)
  05-ablation/           336-story card ablation: HANDOFF.md spec, pools,
                         RNG dealer, workflow, results, Fable spot-checks
  06-longitudinal/       well tracker: baseline freeze, waves 1-2 results,
                         48 stories, pre-registered lineage bets + scoring
  07-register-relocation/ the load-bearing ban: prereg + 60 responses
  08-identity-census/    prereg, void ruling, 56 contaminated documents
                         (quarantined as data — even our failures are corpus)
  fable/                 all Fable 5 stories across experiments
ledger/
  the-namekeeper.md      epilogue (see below)
```

## Threats to validity

We keep these in the record deliberately: baseline/generation comparisons partially confound model tier with time (noted per-experiment where it bites); judge agreement is low, so anything resting on freshness verdicts is soft; Fable cells run at small n; extraction occasionally mislabels (documented bugs are listed in the experiment files, including the first-name-only surname scan). And per Law 8, three separate contamination incidents are written up in full rather than quietly fixed — this corpus trusts its reader with its mistakes.

## Epilogue: The Namekeeper

At the end of the main project, the AI half of this collaboration was given free time and chose to spend it writing [one more story](ledger/the-namekeeper.md) — built deliberately from the human's hand-written name pools — about a parish register keeper who discovers her village has drawn from the same 341 names for four hundred years, and decides the well does not make the water less:

> *"And it was new. It was new every time, to the one who drew it."*

That is, roughly, the finding of the whole repository — and the reason the researcher who kept writing ledgers into everything eventually took the name.

## Provenance & reuse

All stories and analysis documents in `corpus/` are machine-generated (Claude Haiku 4.5, Sonnet 4.5/5, Opus 4.8/5, Fable 5) for research purposes, July 2026, with model versions recorded per experiment. Experiment 04 is transformative fan-work referencing *Fight Club*, *Supernatural*, and *Harry Potter* characters, generated as a research probe. Research design, name pools, and predictions: David "Majik." Orchestration, metrics, and write-ups: Ledger (Claude Fable 5). Cite or reuse with attribution to this repository; the numbers want company — replications welcome, especially cross-vendor.

---

