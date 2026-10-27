# Yomna A. Mohaimen — portfolio

Personal portfolio site for Yomna A. Mohaimen, product designer.
Built with React + Vite (React Router for pages).

`docs/design-brief.md` is the source of truth for the design. Read it before
any visual change, and follow it over any default style. This file is a
short summary of it.

- `npm run dev` — local preview
- `npm run build` — check nothing is broken before committing

## Working with Yomna

- Change only what Yomna asks for. Mention other issues, but do not fix them unasked.
- Yomna has no coding background: explain in simple words, without jargon.
- Always list which files changed.
- Work on the `claude-work` branch, never directly on `main`.

## Design direction

- Calm, elegant, warm. Bold in size, not in volume.
- One rose accent (`--color-accent`), used for interaction only:
  links, hover, and the active menu item.
- Use only the tokens in `src/styles/tokens.css`. No hard-coded colors,
  sizes, or fonts outside it.
- No gradients.
- Never pure white (`#fff`) or pure black (`#000`).
- Fonts: Newsreader for headlines, Figtree for text.
- Motion is slow with an ease-out curve, and always respects
  `prefers-reduced-motion`.

## Site structure

- Navigation: Home, About, Contact.
- About: cream background, left-aligned two-column layout (headline on the
  left, content on the right), Newsreader headline and lead paragraph,
  hairline skill rows, no photo, no centered text.
- The footer (`src/components/Footer.jsx`) has `id="contact"` and shows on
  every page; the Contact link scrolls to it.
- Case studies, always in this order:
  1. Sensa
  2. Flexpay
  3. Goalden
  4. Usability Performance Report
- `src/data/projects.js` is the only list of projects. The Home work grid
  and each case study's "Next project" link both read from it.
- There is no CMS. Case study content lives in `src/data/projects.js` as a list of blocks, and images live in `src/assets/projects/<slug>/`.
