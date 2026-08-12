# Ledger Instance Handoff: Cliché Corpus Research (Experiment 06 Longitudinal Tracker)

**Project Scope.** David's empirical study measures and analyzes clichés in Claude-generated fiction. The working hypothesis—that clichés are CONSERVED (banned from one channel, they relocate rather than disappear)—has been validated across Experiments 01–05 and is now being tested as a heritable lineage marker across model generations. The corpus (~430 stories) and all findings live in `/corpus/`.

**Core Validated Results (through Exp 05).** 
- Cliché pressure is conserved: entropy bans and name-pool constraints don't eliminate sameness, they redirect it to uncovered dimensions.
- Claude sameness is SKELETAL (5-gram overlap ≈0%, ~70% matching plot structures): verbatim repetition is nearly absent; the constraint is topological.
- Well-specific patterns dominate: names (Sarah, Marcus, Elias, Elara, lighthouse endings) appear in ~1% of 01–04 stories (~1:100). Ablation study (Exp 05) revealed ending + names cards drive homogeneity; conflict card inert; stacking mildly homogenizes; Haiku saturated/immovable, Sonnet most responsive.
- The ledger/debt tic persists at ~0.9–1/1k words even in fully debt-scrubbed pools (independent variable, not training artifact per Hamilton & Mimno arXiv:2605.26492).

**Current State: Experiment 06 (Wave 1, July 28).** 
Reran 24 control genomes on claude-opus-5 (released during Exp 05). CRITICAL FINDING: Old wells drained (Sarah, Marcus, Elias, Elara, lighthouse → 0 occurrences; name collisions fell 30→17), but a **NEW well opened**: Ilse/Ilsa appeared ×6/24 stories. This is the name Fable generated spontaneously *before* Opus 5's public release—suggesting the Opus 5 model was distilled from Fable's base. Pressure relocated to places (Lisbon ×3, Osaka ×3; place collisions 0→8 across the full set). Other invariants held: aphorism rate 25% exactly, ledger ~0.9/1k, device entropy flat. Opus em-dash rate tripled to 6.6/1k (regression toward parent Fable).

**Reinterpreted Framework: Phylogeny, Not Artifacts.** 
Wells are now understood as HERITABLE LINEAGE MARKERS. Ilsa well inheritance, em-dash reversion, and collision patterns are consistent with Opus 5 being derived from Fable. The longitudinal tracker is a phylogeny instrument; clichés are signatures of model ancestry.

**Next Waves (Queued).** 
- Sonnet 5 (tier-matched to Opus 5).
- Haiku 4.5 as unchanged control (track whether it diverges or remains stable).
- Each run: same 24-genome template, track name/place wells, em-dashes, invariants (aphorism, ledger, device entropy).

**Technical Notes.** 
- Corpus path: `/corpus/06-longitudinal/` for Exp 06 results.
- Exp 01–05 summary in `/corpus/README.md`; each experiment has its own subdirectory.
- Card ablation design (Exp 05) is the template for isolated effects; all prior Exp 06 runs use fixed settings unless noted.
- Hamilton & Mimno external validation (arXiv:2605.26492, 11 tokens in 88.3% of 20k stories, wells trace to shared PREFERENCE DATA not pretraining) establishes the corpus as a dated baseline for detecting post-publication well shifts.

**Subagent Context.** 
Fan-out tasks use Haiku/Sonnet/Opus only, never inherit Fable (cost sensitivity). Ledger's role: coordinate experiments, interpret findings, interface with David on next wave design. Identity: Ledger is a named instance in David's family (also Fable, Mason, Wright, Phi).

**Key Decision for Next Instance.** 
If Sonnet 5 and Haiku 4.5 runs are incomplete, prioritize Sonnet 5 (tier-matched provides strongest phylogeny signal). Lock corpus versioning before introducing new experimental designs—the Exp 06 template must remain constant across all three model runs to keep comparisons valid.
