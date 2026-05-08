/** @typedef {{ id: string; title: string; meaning: string; principles: string[]; stressTests: string[]; tools: string[] }} ValueCluster */

/** @typedef {{ id: string; title: string; description: string; clusterId: string | null }} ToolIdeaCard */

/** @type {ValueCluster[]} */
export const defaultClusters = [
  {
    id: 'honesty-truth',
    title: 'Honesty & Truth',
    meaning:
      'Prefer accurate framing over flattering narratives. Name tradeoffs plainly and avoid misleading yourself or others for short-term comfort.',
    principles: [
      'Say what you mean without cruelty',
      'Distinguish facts, interpretations, and feelings',
      'Correct errors quickly, even when awkward',
      'Avoid performative transparency',
    ],
    stressTests: [
      'Does this feel coercive?',
      'Does this feel like forced justification?',
      'Am I hiding uncertainty behind confidence?',
    ],
    tools: [
      'Decision journal with “what I know vs assume”',
      'Plain-language spec template',
      'Bias check before publishing',
    ],
  },
  {
    id: 'autonomy-freedom',
    title: 'Autonomy / Freedom',
    meaning:
      'Design systems so you can opt in, pause, or exit without punishment. Favor tools and relationships that expand choice rather than trap momentum.',
    principles: [
      'Defaults should be reversible',
      'Consent is ongoing, not one-time',
      'Minimize lock-in where it harms you',
      'Protect slack time as a resource',
    ],
    stressTests: [
      'Does this feel coercive?',
      'Does this feel overwhelming?',
      'Does refusal feel costly or shameful?',
    ],
    tools: [
      'Exit criteria checklist for commitments',
      'Low-pressure scheduling blocks',
      'Personal data portability kit',
    ],
  },
  {
    id: 'memory-preservation',
    title: 'Memory Preservation',
    meaning:
      'Treat personal archives as first-class: photos, writing, voice notes, and metadata deserve durable, searchable homes you control.',
    principles: [
      'Archive before optimize',
      'Prefer open formats (text, images, PDF)',
      'Tag lightly but consistently',
      'Back up in more than one place',
    ],
    stressTests: [
      'Does this feel fragile?',
      'Does this feel overwhelming?',
      'Does it help preserve memory?',
    ],
    tools: [
      'Yearly archive audit',
      'Checksum + folder manifest script',
      'Memoir / theme index spreadsheet',
    ],
  },
  {
    id: 'constraint-aware',
    title: 'Constraint-Aware Living',
    meaning:
      'Acknowledge energy, time, money, and emotional bandwidth as real limits. Plans that ignore constraints collapse; plans that respect them last.',
    principles: [
      'Budget capacity before ambition',
      'One primary focus per season when possible',
      'Automate repetition; reserve humans for judgment',
      'Celebrate “enough”',
    ],
    stressTests: [
      'Does this feel overwhelming?',
      'Does this feel unsafe?',
      'Is this honest about real limits?',
    ],
    tools: [
      'Energy-based weekly planner',
      'Constraint canvas (time/money/spoons)',
      '“If I only had 20% effort” version of each project',
    ],
  },
  {
    id: 'refusal-valid',
    title: 'Refusal is Valid',
    meaning:
      'No is a complete sentence. Systems and people worth keeping make space for boundaries without retaliation or guilt mining.',
    principles: [
      'Pre-decide common nos',
      'Offer alternatives only when you want to',
      'Notice obligation language early',
      'Protect recovery after hard nos',
    ],
    stressTests: [
      'Does this feel coercive?',
      'Is refusal allowed?',
      'Does this feel like forced justification?',
    ],
    tools: [
      'Boundary phrase bank',
      'Cooling-off timer before saying yes',
      'Values-based decline templates',
    ],
  },
  {
    id: 'clarity-performance',
    title: 'Clarity over Performance',
    meaning:
      'Optimize for understanding and maintainability over looking busy or impressive. Simple beats clever when stakes are human.',
    principles: [
      'Prefer plain structure to ornate dashboards',
      'Measure comprehension, not vanity metrics',
      'Document the “why” once',
      'Delete features that confuse you six months later',
    ],
    stressTests: [
      'Does this feel like forced justification?',
      'Is it clear?',
      'Am I performing competence?',
    ],
    tools: [
      'README-first project rule',
      'One-page architecture sketches',
      '“Explain to future tired me” notes',
    ],
  },
  {
    id: 'care-action',
    title: 'Care as Action',
    meaning:
      'Care shows up in behavior: accessibility, follow-through, and harm reduction—not only in intent or aesthetics.',
    principles: [
      'Ship kind defaults',
      'Ask who is burdened by this design',
      'Repair mistakes with proportionate effort',
      'Small reliable help beats rare grand gestures',
    ],
    stressTests: [
      'Does this feel unsafe?',
      'Does this feel coercive?',
      'Who does this protect or exclude?',
    ],
    tools: [
      'Accessibility pass checklist',
      'Support ladder for friends/community',
      'Post-mortem with care lens',
    ],
  },
];

/** @type {{ inputs: string[]; process: string[]; outputs: string[] }} */
export const defaultWorkflow = {
  inputs: [
    'Personal archives',
    'Life themes and essays',
    'UI inspiration',
    'Problems to solve',
  ],
  process: [
    'Extract data',
    'Structure with tags / taxonomies / schemas',
    'Build tools',
    'Design polish',
    'Package and distribute',
  ],
  outputs: [
    'Dashboards and analyzers',
    'Templates and ebooks',
    'Repos and product drops',
    'Identity maps',
  ],
};

/** @type {ToolIdeaCard[]} */
export const defaultToolIdeas = [
  {
    id: 'ti-archive-dash',
    title: 'Personal archive dashboard',
    description:
      'Local-first viewer for notes and media with faceted tags, integrity checks, and export bundles.',
    clusterId: 'memory-preservation',
  },
  {
    id: 'ti-memoir-map',
    title: 'Memoir theme mapper',
    description:
      'Graph recurring life themes across journals; link excerpts to values for long-form writing.',
    clusterId: 'memory-preservation',
  },
  {
    id: 'ti-low-energy',
    title: 'Low-energy workflow planner',
    description:
      'Plans tasks by spoon levels; surfaces tiny next steps and refusal-friendly deferrals.',
    clusterId: 'constraint-aware',
  },
  {
    id: 'ti-non-extractive',
    title: 'Non-extractive form builder',
    description:
      'Collect only necessary fields; explicit retention; easy delete/export for respondents.',
    clusterId: 'honesty-truth',
  },
  {
    id: 'ti-trauma-filter',
    title: 'Trauma-aware content filter',
    description:
      'Keyword / tone filters for feeds with pause rituals and “safe mode” reading layouts.',
    clusterId: 'care-action',
  },
  {
    id: 'ti-portable-export',
    title: 'Portable PDF / ZIP generator',
    description:
      'One-click packs of essays, assets, and manifests for offline sharing or archival.',
    clusterId: 'memory-preservation',
  },
  {
    id: 'ti-values-eval',
    title: 'Values-based project evaluator',
    description:
      'Score ideas against autonomy, clarity, safety, and refusal—like this app’s evaluator, but exportable.',
    clusterId: 'clarity-performance',
  },
];

export const STORAGE_KEY = 'identity-core-v1';

export const evaluatorCriteria = [
  { id: 'autonomy', label: 'Does it preserve autonomy?', hint: 'Exit paths, consent, low manipulation' },
  { id: 'lowEnergy', label: 'Is it low-energy usable?', hint: 'Defaults, small steps, forgiving UX' },
  { id: 'portable', label: 'Is it portable?', hint: 'Open formats, exports, minimal vendor lock-in' },
  { id: 'refusal', label: 'Is refusal allowed?', hint: 'Boundaries respected without penalty' },
  { id: 'clarity', label: 'Is it clear?', hint: 'Plain language, obvious next actions' },
  { id: 'safety', label: 'Is it safe?', hint: 'Harm reduction, privacy, emotional risk' },
  { id: 'memory', label: 'Does it help preserve memory?', hint: 'Archives, provenance, durable records' },
];
