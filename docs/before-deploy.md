# Before deploy

Checks to do before the portfolio goes live.

## Decided

- Usability Performance Report: the "View the full report in Figma" link is
  approved to stay as it is (Yomna, 2026-10-28).
- Sensa live demo: the "View the live demo" link stays hidden for now. Before
  turning it back on, a visitor must be able to sign up or use a demo account.

## Hosting (Vercel)

- vercel.json sends every page address to the site, so links like /about and
  /work/goalden work on refresh and when opened directly.
- No keys, tokens or .env files are needed to build or run the site.
- The private Sensa GitHub repo is not linked anywhere on the site.
