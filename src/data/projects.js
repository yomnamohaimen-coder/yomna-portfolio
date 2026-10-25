// One list of projects, in display order. The Home work grid and the case study
// page (including "Next project") both read from here.
//
// Home grid fields: slug, title, highlight, tint, cover (an imported image from
// src/assets/covers/, or null to show the tint).
//
// Case study fields:
//   summary       one line under the title
//   meta          { type, role, year, tools }
//   heroImage     { src, alt, caption, shape: 'phone' for a single phone screen }
//                 (optional; no src shows a placeholder)
//   prototypeUrl  link to the prototype (optional; no link is shown without it)
//   blocks        the story, in order. Each block has a "type":
//     text       { heading, paragraphs: [] }
//     image      { src, alt, caption, shape: 'phone' for a single phone screen (optional) }
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
import goaldenAddWallet from '../assets/projects/goalden/add-wallet.png'
import goaldenBudgets from '../assets/projects/goalden/budgets.png'
import goaldenChooseBank from '../assets/projects/goalden/choose-bank.png'
import goaldenConnectBank from '../assets/projects/goalden/connect-bank.png'
import goaldenExpenseCategories from '../assets/projects/goalden/expense-categories.png'
import goaldenHome from '../assets/projects/goalden/home.png'
import goaldenNoAccountsYet from '../assets/projects/goalden/no-accounts-yet.png'
import goaldenNotifications from '../assets/projects/goalden/notifications.png'
import goaldenTransactions from '../assets/projects/goalden/transactions.png'
import goaldenVerificationCode from '../assets/projects/goalden/verification-code.png'
import goaldenWalletDetails from '../assets/projects/goalden/wallet-details.png'

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
    cover: flexpayScreensOverview,
    summary: 'A light, friendly BNPL experience designed for Egyptian shoppers.',
    meta: {
      type: 'Concept project',
      role: 'Product designer, solo',
      year: '2025',
      tools: ['Figma'],
    },
    heroImage: {
      src: flexpayScreensOverview,
      alt: 'Several Flexpay phone screens, including plan details with a payment breakdown and a "You\'re all set" screen at the end of sign-up.',
    },
    prototypeUrl: 'https://www.figma.com/design/iof6FVLWu2L2sKjhZhvb8x/Flexpay?node-id=58-5058',
    blocks: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: [
          'Buy now, pay later apps are widely used in Egypt, but they still feel stressful and complicated for everyday shoppers. In the apps I reviewed, I kept noticing the same issues: long onboarding, confusing payment breakdowns, unclear installments, a bank-like tone, and little reassurance at key steps. My assumption is that this leaves people anxious instead of comfortable.',
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
        shape: 'phone',
        src: flexpayCheckoutPlans,
        alt: 'Flexpay checkout screen with 3, 6 and 12 month installment options and payment methods.',
        caption: 'Checkout: choose a plan and a payment method on one screen.',
      },
      {
        type: 'text',
        heading: 'How I did it',
        paragraphs: [
          'This was a solo concept project: I did the research, UX, UI and prototype. The research was desk-based: I reviewed Klarna, valU, Tabby and Afterpay, with help from AI tools, and noted the patterns I saw. It was not validated with real users, so I treated each pattern as an assumption to test.',
          'Long onboarding was the clearest pattern, and I assumed people give up when sign-up feels long. So sign-up starts with the phone number only and asks for one thing per screen: the phone number, a 6-digit code, then name and address. ID verification is optional, with "Skip for now". My goal was for people to start shopping in under 2 minutes.',
        ],
      },
      {
        type: 'quote',
        text: 'Ask for the least, explain the most.',
        source: 'Design principle',
      },
      {
        type: 'text',
        paragraphs: [
          'Hidden fees and unclear installment breakdowns also came up in my desk research, and I assumed clear numbers build trust. So checkout shows the full breakdown before anything is confirmed: people choose a plan, review the total, and then confirm.',
          'I also assumed that overdue payments feel scary. So reminders and overdue notices use friendly language, and people can easily track their plans and payment history.',
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
          'Flexpay is untested: I have not tested the prototype with real people, so there are no results yet. Here is what the design does, from the welcome screen to "You\'re all set".',
        ],
      },
      {
        type: 'results',
        items: [
          { value: '8', label: 'Sign-up screens, from welcome to "You\'re all set"' },
          { value: '3', label: 'Required inputs: phone number, code and profile' },
          { value: '1', label: 'Optional step: ID, which raises the limit from 500 to 5,000' },
          { value: '—', label: 'Sign-up time (goal: under 2 minutes, not yet timed)' },
        ],
      },
      {
        type: 'text',
        heading: 'What I learned',
        paragraphs: [
          'Desk research gives patterns, not proof, so I wrote the problem as assumptions to test.',
          'Making ID verification optional shortens sign-up, but it caps the limit at 500 until someone verifies. That trade-off needs testing.',
        ],
      },
      {
        type: 'text',
        heading: 'What I would measure next',
        paragraphs: [
          'Sign-up completion rate; time from opening the app to the first purchase, with a target of under 2 minutes; how many people skip ID; whether people understand their limit; and where they stop.',
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
    highlight: 'A beginner-friendly money app for accounts, budgets and goals.',
    tint: 'var(--color-tint-sage)',
    cover: null,
    summary: 'A simple savings flow that guides beginners with clarity.',
    meta: {
      type: 'Concept project',
      role: 'Product designer, solo',
      year: '2025',
      tools: ['Figma'],
    },
    heroImage: {
      src: goaldenHome,
      shape: 'phone',
      alt: 'Goalden home screen with total available balance, a list of accounts and recent transactions.',
    },
    blocks: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: [
          'My starting assumption was that many people want to save but feel lost without a clear starting point, and that finance apps feel intimidating to beginners. I designed for young professionals who want to manage their money with less stress, and for people new to saving who want step-by-step guidance.',
        ],
      },
      {
        type: 'quote',
        text: 'How might we help people with limited financial knowledge take control of their money and save towards meaningful goals without stress?',
        source: 'The question I designed for',
      },
      {
        type: 'text',
        heading: 'The solution',
        paragraphs: [
          'Goalden is a savings app that helps people take control of their money. People link a bank account or add a wallet by hand, see where their money goes, set spending limits by category, save towards goals, and get investment suggestions based on an assessment of their investment style.',
        ],
      },
      {
        type: 'image',
        shape: 'phone',
        src: goaldenBudgets,
        alt: 'Goalden budget screen with total income, total spending and a progress bar for each spending category.',
        caption: 'Budgets: a spending limit per category, with progress at a glance.',
      },
      {
        type: 'text',
        heading: 'How I did it',
        paragraphs: [
          'This was a solo concept project: I did the research, UX, UI and prototype design. The research was desk research, supported by ChatGPT, and it was not validated with real users, so I treated each finding as an assumption to test. I wrote three assumption-based personas from desk research to guide the early decisions, then mapped the app in a site map before designing the screens.',
          'Because I assumed most people want to save but feel lost without a clear starting point, setup gives them structure: they link a bank account or add a wallet by hand, then pick the categories they usually spend on.',
          'Because many finance apps feel intimidating to beginners, I kept the numbers visual: a bar chart of spending and a progress bar for each budget category.',
        ],
      },
      {
        type: 'gallery',
        shape: 'phone',
        images: [
          {
            src: goaldenChooseBank,
            alt: 'Goalden screen listing banks to connect, with an option to add a personal wallet instead.',
            caption: 'Link a bank, or add a wallet by hand.',
          },
          {
            src: goaldenExpenseCategories,
            alt: 'Goalden screen asking people to pick the budget categories they usually spend on.',
            caption: 'Pick familiar spending categories to start.',
          },
          {
            src: goaldenTransactions,
            alt: 'Goalden transactions screen with a bar chart of spending by day and a list of transactions.',
            caption: 'Spending shown as a simple bar chart.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'The outcome',
        paragraphs: [
          'Goalden is an untested concept project: I have not tested it with real users, so there are no results yet. The design covers sign-up, linking a bank or adding a wallet, transactions, budgets, savings goals, investment suggestions, notifications and the profile.',
        ],
      },
      {
        type: 'text',
        heading: 'What I learned',
        paragraphs: [
          'An app with many features needs a simple Home.',
          'Empty and waiting states, like the wait while a bank account links, keep people from feeling lost.',
        ],
      },
      {
        type: 'text',
        heading: 'What I would measure next',
        paragraphs: [
          'I would test with 3 to 5 people on two tasks, linking a bank account and adding a transaction, and measure task completion and time.',
        ],
      },
      {
        type: 'gallery',
        shape: 'phone',
        images: [
          { src: goaldenVerificationCode, alt: 'Goalden verification code screen asking for the code sent to a phone number.' },
          { src: goaldenConnectBank, alt: 'Goalden screen explaining the steps to connect a bank account before going to the bank website.' },
          { src: goaldenAddWallet, alt: 'Goalden add wallet screen with fields for a wallet name and value.' },
          { src: goaldenWalletDetails, alt: 'Goalden personal wallet details with income, spending by category and a bar chart.' },
          { src: goaldenNoAccountsYet, alt: 'Goalden empty home screen inviting people to link an account or add a first transaction.' },
          { src: goaldenNotifications, alt: 'Goalden notifications confirming a wallet was created, an account was reviewed and a bank account was linked.' },
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
