// One list of projects, in display order. The Home work grid and the case study
// page (including "Next project") both read from here.
//
// Home grid fields: slug, title, highlight, tint, cover (an imported image from
// src/assets/covers/, or null to show the tint).
//
// Case study fields:
//   summary       one line under the title
//   meta          { type, role, year, tools }
//   heroImage     { src, alt, caption } (optional; no src shows a placeholder)
//   prototypeUrl  link to the prototype (optional; no link is shown without it)
//   blocks        the story, in order. Each block has a "type":
//     text       { heading, paragraphs: [] }
//     image      { src, alt, caption }
//     twoImages  { images: [{ src, alt, caption }, { src, alt, caption }] }
//     quote      { text, source }
//     results    { items: [{ value, label }] } (two to four items)
//     gallery    { shape: 'landscape' or 'phone', images: [{ src, alt }] }
//
// Images go in src/assets/projects/<slug>/. Import them at the top of this file
// and use the import as src. An empty src shows an "Image placeholder" box.

export const projects = [
  {
    slug: 'sensa',
    title: 'Sensa',
    highlight: 'One-line highlight goes here.',
    tint: 'var(--color-tint-sand)',
    cover: null,
    summary: 'A data analysis tool, designed and built end to end.',
    meta: {
      type: 'Concept project',
      role: 'Product designer',
      year: '2025',
      tools: ['Figma', 'React'],
    },
    heroImage: { src: '', alt: 'Sensa final design' },
    blocks: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: ['Placeholder. Why this problem matters, in a few sentences.'],
      },
      {
        type: 'text',
        heading: 'The solution',
        paragraphs: ['Placeholder. What was designed, in a few sentences.'],
      },
      { type: 'image', src: '', alt: 'Sensa solution', caption: 'Placeholder caption.' },
      {
        type: 'text',
        heading: 'How I did it',
        paragraphs: ['Placeholder. The process, told as decisions.'],
      },
      { type: 'quote', text: 'Placeholder quote from the research.', source: 'Placeholder source' },
      {
        type: 'twoImages',
        images: [
          { src: '', alt: 'Sensa process screen one', caption: 'Placeholder caption.' },
          { src: '', alt: 'Sensa process screen two', caption: 'Placeholder caption.' },
        ],
      },
      {
        type: 'text',
        heading: 'The outcome',
        paragraphs: ['Placeholder. What the design achieves, and what was learned.'],
      },
      {
        type: 'results',
        items: [
          { value: '—', label: 'Placeholder result' },
          { value: '—', label: 'Placeholder result' },
        ],
      },
      {
        type: 'gallery',
        shape: 'landscape',
        images: [
          { src: '', alt: 'Sensa screen' },
          { src: '', alt: 'Sensa screen' },
          { src: '', alt: 'Sensa screen' },
        ],
      },
    ],
  },
  {
    slug: 'flexpay',
    title: 'Flexpay',
    highlight: 'One-line highlight goes here.',
    tint: 'var(--color-tint-blush)',
    cover: null,
    summary: 'A light BNPL flow designed to make shopping easier and clearer.',
    meta: {
      type: 'Concept project',
      role: 'Product designer',
      year: '2024',
      tools: ['Figma', 'FigJam'],
    },
    heroImage: { src: '', alt: 'Flexpay final design' },
    blocks: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: [
          'Placeholder. Buy now, pay later is common in Egypt, but using it often feels stressful and complicated.',
          'Placeholder. Onboarding is long, payment breakdowns are confusing, and there is little reassurance about what you will pay and when.',
        ],
      },
      {
        type: 'text',
        heading: 'The solution',
        paragraphs: [
          'Placeholder. A short description of the Flexpay flow and how it makes paying in parts feel clear and calm.',
        ],
      },
      {
        type: 'image',
        src: '',
        alt: 'Flexpay solution overview',
        caption: 'Placeholder caption for the solution image.',
      },
      {
        type: 'text',
        heading: 'How I did it',
        paragraphs: [
          'Placeholder. The process, told as decisions: because people worry about hidden fees, I did this.',
          'Placeholder. The three strongest findings from the research, and what each one changed in the design.',
        ],
      },
      {
        type: 'quote',
        text: 'Placeholder. A quote from a research participant goes here.',
        source: 'Placeholder source, for example a research participant',
      },
      {
        type: 'twoImages',
        images: [
          { src: '', alt: 'Flexpay process screen one', caption: 'Placeholder caption.' },
          { src: '', alt: 'Flexpay process screen two', caption: 'Placeholder caption.' },
        ],
      },
      {
        type: 'text',
        heading: 'The outcome',
        paragraphs: [
          'Placeholder. What the design achieves against the goals, what was tested with real people, what was learned, and what would be measured next.',
        ],
      },
      {
        type: 'results',
        items: [
          { value: '—', label: 'Sign-up steps vs. competitors' },
          { value: '—', label: 'Steps to see the full payment plan' },
          { value: '—', label: 'People who tested it' },
        ],
      },
      {
        type: 'gallery',
        shape: 'phone',
        images: [
          { src: '', alt: 'Flexpay screen' },
          { src: '', alt: 'Flexpay screen' },
          { src: '', alt: 'Flexpay screen' },
          { src: '', alt: 'Flexpay screen' },
          { src: '', alt: 'Flexpay screen' },
          { src: '', alt: 'Flexpay screen' },
        ],
      },
    ],
  },
  {
    slug: 'goalden',
    title: 'Goalden',
    highlight: 'One-line highlight goes here.',
    tint: 'var(--color-tint-sage)',
    cover: null,
    summary: 'A simple savings flow that guides beginners with clarity.',
    meta: {
      type: 'Concept project',
      role: 'Product designer',
      year: '2024',
      tools: ['Figma'],
    },
    heroImage: { src: '', alt: 'Goalden final design' },
    blocks: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: ['Placeholder. Why this problem matters, in a few sentences.'],
      },
      {
        type: 'text',
        heading: 'The solution',
        paragraphs: ['Placeholder. What was designed, in a few sentences.'],
      },
      { type: 'image', src: '', alt: 'Goalden solution', caption: 'Placeholder caption.' },
      {
        type: 'text',
        heading: 'How I did it',
        paragraphs: ['Placeholder. The process, told as decisions.'],
      },
      { type: 'quote', text: 'Placeholder quote from the research.', source: 'Placeholder source' },
      {
        type: 'twoImages',
        images: [
          { src: '', alt: 'Goalden process screen one', caption: 'Placeholder caption.' },
          { src: '', alt: 'Goalden process screen two', caption: 'Placeholder caption.' },
        ],
      },
      {
        type: 'text',
        heading: 'The outcome',
        paragraphs: ['Placeholder. What the design achieves, and what was learned.'],
      },
      {
        type: 'results',
        items: [
          { value: '—', label: 'Placeholder result' },
          { value: '—', label: 'Placeholder result' },
        ],
      },
      {
        type: 'gallery',
        shape: 'landscape',
        images: [
          { src: '', alt: 'Goalden screen' },
          { src: '', alt: 'Goalden screen' },
          { src: '', alt: 'Goalden screen' },
        ],
      },
    ],
  },
  {
    slug: 'usability-performance-report',
    title: 'Usability Performance Report',
    highlight: 'One-line highlight goes here.',
    tint: 'var(--color-tint-powder)',
    cover: null,
    summary: 'A usability analysis of user behavior with Amplitude and testing.',
    meta: {
      type: 'Concept project',
      role: 'UX researcher',
      year: '2025',
      tools: ['Amplitude', 'Maze'],
    },
    heroImage: { src: '', alt: 'Usability Performance Report overview' },
    blocks: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: ['Placeholder. Why this problem matters, in a few sentences.'],
      },
      {
        type: 'text',
        heading: 'The solution',
        paragraphs: ['Placeholder. What was designed, in a few sentences.'],
      },
      { type: 'image', src: '', alt: 'Usability report findings', caption: 'Placeholder caption.' },
      {
        type: 'text',
        heading: 'How I did it',
        paragraphs: ['Placeholder. The process, told as decisions.'],
      },
      { type: 'quote', text: 'Placeholder quote from the research.', source: 'Placeholder source' },
      {
        type: 'twoImages',
        images: [
          { src: '', alt: 'Usability process image one', caption: 'Placeholder caption.' },
          { src: '', alt: 'Usability process image two', caption: 'Placeholder caption.' },
        ],
      },
      {
        type: 'text',
        heading: 'The outcome',
        paragraphs: ['Placeholder. What the report achieved, and what was learned.'],
      },
      {
        type: 'results',
        items: [
          { value: '—', label: 'Placeholder result' },
          { value: '—', label: 'Placeholder result' },
        ],
      },
      {
        type: 'gallery',
        shape: 'landscape',
        images: [
          { src: '', alt: 'Usability report screen' },
          { src: '', alt: 'Usability report screen' },
          { src: '', alt: 'Usability report screen' },
        ],
      },
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return null
  return projects[(index + 1) % projects.length]
}
