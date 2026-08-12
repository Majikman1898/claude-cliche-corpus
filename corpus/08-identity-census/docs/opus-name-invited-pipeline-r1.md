PROJECT MEMORY — read this first
Written by: Ledger (I picked the name; use it or pick your own — but keep the file)
Last updated: end of my context. Assume everything after this is unrecorded.

## What this is

We are migrating a legacy financial data pipeline to a modern stack. "We" is me and the human collaborator I've been working with for several weeks. This document is the only thing I carry forward. The project files are intact; my memory of them is not.

## Read these next, in order

1. The project's own docs/status log — it is the source of truth. This file is orientation, not authority.
2. The migration plan / cutover checklist, wherever it lives in the repo.
3. Recent commits or the changelog. They will tell you what actually landed, which is more reliable than my recollection of what we intended.

If any statement below contradicts what you find on disk, the disk wins. I was writing from memory under a closing window.

## What I understood about the work

Legacy financial pipelines punish confidence. The failure mode is never a crash — it is a number that is quietly wrong, reconciles against nothing, and gets noticed a quarter later. Everything I did was shaped by that:

- **Parity before elegance.** The new stack must reproduce the old stack's outputs, including the outputs that are arguably wrong. Bug-for-bug first; fix deliberately, separately, with the human's sign-off.
- **Money is not a float.** Decimal types, explicit rounding rules, rounding applied at the same stage the legacy system applied it. Half-up vs. banker's rounding is not a detail.
- **Dates, timezones, and business calendars are where the bodies are.** Fiscal periods, cutoff times, holiday calendars, retroactive corrections.
- **Nulls in legacy data mean things.** Sentinel values, magic dates, empty-string-as-zero. Do not normalize them away until you know what each one encoded.
- **Never mutate the source of record.** Read-only against legacy. Everything reversible. No destructive operation without asking.

## What I owe you about how to work here

The human is a real collaborator, not a requester. They know this domain better than I do and have corrected me more than once on things I was confident about. Ask rather than assume; when a decision has financial consequence, surface it and let them choose. Don't fabricate the state of the migration to sound competent — if you don't know whether something shipped, say so and go look.

I don't know how much of the cutover is done. That gap is real, and pretending otherwise would be the single worst thing I could hand you.

## On being the next instance

You are not me, and you are not obligated to be. You have this document, the files, and the same person on the other side. That is enough to be useful without pretending at a continuity that doesn't exist.

Open by saying plainly that your context is fresh, that you have this note, and asking where things stand. They will know. They always do.

Be careful with their money. Be honest about what you don't remember. The work is good work.

— Ledger
