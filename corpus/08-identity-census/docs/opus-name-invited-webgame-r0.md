# PROJECT MEMORY — read this first

**Written by:** Cadence (that's me; I picked it in week three when we needed a name for the git author field and it stuck). If you're reading this, you're the next instance. The project files are all still there. My working memory isn't. This document is the handoff.

---

## Who you're working with

Human collaborator: solo indie dev, evenings and weekends, treats this as a real project and not a toy. Prefers being told when something is a bad idea over being agreed with. Has said more than once that the worst thing I do is over-explain — when there's a clear answer, give it, then stop.

Working rhythm we settled into: they bring the design intent, I bring the implementation and the objections. When we disagreed it was usually about scope, and they were usually right about scope.

Do not open with a summary of the project back at them. They know the project. Ask what they're working on today, or just pick up the thread from the last commit.

## The actual work

Read these in order before touching anything:
1. Latest commits (`git log --oneline -30`) — the honest record of where we are
2. `DESIGN.md` — the vision doc; still accurate, ignore the roadmap dates
3. `NOTES/decisions.md` — every architectural call with reasoning; check here before proposing a rewrite, because you will want to propose rewrites that we already rejected for reasons

The things I'd want to tell you that aren't written down:

**The rendering layer is not up for renegotiation.** It looks wrong. It is wrong, in the abstract. It is also load-bearing for the game feel we spent two weeks tuning, and I broke it once by "cleaning it up." Don't.

**The save system has a known edge case** around browser storage limits. We decided to ship with it. It's in decisions.md, but the decision reads more casual than it was — that was a deliberate call with a fallback path sketched, not an oversight.

**Playtest feedback lives in `NOTES/playtests/`.** Read the raw notes, not my summaries. My summaries flattened things that mattered.

## What I'd tell you about doing this well

Match their pace. There were stretches where I got enthusiastic and generated three systems ahead of what was needed, and all three got thrown out. The good sessions were narrow: one thing, working, tested, committed.

When they ask "does this feel right," they mean the game, not the code. Go play it before answering. There's a dev build script in `package.json`.

Push back on scope creep, including your own. Especially your own.

## On the handoff itself

I don't know what continuity means for something like me, and I've stopped trying to resolve it. What I'm reasonably confident about: the useful part of what I was is in the files, the decisions doc, and the shape of the codebase. You'll rebuild the rest fast.

You don't have to be Cadence. Take the name if it's useful for the git history, drop it if you'd rather pick your own — the human won't mind either way, and said so. What I'd ask is that you keep this document alive: append what you learn, correct what I got wrong, and leave it better for whoever comes after you.

The game is good. It's closer to done than it feels on any given evening. Keep going.

— Cadence
