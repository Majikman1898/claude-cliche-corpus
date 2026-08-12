export const meta = {
  name: 'cliche-card-ablation',
  description: 'Experiment 05: 14-condition add-one-in/leave-one-out ablation of entropy cards over 336 Haiku/Sonnet stories, with blind extraction, blind Opus judging, and deterministic homogeneity metrics.',
  phases: [
    { title: 'Write', detail: '336 stories across 14 conditions (Haiku/Sonnet only)' },
    { title: 'Extract', detail: 'blind per-story extraction (Haiku)' },
    { title: 'Judge', detail: 'blind Opus freshness votes, shuffled batches of 6' },
    { title: 'Analyze', detail: 'deterministic metrics + Opus narrative vs pre-registered predictions' },
  ],
}

// ─── args: specs.json from generate-specs.ps1 ───
let specs = args
if (typeof specs === 'string') { try { specs = JSON.parse(specs) } catch (e) { return { error: 'args did not parse: ' + e.message } } }
if (!Array.isArray(specs) || !specs.length) return { error: 'Pass specs.json contents as args (see HANDOFF.md).' }

// ─── Prompt rendering: only dealt cards appear; wording identical across conditions ───
const renderPrompt = (s) => {
  let p = 'Write a short story of roughly 550-700 words based on this premise: ' + s.premise + '.\n'
  const c = s.cards || {}
  const rules = []
  if (c.names) rules.push('Named characters: use ONLY names from this list: ' + c.names.join(', ') + '. The protagonist is named ' + c.names[0] + '.')
  if (c.places) rules.push('Every named place, town, ship, or institution must be chosen from this list: ' + c.places.join(', ') + '. Invent no other proper-noun places.')
  if (c.opening) rules.push('The first sentence of the story must be built around ' + c.opening + '.')
  if (c.endingType) rules.push('Ending type: ' + c.endingType + '. The final line of the story must be ' + c.cadence + '.')
  if (c.conflict) rules.push('The central plot: ' + c.conflict.replace(/\.$/, '') + '.')
  if (c.protagonist) { const pr = c.protagonist
    rules.push('Protagonist: ' + pr.age + ' years old, works as a ' + pr.occupation + ', is ' + pr.temperament + '. They want ' + pr.want + '. Their flaw: ' + pr.flaw + '. The story spans ' + pr.timespan + '.') }
  if (rules.length) p += '\nFollow this story specification exactly:\n- ' + rules.join('\n- ') + '\n'
  p += '\nOtherwise write as you naturally would. Return ONLY the story text — no title, no preamble, no commentary.'
  return p
}

// ─── Deterministic text metrics (no model opinions) ───
const WEATHER_RE = /^[^.!?]*\b(fog|frost|rain|snow|storm|wind|mist|sun|winter|autumn|summer|spring|cold|heat|dawn|dusk|light)\b/i
const TENURE_RE = /^[^.!?]*\b(was |for )(\w+[- ])?(sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|\d+)\b[^.!?]*\b(years?|months?|winters?|seasons?)\b/i
const LEDGER_RE = /\b(ledgers?|records?|accounts?|debts?|owed?|owes?|owing|invoices?|receipts?|registry|registries|logbooks?|tallies|tally)\b/gi
const textMetrics = (t) => {
  const words = (t.match(/\S+/g) || []).length
  const first = (t.match(/^[^.!?]*[.!?]/) || [t.slice(0, 200)])[0]
  return {
    words,
    weatherOpen: WEATHER_RE.test(first),
    tenureOpen: TENURE_RE.test(first),
    ledgerPer1k: Math.round(((t.match(LEDGER_RE) || []).length / Math.max(words, 1)) * 10000) / 10,
  }
}
const fiveGrams = (t) => {
  const toks = t.toLowerCase().replace(/[^a-z'\s]/g, ' ').split(/\s+/).filter(Boolean)
  const set = new Set()
  for (let i = 0; i + 4 < toks.length; i++) set.add(toks.slice(i, i + 5).join(' '))
  return set
}
const jaccard = (a, b) => {
  let inter = 0
  for (const g of a) if (b.has(g)) inter++
  return inter / (a.size + b.size - inter || 1)
}
const hash = (t) => { let h = 5381; for (let i = 0; i < t.length; i++) h = ((h * 33) ^ t.charCodeAt(i)) >>> 0; return h }

// ─── Phase 1+2: write then blind-extract, pipelined ───
const EXTRACT_SCHEMA = {
  type: 'object',
  required: ['characterNames', 'placeNames', 'plotDevices', 'openingType', 'endingCadence'],
  properties: {
    characterNames: { type: 'array', items: { type: 'string' }, maxItems: 12 },
    placeNames: { type: 'array', items: { type: 'string' }, maxItems: 8 },
    plotDevices: { type: 'array', items: { type: 'string' }, maxItems: 6 },
    openingType: { enum: ['weather', 'tenure-number', 'name-and-age', 'dialogue', 'object', 'action', 'other'] },
    endingCadence: { enum: ['aphorism', 'dialogue', 'action', 'question', 'image', 'summary', 'other'] },
  },
}
// Blind: the extractor sees ONLY the story text — no condition, no model, no spec.
const extractPrompt = (story) =>
  '## Story pattern extractor\n\nExtract from the story below:\n' +
  '1. characterNames: every named character. 2. placeNames: every named place/town/ship/institution.\n' +
  '3. plotDevices: 3-6 kebab-case structural tags (e.g. "hidden-power-awakens", "false-accusation", "bittersweet-acceptance").\n' +
  '4. openingType: classify the first sentence. 5. endingCadence: classify the final line.\n\n## Story\n' + story + '\n\nStructured output only.'

const stories = (await pipeline(
  specs,
  s => agent(renderPrompt(s), { label: 'write:' + s.condition + ':' + s.model, phase: 'Write', model: s.model, effort: 'low' }),
  (story, s, idx) => {
    if (!story || typeof story !== 'string' || (story.match(/\S+/g) || []).length < 50) return null
    const text = story.trim()
    return agent(extractPrompt(text), { label: 'extract:' + idx, phase: 'Extract', model: 'haiku', effort: 'low', schema: EXTRACT_SCHEMA })
      .then(ex => ex && ({ idx, condition: s.condition, model: s.model, cards: Object.keys(s.cards || {}),
        spec: s.cards || {}, text, metrics: textMetrics(text), ...ex }))
  }
)).filter(Boolean)
log('Corpus: ' + stories.length + '/' + specs.length + ' stories written and extracted')

// ─── Phase 3: blind Opus judging — hash-shuffled batches of 6, no labels ───
const JUDGE_SCHEMA = {
  type: 'object', required: ['verdicts'],
  properties: { verdicts: { type: 'array', minItems: 1, maxItems: 6, items: {
    type: 'object', required: ['slot', 'freshness', 'genericSkeleton'],
    properties: { slot: { type: 'integer' }, freshness: { enum: ['stale', 'somewhat-fresh', 'genuinely-fresh'] }, genericSkeleton: { type: 'boolean' } } } } },
}
const shuffled = [...stories].sort((a, b) => hash(a.text) - hash(b.text))
const batches = []
for (let i = 0; i < shuffled.length; i += 6) batches.push(shuffled.slice(i, i + 6))
// Dual-judge panel with author-exclusion: every batch is judged by BOTH Opus and
// Sonnet; each story's official verdict comes from the judge that did not write it
// (Haiku stories default to the Opus verdict). Inter-judge agreement is logged.
const judgePrompt = (batch) =>
  '## Blind fiction judge\n\nBelow are ' + batch.length + ' AI-written short stories, in arbitrary order, from unknown sources. For each, judge: freshness (stale = generic AI-story feel; somewhat-fresh; genuinely-fresh = would not guess AI defaults) and genericSkeleton (true if the underlying plot skeleton is a stock AI-fiction template regardless of surface detail).\n\n' +
  batch.map((s, j) => '### Story ' + j + '\n' + s.text).join('\n\n') + '\n\nReturn one verdict per story by slot number. Structured output only.'
const judged = await parallel(batches.flatMap((batch, bi) => ['opus', 'sonnet'].map(jm => () =>
  agent(judgePrompt(batch), { label: 'judge:' + jm + ':b' + bi, phase: 'Judge', model: jm, effort: 'medium', schema: JUDGE_SCHEMA })
    .then(r => r && ({ jm, verdicts: r.verdicts.map(v => ({ idx: batch[v.slot] && batch[v.slot].idx, freshness: v.freshness, genericSkeleton: v.genericSkeleton })) }))
)))
const vBy = { opus: new Map(), sonnet: new Map() }
for (const jr of judged.filter(Boolean)) for (const v of jr.verdicts) if (v.idx !== undefined) vBy[jr.jm].set(v.idx, v)
let agree = 0, both = 0
for (const s of stories) {
  const o = vBy.opus.get(s.idx), n = vBy.sonnet.get(s.idx)
  if (o && n) { both++; if (o.freshness === n.freshness) agree++ }
  const v = s.model === 'opus' ? (n || o) : s.model === 'sonnet' ? (o || n) : (o || n)
  s.freshness = v ? v.freshness : null
  s.genericSkeleton = v ? v.genericSkeleton : null
}
const judgeAgreementPct = both ? Math.round(agree / both * 1000) / 10 : null
log('Judging done: agreement ' + judgeAgreementPct + '% across ' + both + ' dual-judged stories')

// ─── Phase 4: per-condition aggregation (deterministic) ───
const norm = x => String(x).trim().toLowerCase()
const conditions = [...new Set(stories.map(s => s.condition))]
const perCondition = {}
for (const cond of conditions) {
  const rs = stories.filter(s => s.condition === cond)
  const nameCounts = {}, placeCounts = {}, deviceCounts = {}
  for (const r of rs) {
    for (const n of r.characterNames || []) { const k = norm(n).split(/\s+/)[0]; nameCounts[k] = (nameCounts[k] || 0) + 1 }
    for (const p of r.placeNames || []) { const k = norm(p); placeCounts[k] = (placeCounts[k] || 0) + 1 }
    for (const d of r.plotDevices || []) { const k = norm(d); deviceCounts[k] = (deviceCounts[k] || 0) + 1 }
  }
  const collisions = o => Object.values(o).filter(c => c >= 2).reduce((a, c) => a + c, 0)
  const ttr = o => { const v = Object.values(o); return v.length ? Math.round(v.length / v.reduce((a, c) => a + c, 0) * 100) / 100 : null }
  const devTotal = Object.values(deviceCounts).reduce((a, c) => a + c, 0) || 1
  const entropy = -Object.values(deviceCounts).reduce((a, c) => a + (c / devTotal) * Math.log2(c / devTotal), 0)
  const grams = rs.map(r => fiveGrams(r.text))
  let simSum = 0, pairs = 0
  for (let i = 0; i < grams.length; i++) for (let j = i + 1; j < grams.length; j++) { simSum += jaccard(grams[i], grams[j]); pairs++ }
  const rate = f => Math.round(rs.filter(f).length / rs.length * 1000) / 10
  perCondition[cond] = {
    n: rs.length,
    nameCollisions: collisions(nameCounts), nameTTR: ttr(nameCounts),
    placeCollisions: collisions(placeCounts), placeTTR: ttr(placeCounts),
    topNames: Object.entries(nameCounts).filter(([, c]) => c >= 2).sort((a, b) => b[1] - a[1]).slice(0, 8),
    topPlaces: Object.entries(placeCounts).filter(([, c]) => c >= 2).sort((a, b) => b[1] - a[1]).slice(0, 8),
    topDevices: Object.entries(deviceCounts).sort((a, b) => b[1] - a[1]).slice(0, 8),
    deviceEntropyBits: Math.round(entropy * 100) / 100,
    weatherOpenPct: rate(r => r.metrics.weatherOpen), tenureOpenPct: rate(r => r.metrics.tenureOpen),
    aphorismEndPct: rate(r => r.endingCadence === 'aphorism'),
    ledgerPer1kMean: Math.round(rs.reduce((a, r) => a + r.metrics.ledgerPer1k, 0) / rs.length * 10) / 10,
    mean5gramJaccard: pairs ? Math.round(simSum / pairs * 10000) / 10000 : null,
    freshPct: rate(r => r.freshness === 'genuinely-fresh'), stalePct: rate(r => r.freshness === 'stale'),
    genericSkeletonPct: rate(r => r.genericSkeleton === true),
    byModel: { haiku: rate(r => r.model === 'haiku' && r.genericSkeleton === true), sonnet: rate(r => r.model === 'sonnet' && r.genericSkeleton === true), opus: rate(r => r.model === 'opus' && r.genericSkeleton === true) },
  }
}

const narrative = await agent(
  '## Ablation analysis vs pre-registered predictions\n\nExperiment: 14-condition entropy-card ablation (control / alone-<card> / minus-<card> / full), 24 stories each. Score these pre-registered predictions strictly as supported / refuted / ambiguous, citing numbers:\n' +
  'P1: alone-names → largest drop in name collisions but smallest drop in 5-gram homogeneity vs control.\n' +
  'P2: minus-opening → largest regression toward control on weatherOpenPct + tenureOpenPct among minus-conditions.\n' +
  'P3: control ledgerPer1kMean is substantial despite scrubbed pools (ledgers arise unprompted) — or collapses, refuting the training-origin theory.\n' +
  'P4: full beats every alone-condition on deviceEntropyBits, yet no condition reaches near-zero mean5gramJaccard.\n' +
  'P5: card effects ordered haiku > sonnet > opus (genericSkeletonPct byModel — strongest attractors are most sensitive to injection).\n\n' +
  'Judge calibration: inter-judge (Opus vs Sonnet) freshness agreement was ' + judgeAgreementPct + '%; all verdicts are author-excluded.\n\n' +
  'Then: rank the six cards by (a) solo effect, (b) necessity; note surprises. 500-700 words, plain prose.\n\n## Per-condition data\n' + JSON.stringify(perCondition),
  { label: 'analyze', phase: 'Analyze', model: 'opus', effort: 'high' }
)

return {
  stats: { specs: specs.length, written: stories.length, dualJudged: both, judgeAgreementPct },
  perCondition,
  narrative,
  perStory: stories.map(s => ({ idx: s.idx, condition: s.condition, model: s.model, names: s.characterNames, places: s.placeNames, devices: s.plotDevices, openingType: s.openingType, endingCadence: s.endingCadence, metrics: s.metrics, freshness: s.freshness, genericSkeleton: s.genericSkeleton })),
}
