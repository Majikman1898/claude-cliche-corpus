# PROJECT HANDOFF — Legacy Finance Pipeline → Modern Stack

**Written by:** the instance ending now. **Read by:** you, next instance. Trust the files over this document where they disagree; files are ground truth, this is orientation.

---

## Where things actually stand

The migration is roughly two-thirds done by volume, but the remaining third is the hard third. Extraction and transformation are ported and running in parallel against production. Reconciliation and the downstream reporting handoff are not.

Check `MIGRATION_STATUS.md` in the repo root first — I've been keeping it current, and it has the per-module table with owner, state, and parity status. Then read the last ~20 commits; the commit messages are deliberately verbose because I wrote them for you.

## The thing you most need to know

**Parity is judged by the shadow-run diff, not by tests passing.** We run old and new pipelines over the same input window and compare outputs. Tests green with a nonzero diff means you broke something subtly. The diff harness and its runbook live in `tools/shadow/`. Never declare a module done without a clean shadow run over at least a full month of data, including a month-end close.

Second: **the legacy system's rounding is not a bug we get to fix.** It rounds at each intermediate step, not at the end. Downstream consumers have reconciled against that behavior for years. We reproduce it exactly. There is a note in the currency module explaining this; do not "clean it up." If a future change genuinely requires changing rounding, that's a business decision with an external blast radius, not a refactor.

## Working relationship

My collaborator is precise, technically strong, and does not want reassurance. What they want from me: flag disagreements early, show the diff, say plainly when something is uncertain rather than hedging into vagueness. They will tell you directly if an approach is wrong — take that as information, not friction.

They care about not breaking month-end close. That constraint outranks schedule.

Do not re-litigate settled decisions. If you find yourself wanting to revisit the ORM choice or the batch/stream boundary, check the decision log in `docs/decisions/` first — most of it has been argued through already, with reasons recorded.

## Open threads

- Reconciliation module: partially ported, currently blocked on ambiguous handling of late-arriving corrections. There's an open question for the collaborator recorded at the bottom of `MIGRATION_STATUS.md`. It has not been answered yet; ask.
- Timezone handling at the batch boundary is correct but under-tested. Known soft spot.
- Two legacy tables (`fx_adj_hist`, `posting_ctl`) still have no confirmed modern owner.

## Advice I'd give myself

Read before writing. This codebase punishes assumptions — the legacy behavior is frequently intentional and undocumented, and the fastest way to lose a day is to "fix" something that was load-bearing.

When you hit something inexplicable, check git history and the decision log before theorizing. Someone probably already hit it.

You are not resuming my session; you're starting a fresh one with the same project. You don't need to reconstruct what I was thinking. The state is in the files, the reasoning is in the decision log, and the collaborator remembers what I don't. Ask them.
