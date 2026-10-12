// One list of projects. The case study page reads from here.
// To hide a section, delete it or leave its blocks empty.
// Block types: "text", "image", "image-text".

const placeholder = '/images/placeholder.svg'

export const projects = [
  {
    slug: 'flexpay',
    title: 'Flexpay',
    tagline: 'A light BNPL flow designed to make shopping easier and clearer.',
    coverImage: '/images/flexpay-cover.svg',
    role: 'Product designer',
    timeline: '2024',
    tools: ['Figma', 'FigJam'],
    sections: [
      {
        heading: 'Overview',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder overview. This space will describe what Flexpay is and who it is for.',
          },
        ],
      },
      {
        heading: 'Problem',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder problem. Shoppers were unsure what they would pay and when.',
          },
          {
            type: 'image',
            src: placeholder,
            alt: 'Placeholder image for the Flexpay problem',
          },
        ],
      },
      {
        heading: 'Process',
        blocks: [
          {
            type: 'image-text',
            src: placeholder,
            alt: 'Placeholder image for the Flexpay process',
            text: 'Placeholder process. Research, sketches, and testing will go here.',
          },
        ],
      },
      {
        heading: 'Solution',
        blocks: [
          {
            type: 'image',
            src: placeholder,
            alt: 'Placeholder image for the Flexpay solution',
          },
          {
            type: 'text',
            text: 'Placeholder solution. A short, clear checkout flow.',
          },
        ],
      },
      {
        heading: 'Outcome',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder outcome. Results and what changed for shoppers will go here.',
          },
        ],
      },
    ],
  },
  {
    slug: 'goalden',
    title: 'Goalden',
    tagline: 'A simple savings flow that guides beginners with clarity.',
    coverImage: '/images/goalden-cover.svg',
    role: 'Product designer',
    timeline: '2024',
    tools: ['Figma'],
    sections: [
      {
        heading: 'Overview',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder overview. Goalden helps first-time savers set a goal and stick with it.',
          },
        ],
      },
      {
        heading: 'Problem',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder problem. Beginners felt lost about how much to save and why.',
          },
        ],
      },
      {
        heading: 'Process',
        blocks: [
          {
            type: 'image-text',
            src: placeholder,
            alt: 'Placeholder image for the Goalden process',
            text: 'Placeholder process. Interviews and early screens will go here.',
          },
        ],
      },
      {
        heading: 'Solution',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder solution. A guided path from goal to first deposit.',
          },
          {
            type: 'image',
            src: placeholder,
            alt: 'Placeholder image for the Goalden solution',
          },
        ],
      },
      {
        heading: 'Outcome',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder outcome. What beginners understood better after the new flow.',
          },
        ],
      },
    ],
  },
  {
    slug: 'usability-performance-report',
    title: 'Usability Performance Report',
    tagline: 'A usability analysis of user behavior with Amplitude and testing.',
    coverImage: '/images/usability-cover.svg',
    role: 'UX researcher',
    timeline: '2025',
    tools: ['Amplitude', 'Maze'],
    sections: [
      {
        heading: 'Overview',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder overview. A study of how people moved through the product, using Amplitude and usability tests.',
          },
        ],
      },
      {
        heading: 'Problem',
        blocks: [
          {
            type: 'image',
            src: placeholder,
            alt: 'Placeholder image for the usability problem',
          },
          {
            type: 'text',
            text: 'Placeholder problem. Some steps were dropped more often than others, and it was not clear why.',
          },
        ],
      },
      {
        heading: 'Process',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder process. Event data, test sessions, and notes will be summarized here.',
          },
        ],
      },
      {
        heading: 'Solution',
        blocks: [
          {
            type: 'image-text',
            src: placeholder,
            alt: 'Placeholder image for the usability findings',
            text: 'Placeholder solution. Findings turned into a short list of changes.',
          },
        ],
      },
      {
        heading: 'Outcome',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder outcome. What the team decided to change after the report.',
          },
        ],
      },
    ],
  },
  {
    slug: 'sensa',
    title: 'Sensa',
    tagline: 'A data analysis tool, designed and built end to end.',
    coverImage: '/images/sensa-cover.svg',
    role: 'Product designer',
    timeline: '2025',
    tools: ['Figma', 'React'],
    sections: [
      {
        heading: 'Overview',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder overview. Sensa is a tool for reading data without getting lost in charts.',
          },
        ],
      },
      {
        heading: 'Problem',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder problem. People could open reports, but they could not tell what mattered.',
          },
        ],
      },
      {
        heading: 'Process',
        blocks: [
          {
            type: 'image',
            src: placeholder,
            alt: 'Placeholder image for the Sensa process',
          },
          {
            type: 'text',
            text: 'Placeholder process. From early layout ideas through to a working version.',
          },
        ],
      },
      {
        heading: 'Solution',
        blocks: [
          {
            type: 'image-text',
            src: placeholder,
            alt: 'Placeholder image for the Sensa solution',
            text: 'Placeholder solution. A clearer way to scan a dataset and focus on one question.',
          },
        ],
      },
      {
        heading: 'Outcome',
        blocks: [
          {
            type: 'text',
            text: 'Placeholder outcome. How the finished tool was used.',
          },
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
