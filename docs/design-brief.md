# Portfolio Design Brief

Owner: Yomna A. Mohaimen. Product designer. Portfolio site built with React + Vite.
This file is the source of truth for the visual direction. Follow it over any default style.
Last updated: October 2026 (fonts chosen, hero, work grid and footer built, case study structure decided).

## Vision: calm, elegant, warm

This portfolio should feel **calm, elegant and warm**: a quiet, well-made home for the work, with a real person in it. Every design decision gets one test: does it serve at least one of these three words?

| Word | In the UI it means |
| --- | --- |
| Calm | Soft, low-saturation color; generous white space; slow, gentle motion; nothing shouting for attention |
| Elegant | One serif for headlines, one clean sans for text; precise spacing and proportions; very few colors, used with intent |
| Warm | Cream instead of cold white; earthy and rosy tones; Yomna's photo and voice on the page; friendly, human microcopy |

Minimal is the method (few elements, each with a reason), and luxurious is the quality of execution (careful type, spacing and imagery), not an expensive-looking style.

Bold is welcome in size, not in volume: large headlines and large images, delivered in a quiet tone.

## Audience and goal

The reader is a recruiter or hiring manager at an international or European company hiring a remote UI/UX designer, and they skim. Within the first screen they should know who Yomna is, what she does, and where to click to see her best work.

- **First 10 seconds:** a clear intro, her photo, and project cards visible without scrolling far.
- **Next minute:** one case study opened, readable top to bottom without effort.
- **Goal action:** open a case study, then reach her email, LinkedIn or CV in one click.
- **What they should feel:** this designer is careful, kind to work with, and good at craft.

## Decisions

- **Logo:** the letter Y alone, set in the headline serif, at the top left of the navigation bar and as the favicon. The full name, Yomna A. Mohaimen, appears in the hero, the footer, About and the page title.
- **Navigation:** Home, About and Contact only.
- **Contact:** a footer on every page with id="contact"; the Contact link in the navigation scrolls to it. There is no separate Contact page.
- **Case studies:** four, in this order everywhere: Sensa, Flexpay, Goalden, Usability Performance Report.
- **Fonts:** Newsreader for headlines, Figtree for body and navigation. Final.
- **Single list of projects:** `src/data/projects.js` is the only place that lists projects (order, slug, tint, highlight, cover). The Home grid and the "Next project" link both read from it.
- **Honesty:** all four projects are concept (self-initiated) projects. Say so plainly. Never invent metrics, clients or results.

## References: what we take and what we leave

| Site | Take | Leave |
| --- | --- | --- |
| roomfive.net | Mostly white page; one pink/red accent used only for the navigation labels and for clicks | Nothing noted |
| amylalai.com | Calm, clear images; green, white and blue palette; large serif headline; elegant navigation bar; a different background image per project inside one layout | Nothing noted |
| pratibhajoshi.com | Soft, welcoming feeling; pastel project cards; large photo of the designer; organized | The strong pink-to-purple gradient |
| kysondana.com | Bold scale and animation; About page as a large portrait with large text; white Home and dark About | Loud energy: keep the size, drop the volume |
| chaachiedesigns.framer.website | Hover animation: other projects fade back while the hovered one stays highlighted | The black background |
| tparkes.com | Nothing | Messy work grid: no pattern for the eye to follow |

**Patterns to carry forward:** off-white warm background; serif headlines; large rounded corners; one distinct tint per project inside one fixed layout; one accent color for interaction only; the designer's face on the page.

## Color

The palette is drawn from the hero photo (bougainvillea pink, leaf green, denim blue, warm wood), softened so it stays calm. All values live as tokens in `src/styles/tokens.css`: use the tokens, never hard-coded values.

| Role | Color | Hex (approx.) | Use |
| --- | --- | --- | --- |
| Background | Warm cream | #FBF7F2 | Page background on Home and case studies |
| Text | Warm brown | #3B3330 | Headlines and body text |
| Muted text | Soft taupe | #7A6F68 | Captions, secondary labels, card highlights |
| Accent | Soft rose | #C9577F | The only interaction color: active navigation, hover, links, small highlights |
| Card tint: Sensa | Sand | #F1E6D6 | Sensa card and opening block |
| Card tint: Flexpay | Blush | #F6E3E6 | Flexpay card and opening block; also the block behind the hero photo |
| Card tint: Goalden | Sage | #DCE5D8 | Goalden card and opening block |
| Card tint: Usability Performance Report | Powder blue | #DDE6EE | Usability card and opening block |
| Dark surface | Warm charcoal | #2B2522 | About page background, with cream text and a warm stone muted text color (token) |

- Never use pure white or pure black.
- The rose accent is about 3.8:1 against the cream background: use it for large text, borders, icons and hover states, not for small body text.
- Body text must stay at 4.5:1 or higher against its background.

## Typography

- **Headlines:** Newsreader (weights 400 and 600 loaded). Large, tight, in warm brown rather than black.
- **Body and navigation:** Figtree (weights 400, 500, 600).
- **Navigation bar:** small uppercase labels with generous letter-spacing, right-aligned; the active item takes the rose accent.
- **Scale:** H1 about 56-80 px with line-height 1.05; H2 about 32-40 px; body 18 px with line-height 1.65. The footer closing line is about 36-56 px.
- **Reading width:** body text never wider than about 680 px (the hero intro is the one exception: it matches the headline width).
- **Line breaks:** use text-wrap: balance on headlines and text-wrap: pretty on paragraphs, so no single word is left alone on a line.

## Layout and pages

**Home (built)**
- Navigation bar: the Y logo on the left; Home, About and Contact on the right, with the active item in rose. The logo and the right edge of the navigation share the same content width as the hero and grid.
- Hero: two columns. Left: headline in two lines ("Yomna A. Mohaimen," / "product designer") and an intro paragraph exactly as wide as the headline. Right: the portrait (4:5 ratio, 24 px radius) with a flat blush block offset behind it, no gradient. The text block is vertically centered against the photo.
- Work grid: a small uppercase "Selected work" label (id="work"), then two columns, every card the same size. Order: Sensa, Flexpay, Goalden, Usability Performance Report. Each card: cover (4:3, 24 px radius, flat tint), then 20 px inset text: title in Newsreader, one-line highlight in muted taupe, and "Read case study" with an arrow in rose. Gaps under the cover: 20 px to title, 8 px to highlight, 16 px to the link.
- Footer: thin divider at content width, a large serif closing line ("Let's make something calm and well made together."), email, LinkedIn and a "Download CV" button (/cv.pdf), and a quiet copyright line.

**Case study page (to build)**
The story is simple: Problem, Solution, How I did it, Outcome. See the next section.

**About (to build)**
- Dark warm page (charcoal with cream text) as a deliberate change of mood, with a large portrait and large serif text saying who she is.
- Resume and contact details are folded into this page.

## Case study structure

A short story, in this order:

1. **Opening:** a block in the project's tint with title, a one-line summary, and a small row for Type (Concept project), role, year and tools, plus one large image of the final design.
2. **The problem:** why this matters, in a few sentences and, if available, one quote from the research.
3. **The solution:** what was designed, in a few sentences with one large image. The solution comes right after the problem so a skimming recruiter gets the answer first.
4. **How I did it:** the process, told as decisions ("because users worry about hidden fees, I did X"), with research insights and two or three screens woven in. No separate repeated lists of patterns, pain points, needs and insights: pick the three strongest findings.
5. **The outcome:** honest and measurable. What the design achieves against the goals (for example, counted steps compared with competitors), what was tested with real people if anything, what was learned, and what would be measured next. Four to six best screens in a gallery.
6. **End:** a link to the prototype and a "Next project" link.

**Blocks** (a case study is a list of these, in any order): Opening, Text section, Full image, Two images, Quote, Key results, Image gallery, Next project.
Layout: text column about 680 px, images about 1100 px, generous vertical space between sections.

## Motion and interaction

- **Hover spotlight on the work grid:** when one card is hovered or focused, the others fade to about 40% opacity and the hovered card lifts 4 px with the soft shadow. CSS only.
- **Pace:** 400-600 ms, ease-out. Nothing snaps or bounces.
- **Scroll reveals:** a soft fade with a small upward move (about 12 px), played once per element.
- **Page transitions:** a short cross-fade.
- **Links:** brown at rest with a thin muted underline; rose on hover and focus.
- **Accessibility:** respect the reduced-motion setting by switching animations off; visible rose focus ring on every link.

## Imagery

- **Hero photo:** the portrait with the pink bougainvillea and the denim jacket, already cropped to 4:5 as `src/assets/yomna-hero-4x5.jpg`. Do not crop or zoom it again in CSS. Keep the natural colors with no filter.
- **About photo:** a wider crop from the same session, so the two pages feel related without repeating the same image.
- **Project covers:** one consistent treatment for all four: device or screen mockups on a flat tint from the palette, 4:3, same shadow. Files go in `src/assets/covers/` as sensa.jpg, flexpay.jpg, goalden.jpg and usability-performance-report.jpg.

## What we avoid

- A black or very dark Home page (the dark mood is reserved for About).
- Gradients, especially strong pink-to-purple ones.
- Pure white and pure black.
- More than one accent color, or using the accent as decoration.
- Uneven or crowded work grids with no visual pattern.
- Fast, bouncy or attention-grabbing animation.
- Text placed over busy photos.
- Heavy drop shadows and stock imagery.
- Invented metrics or presenting concept projects as client work.

## Working rules

- Use tokens only; add a new token before adding a new value.
- Small steps: one section at a time, review a screenshot at desktop (1440 px) and phone (390 px) width, then commit.
- Work on the `claude-work` branch and merge to `main` through a pull request.
- Run `npm run build` before committing.
