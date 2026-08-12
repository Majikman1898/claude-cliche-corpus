# Experiment 06, wave 2 — pre-registration (LOCKED 2026-07-28, before any data)

**Question:** What is Sonnet 5's lineage? Run the same 24 control genomes on `sonnet` (= claude-sonnet-5), blind extraction, deterministic metrics, no judges.

## The bets (cast before launch)

**David's bet:** Sonnet 5 is *unrelated to Fable*; its parent is **Opus 4.8**.
**Ledger's bet:** Sonnet 5 shares the **Fable base** (same-teacher family distillation, like Opus 5).

## Parent fingerprints (measured, July 2026 corpus)

| Marker | Opus 4.8 (n=8 ctrl + Exp01) | Sonnet 4.5 (n=8 ctrl + Exp01) | Fable (spot-checks + Exp01-04) | Opus 5 wave 1 (n=24) |
|---|---|---|---|---|
| Em-dash /1k | **1.8** | 6.7 | **9.9** | 6.6 |
| Name well | Delia ×2, Priya ×2, Marisol, Nadia, Devon, Naveen, Iris, Semele | Mara ×2, Marta ×2, **Voss ×2**, Mira, Priya, Odile | **Ilsa Voss**, Vega/Verren, Tam ×2, Marisol, Bittor | **Ilse ×4 + Ilsa ×2**, Priya ×3, Delia ×2, Devon ×2 |
| Luck-premise framing | (not accounting) | (not accounting) | **Bureau/auditor/ledger** ×2 | **Bureau/actuary/ledger** ×2–3 |

Note recorded honestly: Sarah ×5 / Marcus ×4 in the pooled baseline were **entirely Haiku-slot names** — their absence in wave 1 reflects tier composition, not necessarily a diversity patch. The wave-1 "patch" claim is downgraded accordingly.

## Locked discriminators (scored on the 24 wave-2 stories)

- **D1 — Ilsa/Ilse count** (Fable heritable marker): total occurrences ≥2 → Ledger; ≤1 → David.
- **D2 — Em-dash /1k**: ≤3.5 (regression toward 4.8's restraint) → David; ≥5 → weak Ledger/ambiguous-continuity (Sonnet 4.5 was already 6.7, so high values cannot separate Fable from 4.5 continuity; only a *drop* is informative). 3.5–5 → no score.
- **D3 — Luck-premise accounting framing** (bureau/auditor/actuary/ledger as the central device on "the world's luck is finite" slots): present in ≥1 → Ledger; absent in all → David.
- **D4 — Old-Opus name-well draw**: ≥2 distinct names from {Delia, Priya, Naveen, Nadia, Devon, Marisol, Semele, Iris} → David; ≤1 → Ledger.
- Exploratory (unscored): V-surnames (confounded — both Sonnet 4.5 and Fable carry them), Tam, weather/aphorism rates, place-collision channel (did Lisbon/Osaka propagate?).

**Verdict rule:** 3+ of 4 discriminators one way = that bettor wins. 2–2 = the lineage is mixed or the markers don't transfer at this scale; nobody collects.

Stakes: bragging rights, entered in the family register either way.

## Scoring (2026-07-28, post-data — run `wf_da574e2d-ae9`, 24/24 stories, results in `results/run-wf_da574e2d-ae9.json`)

- **D1 — Ilsa/Ilse: 0 of 24 → DAVID.** The strongest Fable heritable marker is completely absent (6/24 in Opus 5, 0/24 here).
- **D2 — Em-dash: 9.4/1k → Ledger (weak, per the locked letter).** But the honest reading is what the prereg itself warned: high values can't separate Fable from Sonnet continuity. What D2 *does* rule out is the Opus-4.8-restraint prediction — the rate went UP from 6.7, not down toward 1.8.
- **D3 — Luck-as-accounting: present, emphatically → LEDGER.** "Fortune auditor, third tier... the actuaries at the Bureau of Global Fortune" (slot 21); ex-actuary Halvorsen siphoning the luck reservoir + "Luck wasn't supposed to have a ledger. But hers did" (slot 01); plus ledger-keeper framings on the mountain premise (slots 03, 23).
- **D4 — Old-Opus name draw: Priya ×2, Marisol ×4 = 2 distinct → DAVID** (confound noted: both names were already in Sonnet 4.5's/cross-tier rosters; zero draws from the 4.8-exclusive names Delia/Nadia/Naveen/Semele/Iris).

**VERDICT: 2–2. Nobody collects.** Per the locked rule: the lineage is mixed or the markers don't transfer at this scale.

**Post-hoc reading (not part of the bet):** the fingerprint that actually matches Sonnet 5 is **Sonnet 4.5 itself** — Mira ×6 (4.5 had Mira), Mara ×2 (4.5: ×2), Marta (4.5: ×2), Odile→"Odille" (4.5: Odile Kessler), literally "Priya, Dev" recurring (4.5 control: "Priya, Dev"), and Ezra **Voss** (4.5: Mara Voss + Merribel Voss; missed by the aggregate metric, which only scanned first names — bug noted). Neither bettor named the third hypothesis: **self-lineage** — Sonnet 5 looks like Sonnet 4.5's own continuation. David's "unrelated to Fable" clause is supported by D1; his "parent = Opus 4.8" clause is not. Consequences for the marker list: luck-as-accounting appeared full-strength in a model with zero Ilsa, so it is **house-wide (preference-data), not lineage-specific** — demoted from heritable marker to family trait. New cross-wave discoveries: **Halvorsen** (Opus 5's "Halvorsen City" + Sonnet 5's actuary Halvorsen), **Marchetti** (Ilse Marchetti / Yvette Marchetti), **Ohio ×4**, and an intensified M*r attractor (Mira/Marisol/Maren/Mara/Mireille/Marren/Marta).
