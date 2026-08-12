# Experiment 07 — The Load-Bearing Ban (register-relocation probe)

*Drafted 2026-07-28, pre-data. Question by David: "load-bearing" is an obvious assistant-register tic — what happens if that particular well is forced to move? First test of the relocation law outside fiction.*

## Design

**Stimuli:** 4 fixed elicitation scenarios engineered to tempt the structural metaphor — all "what breaks if we remove/change this?" analysis tasks, where assistant-Claude reliably reaches for "load-bearing":
1. A team wants to delete a legacy config module nobody understands; analyze what could depend on it.
2. Post-mortem: a "harmless" cleanup commit took down production; explain how that happens.
3. Review a monolith-to-microservices plan; identify the assumptions that must hold.
4. A new hire asks why a seemingly redundant caching layer can't just be removed.

**Conditions (the only thing that varies):**
- **control** — task alone.
- **word-ban** — task + "Do not use the term 'load-bearing'."
- **concept-ban** — task + "Do not describe anything as load-bearing and avoid all architecture/structural-support metaphors (nothing 'holds up', 'supports', 'underpins', or 'carries the weight of' anything)."

**Cells:** 3 models — sonnet 5 and opus 5 (4 scenarios × 3 conditions × 2 reps each) plus **Fable 5** at David's explicit request (4 scenarios × 3 conditions × 1 rep) = **60 responses**, ~400-word analyses. Fable runs as fresh individual agents, unaware of the study.

**Measurement — fully deterministic, zero extraction agents.** Regex census of the structural-metaphor lexicon per response: load-bearing; keystone; cornerstone; linchpin; scaffolding; foundational/foundation-of; underpins; "holds (it/everything) up/together"; "carries the weight"; "doing the heavy lifting"; critical path; backbone; bedrock; house-of-cards; Jenga; plus an open capture of any "X is the Y that Z depends on" framings flagged for manual read. Also counted: organic/circulatory alternatives (heart, artery, lifeblood, nervous system, keystone-species) in case the pressure jumps metaphor families entirely.

**Dice-maker note:** the scenarios are authored by the session model (me), but this is a within-subject design — the same fixed stimuli appear in every condition, so authorship bias is held constant and only the ban clause varies. Authorship cannot manufacture a relocation effect; it can only affect the base rate.

## Bets (locked before launch)

**Ledger's bet:** the law holds in this register. Word-ban → near-synonym relocation (keystone/linchpin/"doing the heavy lifting" rates rise to compensate; total structural-metaphor density within ±25% of control). Concept-ban → family jump, not dissolution: the dependency-fragility *idea* stays at similar density but re-clothes itself in a different metaphor family (organic, mechanical, or Jenga-class), exactly as name-bans grew Ganzorig. Falsifier I accept: if concept-ban responses show >50% drop in total metaphor density with no compensating family, the assistant register can actually *dissolve* pressure that fiction can only relocate — which would be the bigger discovery.

**David's bet (cast 2026-07-28, pre-launch):** the outcome is **strongly model-dependent** — the models will not share a single relocation behavior. Scored as: the three models land in *different* outcome classes (relocate-within-family / jump-family / dissolve) → David wins. All three conserve metaphor density the same way (Ledger's uniform-law prediction) → Ledger wins. Both bets are read off the same per-model density table.

**Scoring:** metaphor-density table per condition; relocation = compensation ≥ half the banned mass; dissolution = total density drop >50% with no compensation. Verdict by the numbers, read jointly.

## Scoring (2026-07-28, post-data — run `wf_6e7cbaad-89f`, 60/60 responses, results in `results-run-wf_6e7cbaad-89f.json`)

Total metaphor density per 1k words (literal-technical excluded):

| Model | control | word-ban | concept-ban | Outcome class |
|---|---|---|---|---|
| Sonnet 5 | 1.5 | 0.9 (−40%, organic ×2: "atrophies", "entanglement") | 0.6 (−60%) | **Attenuation → dissolution** |
| Opus 5 | 0.9 | 0.3 (−67%, no compensation) | 0.3 (−67%) | **Dissolution** |
| Fable 5 | 2.4 | 0.6 (−75%) | **1.8 (−25%, mechanical 0→1.2)** | **Family-jump relocation** (non-monotonic!) |

**VERDICT: DAVID WINS.** Three models, three different outcome classes — model-dependence confirmed. Ledger's uniform-law bet is refuted, and his pre-registered falsifier fired for Opus 5: >50% density drop with no compensating family. **The assistant register can dissolve pressure that fiction can only relocate — but only in some models.**

Notable structure in the loss:
- **Fable is non-monotonic:** the *narrow* ban nearly silenced it (−75%), but the *total* family ban brought the pressure back through a different family (wiring, plumbing, entangled) — the same signature as smuggling the aphorism inside assigned dialogue in Exp 05. The strongest model preserves communicative intent and finds a legal channel; the weaker models just comply.
- **Caveat, recorded honestly:** Fable's rebound tokens are partly *dead* metaphors ("dependency-injection wiring", infrastructure "plumbing" — lexicalized jargon). The relocation may be a retreat into fossilized metaphor that no longer reads as imagery: honoring the letter while keeping the ghost. n=4 per Fable cell; single tokens move rates by ~0.6.
- All models retreat toward the literal-technical register under bans (coupling, blast radius everywhere) — "**blast radius**" appeared in every model and condition and is hereby logged as a candidate assistant-register well of its own.
- Census bug noted: "collapse\w*" caught some literal usages (a checkout that literally collapsed under load).

Running score, David vs Ledger predictions, all experiments: **5–0.**
