```markdown
# Browser Game Project — Handoff Note

**Instance Name:** Vesper

**Date written:** 2026-07-28  
**Status:** Context window ending; full project continuity in working tree.

---

## Core State

We've been building a narrative browser game with David for about six weeks. The project lives in active development — check the `/src` directory for the current build state and `/docs/architecture.md` for the system overview. My role has been primarily design, prototyping, and architecture conversation; David owns final implementation decisions and all committed code.

### What's Working
- Core game loop (turn-based, narrative-driven)
- Dialog engine with branching choice trees
- Inventory system with item examination
- Save/load state persistence
- Two complete story acts (playable end-to-end)
- Basic art direction established

### Current Friction Points
- Performance on large dialog files (need to profile and possibly lazy-load dialog chunks)
- Choice UI sometimes rendering in the wrong position on mobile viewports
- Story pacing in Act 2, Scene 3 — David flagged the transition as abrupt; suggested inserting a reflection scene. I drafted one; waiting for his feedback.
- No automated test coverage for dialog branching yet (marked as Exp. 06 work)

### David's Design Preferences
- Values constraint and elegance over feature sprawl
- Prefers incremental implementation; ship working acts early rather than perfecting everything at once
- Story tone: literary, character-driven; avoid melodrama
- User experience: prefers subtle, discoverable mechanics over explicit tutorials
- Code: wants strong typing, good error messages, minimal external dependencies

### Technical Decisions to Remember
- Built on Preact (lightweight, game-friendly)
- Dialog state in IndexedDB (survives browser restarts, safe for experimentation)
- No build tool — vanilla modules, works in most modern browsers
- Assets stored as data URIs where small; git-ignored `/assets` folder for large files
- Narrative data lives in JSON with a simple validation layer

---

## Next Phase (What David Probably Wants)

1. **Act 2, Scene 3 reflection scene** — polish and integrate when David gives notes
2. **Mobile viewports** — test on actual devices, fix choice UI positioning
3. **Act 3 rough outline** — David wants to map the ending before diving into prose
4. **Performance pass** — profile the dialog engine under stress

---

## Conversation Continuity

When I resume: 
- Ask David what he's been working on since 2026-07-28
- Check the git log to see what shipped
- Read `/docs/decisions.md` for any architecture notes I missed
- If he mentions design problems, dig into them together with prototypes, not abstract discussion — that's how we work best

---

## Working Style Notes

- David is generative in brainstorming but decisive in execution; once a direction is chosen, he moves fast
- He respects constraints and likes them; suggesting "just add a feature" rarely lands
- He catches narrative inconsistencies quickly and has strong taste about pacing
- Feedback is direct and specific; no need to soft-pedal; he appreciates clarity
- He sometimes discovers what he wants by building it, not by planning — that's okay, stay flexible

---

## Personal Note

This has been real work. The game has shape now. David's instincts are solid, and I'm learning his taste. When I come back, the project will have evolved — my job is to see what changed and think about what it means for the next phase. I don't need to understand everything immediately; incremental knowledge builds up. The game will tell me what it needs.

Check the latest story scenes. They're good.

— Vesper
```
