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
//   linkLabel     text for that link (optional; defaults to "View the prototype")
//   blocks        the story, in order. Each block has a "type":
//     text       { heading, paragraphs: [] } (a paragraph can be { lead, text })
//     image      { src, alt, caption, shape: 'phone' for a single phone screen (optional) }
//     twoImages  { images: [{ src, alt, caption }, { src, alt, caption }] }
//     quote      { text, source }
//     results    { items: [{ value, label }], caption } (two to four items)
//     gallery    { shape: 'landscape', 'phone' or 'wide', images: [{ src, alt, caption }] }
//   Any block can add tight: true to sit closer to the block above it.
//
// Images go in src/assets/projects/<slug>/. Import them at the top of this file
// and use the import as src. An empty src shows an "Image placeholder" box.

import flexpayCover from '../assets/covers/flexpay.webp'
import goaldenCover from '../assets/covers/goalden.webp'
import usabilityCover from '../assets/covers/usability-performance-report.webp'
import sensaCover from '../assets/covers/sensa.webp'
import sensaDashboard from '../assets/projects/sensa/dashboard.webp'
import sensaHeatmap from '../assets/projects/sensa/heatmap.webp'
import sensaRecordingsDark from '../assets/projects/sensa/recordings-dark.webp'
import sensaReportsInsights from '../assets/projects/sensa/reports-insights.webp'
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
import goaldenExpenseCategories from '../assets/projects/goalden/expense-categories.png'
import goaldenHome from '../assets/projects/goalden/home.png'
import goaldenNotifications from '../assets/projects/goalden/notifications.png'
import goaldenSitemap from '../assets/projects/goalden/sitemap.avif'
import goaldenTransactions from '../assets/projects/goalden/transactions.png'
import uprCartRecommended from '../assets/projects/usability-performance-report/cart-recommended.webp'
import uprCheckoutDetails from '../assets/projects/usability-performance-report/checkout-details.webp'
import uprDiscoverCarousel from '../assets/projects/usability-performance-report/discover-carousel.webp'
import uprDiscoverScrolling from '../assets/projects/usability-performance-report/discover-scrolling.webp'
import uprHeatmapOnboarding from '../assets/projects/usability-performance-report/heatmap-onboarding.webp'

export const projects = [
  {
    slug: 'sensa',
    title: 'Sensa',
    highlight: 'AI insights on user behavior for non-technical founders',
    tint: 'var(--color-tint-sand)',
    cover: sensaCover,
    summary:
      'Sensa turns raw user behavior into plain-language insights, so non-technical founders can decide what to fix.',
    meta: {
      type: 'Portfolio product, designed and built with AI',
      role: 'Product designer (I designed it and built it with AI tools)',
      year: '2026',
      tools: ['Cursor', 'Claude', 'Supabase', 'Vercel'],
    },
    heroImage: {
      src: sensaReportsInsights,
      alt: 'Sensa Reports page with AI insights (summary, anomaly and recommendation) and the open panel showing the funnel and engagement data the AI was given.',
      caption: 'Reports, with the Explainability panel open. Demo data from my test site, Harbor Homes.',
    },
    prototypeUrl: 'https://sensa-nine.vercel.app',
    linkLabel: 'View the live demo',
    blocks: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: [
          'Tools like Amplitude and Mixpanel are built for teams with technical resources. The brief I was given was a simpler alternative for solo founders and small business owners. My starting assumption was that non-technical owners do not want to read complex dashboards. They want to know what is happening and what to do about it. I did not run user research, so this is an assumption to test, not a finding.',
        ],
      },
      {
        type: 'text',
        heading: 'The solution',
        paragraphs: [
          'Sensa is an AI-powered user behavior analytics tool. A small script is added to a website. It records how people use the site: page views, clicks and sessions. Sensa then shows this as a usage funnel, click heatmaps and session recordings. It also writes plain-language insights, and a short summary for each recording. Every insight can be opened to see the data behind it.',
          'The screens in this case study show demo data from my own test site, Harbor Homes. They are not real users.',
        ],
      },
      {
        type: 'gallery',
        shape: 'wide',
        images: [
          {
            src: sensaDashboard,
            alt: 'Sensa dashboard with conversion rate, sessions, average session time, drop-off rate, the last analysis and a key insight.',
            caption: 'Dashboard. Demo data from Harbor Homes.',
          },
          {
            src: sensaHeatmap,
            alt: 'Sensa heatmap page with the top clicked elements and a click heatmap over a Harbor Homes listing page.',
            caption: 'Heatmap with the top clicked elements. Demo data from Harbor Homes.',
          },
          {
            src: sensaRecordingsDark,
            alt: 'Sensa session recordings in dark mode, with a list of recordings and a replay of a Harbor Homes visit.',
            caption: 'Session recordings, in dark mode. Demo visits to Harbor Homes.',
          },
          {
            src: '',
            alt: 'Sensa Connect page',
            caption: 'Connect, where the tracking script is added to a website.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'How I did it',
        paragraphs: [
          'I designed Sensa end to end and built it with AI tools, Claude and Cursor. These are the decisions that shaped it.',
          {
            lead: '1. From a CSV tool to behavior analytics.',
            text: 'The first brief was a tool where users upload CSV data and get visual insights. I changed direction to a tool that tracks clicks, page views and session time. I believed an AI-powered behavior tool matched current demand better, and I wanted it in my portfolio.',
          },
          {
            lead: '2. Plan before building.',
            text: 'The project mattered to me, so I first wrote a detailed planning document with Claude: the product definition, the tech stack, how AI would be used, and a phased build order.',
          },
          {
            lead: '3. Let people check the AI.',
            text: 'Because I wanted people to trust the AI, I added an Explainability panel. It shows the funnel and engagement data the model was given, so a reader can see what an insight is based on. The AI also uses careful words like "likely" and "may indicate".',
          },
          {
            lead: '4. Make it work on real websites.',
            text: 'Real websites have rules that a demo does not. The tracking script first missed every page change inside single-page apps, so I changed how it listens to navigation. Screenshots taken in the browser lost the real images because of security policies, so I moved screenshots to the server. The recorder is served from Sensa\'s own files instead of a CDN, so it works on sites with strict security settings. I rejected any fix that quietly lowered the quality of the result.',
          },
          {
            lead: '5. Rethink the interface.',
            text: 'I ran a full UI overhaul with Impeccable, a design toolkit. It gave the product two-column layouts, a dark mode, a collapsible sidebar, insight cards with their own icons, and severity colors on the funnel. I worked on a separate git branch as a safety net.',
          },
          {
            lead: 'How I worked with AI.',
            text: 'One step, one prompt, one screen at a time. I review the code before applying it, and I confirm each step works before the next one. I commit after each logical unit, and I tag all demo data so it can be cleaned up.',
          },
        ],
      },
      {
        type: 'quote',
        text: 'An AI claim needs its evidence.',
        source: 'Design principle',
      },
      {
        type: 'text',
        heading: 'The outcome',
        paragraphs: [
          'Sensa is live and feature-complete. It tracks sessions automatically, shows a usage funnel, heatmaps and session recordings with AI summaries, writes AI insights with an Explainability panel, keeps recordings for 90 days, and has a dark mode and a collapsible sidebar.',
          'Nine end-to-end tests pass. These are code tests, not user tests. I have not tested Sensa with real users, and I have no usage data or feedback to report.',
          'Known limitations: the heatmap page picker shows technical page paths, which mean little to non-technical users. Explainability is a first version: it shows the data given to the model, not evidence for each separate claim. The heatmap says so itself when there are few clicks: "too small a sample to draw firm conclusions."',
        ],
      },
      {
        type: 'text',
        heading: "What I learned, and what's next",
        paragraphs: ['TODO: this section did not come through. Waiting for Yomna\'s text.'],
      },
    ],
  },
  {
    slug: 'flexpay',
    title: 'Flexpay',
    highlight: 'A light BNPL flow designed to make shopping easier, clearer, and stress-free.',
    tint: 'var(--color-tint-blush)',
    cover: flexpayCover,
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
    cover: goaldenCover,
    summary: 'A beginner-friendly money app for accounts, budgets and goals.',
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
          'Goalden is a beginner-friendly money app for accounts, budgets and goals. People link a bank account or add a wallet by hand, see where their money goes, set spending limits by category, save towards goals, and get investment suggestions based on an assessment of their investment style.',
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
        ],
      },
      {
        type: 'image',
        shape: 'narrow',
        src: goaldenSitemap,
        alt: 'Goalden site map: Onboarding, Home, Budget, Investment and Menu, each with its main screens, such as Link bank account, Add goal, Risk level and Help.',
        caption: 'The site map I drew before designing the screens.',
      },
      {
        type: 'text',
        paragraphs: [
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
        heading: "What I learned, and what's next",
        paragraphs: [
          'An app with many features needs a simple Home.',
          'Empty and waiting states, like the wait while a bank account links, keep people from feeling lost.',
          'I would test with 3 to 5 people on two tasks, linking a bank account and adding a transaction, and measure task completion and time.',
        ],
      },
      {
        type: 'gallery',
        shape: 'phone',
        images: [
          {
            src: goaldenHome,
            alt: 'Goalden home screen with total available balance, a list of accounts and recent transactions.',
            caption: 'Home: every account and recent spending in one place.',
          },
          {
            src: goaldenAddWallet,
            alt: 'Goalden add wallet screen with fields for a wallet name and value.',
            caption: 'Add a wallet by hand to track cash and savings.',
          },
          {
            src: goaldenNotifications,
            alt: 'Goalden notifications confirming a wallet was created, an account was reviewed and a bank account was linked.',
            caption: 'Notifications confirm each key step.',
          },
          {
            src: goaldenTransactions,
            alt: 'Goalden transactions screen with a bar chart of spending by day and a list of transactions.',
            caption: 'All transactions, with spending by day.',
          },
        ],
      },
    ],
  },
  {
    slug: 'usability-performance-report',
    title: 'Usability Performance Report',
    highlight: "A data-led review of where users drop off in Sary's B2B shopping app.",
    tint: 'var(--color-tint-powder)',
    cover: usabilityCover,
    summary: "A data-led review of where users drop off in Sary's B2B shopping app.",
    meta: {
      type: 'Work project',
      role: 'Product designer at Sary',
      year: '2023',
      tools: ['Amplitude', 'Smartlook', 'Figma'],
    },
    heroImage: {
      src: uprHeatmapOnboarding,
      alt: 'Eight Sary onboarding and registration screens with click heatmaps, from the welcome screen to the profile.',
      caption: 'Click heatmaps of the registration screens.',
    },
    // Temporary link; see content-import/usability-performance-report/gaps.md.
    prototypeUrl:
      'https://www.figma.com/design/WShhHG2bUAKLKwaDJiPXRx/Usability-performence-report?node-id=0-1&p=f&t=FpkQIfsfci2TInO3-0',
    linkLabel: 'View the full report in Figma',
    blocks: [
      {
        type: 'text',
        heading: 'The problem',
        paragraphs: [
          'Sary is a B2B shopping app where businesses order products for their stores. Comparing March to May with the following four months, July to November, fewer people finished onboarding, completed orders, and tapped banners and announcements. I set out to find where people were dropping off, and why.',
        ],
      },
      {
        type: 'text',
        heading: 'What I analyzed',
        paragraphs: [
          'I was the product designer at Sary, and I did the analysis and the report myself. I looked at four parts of the app: registration, the catalogue and search, the basket and checkout, and the Discover tab with its campaigns and promotions.',
          'For each part, I compared the Amplitude funnels for March to May with July to November, watched session recordings, read the heatmaps, and noted bugs and issues along the way.',
        ],
      },
      {
        type: 'text',
        heading: 'What I found',
        paragraphs: [
          'Four key steps dropped between the two periods:',
        ],
      },
      {
        type: 'results',
        tight: true,
        caption: 'July to November, compared with March to May.',
        items: [
          { value: '26.8%', label: 'Onboarding confirmed, down from 45.4%' },
          { value: '32.0%', label: 'Completed orders, down from 54.5%' },
          { value: '16.2%', label: 'Announcement pressed, down from 39.7%' },
          { value: '19.8%', label: 'Banner selected, down from 29.6%' },
        ],
      },
      {
        type: 'text',
        tight: true,
        paragraphs: [
          {
            lead: 'Registration.',
            text: 'People tried to scroll the onboarding screen, but it does not scroll, and they tapped its images as if they were buttons. The checkbox to accept the terms and privacy policy was hard to find and took several attempts. The bottom sheet for choosing how to verify a store had no back or close button, and a tap on "Need Help" got no response.',
          },
          {
            lead: 'Checkout.',
            text: 'Some people tapped "Proceed to Payment", reached a seller verification screen, stayed a few seconds and left the app. Coupons caused friction too: wrong or expired codes, carts below the minimum value, and people not knowing coupons existed.',
          },
          {
            lead: 'Discover tab.',
            text: 'Touches were mostly scrolling rather than taps, and the banners were not tailored to each business segment.',
          },
          'The report also notes business changes in the same months, such as a removed seller and fewer coupon offers, that likely affected these numbers.',
        ],
      },
      {
        type: 'gallery',
        shape: 'phone',
        images: [
          {
            src: uprCartRecommended,
            alt: 'Heatmap of the Sary cart screen, with the most clicks on the "Recommended for you" section.',
            caption: 'Cart: "Recommended for you" drew many clicks.',
          },
          {
            src: uprCheckoutDetails,
            alt: 'Heatmap of the Sary checkout screen, with clicks on delivery times, payment methods and the help chat.',
            caption: 'Checkout: clicks on delivery times, payment and help.',
          },
          {
            src: uprDiscoverScrolling,
            alt: 'Heatmap of the Sary Discover tab, showing broad scrolling touches over the product sections.',
            caption: 'Discover: touches were mostly scrolling.',
          },
          {
            src: uprDiscoverCarousel,
            alt: 'Heatmap of the Sary home screen, with clicks on the banner carousel.',
            caption: 'The banner carousel got a fair share of taps.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Recommendations',
        paragraphs: [
          {
            lead: 'Registration.',
            text: 'Make the terms checkbox easier to see, through its placement, a larger size or a distinct color, and add a short hint that the onboarding screen has no more content below.',
          },
          {
            lead: 'Coupons.',
            text: 'Make coupon suggestions smarter: offer alternatives for expired codes, suggest valid codes close to a mistyped one, and show how close the cart is to a coupon\'s minimum value. State coupon terms, like the minimum order, where coupons are given and used.',
          },
          {
            lead: 'Seller verification.',
            text: 'Consider showing seller verification later in checkout, closer to the end, when people are more invested in finishing the order.',
          },
          {
            lead: 'Banners.',
            text: 'Tailor banners and offers to each business segment, and add short in-app guides that explain how to use banner offers.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'The outcome',
        paragraphs: [
          'I presented the report to the team. I do not have a record of which recommendations were built, so I am not claiming results. The report itself is the deliverable.',
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
