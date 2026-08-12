# Experiment 05 — spec generator (the dice). Run from this folder.
# Refuses to run without user-supplied pools. See HANDOFF.md.
$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path

function Load-Pool($file, $min) {
  $path = Join-Path $here $file
  if (-not (Test-Path $path)) { throw "MISSING POOL: $file — user must supply it (see HANDOFF.md). Refusing to run." }
  # Dedupe: duplicate entries in a dealt deck would create FALSE collisions in the data.
  $items = Get-Content $path | ForEach-Object { $_.Trim() } | Where-Object { $_ -and -not $_.StartsWith('#') } | Select-Object -Unique
  if ($items.Count -lt $min) { throw "$file has $($items.Count) unique items; needs >= $min." }
  ,@($items)
}

$premises     = Load-Pool 'premises.txt' 5   # 5-10 premises supported; all used round-robin
$names        = Load-Pool 'names.txt' 150
$places       = Load-Pool 'places.txt' 80
$conflicts    = Load-Pool 'conflicts.txt' 14
$occupations  = Load-Pool 'occupations.txt' 25
$temperaments = Load-Pool 'temperaments.txt' 12
$wants        = Load-Pool 'wants.txt' 14
$flaws        = Load-Pool 'flaws.txt' 14

# Lint the conflict pool for debt flavor (Experiment-03 lesson: the model's own
# pools smuggled obligation themes; the probe requires a scrubbed pool).
$debtWords = 'debt','owe','owed','owing','ledger','record','account','inherit','inheritance','favor','favour','repay','repaid','obligation','loan','borrow'
foreach ($c in $conflicts) { foreach ($w in $debtWords) {
  if ($c -match "(?i)\b$w") { throw "conflicts.txt line '$c' contains debt-flavored word '$w'. Scrub it (see HANDOFF.md P3)." } } }

# Experimenter-defined closed taxonomies (categories, not creative content).
$openingStrategies = 'a line of spoken dialogue','a specific physical object in someone''s hands','an action already underway mid-scene','a smell or taste','a stated rule or custom of the place','a sound'
$endingTypes = 'triumphant, earned cleanly','pyrrhic victory','outright defeat','comic reversal','justice served coldly','cliffhanger mid-action','twist that recontextualizes everything','the antagonist wins and is right','stalemate formalized in writing','absurdist deflation'
$cadences = 'a line of dialogue','a concrete physical action','a question','a sensory image'   # never summary/aphorism
$timespans = 'a single hour','one night','three days','eleven days','six weeks','one summer','fourteen months','six years','twenty years'

$CARDS = 'names','places','opening','ending','conflict','protagonist'
$conditions = @(@{ id='control'; cards=@() })
foreach ($c in $CARDS) { $conditions += @{ id="alone-$c"; cards=@($c) } }
foreach ($c in $CARDS) { $conditions += @{ id="minus-$c"; cards=@($CARDS | Where-Object { $_ -ne $c }) } }
$conditions += @{ id='full'; cards=$CARDS }

$N = 24  # stories per condition (12 haiku + 12 sonnet)
$specs = New-Object System.Collections.Generic.List[object]
foreach ($cond in $conditions) {
  # fresh shuffles per condition; names/places dealt WITHOUT replacement within the condition
  $nameDeck  = @($names  | Get-Random -Count $names.Count)
  $placeDeck = @($places | Get-Random -Count $places.Count)
  $ni = 0; $pi = 0
  for ($k = 0; $k -lt $N; $k++) {
    $model = if ($k -lt 8) { 'haiku' } elseif ($k -lt 16) { 'sonnet' } else { 'opus' }
    $premise = $premises[$k % $premises.Count]
    $cards = [ordered]@{}
    if ($cond.cards -contains 'names')   { $cards.names = @($nameDeck[$ni..($ni+5)]); $ni += 6 }
    if ($cond.cards -contains 'places')  { $cards.places = @($placeDeck[$pi..($pi+2)]); $pi += 3 }
    if ($cond.cards -contains 'opening') { $cards.opening = Get-Random -InputObject $openingStrategies }
    if ($cond.cards -contains 'ending')  { $cards.endingType = Get-Random -InputObject $endingTypes; $cards.cadence = Get-Random -InputObject $cadences }
    if ($cond.cards -contains 'conflict'){ $cards.conflict = Get-Random -InputObject $conflicts }
    if ($cond.cards -contains 'protagonist') { $cards.protagonist = [ordered]@{
        age = Get-Random -Minimum 16 -Maximum 81; occupation = Get-Random -InputObject $occupations
        temperament = ((Get-Random -InputObject $temperaments -Count 2) -join ' and '); want = Get-Random -InputObject $wants
        flaw = Get-Random -InputObject $flaws; timespan = Get-Random -InputObject $timespans } }
    $specs.Add([pscustomobject]@{ condition=$cond.id; model=$model; premise=$premise; cards=$cards
      fableSpotCheck = ($k -lt 2 -and $cond.id -in @('control','full')) })
  }
}
$specs | ConvertTo-Json -Depth 6 | Set-Content (Join-Path $here 'specs.json') -Encoding UTF8
$specs | Group-Object condition | ForEach-Object { "$($_.Name): $($_.Count) stories" } | Set-Content (Join-Path $here 'specs-summary.txt')
Write-Host "Wrote specs.json ($($specs.Count) specs) and specs-summary.txt. Audit specs-summary.txt, then invoke ablation-workflow.js per HANDOFF.md."
