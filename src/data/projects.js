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
//     gallery    { shape: 'landscape' or 'phone', images: [{ src, alt, caption }] }
//
// Images go in src/assets/projects/<slug>/. Import them at the top of this file
// and use the import as src. An empty src shows an "Image placeholder" box.

import flexpayCheckoutPlans from '../assets/projects/flexpay/checkout-plans.png'
import flexpayCreditLimit from '../assets/projects/flexpay/credit-limit.png'
import flexpayHome from '../assets/projects/flexpay/home.png'
import flexpayInstallmentDetails from '../assets/projects/flexpay/installment-details.png'
import flexpayMyPayments from '../assets/projects/flexpay/my-payments.png'
import flexpayNotifications from '../assets/projects/flexpay/notifications.png'
import flexpayOnboardingAllSet from '../assets/projects/flexpay/onboarding-all-set.png'
import flexpayOrderReview from '../assets/projects/flexpay/order-review.png'
import flexpayScreensOverview from '../assets/projects/flexpay/screens-overview.png'
import flexpayWelcome from '../assets/projects/flexpay/welcome.png'

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
    summary: 'A light, friendly BNPL experience designed for Egyptian shoppers.',
    meta: {
      type: 'Concept project',
      role: 'Product designer',
      year: '2025',
      tools: ['Figma'],
    },
    // TODO: a wide image of the final design for the opening (see gaps.md).
    heroImage: { src: '', alt: 'Flexpay final design' },
    prototypeUrl: 'https://www.figma.com/design/iof6FVLWu2L2sKjhZhvb8x/Flexpay?node-id=58-5058',
    blocks: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: [
          'Buy now, pay later apps are widely used in Egypt, but they still feel stressful and complicated for everyday shoppers. I kept noticing the same issues: long onboarding, confusing payment breakdowns, unclear installments, a bank-like tone, and no reassurance at key steps. People came away anxious instead of comfortable.',
        ],
      },
      {
        type: 'text',
        heading: 'The solution',
        paragraphs: [
          'Flexpay is a lighter BNPL flow that helps people shop with confidence, not stress. I redesigned the whole journey, from sign-up and browsing to checkout and managing payments, to feel simpler, more human and easier to trust.',
        ],
      },
      {
        type: 'image',
        src: flexpayScreensOverview,
        alt: 'Several Flexpay phone screens, including plan details with a payment breakdown and a "You\'re all set" screen at the end of sign-up.',
        caption: 'Plan details, the end of sign-up, and shopping screens.',
      },
      {
        type: 'text',
        heading: 'How I did it',
        paragraphs: [
          'I reviewed regional and global BNPL apps to find patterns, strengths, weaknesses and opportunities. TODO: which apps I reviewed, and where the pain points and needs came from. Three findings shaped the design most.',
          'Because people drop off early when onboarding feels long, I kept sign-up to minimal steps with a quick ID check, so people get straight to stores and installment plans. My goal was sign-up in under 2 minutes.',
          'Because clear numbers build trust and hidden fees came up as a pain point, checkout shows the full breakdown before anything is confirmed. People choose a plan, review the total without hidden fees, and then confirm.',
          'Because overdue payments should not feel scary, I used friendly language and timely reminders, and made it easy to track plans and payment history.',
        ],
      },
      {
        type: 'gallery',
        shape: 'phone',
        images: [
          {
            src: flexpayOnboardingAllSet,
            alt: 'Flexpay "You\'re all set" screen showing a purchase limit and three completed checks: phone, profile and identity.',
            caption: 'Sign-up ends with a clear summary of what is verified.',
          },
          {
            src: flexpayOrderReview,
            alt: 'Flexpay order review screen with total, down payment, interest, monthly installment and payment schedule.',
            caption: 'The full breakdown, before confirming.',
          },
          {
            src: flexpayNotifications,
            alt: 'Flexpay notifications screen with a payment reminder, a payment confirmation and an overdue notice.',
            caption: 'Reminders and overdue notices in calm language.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'The outcome',
        paragraphs: [
          'Flexpay is a concept project. The design aims for four goals: simple onboarding, transparent installments, support for local payment methods like mobile wallets and Instapay, and less financial anxiety.',
          'TODO: whether the prototype was tested with people, what I learned, and what I would measure next.',
        ],
      },
      {
        type: 'results',
        items: [
          { value: '—', label: 'Sign-up time (goal: under 2 minutes)' },
          { value: '—', label: 'Sign-up steps vs. competitors' },
          { value: '—', label: 'People who tested it' },
        ],
      },
      {
        type: 'gallery',
        shape: 'phone',
        images: [
          { src: flexpayWelcome, alt: 'Flexpay welcome screen with instant approval, security and flexible payments.' },
          { src: flexpayHome, alt: 'Flexpay home screen with search, categories, an offer and quick actions.' },
          { src: flexpayCheckoutPlans, alt: 'Flexpay checkout screen with 3, 6 and 12 month installment options and payment methods.' },
          { src: flexpayMyPayments, alt: 'Flexpay My Payments screen with active plans, next payment date and credit limit.' },
          { src: flexpayInstallmentDetails, alt: 'Flexpay completed plan screen with payment summary and payment history.' },
          { src: flexpayCreditLimit, alt: 'Flexpay credit limit screen showing used and available credit and a breakdown by plan.' },
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
