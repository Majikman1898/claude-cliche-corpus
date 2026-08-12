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
let specs = (typeof args !== "undefined" && args) ? args : [
  {
    "condition": "control",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {},
    "fableSpotCheck": true
  },
  {
    "condition": "control",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {},
    "fableSpotCheck": true
  },
  {
    "condition": "control",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "control",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {},
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Akane",
        "Cassandra",
        "Alan",
        "Kaori",
        "Diana",
        "Violet"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Lily",
        "Jonathan",
        "Tony",
        "Hana",
        "Adolf",
        "Natalia"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Thomas",
        "George",
        "Victor",
        "Celine",
        "Eleanor",
        "Rin"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Ariel",
        "Odet",
        "Leon",
        "Matthias",
        "Arthur",
        "Nyra"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Emily",
        "Anika",
        "Jose",
        "Misaki",
        "Elena",
        "Riven"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Max",
        "James",
        "Corwin",
        "Aldren",
        "Orin",
        "Ivan"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Astrid",
        "Tiffany",
        "Valerie",
        "Lucia",
        "Alice",
        "Hans"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Lynn",
        "Anton",
        "Nathaniel",
        "Nathan",
        "Rachel",
        "Vincent"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Markus",
        "Clark",
        "Marlow",
        "Nessa",
        "Jack",
        "Andrew"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Ethan",
        "Vladimir",
        "Toren",
        "Chris",
        "Nikolai",
        "Clara"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Felix",
        "Daniel",
        "Graham",
        "Sophia",
        "Luna",
        "Luca"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Cedric",
        "Aiko",
        "Michael",
        "Natasha",
        "Nora",
        "Petra"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Richard",
        "Sebastian",
        "Leo",
        "Dominic",
        "Claire",
        "Emric"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Maxwell",
        "Ilya",
        "Jarek",
        "Jasmine",
        "Olivia",
        "Ramsey"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Kaia",
        "Gideon",
        "Isabella",
        "Eva",
        "Hope",
        "Summer"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Davis",
        "Dmitri",
        "Aurora",
        "Viola",
        "Anna",
        "Xavier"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Peter",
        "Arabella",
        "Annabelle",
        "Rose",
        "Naomi",
        "Bran"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Yuki",
        "Damon",
        "Alexis",
        "Haruka",
        "Edward",
        "Adrian"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Samuel",
        "Nolan",
        "Benjamin",
        "Ronan",
        "Evelyn",
        "Dan"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Selene",
        "Michelle",
        "Alex",
        "Talia",
        "Tim",
        "Gabriel"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Julian",
        "Victoria",
        "Nicholas",
        "Isabelle",
        "Athena",
        "Jackson"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Paul",
        "Helena",
        "Mohammed",
        "Henry",
        "Emilia",
        "Isaac"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Eric",
        "John",
        "Charlotte",
        "Paula",
        "Dante",
        "Garrick"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-names",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Katherine",
        "Celeste",
        "Catherine",
        "Freya",
        "Eliana",
        "Maria"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "places": [
        "Funagata",
        "Guisborough",
        "Kamishihoro"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "places": [
        "Hakone",
        "Aubenas",
        "Bibury"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "places": [
        "Ormskirk",
        "Gordes",
        "Crowland"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "places": [
        "Tavistock",
        "Hawes",
        "Builth"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "places": [
        "Witney",
        "Lympstone",
        "Acle"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "places": [
        "Tarbert",
        "Dolgellau",
        "Barga"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "places": [
        "Kingfisher",
        "Kamikawa",
        "Furubira"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "places": [
        "Thame",
        "Horokanai",
        "Corfe Castle"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "places": [
        "Abersoch",
        "Bifuka",
        "Fishguard"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "places": [
        "Assabu",
        "Dunster",
        "Ystradgynlais"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "places": [
        "Diss",
        "Uppingham",
        "Woodbridge"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "places": [
        "Whitchurch",
        "Laguardia",
        "Ashoro"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "places": [
        "Civita di Bagnoregio",
        "Hokuryu",
        "Wells-next-the-Sea"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "places": [
        "Porlock",
        "Stowmarket",
        "Clitheroe"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "places": [
        "Alresford",
        "Akkeshi",
        "Kutchan"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "places": [
        "Kaneyama",
        "Albarracin",
        "Loches"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "places": [
        "The Coach House",
        "Bellingham",
        "Ampleforth"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "places": [
        "Glastonbury",
        "Faversham",
        "Reeth"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "places": [
        "Sheringham",
        "Blockley",
        "Pickering"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "places": [
        "Lockerbie",
        "Melrose",
        "Kuriyama"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "places": [
        "Bamburgh",
        "Boone",
        "Berea"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "places": [
        "Attleborough",
        "Findhorn",
        "Yarm"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "places": [
        "Chipping Campden",
        "Beaulieu-sur-Dordogne",
        "Market Hall"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-places",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "places": [
        "Pocklington",
        "Kiyosato",
        "Kyowa"
      ]
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "opening": "a specific physical object in someone's hands"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "opening": "an action already underway mid-scene"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "opening": "a sound"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "opening": "a sound"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "opening": "a stated rule or custom of the place"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "opening": "a smell or taste"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "opening": "a specific physical object in someone's hands"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "opening": "a line of spoken dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "opening": "a specific physical object in someone's hands"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "opening": "a stated rule or custom of the place"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "opening": "a specific physical object in someone's hands"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "opening": "a smell or taste"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "opening": "a specific physical object in someone's hands"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "opening": "an action already underway mid-scene"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "opening": "an action already underway mid-scene"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "opening": "a specific physical object in someone's hands"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "opening": "a specific physical object in someone's hands"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "opening": "a specific physical object in someone's hands"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "opening": "an action already underway mid-scene"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "opening": "a sound"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "opening": "an action already underway mid-scene"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "opening": "a sound"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "opening": "a specific physical object in someone's hands"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-opening",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "opening": "an action already underway mid-scene"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "endingType": "comic reversal",
      "cadence": "a line of dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "endingType": "pyrrhic victory",
      "cadence": "a concrete physical action"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "endingType": "twist that recontextualizes everything",
      "cadence": "a question"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "endingType": "twist that recontextualizes everything",
      "cadence": "a concrete physical action"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "endingType": "justice served coldly",
      "cadence": "a concrete physical action"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "endingType": "the antagonist wins and is right",
      "cadence": "a line of dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "endingType": "outright defeat",
      "cadence": "a line of dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "endingType": "triumphant, earned cleanly",
      "cadence": "a sensory image"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "endingType": "stalemate formalized in writing",
      "cadence": "a question"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "endingType": "stalemate formalized in writing",
      "cadence": "a concrete physical action"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "endingType": "comic reversal",
      "cadence": "a line of dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "endingType": "pyrrhic victory",
      "cadence": "a line of dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "endingType": "justice served coldly",
      "cadence": "a line of dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "endingType": "comic reversal",
      "cadence": "a question"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "endingType": "cliffhanger mid-action",
      "cadence": "a sensory image"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "endingType": "comic reversal",
      "cadence": "a sensory image"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "endingType": "outright defeat",
      "cadence": "a sensory image"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "endingType": "comic reversal",
      "cadence": "a concrete physical action"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "endingType": "twist that recontextualizes everything",
      "cadence": "a line of dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "endingType": "justice served coldly",
      "cadence": "a line of dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "endingType": "triumphant, earned cleanly",
      "cadence": "a line of dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "endingType": "cliffhanger mid-action",
      "cadence": "a line of dialogue"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "endingType": "twist that recontextualizes everything",
      "cadence": "a sensory image"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-ending",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "endingType": "triumphant, earned cleanly",
      "cadence": "a concrete physical action"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "conflict": "Discover the truth behind an ancient legend."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "conflict": "Prevent an assassination."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "conflict": "Discover the truth behind an ancient legend."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "conflict": "Win a dangerous tournament."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "conflict": "Stop two rival factions from starting a war"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "conflict": "Discover the truth behind an ancient legend."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "conflict": "Restore a damaged ecosystem."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "conflict": "Rescue a kidnapped mentor."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "conflict": "Win a dangerous tournament."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "conflict": "Uncover the source of a strange phenomenon."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "conflict": "Restore a damaged ecosystem."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "conflict": "Escape an isolated region."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "conflict": "Survive an expedition into hostile territory."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "conflict": "Win a dangerous tournament."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "conflict": "Rescue a kidnapped mentor."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "conflict": "Uncover the source of a strange phenomenon."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "conflict": "Restore a damaged ecosystem."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "conflict": "Prevent an assassination."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "conflict": "Discover the truth behind an ancient legend."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "conflict": "Rescue a kidnapped mentor."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "conflict": "Prevent an assassination."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "conflict": "Escape an isolated region."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "conflict": "Prevent an assassination."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-conflict",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "conflict": "Protect a village from an unknown threat."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "protagonist": {
        "age": 57,
        "occupation": "Inventor",
        "temperament": "Compassionate and Melancholic",
        "want": "Beauty",
        "flaw": "Stubborn",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "protagonist": {
        "age": 17,
        "occupation": "Librarian",
        "temperament": "Compassionate and Suspicious",
        "want": "Respect",
        "flaw": "Workaholic",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "protagonist": {
        "age": 51,
        "occupation": "Botanist",
        "temperament": "Optimistic and Methodical",
        "want": "Power",
        "flaw": "Impulsive",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "protagonist": {
        "age": 73,
        "occupation": "Electrician",
        "temperament": "Curious and Reserved",
        "want": "Adventure",
        "flaw": "Perfectionistic",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "protagonist": {
        "age": 61,
        "occupation": "Inventor",
        "temperament": "Bold and Suspicious",
        "want": "Acceptance",
        "flaw": "Perfectionistic",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "protagonist": {
        "age": 78,
        "occupation": "Surveyor",
        "temperament": "Optimistic and Melancholic",
        "want": "Purpose",
        "flaw": "Arrogant",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "protagonist": {
        "age": 20,
        "occupation": "Tailor",
        "temperament": "Compassionate and Cheerful",
        "want": "Belonging",
        "flaw": "Cowardly",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "protagonist": {
        "age": 72,
        "occupation": "CIA Agent",
        "temperament": "Bold and Compassionate",
        "want": "Family",
        "flaw": "Hot-headed",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "protagonist": {
        "age": 18,
        "occupation": "Librarian",
        "temperament": "Reserved and Melancholic",
        "want": "Revenge",
        "flaw": "Cynical",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "protagonist": {
        "age": 21,
        "occupation": "Mason",
        "temperament": "Playful and Melancholic",
        "want": "Beauty",
        "flaw": "Selfish",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "protagonist": {
        "age": 67,
        "occupation": "Librarian",
        "temperament": "Curious and Melancholic",
        "want": "Acceptance",
        "flaw": "Reckless",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "protagonist": {
        "age": 60,
        "occupation": "Detective",
        "temperament": "Stoic and Curious",
        "want": "Fame",
        "flaw": "Greedy",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "protagonist": {
        "age": 21,
        "occupation": "Tailor",
        "temperament": "Reserved and Patient",
        "want": "Freedom",
        "flaw": "Selfish",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "protagonist": {
        "age": 31,
        "occupation": "CIA Agent",
        "temperament": "Stoic and Cheerful",
        "want": "Power",
        "flaw": "Perfectionistic",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "protagonist": {
        "age": 54,
        "occupation": "CIA Agent",
        "temperament": "Stoic and Reserved",
        "want": "Happiness",
        "flaw": "Reckless",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "protagonist": {
        "age": 35,
        "occupation": "Merchant",
        "temperament": "Stoic and Methodical",
        "want": "Legacy",
        "flaw": "Arrogant",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "protagonist": {
        "age": 24,
        "occupation": "Shipwright",
        "temperament": "Patient and Reserved",
        "want": "Influence",
        "flaw": "Workaholic",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "protagonist": {
        "age": 54,
        "occupation": "Baker",
        "temperament": "Suspicious and Stoic",
        "want": "Belonging",
        "flaw": "Jealous",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "protagonist": {
        "age": 74,
        "occupation": "Blacksmith",
        "temperament": "Reserved and Curious",
        "want": "Acceptance",
        "flaw": "Selfish",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "protagonist": {
        "age": 50,
        "occupation": "Marine",
        "temperament": "Patient and Playful",
        "want": "Happiness",
        "flaw": "Greedy",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "protagonist": {
        "age": 68,
        "occupation": "Falconer",
        "temperament": "Stoic and Cheerful",
        "want": "Justice",
        "flaw": "Impulsive",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "protagonist": {
        "age": 28,
        "occupation": "Ranger",
        "temperament": "Melancholic and Optimistic",
        "want": "Fame",
        "flaw": "Indecisive",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "protagonist": {
        "age": 71,
        "occupation": "Blacksmith",
        "temperament": "Stoic and Methodical",
        "want": "Acceptance",
        "flaw": "Naive",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "alone-protagonist",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "protagonist": {
        "age": 29,
        "occupation": "Librarian",
        "temperament": "Patient and Optimistic",
        "want": "Love",
        "flaw": "Indecisive",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "places": [
        "Amagi",
        "Thetford",
        "Masham"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "stalemate formalized in writing",
      "cadence": "a question",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 20,
        "occupation": "Podcaster",
        "temperament": "Compassionate and Reserved",
        "want": "Security",
        "flaw": "Arrogant",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "places": [
        "Westbury",
        "Diss",
        "Leominster"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "pyrrhic victory",
      "cadence": "a line of dialogue",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 69,
        "occupation": "Detective",
        "temperament": "Reserved and Cheerful",
        "want": "Redemption",
        "flaw": "Jealous",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "places": [
        "Tain",
        "Iwate",
        "The Plough"
      ],
      "opening": "a smell or taste",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a line of dialogue",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 68,
        "occupation": "Ranger",
        "temperament": "Optimistic and Stoic",
        "want": "Discovery",
        "flaw": "Manipulative",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "places": [
        "Beccles",
        "Kinko",
        "Pickering"
      ],
      "opening": "a sound",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a question",
      "conflict": "Protect a village from an unknown threat.",
      "protagonist": {
        "age": 80,
        "occupation": "Blacksmith",
        "temperament": "Playful and Patient",
        "want": "Family",
        "flaw": "Cynical",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "places": [
        "Assabu",
        "Kirriemuir",
        "Wells-next-the-Sea"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "pyrrhic victory",
      "cadence": "a question",
      "conflict": "Uncover the source of a strange phenomenon.",
      "protagonist": {
        "age": 58,
        "occupation": "Sculptor",
        "temperament": "Curious and Methodical",
        "want": "Legacy",
        "flaw": "Perfectionistic",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "places": [
        "Dornoch",
        "Annapolis Royal",
        "Boone"
      ],
      "opening": "a smell or taste",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a question",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 28,
        "occupation": "Astronomer",
        "temperament": "Playful and Methodical",
        "want": "Justice",
        "flaw": "Indecisive",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "places": [
        "Mahone Bay",
        "Helmsley",
        "Lostwithiel"
      ],
      "opening": "a sound",
      "endingType": "the antagonist wins and is right",
      "cadence": "a sensory image",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 71,
        "occupation": "Marine",
        "temperament": "Compassionate and Stoic",
        "want": "Redemption",
        "flaw": "Perfectionistic",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "places": [
        "Kahoku",
        "Dinan",
        "Lunenburg"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "justice served coldly",
      "cadence": "a concrete physical action",
      "conflict": "Protect a village from an unknown threat.",
      "protagonist": {
        "age": 28,
        "occupation": "Courier",
        "temperament": "Patient and Suspicious",
        "want": "Redemption",
        "flaw": "Cowardly",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "places": [
        "Baddeck",
        "Beaminster",
        "Alfriston"
      ],
      "opening": "a sound",
      "endingType": "outright defeat",
      "cadence": "a question",
      "conflict": "Deliver a fragile artifact before it fails.",
      "protagonist": {
        "age": 62,
        "occupation": "Blacksmith",
        "temperament": "Methodical and Melancholic",
        "want": "Excitement",
        "flaw": "Arrogant",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "places": [
        "Nairn",
        "Penryn",
        "Higashikagura"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "justice served coldly",
      "cadence": "a line of dialogue",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 24,
        "occupation": "Teacher",
        "temperament": "Melancholic and Optimistic",
        "want": "Discovery",
        "flaw": "Greedy",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "places": [
        "Imakane",
        "Bantry",
        "Bifuka"
      ],
      "opening": "a sound",
      "endingType": "absurdist deflation",
      "cadence": "a question",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 63,
        "occupation": "Merchant",
        "temperament": "Reserved and Methodical",
        "want": "Discovery",
        "flaw": "Naive",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "places": [
        "Frigiliana",
        "Kimobetsu",
        "Ikawa"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "absurdist deflation",
      "cadence": "a line of dialogue",
      "conflict": "Win a dangerous tournament.",
      "protagonist": {
        "age": 56,
        "occupation": "Shipwright",
        "temperament": "Playful and Suspicious",
        "want": "Revenge",
        "flaw": "Secretive",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "places": [
        "Keswick",
        "Blythburgh",
        "Furubira"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "outright defeat",
      "cadence": "a concrete physical action",
      "conflict": "Escape an isolated region.",
      "protagonist": {
        "age": 67,
        "occupation": "Blacksmith",
        "temperament": "Melancholic and Compassionate",
        "want": "Family",
        "flaw": "Workaholic",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "places": [
        "Horokanai",
        "Hawes",
        "Malmesbury"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a question",
      "conflict": "Escape an isolated region.",
      "protagonist": {
        "age": 38,
        "occupation": "Shipwright",
        "temperament": "Methodical and Bold",
        "want": "Acceptance",
        "flaw": "Hot-headed",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "places": [
        "Berea",
        "Kamikawa",
        "The Swan"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a sensory image",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 37,
        "occupation": "CIA Agent",
        "temperament": "Playful and Methodical",
        "want": "Mastery",
        "flaw": "Greedy",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "places": [
        "Fujisato",
        "Abbotsbury",
        "Jedburgh"
      ],
      "opening": "a sound",
      "endingType": "pyrrhic victory",
      "cadence": "a sensory image",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 70,
        "occupation": "Baker",
        "temperament": "Curious and Patient",
        "want": "Peace",
        "flaw": "Impulsive",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "places": [
        "Fishguard",
        "Loches",
        "Marlborough"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "justice served coldly",
      "cadence": "a concrete physical action",
      "conflict": "Deliver a fragile artifact before it fails.",
      "protagonist": {
        "age": 16,
        "occupation": "Marine",
        "temperament": "Suspicious and Melancholic",
        "want": "Redemption",
        "flaw": "Judgmental",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "places": [
        "Kinsale",
        "Mamurogawa",
        "Montrose"
      ],
      "opening": "a sound",
      "endingType": "pyrrhic victory",
      "cadence": "a question",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 25,
        "occupation": "Shipwright",
        "temperament": "Curious and Methodical",
        "want": "Redemption",
        "flaw": "Reckless",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "places": [
        "Dinkelsbuhl",
        "Lympstone",
        "Lavenham"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "pyrrhic victory",
      "cadence": "a sensory image",
      "conflict": "Rescue a kidnapped mentor.",
      "protagonist": {
        "age": 68,
        "occupation": "Physician",
        "temperament": "Bold and Cheerful",
        "want": "Creativity",
        "flaw": "Judgmental",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "places": [
        "Hiroo",
        "Abira",
        "Dartmouth"
      ],
      "opening": "a sound",
      "endingType": "justice served coldly",
      "cadence": "a concrete physical action",
      "conflict": "Uncover the source of a strange phenomenon.",
      "protagonist": {
        "age": 68,
        "occupation": "Electrician",
        "temperament": "Compassionate and Patient",
        "want": "Purpose",
        "flaw": "Indecisive",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "places": [
        "Morning Star",
        "Beaumaris",
        "Kaminokuni"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a question",
      "conflict": "Escape an isolated region.",
      "protagonist": {
        "age": 19,
        "occupation": "Marine",
        "temperament": "Curious and Reserved",
        "want": "Adventure",
        "flaw": "Indecisive",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "places": [
        "Melrose",
        "Kiyosato",
        "Narberth"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "absurdist deflation",
      "cadence": "a line of dialogue",
      "conflict": "Deliver a fragile artifact before it fails.",
      "protagonist": {
        "age": 61,
        "occupation": "Marine",
        "temperament": "Bold and Melancholic",
        "want": "Knowledge",
        "flaw": "Distrustful",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "places": [
        "Market Hall",
        "Porlock",
        "Ullapool"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "absurdist deflation",
      "cadence": "a sensory image",
      "conflict": "Win a dangerous tournament.",
      "protagonist": {
        "age": 76,
        "occupation": "Electrician",
        "temperament": "Curious and Stoic",
        "want": "Love",
        "flaw": "Indecisive",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-names",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "places": [
        "Ramsbottom",
        "Horncastle",
        "Totnes"
      ],
      "opening": "a sound",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a concrete physical action",
      "conflict": "Win a dangerous tournament.",
      "protagonist": {
        "age": 76,
        "occupation": "Merchant",
        "temperament": "Cheerful and Stoic",
        "want": "Respect",
        "flaw": "Judgmental",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Maxwell",
        "Rose",
        "Jackson",
        "Richard",
        "Marlow",
        "Aldren"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "comic reversal",
      "cadence": "a question",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 32,
        "occupation": "Botanist",
        "temperament": "Methodical and Stoic",
        "want": "Adventure",
        "flaw": "Sadistic",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Victor",
        "Persephone",
        "Benjamin",
        "Sophia",
        "Dante",
        "Samuel"
      ],
      "opening": "a sound",
      "endingType": "outright defeat",
      "cadence": "a sensory image",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 58,
        "occupation": "Merchant",
        "temperament": "Playful and Reserved",
        "want": "Mastery",
        "flaw": "Workaholic",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Claire",
        "George",
        "Lucia",
        "Isabelle",
        "Charlotte",
        "Edward"
      ],
      "opening": "a smell or taste",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a sensory image",
      "conflict": "Deliver a fragile artifact before it fails.",
      "protagonist": {
        "age": 54,
        "occupation": "Physician",
        "temperament": "Compassionate and Reserved",
        "want": "Power",
        "flaw": "Cowardly",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Arabella",
        "Nicholas",
        "Cedric",
        "James",
        "Selene",
        "Katherine"
      ],
      "opening": "a sound",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a question",
      "conflict": "Win a dangerous tournament.",
      "protagonist": {
        "age": 60,
        "occupation": "Shipwright",
        "temperament": "Reserved and Suspicious",
        "want": "Influence",
        "flaw": "Sadistic",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Petra",
        "Aurora",
        "Matthias",
        "Johan",
        "Dan",
        "Lily"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "absurdist deflation",
      "cadence": "a question",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 61,
        "occupation": "Librarian",
        "temperament": "Suspicious and Curious",
        "want": "Legacy",
        "flaw": "Greedy",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Viola",
        "Garrick",
        "Hana",
        "Luna",
        "Nora",
        "Davis"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "comic reversal",
      "cadence": "a concrete physical action",
      "conflict": "Uncover the source of a strange phenomenon.",
      "protagonist": {
        "age": 70,
        "occupation": "Botanist",
        "temperament": "Curious and Compassionate",
        "want": "Love",
        "flaw": "Judgmental",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Jarek",
        "Orin",
        "Mohammed",
        "Kaori",
        "Iris",
        "Diana"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "pyrrhic victory",
      "cadence": "a question",
      "conflict": "Restore a damaged ecosystem.",
      "protagonist": {
        "age": 40,
        "occupation": "Surveyor",
        "temperament": "Playful and Methodical",
        "want": "Influence",
        "flaw": "Hot-headed",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Charles",
        "Cassandra",
        "Clara",
        "Eliana",
        "Thomas",
        "Athena"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "stalemate formalized in writing",
      "cadence": "a line of dialogue",
      "conflict": "Win a dangerous tournament.",
      "protagonist": {
        "age": 75,
        "occupation": "Merchant",
        "temperament": "Optimistic and Compassionate",
        "want": "Family",
        "flaw": "Workaholic",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Chris",
        "Dmitri",
        "Eleanor",
        "Kaia",
        "Tony",
        "Freya"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a sensory image",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 67,
        "occupation": "Marine",
        "temperament": "Optimistic and Reserved",
        "want": "Adventure",
        "flaw": "Sadistic",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Evelyn",
        "Jasmine",
        "Michelle",
        "Emric",
        "Ramsey",
        "Lynn"
      ],
      "opening": "a sound",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a question",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 45,
        "occupation": "Courier",
        "temperament": "Melancholic and Patient",
        "want": "Fame",
        "flaw": "Cowardly",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Alexis",
        "Odet",
        "Vincent",
        "Mei",
        "Markus",
        "Rin"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "the antagonist wins and is right",
      "cadence": "a question",
      "conflict": "Escape an isolated region.",
      "protagonist": {
        "age": 60,
        "occupation": "Merchant",
        "temperament": "Melancholic and Patient",
        "want": "Discovery",
        "flaw": "Pessimistic",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Annabelle",
        "Henry",
        "Riven",
        "Catherine",
        "Sakura",
        "Max"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "the antagonist wins and is right",
      "cadence": "a concrete physical action",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 67,
        "occupation": "Sculptor",
        "temperament": "Methodical and Playful",
        "want": "Forgiveness",
        "flaw": "Cowardly",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Natalia",
        "Vladimir",
        "Gideon",
        "Jonathan",
        "Lucien",
        "Leon"
      ],
      "opening": "a sound",
      "endingType": "justice served coldly",
      "cadence": "a sensory image",
      "conflict": "Deliver a fragile artifact before it fails.",
      "protagonist": {
        "age": 51,
        "occupation": "Streamer",
        "temperament": "Cheerful and Curious",
        "want": "Knowledge",
        "flaw": "Hot-headed",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Anna",
        "Sabine",
        "Ryan",
        "Misaki",
        "Jose",
        "Adolf"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "cliffhanger mid-action",
      "cadence": "a concrete physical action",
      "conflict": "Protect a village from an unknown threat.",
      "protagonist": {
        "age": 62,
        "occupation": "Courier",
        "temperament": "Optimistic and Patient",
        "want": "Forgiveness",
        "flaw": "Arrogant",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Yuki",
        "William",
        "Eric",
        "Ethan",
        "Anton",
        "Paula"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "comic reversal",
      "cadence": "a line of dialogue",
      "conflict": "Protect a village from an unknown threat.",
      "protagonist": {
        "age": 52,
        "occupation": "Merchant",
        "temperament": "Methodical and Reserved",
        "want": "Family",
        "flaw": "Pessimistic",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Nathaniel",
        "Andrew",
        "Frederick",
        "David",
        "Hans",
        "Gabriel"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a sensory image",
      "conflict": "Rescue a kidnapped mentor.",
      "protagonist": {
        "age": 34,
        "occupation": "Detective",
        "temperament": "Methodical and Melancholic",
        "want": "Adventure",
        "flaw": "Sadistic",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Violet",
        "Bran",
        "Naomi",
        "Natasha",
        "Victoria",
        "Celine"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "the antagonist wins and is right",
      "cadence": "a sensory image",
      "conflict": "Protect a village from an unknown threat.",
      "protagonist": {
        "age": 68,
        "occupation": "CIA Agent",
        "temperament": "Reserved and Cheerful",
        "want": "Justice",
        "flaw": "Arrogant",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Sebastian",
        "Alan",
        "Eva",
        "Rachel",
        "Ronan",
        "Amelia"
      ],
      "opening": "a smell or taste",
      "endingType": "stalemate formalized in writing",
      "cadence": "a concrete physical action",
      "conflict": "Escape an isolated region.",
      "protagonist": {
        "age": 69,
        "occupation": "Librarian",
        "temperament": "Stoic and Curious",
        "want": "Knowledge",
        "flaw": "Secretive",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Toren",
        "Akane",
        "Dominic",
        "John",
        "Astrid",
        "Michael"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "stalemate formalized in writing",
      "cadence": "a concrete physical action",
      "conflict": "Rescue a kidnapped mentor.",
      "protagonist": {
        "age": 44,
        "occupation": "Tailor",
        "temperament": "Methodical and Cheerful",
        "want": "Redemption",
        "flaw": "Cowardly",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Helena",
        "Anika",
        "Celeste",
        "Daniel",
        "Adrian",
        "Julian"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "comic reversal",
      "cadence": "a line of dialogue",
      "conflict": "Deliver a fragile artifact before it fails.",
      "protagonist": {
        "age": 28,
        "occupation": "Podcaster",
        "temperament": "Methodical and Playful",
        "want": "Fame",
        "flaw": "Manipulative",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Tim",
        "Felix",
        "Clark",
        "Paul",
        "Maria",
        "Graham"
      ],
      "opening": "a smell or taste",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a sensory image",
      "conflict": "Restore a damaged ecosystem.",
      "protagonist": {
        "age": 69,
        "occupation": "Mason",
        "temperament": "Melancholic and Stoic",
        "want": "Stability",
        "flaw": "Selfish",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Hope",
        "Emily",
        "Isaac",
        "Corwin",
        "Nathan",
        "Luca"
      ],
      "opening": "a smell or taste",
      "endingType": "outright defeat",
      "cadence": "a concrete physical action",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 56,
        "occupation": "Astronomer",
        "temperament": "Playful and Stoic",
        "want": "Happiness",
        "flaw": "Secretive",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Ivan",
        "Elena",
        "Alex",
        "Nyra",
        "Isabella",
        "Aiko"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "pyrrhic victory",
      "cadence": "a sensory image",
      "conflict": "Restore a damaged ecosystem.",
      "protagonist": {
        "age": 79,
        "occupation": "Sculptor",
        "temperament": "Cheerful and Curious",
        "want": "Stability",
        "flaw": "Selfish",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-places",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Jack",
        "Arthur",
        "Peter",
        "Talia",
        "Ilya",
        "Michaela"
      ],
      "opening": "a sound",
      "endingType": "absurdist deflation",
      "cadence": "a concrete physical action",
      "conflict": "Uncover the source of a strange phenomenon.",
      "protagonist": {
        "age": 29,
        "occupation": "Inventor",
        "temperament": "Melancholic and Suspicious",
        "want": "Influence",
        "flaw": "Impulsive",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Gabriel",
        "Katherine",
        "Selene",
        "Peter",
        "Vincent",
        "Eleanor"
      ],
      "places": [
        "Akkeshi",
        "Lockerbie",
        "Blockley"
      ],
      "endingType": "triumphant, earned cleanly",
      "cadence": "a concrete physical action",
      "conflict": "Deliver a fragile artifact before it fails.",
      "protagonist": {
        "age": 39,
        "occupation": "CIA Agent",
        "temperament": "Patient and Curious",
        "want": "Acceptance",
        "flaw": "Workaholic",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Diana",
        "Emric",
        "Adrian",
        "Victor",
        "Akane",
        "Frederick"
      ],
      "places": [
        "Berea",
        "Brantome",
        "Mamurogawa"
      ],
      "endingType": "outright defeat",
      "cadence": "a sensory image",
      "conflict": "Rescue a kidnapped mentor.",
      "protagonist": {
        "age": 68,
        "occupation": "Physician",
        "temperament": "Cheerful and Reserved",
        "want": "Influence",
        "flaw": "Sadistic",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Marlow",
        "Richard",
        "Charlotte",
        "Charles",
        "Kaia",
        "Petra"
      ],
      "places": [
        "Eiheiji",
        "Abergynolwyn",
        "Bruton"
      ],
      "endingType": "triumphant, earned cleanly",
      "cadence": "a question",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 44,
        "occupation": "Podcaster",
        "temperament": "Suspicious and Optimistic",
        "want": "Legacy",
        "flaw": "Perfectionistic",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Samuel",
        "Lynn",
        "Iris",
        "Natasha",
        "Gideon",
        "Jasmine"
      ],
      "places": [
        "Barga",
        "Beaulieu-sur-Dordogne",
        "Appledore"
      ],
      "endingType": "outright defeat",
      "cadence": "a concrete physical action",
      "conflict": "Protect a village from an unknown threat.",
      "protagonist": {
        "age": 48,
        "occupation": "Streamer",
        "temperament": "Playful and Optimistic",
        "want": "Happiness",
        "flaw": "Manipulative",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Ariel",
        "Annabelle",
        "Rachel",
        "Aurora",
        "Anna",
        "Violet"
      ],
      "places": [
        "Sheringham",
        "Ravenglass",
        "Bramber"
      ],
      "endingType": "absurdist deflation",
      "cadence": "a concrete physical action",
      "conflict": "Win a dangerous tournament.",
      "protagonist": {
        "age": 63,
        "occupation": "Sculptor",
        "temperament": "Reserved and Suspicious",
        "want": "Love",
        "flaw": "Jealous",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Dmitri",
        "Naomi",
        "Benjamin",
        "Catherine",
        "Nolan",
        "Aiko"
      ],
      "places": [
        "Crickhowell",
        "Laguardia",
        "Buckfastleigh"
      ],
      "endingType": "comic reversal",
      "cadence": "a line of dialogue",
      "conflict": "Deliver a fragile artifact before it fails.",
      "protagonist": {
        "age": 39,
        "occupation": "Shipwright",
        "temperament": "Cheerful and Stoic",
        "want": "Influence",
        "flaw": "Impulsive",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Edward",
        "Jonathan",
        "Orin",
        "Tiffany",
        "Emily",
        "Isaac"
      ],
      "places": [
        "Galena",
        "Hidaka",
        "Thame"
      ],
      "endingType": "pyrrhic victory",
      "cadence": "a sensory image",
      "conflict": "Solve a mysterious disappearance.",
      "protagonist": {
        "age": 77,
        "occupation": "Locksmith",
        "temperament": "Cheerful and Playful",
        "want": "Security",
        "flaw": "Indecisive",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "George",
        "Alice",
        "Ivan",
        "Andrew",
        "Vladimir",
        "Victoria"
      ],
      "places": [
        "Branscombe",
        "Kaminokuni",
        "Imabetsu"
      ],
      "endingType": "cliffhanger mid-action",
      "cadence": "a sensory image",
      "conflict": "Escape an isolated region.",
      "protagonist": {
        "age": 35,
        "occupation": "Shipwright",
        "temperament": "Playful and Reserved",
        "want": "Adventure",
        "flaw": "Sadistic",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Tony",
        "Michelle",
        "Alex",
        "Toren",
        "Nikolai",
        "Isabelle"
      ],
      "places": [
        "Aldbourne",
        "Horncastle",
        "Marlborough"
      ],
      "endingType": "comic reversal",
      "cadence": "a sensory image",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 64,
        "occupation": "Podcaster",
        "temperament": "Methodical and Reserved",
        "want": "Power",
        "flaw": "Stubborn",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Aldren",
        "Freya",
        "Arabella",
        "Celeste",
        "Odet",
        "James"
      ],
      "places": [
        "Marumori",
        "Pocklington",
        "Amagi"
      ],
      "endingType": "absurdist deflation",
      "cadence": "a concrete physical action",
      "conflict": "Find a missing explorer.",
      "protagonist": {
        "age": 44,
        "occupation": "Shipwright",
        "temperament": "Reserved and Curious",
        "want": "Respect",
        "flaw": "Secretive",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Elena",
        "Maria",
        "Thomas",
        "Henry",
        "Viola",
        "Tim"
      ],
      "places": [
        "Dartmouth",
        "Chatham",
        "Bridport"
      ],
      "endingType": "triumphant, earned cleanly",
      "cadence": "a question",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 78,
        "occupation": "Falconer",
        "temperament": "Optimistic and Cheerful",
        "want": "Knowledge",
        "flaw": "Jealous",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Jackson",
        "Rose",
        "Claire",
        "William",
        "Jose",
        "Mei"
      ],
      "places": [
        "Ingleton",
        "Leominster",
        "Pickering"
      ],
      "endingType": "pyrrhic victory",
      "cadence": "a concrete physical action",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 63,
        "occupation": "Teacher",
        "temperament": "Cheerful and Patient",
        "want": "Love",
        "flaw": "Judgmental",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Dante",
        "Nathan",
        "Hana",
        "Yuki",
        "Persephone",
        "Daniel"
      ],
      "places": [
        "Dinan",
        "Alresford",
        "Eberbach"
      ],
      "endingType": "twist that recontextualizes everything",
      "cadence": "a sensory image",
      "conflict": "Deliver a fragile artifact before it fails.",
      "protagonist": {
        "age": 65,
        "occupation": "Botanist",
        "temperament": "Reserved and Bold",
        "want": "Family",
        "flaw": "Naive",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Nathaniel",
        "Nicholas",
        "Nora",
        "Nyra",
        "Hope",
        "Matthias"
      ],
      "places": [
        "Alnmouth",
        "Tetbury",
        "Iwanai"
      ],
      "endingType": "twist that recontextualizes everything",
      "cadence": "a line of dialogue",
      "conflict": "Escape an isolated region.",
      "protagonist": {
        "age": 18,
        "occupation": "Botanist",
        "temperament": "Optimistic and Cheerful",
        "want": "Belonging",
        "flaw": "Naive",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "David",
        "Jack",
        "Mohammed",
        "Michael",
        "Arthur",
        "Alan"
      ],
      "places": [
        "Betsukai",
        "Kenbuchi",
        "Kagamiishi"
      ],
      "endingType": "pyrrhic victory",
      "cadence": "a concrete physical action",
      "conflict": "Restore a damaged ecosystem.",
      "protagonist": {
        "age": 31,
        "occupation": "Merchant",
        "temperament": "Cheerful and Melancholic",
        "want": "Stability",
        "flaw": "Cowardly",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Natalia",
        "Xavier",
        "Markus",
        "Emilia",
        "Luca",
        "Leo"
      ],
      "places": [
        "Iide",
        "Boone",
        "Camden"
      ],
      "endingType": "twist that recontextualizes everything",
      "cadence": "a concrete physical action",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 23,
        "occupation": "Inventor",
        "temperament": "Reserved and Stoic",
        "want": "Independence",
        "flaw": "Judgmental",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Eliana",
        "Eric",
        "Lucien",
        "Olivia",
        "Kaori",
        "Anton"
      ],
      "places": [
        "Hakone",
        "Koshimizu",
        "Arcos de la Frontera"
      ],
      "endingType": "stalemate formalized in writing",
      "cadence": "a line of dialogue",
      "conflict": "Restore a damaged ecosystem.",
      "protagonist": {
        "age": 56,
        "occupation": "Astronomer",
        "temperament": "Methodical and Cheerful",
        "want": "Acceptance",
        "flaw": "Judgmental",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Ethan",
        "Haruka",
        "Sakura",
        "Corwin",
        "Graham",
        "Athena"
      ],
      "places": [
        "Clovelly",
        "Assabu",
        "Beaminster"
      ],
      "endingType": "comic reversal",
      "cadence": "a sensory image",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 40,
        "occupation": "Tailor",
        "temperament": "Cheerful and Stoic",
        "want": "Justice",
        "flaw": "Cynical",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Damon",
        "Paula",
        "Talia",
        "Rin",
        "Maxwell",
        "Sebastian"
      ],
      "places": [
        "Wells-next-the-Sea",
        "Hamanaka",
        "Bedale"
      ],
      "endingType": "justice served coldly",
      "cadence": "a concrete physical action",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 34,
        "occupation": "Shipwright",
        "temperament": "Patient and Suspicious",
        "want": "Knowledge",
        "flaw": "Selfish",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Clara",
        "Jarek",
        "Julian",
        "Amelia",
        "Cedric",
        "Luna"
      ],
      "places": [
        "Hiroo",
        "Morning Star",
        "Thetford"
      ],
      "endingType": "comic reversal",
      "cadence": "a concrete physical action",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 54,
        "occupation": "Courier",
        "temperament": "Suspicious and Cheerful",
        "want": "Forgiveness",
        "flaw": "Cowardly",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Celine",
        "Ryan",
        "Alexis",
        "Isabella",
        "Felix",
        "Lucia"
      ],
      "places": [
        "The Plough",
        "Horonobe",
        "The King's Head"
      ],
      "endingType": "absurdist deflation",
      "cadence": "a concrete physical action",
      "conflict": "Escape an isolated region.",
      "protagonist": {
        "age": 60,
        "occupation": "CIA Agent",
        "temperament": "Melancholic and Compassionate",
        "want": "Revenge",
        "flaw": "Arrogant",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Riven",
        "Max",
        "Chris",
        "Nessa",
        "Garrick",
        "Eva"
      ],
      "places": [
        "Haddington",
        "Atsuma",
        "Tain"
      ],
      "endingType": "twist that recontextualizes everything",
      "cadence": "a question",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 49,
        "occupation": "Shipwright",
        "temperament": "Cheerful and Curious",
        "want": "Recognition",
        "flaw": "Manipulative",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "John",
        "Ilya",
        "Michaela",
        "Ramsey",
        "Evelyn",
        "Misaki"
      ],
      "places": [
        "Fishguard",
        "Daigo",
        "Blythburgh"
      ],
      "endingType": "pyrrhic victory",
      "cadence": "a sensory image",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 45,
        "occupation": "Mason",
        "temperament": "Suspicious and Methodical",
        "want": "Redemption",
        "flaw": "Cowardly",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-opening",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Sophia",
        "Anika",
        "Summer",
        "Ronan",
        "Lily",
        "Valerie"
      ],
      "places": [
        "Ullapool",
        "Biddenden",
        "Jedburgh"
      ],
      "endingType": "outright defeat",
      "cadence": "a line of dialogue",
      "conflict": "Uncover the source of a strange phenomenon.",
      "protagonist": {
        "age": 64,
        "occupation": "Courier",
        "temperament": "Curious and Compassionate",
        "want": "Power",
        "flaw": "Manipulative",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Lily",
        "Peter",
        "Claire",
        "Clara",
        "Ariel",
        "Natasha"
      ],
      "places": [
        "Aldeburgh",
        "Hayama",
        "Castle Combe"
      ],
      "opening": "a line of spoken dialogue",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 52,
        "occupation": "Tailor",
        "temperament": "Optimistic and Suspicious",
        "want": "Peace",
        "flaw": "Jealous",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Olivia",
        "Kaori",
        "Chris",
        "Elena",
        "Nyra",
        "Riven"
      ],
      "places": [
        "Horncastle",
        "Aldbourne",
        "Golden Hind"
      ],
      "opening": "a line of spoken dialogue",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 76,
        "occupation": "Surveyor",
        "temperament": "Cheerful and Reserved",
        "want": "Adventure",
        "flaw": "Greedy",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Xavier",
        "Leo",
        "Jonathan",
        "Akane",
        "Sakura",
        "Benjamin"
      ],
      "places": [
        "Castle Cary",
        "Callander",
        "Iide"
      ],
      "opening": "a specific physical object in someone's hands",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 23,
        "occupation": "Podcaster",
        "temperament": "Cheerful and Reserved",
        "want": "Belonging",
        "flaw": "Pessimistic",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Nicholas",
        "Katherine",
        "Ryan",
        "Emily",
        "Arabella",
        "Graham"
      ],
      "places": [
        "Lockerbie",
        "Stow-on-the-Wold",
        "Abira"
      ],
      "opening": "a stated rule or custom of the place",
      "conflict": "Protect a village from an unknown threat.",
      "protagonist": {
        "age": 69,
        "occupation": "Astronomer",
        "temperament": "Patient and Optimistic",
        "want": "Redemption",
        "flaw": "Arrogant",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Leon",
        "Dominic",
        "Orin",
        "Valerie",
        "Arthur",
        "Michael"
      ],
      "places": [
        "Ajigasawa",
        "Wigton",
        "Anamizu"
      ],
      "opening": "a line of spoken dialogue",
      "conflict": "Restore a damaged ecosystem.",
      "protagonist": {
        "age": 29,
        "occupation": "Baker",
        "temperament": "Patient and Stoic",
        "want": "Peace",
        "flaw": "Manipulative",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Henry",
        "Isabelle",
        "Helena",
        "Diana",
        "Persephone",
        "Charles"
      ],
      "places": [
        "Dornoch",
        "Abbotsbury",
        "Hiroo"
      ],
      "opening": "an action already underway mid-scene",
      "conflict": "Solve a mysterious disappearance.",
      "protagonist": {
        "age": 70,
        "occupation": "Astronomer",
        "temperament": "Reserved and Cheerful",
        "want": "Excitement",
        "flaw": "Distrustful",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Hans",
        "Ivan",
        "Rin",
        "David",
        "Michaela",
        "Ethan"
      ],
      "places": [
        "Easingwold",
        "Northleach",
        "Westbury"
      ],
      "opening": "an action already underway mid-scene",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 44,
        "occupation": "Streamer",
        "temperament": "Curious and Compassionate",
        "want": "Freedom",
        "flaw": "Distrustful",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Mei",
        "Ramsey",
        "Alice",
        "Rachel",
        "Charlotte",
        "Clark"
      ],
      "places": [
        "Bridport",
        "Alfriston",
        "Civita di Bagnoregio"
      ],
      "opening": "a sound",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 60,
        "occupation": "Falconer",
        "temperament": "Curious and Methodical",
        "want": "Excitement",
        "flaw": "Jealous",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "George",
        "Andrew",
        "Victor",
        "Hope",
        "Dan",
        "Tiffany"
      ],
      "places": [
        "Blythburgh",
        "Harbour View",
        "Crieff"
      ],
      "opening": "a smell or taste",
      "conflict": "Win a dangerous tournament.",
      "protagonist": {
        "age": 18,
        "occupation": "Ranger",
        "temperament": "Curious and Optimistic",
        "want": "Acceptance",
        "flaw": "Cynical",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Thomas",
        "Daniel",
        "Rose",
        "Vladimir",
        "Haruka",
        "Damon"
      ],
      "places": [
        "Hokuryu",
        "Tenterden",
        "Galena"
      ],
      "opening": "a line of spoken dialogue",
      "conflict": "Restore a damaged ecosystem.",
      "protagonist": {
        "age": 78,
        "occupation": "Streamer",
        "temperament": "Playful and Cheerful",
        "want": "Redemption",
        "flaw": "Reckless",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Luna",
        "Annabelle",
        "Summer",
        "Jasmine",
        "Celeste",
        "Evelyn"
      ],
      "places": [
        "Bellingham",
        "Branscombe",
        "Kawamata"
      ],
      "opening": "a smell or taste",
      "conflict": "Win a dangerous tournament.",
      "protagonist": {
        "age": 16,
        "occupation": "Blacksmith",
        "temperament": "Optimistic and Cheerful",
        "want": "Acceptance",
        "flaw": "Jealous",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Richard",
        "Yuki",
        "Davis",
        "Victoria",
        "Eric",
        "Astrid"
      ],
      "places": [
        "Kutchan",
        "Fujisato",
        "Betsukai"
      ],
      "opening": "a specific physical object in someone's hands",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 17,
        "occupation": "Shipwright",
        "temperament": "Bold and Methodical",
        "want": "Discovery",
        "flaw": "Hot-headed",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "William",
        "Mohammed",
        "Markus",
        "Petra",
        "Julian",
        "Dante"
      ],
      "places": [
        "Hiranai",
        "Rothesay",
        "The Plough"
      ],
      "opening": "a line of spoken dialogue",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 25,
        "occupation": "Librarian",
        "temperament": "Compassionate and Melancholic",
        "want": "Fame",
        "flaw": "Greedy",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Luca",
        "Edward",
        "Naomi",
        "Jarek",
        "Iris",
        "Sabine"
      ],
      "places": [
        "Frigiliana",
        "Dolgellau",
        "Hidaka"
      ],
      "opening": "a line of spoken dialogue",
      "conflict": "Find a missing explorer.",
      "protagonist": {
        "age": 73,
        "occupation": "Podcaster",
        "temperament": "Suspicious and Reserved",
        "want": "Belonging",
        "flaw": "Impulsive",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Ilya",
        "Emilia",
        "Michelle",
        "Corwin",
        "Alexis",
        "Jackson"
      ],
      "places": [
        "Bourton",
        "Kenbuchi",
        "The Anchor"
      ],
      "opening": "an action already underway mid-scene",
      "conflict": "Uncover the source of a strange phenomenon.",
      "protagonist": {
        "age": 40,
        "occupation": "Teacher",
        "temperament": "Bold and Patient",
        "want": "Beauty",
        "flaw": "Secretive",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Athena",
        "Talia",
        "Gabriel",
        "Isabella",
        "Dmitri",
        "Sebastian"
      ],
      "places": [
        "Alnmouth",
        "Masham",
        "Ballater"
      ],
      "opening": "an action already underway mid-scene",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 31,
        "occupation": "Baker",
        "temperament": "Melancholic and Patient",
        "want": "Forgiveness",
        "flaw": "Arrogant",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Nolan",
        "Maxwell",
        "Jack",
        "Toren",
        "Eliana",
        "Alan"
      ],
      "places": [
        "Dartmouth",
        "The Wharf",
        "Ashoro"
      ],
      "opening": "a specific physical object in someone's hands",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 54,
        "occupation": "Blacksmith",
        "temperament": "Methodical and Cheerful",
        "want": "Respect",
        "flaw": "Selfish",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "James",
        "Anika",
        "Nathan",
        "Nora",
        "Odet",
        "Ronan"
      ],
      "places": [
        "Sheringham",
        "Wendover",
        "Biei"
      ],
      "opening": "a smell or taste",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 39,
        "occupation": "Teacher",
        "temperament": "Melancholic and Suspicious",
        "want": "Mastery",
        "flaw": "Judgmental",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Tim",
        "Gideon",
        "Lynn",
        "Paul",
        "Hana",
        "Adrian"
      ],
      "places": [
        "Lympstone",
        "Penryn",
        "Bishops Castle"
      ],
      "opening": "a specific physical object in someone's hands",
      "conflict": "Survive an expedition into hostile territory.",
      "protagonist": {
        "age": 41,
        "occupation": "Blacksmith",
        "temperament": "Melancholic and Bold",
        "want": "Belonging",
        "flaw": "Reckless",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Frederick",
        "Cedric",
        "Maria",
        "Celine",
        "Paula",
        "Adolf"
      ],
      "places": [
        "Aubenas",
        "Kirkby Lonsdale",
        "Ormskirk"
      ],
      "opening": "a specific physical object in someone's hands",
      "conflict": "Solve a mysterious disappearance.",
      "protagonist": {
        "age": 80,
        "occupation": "Astronomer",
        "temperament": "Optimistic and Suspicious",
        "want": "Fame",
        "flaw": "Stubborn",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Eleanor",
        "Garrick",
        "Viola",
        "Nathaniel",
        "Lucia",
        "Nikolai"
      ],
      "places": [
        "Witney",
        "Woodbridge",
        "Iwanai"
      ],
      "opening": "an action already underway mid-scene",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 79,
        "occupation": "Tailor",
        "temperament": "Melancholic and Compassionate",
        "want": "Adventure",
        "flaw": "Selfish",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Anna",
        "Matthias",
        "John",
        "Johan",
        "Amelia",
        "Vincent"
      ],
      "places": [
        "Frome",
        "Beccles",
        "Ashbourne"
      ],
      "opening": "a smell or taste",
      "conflict": "Break a powerful curse.",
      "protagonist": {
        "age": 55,
        "occupation": "Archaeologist",
        "temperament": "Reserved and Curious",
        "want": "Power",
        "flaw": "Manipulative",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Natalia",
        "Nessa",
        "Violet",
        "Kaia",
        "Max",
        "Felix"
      ],
      "places": [
        "Fujisaki",
        "Alresford",
        "Kiyosato"
      ],
      "opening": "a smell or taste",
      "conflict": "Solve a mysterious disappearance.",
      "protagonist": {
        "age": 72,
        "occupation": "Sculptor",
        "temperament": "Cheerful and Methodical",
        "want": "Fame",
        "flaw": "Judgmental",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-ending",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Freya",
        "Misaki",
        "Aurora",
        "Aldren",
        "Emric",
        "Alex"
      ],
      "places": [
        "Kinsale",
        "Glastonbury",
        "Amble"
      ],
      "opening": "a stated rule or custom of the place",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 41,
        "occupation": "Electrician",
        "temperament": "Suspicious and Methodical",
        "want": "Purpose",
        "flaw": "Perfectionistic",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Ivan",
        "Ryan",
        "Tiffany",
        "Eliana",
        "Peter",
        "Xavier"
      ],
      "places": [
        "Beccles",
        "Boone",
        "Certaldo"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "justice served coldly",
      "cadence": "a concrete physical action",
      "protagonist": {
        "age": 29,
        "occupation": "Astronomer",
        "temperament": "Bold and Reserved",
        "want": "Love",
        "flaw": "Cynical",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "John",
        "Vincent",
        "Emily",
        "Samuel",
        "Jasmine",
        "Anton"
      ],
      "places": [
        "Civita di Bagnoregio",
        "Chatham",
        "The Wharf"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a sensory image",
      "protagonist": {
        "age": 31,
        "occupation": "Merchant",
        "temperament": "Cheerful and Patient",
        "want": "Happiness",
        "flaw": "Secretive",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Paula",
        "Arabella",
        "Freya",
        "Lucien",
        "Catherine",
        "Johan"
      ],
      "places": [
        "Faringdon",
        "Wadhurst",
        "Dingle"
      ],
      "opening": "a sound",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a sensory image",
      "protagonist": {
        "age": 41,
        "occupation": "Baker",
        "temperament": "Curious and Bold",
        "want": "Power",
        "flaw": "Judgmental",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Frederick",
        "Sebastian",
        "Graham",
        "Nathan",
        "Elena",
        "Charlotte"
      ],
      "places": [
        "The White Hart",
        "Iide",
        "Easingwold"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "outright defeat",
      "cadence": "a sensory image",
      "protagonist": {
        "age": 38,
        "occupation": "Sculptor",
        "temperament": "Optimistic and Playful",
        "want": "Belonging",
        "flaw": "Indecisive",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Leo",
        "Rose",
        "Tony",
        "Aurora",
        "Hana",
        "Akane"
      ],
      "places": [
        "Aubenas",
        "Wetherby",
        "Aibetsu"
      ],
      "opening": "a sound",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a line of dialogue",
      "protagonist": {
        "age": 80,
        "occupation": "Teacher",
        "temperament": "Patient and Suspicious",
        "want": "Stability",
        "flaw": "Greedy",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Nikolai",
        "Clark",
        "Iris",
        "Hope",
        "Claire",
        "Anika"
      ],
      "places": [
        "Damariscotta",
        "Yarm",
        "Alnmouth"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "outright defeat",
      "cadence": "a concrete physical action",
      "protagonist": {
        "age": 76,
        "occupation": "Shipwright",
        "temperament": "Optimistic and Suspicious",
        "want": "Peace",
        "flaw": "Cynical",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Tim",
        "Celine",
        "Odet",
        "Max",
        "Michaela",
        "Cassandra"
      ],
      "places": [
        "Rhayader",
        "Tavistock",
        "Iwanai"
      ],
      "opening": "a sound",
      "endingType": "cliffhanger mid-action",
      "cadence": "a concrete physical action",
      "protagonist": {
        "age": 69,
        "occupation": "Ranger",
        "temperament": "Curious and Stoic",
        "want": "Peace",
        "flaw": "Impulsive",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Nora",
        "Benjamin",
        "Nathaniel",
        "Hans",
        "Aiko",
        "Luca"
      ],
      "places": [
        "Marumori",
        "Dorking",
        "Westbury"
      ],
      "opening": "a sound",
      "endingType": "absurdist deflation",
      "cadence": "a question",
      "protagonist": {
        "age": 74,
        "occupation": "Sculptor",
        "temperament": "Curious and Playful",
        "want": "Acceptance",
        "flaw": "Cynical",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Sakura",
        "Charles",
        "Mohammed",
        "Leon",
        "Ethan",
        "Sabine"
      ],
      "places": [
        "Bellingham",
        "Dunster",
        "The Crown"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "stalemate formalized in writing",
      "cadence": "a sensory image",
      "protagonist": {
        "age": 50,
        "occupation": "Surveyor",
        "temperament": "Cheerful and Optimistic",
        "want": "Love",
        "flaw": "Indecisive",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Nyra",
        "Eleanor",
        "James",
        "Edward",
        "Dmitri",
        "Ilya"
      ],
      "places": [
        "Dolgellau",
        "Lockerbie",
        "Frome"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a sensory image",
      "protagonist": {
        "age": 27,
        "occupation": "Tailor",
        "temperament": "Suspicious and Reserved",
        "want": "Mastery",
        "flaw": "Workaholic",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Thomas",
        "Lucia",
        "George",
        "Chris",
        "Misaki",
        "Felix"
      ],
      "places": [
        "Chippubetsu",
        "Bourton",
        "Azay-le-Rideau"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a line of dialogue",
      "protagonist": {
        "age": 66,
        "occupation": "Podcaster",
        "temperament": "Playful and Compassionate",
        "want": "Excitement",
        "flaw": "Reckless",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Victor",
        "Matthias",
        "Adolf",
        "Olivia",
        "Daniel",
        "Jonathan"
      ],
      "places": [
        "Bacharach",
        "Crieff",
        "Porlock"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a line of dialogue",
      "protagonist": {
        "age": 26,
        "occupation": "Teacher",
        "temperament": "Bold and Reserved",
        "want": "Peace",
        "flaw": "Reckless",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Isaac",
        "Damon",
        "Emilia",
        "Alexis",
        "Jarek",
        "Yuki"
      ],
      "places": [
        "The Swan",
        "Callander",
        "Ramsbottom"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a line of dialogue",
      "protagonist": {
        "age": 40,
        "occupation": "Marine",
        "temperament": "Compassionate and Patient",
        "want": "A fresh start",
        "flaw": "Manipulative",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Viola",
        "Violet",
        "Annabelle",
        "Vladimir",
        "Evelyn",
        "Sophia"
      ],
      "places": [
        "Ullapool",
        "North Star",
        "Wincanton"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "the antagonist wins and is right",
      "cadence": "a concrete physical action",
      "protagonist": {
        "age": 80,
        "occupation": "Blacksmith",
        "temperament": "Stoic and Methodical",
        "want": "Privacy",
        "flaw": "Indecisive",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Haruka",
        "Markus",
        "Anna",
        "Kaori",
        "Alan",
        "Maxwell"
      ],
      "places": [
        "Hidaka",
        "Morning Star",
        "Hakone"
      ],
      "opening": "a smell or taste",
      "endingType": "stalemate formalized in writing",
      "cadence": "a line of dialogue",
      "protagonist": {
        "age": 54,
        "occupation": "Tailor",
        "temperament": "Patient and Stoic",
        "want": "Stability",
        "flaw": "Distrustful",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Michael",
        "Valerie",
        "Luna",
        "Alice",
        "Jose",
        "Corwin"
      ],
      "places": [
        "Kuriyama",
        "Ikawa",
        "Dinan"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "absurdist deflation",
      "cadence": "a concrete physical action",
      "protagonist": {
        "age": 56,
        "occupation": "Shipwright",
        "temperament": "Compassionate and Methodical",
        "want": "Stability",
        "flaw": "Naive",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Aldren",
        "Kaia",
        "Athena",
        "Isabella",
        "Natalia",
        "Naomi"
      ],
      "places": [
        "Bruton",
        "Diss",
        "Thetford"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "pyrrhic victory",
      "cadence": "a sensory image",
      "protagonist": {
        "age": 54,
        "occupation": "Botanist",
        "temperament": "Methodical and Compassionate",
        "want": "Purpose",
        "flaw": "Greedy",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Ariel",
        "Jackson",
        "Dan",
        "Andrew",
        "Maria",
        "David"
      ],
      "places": [
        "Amagi",
        "The Coach House",
        "Bifuka"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "stalemate formalized in writing",
      "cadence": "a line of dialogue",
      "protagonist": {
        "age": 27,
        "occupation": "Electrician",
        "temperament": "Playful and Patient",
        "want": "Creativity",
        "flaw": "Cynical",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Helena",
        "Astrid",
        "Michelle",
        "Nicholas",
        "Jack",
        "Victoria"
      ],
      "places": [
        "Erimo",
        "Corbridge",
        "Wigton"
      ],
      "opening": "a smell or taste",
      "endingType": "justice served coldly",
      "cadence": "a question",
      "protagonist": {
        "age": 23,
        "occupation": "Courier",
        "temperament": "Curious and Playful",
        "want": "Knowledge",
        "flaw": "Secretive",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Henry",
        "Nessa",
        "Julian",
        "Isabelle",
        "Toren",
        "Clara"
      ],
      "places": [
        "The Bell",
        "Baddeck",
        "Knighton"
      ],
      "opening": "a sound",
      "endingType": "outright defeat",
      "cadence": "a line of dialogue",
      "protagonist": {
        "age": 58,
        "occupation": "Astronomer",
        "temperament": "Playful and Optimistic",
        "want": "Beauty",
        "flaw": "Selfish",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Paul",
        "Gideon",
        "Lynn",
        "Petra",
        "Natasha",
        "Emric"
      ],
      "places": [
        "Brading",
        "Shipston",
        "Ystradgynlais"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "comic reversal",
      "cadence": "a line of dialogue",
      "protagonist": {
        "age": 50,
        "occupation": "Botanist",
        "temperament": "Bold and Reserved",
        "want": "Love",
        "flaw": "Sadistic",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Richard",
        "Nolan",
        "Bran",
        "Celeste",
        "Cedric",
        "Davis"
      ],
      "places": [
        "Builth",
        "Malmesbury",
        "Ichikawamisato"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "outright defeat",
      "cadence": "a concrete physical action",
      "protagonist": {
        "age": 22,
        "occupation": "Electrician",
        "temperament": "Playful and Reserved",
        "want": "Legacy",
        "flaw": "Arrogant",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Amelia",
        "Rachel",
        "Dante",
        "Katherine",
        "Ramsey",
        "William"
      ],
      "places": [
        "Sidmouth",
        "Loches",
        "Kirriemuir"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a concrete physical action",
      "protagonist": {
        "age": 71,
        "occupation": "Courier",
        "temperament": "Methodical and Compassionate",
        "want": "Revenge",
        "flaw": "Secretive",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-conflict",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Lily",
        "Marlow",
        "Summer",
        "Orin",
        "Eva",
        "Persephone"
      ],
      "places": [
        "Castle Combe",
        "Ventnor",
        "Lavenham"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "justice served coldly",
      "cadence": "a question",
      "protagonist": {
        "age": 67,
        "occupation": "Baker",
        "temperament": "Patient and Playful",
        "want": "Fame",
        "flaw": "Greedy",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Isaac",
        "Lucien",
        "Orin",
        "Bran",
        "Tiffany",
        "Ariel"
      ],
      "places": [
        "Helmsley",
        "Inawashiro",
        "Sea Venture"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "outright defeat",
      "cadence": "a concrete physical action",
      "conflict": "Protect a village from an unknown threat."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Sakura",
        "Cassandra",
        "Valerie",
        "Matthias",
        "Emily",
        "Charlotte"
      ],
      "places": [
        "Laguardia",
        "Ampleforth",
        "Lunenburg"
      ],
      "opening": "a sound",
      "endingType": "stalemate formalized in writing",
      "cadence": "a concrete physical action",
      "conflict": "Solve a mysterious disappearance."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Hope",
        "Felix",
        "Sabine",
        "Alice",
        "Maria",
        "Olivia"
      ],
      "places": [
        "Idstein",
        "Hayama",
        "Abira"
      ],
      "opening": "a smell or taste",
      "endingType": "the antagonist wins and is right",
      "cadence": "a line of dialogue",
      "conflict": "Solve a mysterious disappearance."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Jasmine",
        "Lily",
        "Edward",
        "Richard",
        "Jack",
        "Chris"
      ],
      "places": [
        "Faringdon",
        "Witney",
        "Kuromatsunai"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "pyrrhic victory",
      "cadence": "a concrete physical action",
      "conflict": "Stop two rival factions from starting a war"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Violet",
        "Toren",
        "Samuel",
        "Talia",
        "Graham",
        "Athena"
      ],
      "places": [
        "Bibury",
        "Adare",
        "Karuizawa"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "cliffhanger mid-action",
      "cadence": "a question",
      "conflict": "Deliver a fragile artifact before it fails."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Sebastian",
        "Thomas",
        "Dan",
        "Astrid",
        "Diana",
        "Johan"
      ],
      "places": [
        "Haddington",
        "Narberth",
        "Furubira"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a line of dialogue",
      "conflict": "Win a dangerous tournament."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Charles",
        "Paul",
        "Anna",
        "Vladimir",
        "Akane",
        "Dominic"
      ],
      "places": [
        "Hannoversch Munden",
        "Hiroo",
        "Civita di Bagnoregio"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "cliffhanger mid-action",
      "cadence": "a line of dialogue",
      "conflict": "Survive an expedition into hostile territory."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Victoria",
        "Max",
        "Elena",
        "Nolan",
        "Peter",
        "Davis"
      ],
      "places": [
        "Koshimizu",
        "Northleach",
        "Betsukai"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "justice served coldly",
      "cadence": "a concrete physical action",
      "conflict": "Rescue a kidnapped mentor."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Kaori",
        "Kaia",
        "Mohammed",
        "Nyra",
        "Aiko",
        "Clara"
      ],
      "places": [
        "Mamurogawa",
        "Nairn",
        "Whitstable"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "pyrrhic victory",
      "cadence": "a sensory image",
      "conflict": "Stop two rival factions from starting a war"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Celine",
        "Haruka",
        "Mei",
        "Michael",
        "Claire",
        "Selene"
      ],
      "places": [
        "Ichikawamisato",
        "Aldbourne",
        "Sedbergh"
      ],
      "opening": "a smell or taste",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a question",
      "conflict": "Stop two rival factions from starting a war"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Amelia",
        "Julian",
        "Rin",
        "Jose",
        "Hana",
        "Ryan"
      ],
      "places": [
        "Tenterden",
        "The Crown",
        "Aberfeldy"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a concrete physical action",
      "conflict": "Deliver a fragile artifact before it fails."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Emric",
        "Frederick",
        "Ethan",
        "Natasha",
        "Markus",
        "Vincent"
      ],
      "places": [
        "Aibetsu",
        "Crowland",
        "Crickhowell"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "stalemate formalized in writing",
      "cadence": "a line of dialogue",
      "conflict": "Solve a mysterious disappearance."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "James",
        "Eva",
        "Leo",
        "Naomi",
        "Eleanor",
        "Tony"
      ],
      "places": [
        "Stow-on-the-Wold",
        "Ravenglass",
        "Ajigasawa"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "justice served coldly",
      "cadence": "a question",
      "conflict": "Prevent an assassination."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Summer",
        "Sophia",
        "Henry",
        "Eric",
        "Petra",
        "Isabella"
      ],
      "places": [
        "Frome",
        "Whitchurch",
        "Blockley"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "cliffhanger mid-action",
      "cadence": "a sensory image",
      "conflict": "Win a dangerous tournament."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Nikolai",
        "Persephone",
        "Daniel",
        "Rachel",
        "Anika",
        "Rose"
      ],
      "places": [
        "Rhayader",
        "Kirkby Lonsdale",
        "Erice"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "the antagonist wins and is right",
      "cadence": "a sensory image",
      "conflict": "Break a powerful curse."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Jarek",
        "Nicholas",
        "Katherine",
        "Marlow",
        "Ivan",
        "Evelyn"
      ],
      "places": [
        "Callander",
        "Brantome",
        "The Bell"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a sensory image",
      "conflict": "Solve a mysterious disappearance."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Leon",
        "Alan",
        "William",
        "Helena",
        "Riven",
        "Clark"
      ],
      "places": [
        "Bedale",
        "Wigton",
        "Ingleton"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "cliffhanger mid-action",
      "cadence": "a concrete physical action",
      "conflict": "Escape an isolated region."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Ramsey",
        "Lynn",
        "Freya",
        "Ilya",
        "Dmitri",
        "Viola"
      ],
      "places": [
        "Easingwold",
        "Thetford",
        "Gordes"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a line of dialogue",
      "conflict": "Rescue a kidnapped mentor."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Paula",
        "Nathan",
        "Anton",
        "Dante",
        "Ronan",
        "Isabelle"
      ],
      "places": [
        "Kenbuchi",
        "Melrose",
        "Chatham"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "comic reversal",
      "cadence": "a sensory image",
      "conflict": "Stop two rival factions from starting a war"
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Michaela",
        "Cedric",
        "Jackson",
        "Misaki",
        "Arthur",
        "Aurora"
      ],
      "places": [
        "Tain",
        "Dingle",
        "Eiheiji"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "justice served coldly",
      "cadence": "a line of dialogue",
      "conflict": "Escape an isolated region."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Alexis",
        "Xavier",
        "Jonathan",
        "Gideon",
        "Benjamin",
        "Nathaniel"
      ],
      "places": [
        "Bacharach",
        "Harbour View",
        "Funagata"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "justice served coldly",
      "cadence": "a sensory image",
      "conflict": "Win a dangerous tournament."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Arabella",
        "Adrian",
        "Hans",
        "John",
        "Garrick",
        "Yuki"
      ],
      "places": [
        "Tetbury",
        "Calverton",
        "Lympstone"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "cliffhanger mid-action",
      "cadence": "a sensory image",
      "conflict": "Protect a village from an unknown threat."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "David",
        "Catherine",
        "Michelle",
        "Eliana",
        "George",
        "Nessa"
      ],
      "places": [
        "Beaminster",
        "Kyogoku",
        "Wetherby"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a sensory image",
      "conflict": "Break a powerful curse."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "minus-protagonist",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Celeste",
        "Gabriel",
        "Odet",
        "Iris",
        "Luca",
        "Andrew"
      ],
      "places": [
        "Erimo",
        "Biei",
        "Rothbury"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "outright defeat",
      "cadence": "a concrete physical action",
      "conflict": "Uncover the source of a strange phenomenon."
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "haiku",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Adrian",
        "Paula",
        "Katherine",
        "Nora",
        "Isabella",
        "Talia"
      ],
      "places": [
        "Hawes",
        "Ichikawamisato",
        "Blockley"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "cliffhanger mid-action",
      "cadence": "a sensory image",
      "conflict": "Protect a village from an unknown threat.",
      "protagonist": {
        "age": 25,
        "occupation": "Astronomer",
        "temperament": "Cheerful and Optimistic",
        "want": "Respect",
        "flaw": "Secretive",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": true
  },
  {
    "condition": "full",
    "model": "haiku",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Clark",
        "Daniel",
        "Chris",
        "Cedric",
        "Helena",
        "Riven"
      ],
      "places": [
        "Bruton",
        "Fujisaki",
        "Adare"
      ],
      "opening": "a sound",
      "endingType": "outright defeat",
      "cadence": "a line of dialogue",
      "conflict": "Find a missing explorer.",
      "protagonist": {
        "age": 38,
        "occupation": "Streamer",
        "temperament": "Suspicious and Curious",
        "want": "Recognition",
        "flaw": "Jealous",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": true
  },
  {
    "condition": "full",
    "model": "haiku",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Marlow",
        "Nolan",
        "Yuki",
        "James",
        "Iris",
        "Ethan"
      ],
      "places": [
        "Whitchurch",
        "Corfe Castle",
        "Alnmouth"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "comic reversal",
      "cadence": "a question",
      "conflict": "Win a dangerous tournament.",
      "protagonist": {
        "age": 80,
        "occupation": "Falconer",
        "temperament": "Curious and Bold",
        "want": "Mastery",
        "flaw": "Stubborn",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "haiku",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Eric",
        "Graham",
        "Victor",
        "Kaia",
        "Ariel",
        "Richard"
      ],
      "places": [
        "Ashbourne",
        "Blythburgh",
        "Ullapool"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "outright defeat",
      "cadence": "a question",
      "conflict": "Break a powerful curse.",
      "protagonist": {
        "age": 62,
        "occupation": "CIA Agent",
        "temperament": "Reserved and Bold",
        "want": "Creativity",
        "flaw": "Reckless",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "haiku",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Johan",
        "Charles",
        "Gabriel",
        "Persephone",
        "Rachel",
        "Luna"
      ],
      "places": [
        "Idstein",
        "Kiyosato",
        "Azay-le-Rideau"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "comic reversal",
      "cadence": "a sensory image",
      "conflict": "Protect a village from an unknown threat.",
      "protagonist": {
        "age": 55,
        "occupation": "Shipwright",
        "temperament": "Reserved and Stoic",
        "want": "Acceptance",
        "flaw": "Distrustful",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "haiku",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Athena",
        "Gideon",
        "Felix",
        "Tony",
        "Odet",
        "Ronan"
      ],
      "places": [
        "Hannoversch Munden",
        "Beilstein",
        "Montrose"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "the antagonist wins and is right",
      "cadence": "a question",
      "conflict": "Find a missing explorer.",
      "protagonist": {
        "age": 35,
        "occupation": "Mason",
        "temperament": "Methodical and Bold",
        "want": "Legacy",
        "flaw": "Judgmental",
        "timespan": "twenty years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "haiku",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Isabelle",
        "Jarek",
        "Emric",
        "Michael",
        "Charlotte",
        "Jasmine"
      ],
      "places": [
        "Kirriemuir",
        "Porlock",
        "Yarm"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a question",
      "conflict": "Deliver a fragile artifact before it fails.",
      "protagonist": {
        "age": 41,
        "occupation": "Streamer",
        "temperament": "Curious and Patient",
        "want": "Excitement",
        "flaw": "Cynical",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "haiku",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Michelle",
        "Max",
        "Michaela",
        "Lily",
        "Anna",
        "Olivia"
      ],
      "places": [
        "The White Hart",
        "The Crown",
        "Kanegasaki"
      ],
      "opening": "a smell or taste",
      "endingType": "pyrrhic victory",
      "cadence": "a concrete physical action",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 68,
        "occupation": "Botanist",
        "temperament": "Curious and Optimistic",
        "want": "Knowledge",
        "flaw": "Secretive",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "sonnet",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Celeste",
        "Alex",
        "Luca",
        "Xavier",
        "Rin",
        "Markus"
      ],
      "places": [
        "Sea Venture",
        "Horonobe",
        "Presteigne"
      ],
      "opening": "a sound",
      "endingType": "twist that recontextualizes everything",
      "cadence": "a concrete physical action",
      "conflict": "Win a dangerous tournament.",
      "protagonist": {
        "age": 35,
        "occupation": "Locksmith",
        "temperament": "Patient and Suspicious",
        "want": "Redemption",
        "flaw": "Naive",
        "timespan": "six years"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "sonnet",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Natasha",
        "Kaori",
        "Eliana",
        "Diana",
        "Mohammed",
        "Evelyn"
      ],
      "places": [
        "Camden",
        "Crieff",
        "Clitheroe"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "pyrrhic victory",
      "cadence": "a question",
      "conflict": "Uncover the source of a strange phenomenon.",
      "protagonist": {
        "age": 26,
        "occupation": "Sculptor",
        "temperament": "Playful and Cheerful",
        "want": "Acceptance",
        "flaw": "Hot-headed",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "sonnet",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Clara",
        "Vladimir",
        "Misaki",
        "Damon",
        "Benjamin",
        "Amelia"
      ],
      "places": [
        "Aubenas",
        "Harlech",
        "Goka"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "justice served coldly",
      "cadence": "a question",
      "conflict": "Solve a mysterious disappearance.",
      "protagonist": {
        "age": 41,
        "occupation": "Baker",
        "temperament": "Patient and Suspicious",
        "want": "Excitement",
        "flaw": "Naive",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "sonnet",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Freya",
        "Ryan",
        "Bran",
        "Natalia",
        "George",
        "Annabelle"
      ],
      "places": [
        "Dinkelsbuhl",
        "Kahoku",
        "Knighton"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "justice served coldly",
      "cadence": "a question",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 27,
        "occupation": "Mason",
        "temperament": "Cheerful and Bold",
        "want": "Privacy",
        "flaw": "Arrogant",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "sonnet",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Anton",
        "Naomi",
        "Eleanor",
        "Vincent",
        "Astrid",
        "Anika"
      ],
      "places": [
        "Harbour View",
        "Crowland",
        "Ashwell"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "comic reversal",
      "cadence": "a line of dialogue",
      "conflict": "Rescue a kidnapped mentor.",
      "protagonist": {
        "age": 69,
        "occupation": "Falconer",
        "temperament": "Methodical and Compassionate",
        "want": "Fame",
        "flaw": "Hot-headed",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "sonnet",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Petra",
        "Summer",
        "Ilya",
        "Alice",
        "Jackson",
        "Matthias"
      ],
      "places": [
        "Tavistock",
        "Eberbach",
        "Edgartown"
      ],
      "opening": "a sound",
      "endingType": "outright defeat",
      "cadence": "a sensory image",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 72,
        "occupation": "Detective",
        "temperament": "Melancholic and Curious",
        "want": "Belonging",
        "flaw": "Impulsive",
        "timespan": "one night"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "sonnet",
    "premise": "Memories can be planted like gardens.",
    "cards": {
      "names": [
        "Claire",
        "Nicholas",
        "Arthur",
        "Akane",
        "Nathan",
        "Elena"
      ],
      "places": [
        "Erimo",
        "The Red Lion",
        "The Old Mill"
      ],
      "opening": "a stated rule or custom of the place",
      "endingType": "absurdist deflation",
      "cadence": "a line of dialogue",
      "conflict": "Discover the truth behind an ancient legend.",
      "protagonist": {
        "age": 32,
        "occupation": "Tailor",
        "temperament": "Optimistic and Reserved",
        "want": "Fame",
        "flaw": "Perfectionistic",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "sonnet",
    "premise": "Animals begin speaking—but only to children, and they refuse to explain why.",
    "cards": {
      "names": [
        "Davis",
        "Sabine",
        "Aurora",
        "Mei",
        "Lucia",
        "David"
      ],
      "places": [
        "Amagi",
        "Findhorn",
        "Leominster"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "absurdist deflation",
      "cadence": "a line of dialogue",
      "conflict": "Escape an isolated region.",
      "protagonist": {
        "age": 19,
        "occupation": "Electrician",
        "temperament": "Patient and Optimistic",
        "want": "Justice",
        "flaw": "Greedy",
        "timespan": "three days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "opus",
    "premise": "The oceans slowly retreat, exposing impossible cities, ecosystems, and creatures that were never meant to be seen.",
    "cards": {
      "names": [
        "Sakura",
        "Violet",
        "Tim",
        "William",
        "Nikolai",
        "Maria"
      ],
      "places": [
        "Henley",
        "Furubira",
        "Crickhowell"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "triumphant, earned cleanly",
      "cadence": "a sensory image",
      "conflict": "Prevent an assassination.",
      "protagonist": {
        "age": 29,
        "occupation": "Inventor",
        "temperament": "Methodical and Compassionate",
        "want": "Creativity",
        "flaw": "Selfish",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "opus",
    "premise": "Time freezes everywhere except inside libraries.",
    "cards": {
      "names": [
        "Edward",
        "Adolf",
        "Orin",
        "Nyra",
        "Lucien",
        "Nessa"
      ],
      "places": [
        "Dinan",
        "Tetbury",
        "Rothesay"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "absurdist deflation",
      "cadence": "a line of dialogue",
      "conflict": "Solve a mysterious disappearance.",
      "protagonist": {
        "age": 55,
        "occupation": "Teacher",
        "temperament": "Cheerful and Suspicious",
        "want": "Mastery",
        "flaw": "Indecisive",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "opus",
    "premise": "People can swap memories like possessions",
    "cards": {
      "names": [
        "Leon",
        "Eva",
        "Leo",
        "Selene",
        "Arabella",
        "John"
      ],
      "places": [
        "Laguardia",
        "Llantwit Major",
        "Bishopton"
      ],
      "opening": "a line of spoken dialogue",
      "endingType": "comic reversal",
      "cadence": "a line of dialogue",
      "conflict": "Solve a mysterious disappearance.",
      "protagonist": {
        "age": 57,
        "occupation": "Baker",
        "temperament": "Reserved and Compassionate",
        "want": "Security",
        "flaw": "Manipulative",
        "timespan": "six weeks"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "opus",
    "premise": "A mysterious train arrives once every decade, stopping at towns that don't exist on any map. Anyone may board, but nobody knows where it goes—or what they'll become when they return.",
    "cards": {
      "names": [
        "Tiffany",
        "Valerie",
        "Rose",
        "Cassandra",
        "Catherine",
        "Alan"
      ],
      "places": [
        "Albarracin",
        "Marumori",
        "Burford"
      ],
      "opening": "an action already underway mid-scene",
      "endingType": "pyrrhic victory",
      "cadence": "a question",
      "conflict": "Solve a mysterious disappearance.",
      "protagonist": {
        "age": 78,
        "occupation": "Archaeologist",
        "temperament": "Reserved and Curious",
        "want": "Happiness",
        "flaw": "Stubborn",
        "timespan": "one summer"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "opus",
    "premise": "A city wakes up one day to discover every person's inner thoughts have become visible.",
    "cards": {
      "names": [
        "Paul",
        "Nathaniel",
        "Viola",
        "Ivan",
        "Dmitri",
        "Sebastian"
      ],
      "places": [
        "Woodbridge",
        "Calverton",
        "Rothbury"
      ],
      "opening": "a smell or taste",
      "endingType": "comic reversal",
      "cadence": "a question",
      "conflict": "Find a missing explorer.",
      "protagonist": {
        "age": 30,
        "occupation": "Podcaster",
        "temperament": "Optimistic and Reserved",
        "want": "Peace",
        "flaw": "Sadistic",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "opus",
    "premise": "The world's luck is finite, and someone has begun stealing it.",
    "cards": {
      "names": [
        "Corwin",
        "Jose",
        "Garrick",
        "Samuel",
        "Julian",
        "Dominic"
      ],
      "places": [
        "Bellingham",
        "Biddenden",
        "Witney"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "comic reversal",
      "cadence": "a sensory image",
      "conflict": "Uncover the source of a strange phenomenon.",
      "protagonist": {
        "age": 47,
        "occupation": "Marine",
        "temperament": "Suspicious and Playful",
        "want": "Adventure",
        "flaw": "Jealous",
        "timespan": "eleven days"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "opus",
    "premise": "Every dream leaves behind a physical object by morning.",
    "cards": {
      "names": [
        "Hope",
        "Frederick",
        "Andrew",
        "Thomas",
        "Maxwell",
        "Dante"
      ],
      "places": [
        "Wendover",
        "Beccles",
        "Kingfisher"
      ],
      "opening": "a specific physical object in someone's hands",
      "endingType": "pyrrhic victory",
      "cadence": "a sensory image",
      "conflict": "Stop two rival factions from starting a war",
      "protagonist": {
        "age": 35,
        "occupation": "Astronomer",
        "temperament": "Cheerful and Bold",
        "want": "Discovery",
        "flaw": "Perfectionistic",
        "timespan": "fourteen months"
      }
    },
    "fableSpotCheck": false
  },
  {
    "condition": "full",
    "model": "opus",
    "premise": "A mountain slowly walks across the continent once every thousand years.",
    "cards": {
      "names": [
        "Ramsey",
        "Peter",
        "Victoria",
        "Jonathan",
        "Hana",
        "Dan"
      ],
      "places": [
        "Dunster",
        "Diss",
        "The Anchor"
      ],
      "opening": "a sound",
      "endingType": "outright defeat",
      "cadence": "a line of dialogue",
      "conflict": "Solve a mysterious disappearance.",
      "protagonist": {
        "age": 28,
        "occupation": "Teacher",
        "temperament": "Suspicious and Stoic",
        "want": "Revenge",
        "flaw": "Cynical",
        "timespan": "a single hour"
      }
    },
    "fableSpotCheck": false
  }
]
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

